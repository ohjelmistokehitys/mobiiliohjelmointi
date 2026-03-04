import { Container, Heading, Paragraph } from "@/components/ui/basic-components";
import { useContacts } from "@/hooks/use-contacts";
import { FlatList } from "react-native";

export default function ContactsScreen() {

    const { contacts } = useContacts();

    return <Container>
        <Heading>Contacts</Heading>

        <FlatList
            data={contacts}
            renderItem={({ item }) => <Paragraph>{item.firstName}</Paragraph>}
        />
    </Container>;
}
