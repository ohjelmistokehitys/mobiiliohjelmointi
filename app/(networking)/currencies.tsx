import Container from "@/components/Container";
import MyInput from "@/components/MyInput";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';


const fetchCurrencies = async () => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`Error fetching currencies: ${response.status}`);
    }
    const json = await response.json();
    return json.eur;
}

export function useCurrencies(): [boolean, Record<string, number>] {
    const [loading, setLoading] = useState(true);
    const [currencies, setCurrencies] = useState<Record<string, number>>({});

    useEffect(() => {
        fetchCurrencies()
            .then(data => setCurrencies(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return [loading, currencies];
}

function convert(amount: number, multiplier: number) {
    const fromEuro = (amount * multiplier).toFixed(2);
    const toEuro = (amount / multiplier).toFixed(2);

    return { fromEuro, toEuro };
}

export default function CurrencyScreen() {
    const [loading, currencies] = useCurrencies();
    const [amount, setAmount] = useState(100);
    const [selected, setSelected] = useState("usd");

    if (loading) {
        return <ActivityIndicator size={60} />;
    }


    const multiplier = currencies[selected];
    const { fromEuro, toEuro } = convert(amount, multiplier);
    const message = `${amount} eur = ${fromEuro} ${selected}\n${amount} ${selected} = ${toEuro} eur`;

    return <Container>
        <Text>Enter amount:</Text>
        <MyInput value={'' + amount} onChangeText={(amt) => setAmount(+amt)} />

        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={selected}
                onValueChange={(value) => { setSelected(value); }}
            >
                {Object.keys(currencies).map(code => <Picker.Item value={code} label={code.toUpperCase()} key={code} />)}
            </Picker>
        </View>

        <Text style={{ textAlign: "center" }}>{message}</Text>
    </Container>
}

const styles = StyleSheet.create({
    // works with Android only!
    pickerContainer: {
        width: 200,
        height: 60,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
    },
    // works with Android only!
    picker: {
        height: "100%",
        width: "100%"
    }
});
