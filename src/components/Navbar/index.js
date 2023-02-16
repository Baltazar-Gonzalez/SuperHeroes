import React, {useState} from "react"
import {Appbar, Optionsbar, Form, Input, Ancla, Button, Search, Login} from "./styles"
import { useHistory, Link } from "react-router-dom"
import { MdToc, MdSearch } from "react-icons/md"



export const Navbar = () => {
   const history = useHistory()

   const [state, setState] = useState("")

   const handleSubmit = async e =>{
        history.push(`/search/${state}`)
   } 

   const handleChange =  e =>{
        setState(e.target.value)
        console.log(e.target.value)
   }

    return(
    <Appbar>
        <Optionsbar>
            <Button>
                <MdToc color="white" size="40px"/>
            </Button>
            <Ancla href="/">Superheros Wiki</Ancla>
            <Search>
                <MdSearch color="white" size="20px"/>
                <Form onSubmit={handleSubmit}>
                    <Input value={state} onChange={handleChange} placeholder="Search..." type="text"/>
                </Form>
            </Search>
        </Optionsbar>
        <Login>
            <Link to="/login">Login</Link>
        </Login>
    </Appbar>
        )
    
}