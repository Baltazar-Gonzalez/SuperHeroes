import React from "react"
import {Link} from "react-router-dom"
import {Container} from "../../styles/GlobalStyles"
import {Sign, Form, Input, Button, Paragraph, Register} from "./styles"

export const Login = () =>{
    
    return(
        <Container>
            <Sign>
                <h1>SIGN IN</h1>
                <Form>
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Password" type="password"/>
                    <Button><strong>Login</strong></Button>
                </Form>
                <Paragraph>You don´t have an account? <Link to="/register"><Register>Register</Register></Link></Paragraph> 
            </Sign>
        </Container>
    )
}