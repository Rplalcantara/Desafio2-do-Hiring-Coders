import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerExterno = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;    
    text-align: center;
`;

export const Header = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1.5rem auto;

    @media (max-width: 500px) {
    font-size: 2rem;
    font-weight: bold;
    border: solid 1px #fff;
    width: 90vw;
    }
`;

export const Button = styled(Link)`
    background-color: #f8f8f8;
    color: #0f0f0f;
    text-decoration: none;
    text-align: center;
    border: solid 1px #f8f8f8;
    font-size: 2rem;
    font-weight: 600;
    margin: 1.5rem auto;
    width: 300px;

    @media (max-width: 500px) {
    width: 95vw;
    }

    &:hover {
        background-color: #0f0f0f;
        color: #f8f8f8;
        cursor: pointer;
        }
`;