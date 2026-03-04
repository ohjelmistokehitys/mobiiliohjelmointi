import { Contact, getContactsAsync, requestPermissionsAsync } from "expo-contacts";
import { useEffect, useState } from "react";

export function useContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function loadContacts() {
        const { granted } = await requestPermissionsAsync();

        if (!granted) {
            console.error("permissions not given");
            setError("permissions not given");
            return;
        }

        const { data } = await getContactsAsync({ sort: "firstName" });
        setContacts(data);
    }

    useEffect(() => { loadContacts() }, []);

    return { contacts, error };
}
