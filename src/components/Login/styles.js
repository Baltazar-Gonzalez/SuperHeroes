import styled from "styled-components"

export const Sign = styled.div`
    text-align:center;
`
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-bottom:10px;
`
export const Input = styled.input`
    width:100%;
    max-width: 400px;
    height: 40px;
    padding:10px;
    margin-bottom: 15px;
    border-radius: 7px;
`
export const Button = styled.button`
    width:100px;
    height:30px;
`
export const Paragraph = styled.p`
    font-family:"roboto";
`
export const Register = styled.span`
    color: blue;
    text-shadow: 1px 1px 1px black;;
    cursor: pointer;
    text-decoration: none;
    :hover{
    text-decoration: underline;
}
`