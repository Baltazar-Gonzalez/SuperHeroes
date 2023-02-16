import React from "react"
import {Link} from "react-router-dom"
import {Div, P, Image} from "./styles"

const IMG = "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"

export const Card = ({name, img=IMG, id}) =>{

    return(
        <Div>
            <Link to={`/character/${id}`}>
            <Image src={img}/>
            <P>{name}</P>
            </Link>
        </Div>
    )
}