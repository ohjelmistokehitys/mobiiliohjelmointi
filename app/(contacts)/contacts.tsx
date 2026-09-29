import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { Contact, ContactField, PartialContactDetails, requestPermissionsAsync } from 'expo-contacts';
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const FIELDS = [ContactField.GIVEN_NAME, ContactField.FAMILY_NAME, ContactField.FULL_NAME, ContactField.PHONES, ContactField.EMAILS, ContactField.JOB_TITLE, ContactField.NOTE] as const;

type ContactInfo = PartialContactDetails<typeof FIELDS>;

export default function ContactsScreen() {
    const [contacts, setContacts] = useState<ContactInfo[]>([]);

    async function readContacts() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const contacts = await Contact.getAll();
            const details = await Promise.all(contacts.map(c => c.getDetails(FIELDS)))
            setContacts(details);
        }
    }

    useEffect(() => {
        readContacts();
    }, []);

    return <MyContainer>
        <MyTitle>Contacts ({contacts.length})</MyTitle>

        <FlatList
            style={{ alignSelf: "stretch" }}
            data={contacts}
            renderItem={({ item }) => <ContactView contact={item} />}
        />
    </MyContainer>
}

function ContactView({ contact }: { contact: ContactInfo }) {
    return <View style={styles.contactView}>
        <MyText bold>{contact.fullName}</MyText>
        {contact.phones.map(phone => <MyText key={phone.id}>{phone.number}</MyText>)}

    </View>
}

const styles = StyleSheet.create({
    contactView: {
        marginBottom: 15,
        padding: 10,
        alignItems: "flex-start",
        backgroundColor: "white"
    }
});
