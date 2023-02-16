import styled from "styled-components"

export const Character = styled.div`
    display:flex;
    justify-content: space-around;
    @media(max-width: 780px){
        flex-direction:column-reverse;
    }
`
export const Name = styled.h1`
    text-align: center;
    font-size:50px;
    margin-bottom:30px;
`

export const List = styled.ul`
    padding: 10px;
`
export const Item = styled.p`
    display:flex;
    margin-top: 5px;
`
export const Info = styled.span`
    padding:5px 0 0 5px;
    font-family:Arial, Helvetica, sans-serif;
`
export const Img = styled.img`
    width:100%;
    max-width:480px;
    margin:0 auto;
`