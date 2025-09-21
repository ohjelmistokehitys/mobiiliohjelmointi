import { MapMarkerProps } from "react-native-maps";

const API_URL = "https://services1.arcgis.com/sswNXkUiRoWtrx0t/arcgis/rest/services/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin/FeatureServer/0/query?where=1%3D1&objectIds=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&collation=&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnTrueCurves=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=";

const API_KEY = process.env.EXPO_PUBLIC_DIGITRANSIT_API_KEY;
const ADDRESS_SEARCH_URL = "http://api.digitransit.fi/geocoding/v1/search";

if (!API_KEY) {
    console.warn("EXPO_PUBLIC_DIGITRANSIT_API_KEY not defined in environment variables");
}

export async function getCityBikes(): Promise<GeoJSON.Feature[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        const msg = `City bikes request failed with ${response.status}`;
        console.error(msg);
        throw new Error(msg);
    }
    const json = await response.json();
    // The "feature response" has the city bikes in `features` array.
    return json.features;
}

export async function addressLookup(address: string, size: number = 1): Promise<GeoJSON.Feature<GeoJSON.Point>[]> {
    const response = await fetch(`${ADDRESS_SEARCH_URL}?text=${encodeURIComponent(address)}&size=${size}`, {
        headers: {
            "digitransit-subscription-key": API_KEY ?? ''
        }
    });

    if (!response.ok) {
        const msg = `Lookup to "${address}" resulted in error ${response.status}`;
        console.error(msg);
        throw new Error(msg);
    }

    const json = await response.json();
    return json.features;
}


/** Creates required properties for a map marker from an address search result. */
export function convertToMarker(result: GeoJSON.Feature<GeoJSON.Point>): MapMarkerProps {
    const p = result.properties;

    return {
        title: p?.Name ?? p?.label ?? "No title",
        description: p?.Osoite ?? p?.label ?? p?.Name ?? "No description",
        coordinate: {
            latitude: result.geometry.coordinates[1],
            longitude: result.geometry.coordinates[0]
        }
    };
}


// The full response schema returned by digitransit
type StopsByRadiusResponse = {
    data: {
        stopsByRadius: {
            edges: {
                node: {
                    stop: BusStop,
                    distance: number
                }
            }[]
        }
    }
}

// The type for a single bus stop
export type BusStop = {
    gtfsId: string,
    name: string,
    lat: number,
    lon: number
}

/**
 * Uses the https://digitransit.fi/en/developers/apis/1-routing-api/stops/ GraphQL API
 * to retrieve the closest bus stops for a given coordinate.
 */
export async function busStopsLookup(coords: { latitude: number, longitude: number }, radius: number = 500) {
    const query = `
    {
        stopsByRadius(lat:${coords.latitude}, lon:${coords.longitude}, radius: ${radius}) {
            edges {
                node {
                    stop {
                        gtfsId
                        name
                        lat
                      	lon
                    }
                    distance
                }
            }
        }
    }`;

    let response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        headers: {
            'Content-Type': 'application/graphql',
            'digitransit-subscription-key': API_KEY ?? ''
        },
        method: 'POST',
        body: query
    });

    const json = await response.json() as StopsByRadiusResponse;
    console.log(json);

    // take each bus stop from the result and return as array
    return json.data.stopsByRadius.edges.map(e => e.node.stop);
}
