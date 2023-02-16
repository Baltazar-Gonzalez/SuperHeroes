import React from "react"
import {Container} from "../../styles/GlobalStyles"
import {Sign, Form, Input, Button} from "../Login/styles"

export const Register = () =>{

const handleSubmit = e =>{
    e.preventDefault()
    fetch("http://localhost:3000/register", {
        method: "POST",
        body: e,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(data => console.log(data))
    }

    return(
        <Container>
            <Sign>
                <h1>CREATE YOUR ACCOUNT</h1>
                <Form action="http://localhost:3000/register" method="POST">
                    <Input name="email" placeholder="Email" type="email"/>
                    <Input name="password" placeholder="Password" type="password"/>
                    <Input name="repeatpassword"placeholder="Repeat password" type="password"/>
                    <Button type="submit" ><strong>Register</strong></Button>
                </Form>
            </Sign>
        </Container>
    )
}