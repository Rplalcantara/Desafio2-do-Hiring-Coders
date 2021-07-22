import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerExterno = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95vh;
    text-align: center;
    @media (max-width: 500px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
`;

export const Header = styled.div`
    font-size: 2rem;
    font-weight: bold;
    justify-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const FormChild = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr;
    text-align: start;
    width: 600px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 1.5rem;
    @media (max-width: 500px) {
    grid-template-columns: 1fr;
    width: 95vw;
}
`;

export const FormInput = styled.input`
    padding: 5px;    
    background-color: #f8f8f8;
`;

export const FormTextArea = styled.textarea`
    padding: 5px;    
    background-color: #f8f8f8;
    resize: none;
    `;

export const Button = styled.button`
    background-color: #f8f8f8;
    color: #0f0f0f;
    justify-self: center;
    border: solid 1px #f8f8f8;
    font-size: 2rem;
    font-weight: 600;
    margin: 1.5rem auto;
    width: 200px;

    &:hover {
        background-color: #0f0f0f;
        color: #f8f8f8;
        cursor: pointer;
        }
`;

export const NavBox = styled.div`
    display:inline-block;
`;

export const Nav = styled(Link)`
    background-color: #f8f8f8;
    color: #0f0f0f;
    text-decoration: none;
    text-align: center;
    align-self: start;
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

