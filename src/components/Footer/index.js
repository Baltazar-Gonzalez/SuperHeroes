import React from "react"
import {Appfooter, Datafooter, Socialfooter} from "./styles"
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";

export const Footer = () =>{

    return(
        <Appfooter>
            <Datafooter>
                <h1>SuperherosWIkI®</h1>
                <h6>BaltazarGonzalez</h6>
            </Datafooter>
            <Socialfooter>
                <a href="https://github.com/Baltazar-Gonzalez"><AiFillGithub size="30px"/></a>
                <a href="https://www.instagram.com/"><AiOutlineInstagram size="30px"/></a>
            </Socialfooter>
        </Appfooter>
    )
}