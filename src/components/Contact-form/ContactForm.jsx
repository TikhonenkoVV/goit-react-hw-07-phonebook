import {
    FormikForm,
    SubmitButton,
    AddPhoto,
    PhotoLabel,
    BtnClose,
} from './ContactForm.styled';
import { Formik } from 'formik';
import { validationSchema } from 'services/validate-schema';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'store/selector';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { useRef, useState } from 'react';
import defaultPhoto from '../../img/avatar-default.png';
import { FormItem } from 'components/FormItem/FormItem';
import { useLocation } from 'react-router-dom';
import { fbStorage } from '../../services/fireBase';
import { ref, uploadBytes } from 'firebase/storage';
import { hendleAddContact } from 'store/operations';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const [contactImg, setContactImg] = useState(defaultPhoto);
    const [uploadImg, setUploadImg] = useState(null);
    const addImg = useRef();

    const hendleUploadImg = () => {
        if (!uploadImg) return;
        const imgRef = ref(fbStorage, `images/${uploadImg.name}`);
        uploadBytes(imgRef, uploadImg).then(res => {
            console.log(res);
        });
    };

    const hendleChange = e => {
        const photo = e.target.files[0];
        setUploadImg(photo);
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onload = () => setContactImg(reader.result);
    };

    const location = useLocation();
    const goBackLink = location?.state?.from || '/';

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                name: '',
                surname: '',
                number: '',
                email: '',
                img: '',
            }}
            onSubmit={(values, { resetForm }) => {
                const isNameExist = contacts.find(
                    val => val.name.toLowerCase() === values.name.toLowerCase()
                );
                const isNumberExist = contacts.find(
                    val => val.number === values.number
                );
                if (isNameExist) {
                    toast(`${values.name} is already in contacts.`);
                    return;
                }
                if (isNumberExist) {
                    toast(
                        `${values.number} is already in contacts as ${isNumberExist.name}.`
                    );
                    return;
                }
                hendleUploadImg();
                dispatch(hendleAddContact(values));
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange }) => {
                return (
                    <>
                        <FormikForm onSubmit={handleSubmit}>
                            <BtnClose to={goBackLink}>
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-close`}
                                />
                            </BtnClose>
                            <AddPhoto
                                ref={addImg}
                                id="img"
                                name="img"
                                type="file"
                                onChange={hendleChange}
                            />
                            <PhotoLabel
                                htmlFor={'img'}
                                file={contactImg}
                            ></PhotoLabel>
                            <h1>Contact name</h1>
                            <FormItem
                                type="text"
                                name="name"
                                onChange={handleChange}
                                use="contact"
                            />
                            <FormItem
                                type="text"
                                name="surname"
                                onChange={handleChange}
                                use="contact"
                            />
                            <FormItem
                                type="tel"
                                name="number"
                                onChange={handleChange}
                                use="phone"
                            />
                            <FormItem
                                type="email"
                                name="email"
                                onChange={handleChange}
                                use="email"
                            />
                            <SubmitButton type="submit">
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-save-contact`}
                                />
                                Add contact
                            </SubmitButton>
                        </FormikForm>
                    </>
                );
            }}
        </Formik>
    );
};
