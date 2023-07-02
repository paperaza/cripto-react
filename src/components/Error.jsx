import styled from "@emotion/styled";

const Texto= styled.div`
    background-color: #b7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`;

const Error = ({children}) =>{//captura el error que venga de la api y locaptura en el children
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error;