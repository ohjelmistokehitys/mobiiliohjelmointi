import Container from "@/components/Container";
import Title from "@/components/Title";
import { Contact, getContactsAsync, requestPermissionsAsync } from "expo-contacts";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ContactsScreen() {

    const [contacts, setContacts] = useState<Contact[]>([]);

    async function loadContacts() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const { data } = await getContactsAsync({ sort: "firstName" });
            setContacts(data);
        }
    }

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <Container>
            <Title>Contacts</Title>

            <FlatList
                data={contacts}
                renderItem={({ item }) => (
                    <ContactItem contact={item} />
                )}
            />
        </Container>
    );
}


function ContactItem({ contact }: { contact: Contact }) {
    return <View style={styles.contact}>
        <Text>{contact.firstName}</Text>
    </View>;
}

const styles = StyleSheet.create({
    contact: {
        paddingVertical: 10,
    }
});
