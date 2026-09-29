import MyContainer from "@/components/my-container";
import MyText from "@/components/my-text";
import MyTitle from "@/components/my-title";
import { ContactDetails, useContactDetails } from "@/hooks/use-contact-details";
import { FlatList, StyleSheet, View } from "react-native";

export default function ContactsScreen() {

    const contactDetails = useContactDetails();

    return <MyContainer>
        <MyTitle>Contacts ({contactDetails.length})</MyTitle>

        <FlatList
            style={{ alignSelf: "stretch" }}
            data={contactDetails}
            renderItem={({ item }) =>
                <ContactBox contact={item} />
            } />
    </MyContainer>;
}


function ContactBox({ contact }: { contact: ContactDetails }) {
    return <View style={styles.listItem}>
        <MyText bold>{contact.fullName}</MyText>
        {contact.phones.map(phone => <MyText key={phone.id}>{phone.number}</MyText>)}
    </View>;
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        alignItems: "flex-start",
        marginBottom: 20
    }
})
