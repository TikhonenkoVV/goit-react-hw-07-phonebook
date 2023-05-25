import { Svg } from 'components/icon/Icon';
import { Ico, Input, InputWrapper, Label, Message } from './FormItem.styled';
import { ErrorMessage } from 'formik';
import sprite from '../../img/icons.svg';
import { toCapitalize } from 'services/tocapitalize';

export const FormItem = ({ name, type, onChange, use }) => {
    return (
        <Label>
            {toCapitalize(name)}
            <InputWrapper>
                <Ico>
                    <Svg w={23} h={23} use={`${sprite}#icon-${use}`} />
                </Ico>
                <Input
                    type={type}
                    name={name}
                    placeholder="Enter contact name"
                    onChange={onChange}
                />
            </InputWrapper>
            <ErrorMessage name={name}>
                {msg => <Message>{msg}</Message>}
            </ErrorMessage>
        </Label>
    );
};
