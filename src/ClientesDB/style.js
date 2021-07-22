import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerExterno = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 90vh;  
    text-align: center;
    padding: 2rem;
    margin: 1rem;

    @media (max-width: 600px) {
        padding: 0;
        margin: 0;
        width: 100vw;
        height: 100%;
        margin-top: 1rem;

    }
`;

export const Header = styled.div`
    font-size: 2rem;
    font-weight: bold;
    justify-self: center;
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

export const ContainerCliente = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const Cliente = styled.div`
    display: grid;
    border: 1px solid #f8f8f8;
    justify-items: center;
    width: 30%;
    min-width: 250px;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #a2a2;

    @media (max-width: 600px) {
        padding: 0;
        margin: 10px auto;
    }
`;

export const ClienteName = styled.span`
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

export const EnderecoContainer = styled.div`
    display: grid;
    width: 90%;
    border: 1px solid #f8f8f8;    
    padding: 5px;
    margin: 10px;
    text-align: justify;
    font-size: 1.5rem;
    font-weight: 700; 
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

export const ClienteEndereco = styled.span`
    margin: 0.6rem;
`;

export const ClienteCisEst = styled.span`
    margin: 0.6rem;
`;

export const ClienteCep = styled.span`
    margin: 0.6rem;
`;

export const ClienteID = styled.span`
    font-size: 0.5rem;
`;

export const Nav = styled(Link)`
    background-color: #f8f8f8;
    color: #0f0f0f;
    text-decoration: none;
    text-align: center;
    border: solid 1px #f8f8f8;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1.5rem;
    padding: 5px;
    width: 150px;

    &:hover {
        background-color: #0f0f0f;
        color: #f8f8f8;
        cursor: pointer;
        }
`;