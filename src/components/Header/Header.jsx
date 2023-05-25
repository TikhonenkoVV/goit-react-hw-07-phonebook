import { Container } from 'components/App.styled';
import { AddLink, HeaderStyled, HomeLink, Nav, Wrapper } from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import sprite from '../../img/icons.svg';
import { Svg } from 'components/icon/Icon';
import { ToastContainer } from 'react-toastify';

// const myData = {
//     name: 'Vitaliy',
//     phone: '0985647891245',
//     email: 'test@test.com',
// };

export const Header = () => {
    // const onClick = () => {
    //     const newTask = {
    //         content: 'Check out mockapi.io',
    //         completed: false,
    //     };

    //     fetch('https://646bb9e57d3c1cae4ce43658.mockapi.io/contacts', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         // Send your data in the request body as JSON
    //         body: JSON.stringify(myData),
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json();
    //             }
    //             // handle error
    //         })
    //         .then(task => {
    //             // do something with the new task
    //         })
    //         .catch(error => {
    //             // handle error
    //         });
    // };

    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Nav>
                        <HomeLink to={'/'}>
                            <Svg
                                w={40}
                                h={40}
                                use={`${sprite}#icon-address-book`}
                            />
                            Contacts
                        </HomeLink>
                    </Nav>
                    <Filter />
                    <AddLink to={'new'}>
                        <Svg w={20} h={20} use={`${sprite}#icon-add-contact`} />
                    </AddLink>
                    {/* <button onClick={onClick}>Click</button> */}
                </Wrapper>
            </Container>
            <ToastContainer />
        </HeaderStyled>
    );
};
