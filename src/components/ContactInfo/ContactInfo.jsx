import defaultPhoto from '../../img/avatar-default.png';
import {
    BtnWrapper,
    ContactCard,
    ContactTitle,
    Details,
    DetailsItem,
    DetailsWrapper,
    LinkStyled,
    Photo,
    PhotoWrapper,
} from './ContactInfo.styled';
import { Link, useLocation } from 'react-router-dom';
import { Svg } from 'components/icon/Icon';
import sprite from '../../img/icons.svg';

export const ContactInfo = () => {
    const location = useLocation();
    return (
        <ContactCard>
            <PhotoWrapper>
                <LinkStyled to={'/'}>
                    <Svg w={20} h={20} use={`${sprite}#icon-close`} />
                </LinkStyled>
                <BtnWrapper>
                    <Link to={`edit`} state={{ from: location }}>
                        <Svg w={20} h={20} use={`${sprite}#icon-pencil`}></Svg>
                    </Link>
                    <Link>
                        <Svg
                            w={20}
                            h={20}
                            use={`${sprite}#icon-del-contact`}
                        ></Svg>
                    </Link>
                </BtnWrapper>
                <Photo src={defaultPhoto} alt="Contact photo" />
            </PhotoWrapper>
            <ContactTitle>Contact name</ContactTitle>
            <DetailsWrapper>
                <h3>Contact info</h3>
                <Details>
                    <DetailsItem>
                        <p>Phone:</p>
                        <a href="tel:+1234567890">+11234567890</a>
                    </DetailsItem>
                    <DetailsItem>
                        <p>E-mail:</p>
                        <a href="mailto:ford@gmail.com">ford@gmail.com</a>
                    </DetailsItem>
                </Details>
            </DetailsWrapper>
        </ContactCard>
    );
};
