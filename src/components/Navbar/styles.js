import styled from "styled-components"

export const Appbar = styled.div`
    width: 100%;
    min-width:220px;
    height: 70px;
    background-color:black;
    color:white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    @media(max-width: 600px){
        height:55px;
    }
    `


export const Optionsbar = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 600px){
        width: 85%;
    }
    
`
export const Form = styled.form`
    width:100%;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 2px; 
    background-color: #444444;
    border:none;
    color:white;
    outline: none;
    border: 0;
    ::placeholder{
        color:white
    }
`
export const Search = styled.div`
    height: 40px;
    margin-left:15px;
    padding-left: 20px;
    background-color: #444444;
    display:flex;
    align-items:center;
    border:none;
    border-radius:7px;
    @media(max-width: 600px){
        margin: 0;
        width: 100%;
    }
`

export const Ancla = styled.a`
    font-size:30px;
    @media(max-width: 600px){
        display:none;
    }
`

export const Button = styled.button`
    border:none;
    background: none;
    display: flex;
    margin-right:15px;
    align-items: center;
`
export const Login = styled.div`
    margin-left: 10px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color:white !important;
`