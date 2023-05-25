import { Container, Section } from 'components/App.styled';
import { ContactForm } from 'components/Contact-form/ContactForm';

const EditForm = () => {
    return (
        <Section>
            <Container>
                <ContactForm />
            </Container>
        </Section>
    );
};

export default EditForm;
