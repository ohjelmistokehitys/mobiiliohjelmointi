import { Contact, ContactField, PartialContactDetails, requestPermissionsAsync } from "expo-contacts";
import { useEffect, useState } from "react";

const FIELDS = [ContactField.FULL_NAME, ContactField.PHONES] as const;

export type ContactDetails = PartialContactDetails<typeof FIELDS>;

export function useContactDetails() {
    const [contactDetails, setContactDetails] = useState<ContactDetails[]>([]);

    async function getContacts() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const all = await Contact.getAll();
            const details = await Promise.all(
                all.map(c => c.getDetails(FIELDS))
            );
            setContactDetails(details);
        }
    }

    useEffect(() => {
        getContacts();
    }, []);

    return contactDetails;
}
