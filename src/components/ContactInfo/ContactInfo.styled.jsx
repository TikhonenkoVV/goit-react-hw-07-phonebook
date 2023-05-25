import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContactCard = styled.div`
    position: relative;
    max-width: 400px;
`;

export const PhotoWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

export const LinkStyled = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
`;

export const BtnWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 10px;
`;

export const Photo = styled.img`
    display: block;
    width: 150px;
    aspect-ratio: 1;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #302b2b;
`;

export const ContactTitle = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;
export const DetailsWrapper = styled.div`
    padding: 10px;
    background-color: gray;
`;

export const Details = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DetailsItem = styled.li`
    display: flex;
    gap: 10px;
`;
