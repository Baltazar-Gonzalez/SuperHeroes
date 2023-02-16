import React, {useEffect, useState} from "react"
import {Character, Name, List, Item, Info, Img} from "./styles"
import {Loading} from "../Loading"
import {Container} from "../../styles/GlobalStyles"

export const Hero = ({match}) =>{
    const [info, setInfo] = useState({loading:true})

    useEffect(
        function(){
            fetch(`https://www.superheroapi.com/api.php/2779530068814025/${match.params.characterId}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data, {loading:false})
            })
        }, []
        )
    if(info.loading === true){
        return <Loading/>
    }

    return ( 
        <Container>
            <Character>
                <div>
                    <Name>{info.name.toUpperCase()}</Name>
                    <h2>Biography</h2>
                    <List>
                        <Item>Name: <Info>{info.biography["full-name"]}</Info></Item>
                        <Item>First appearance: <Info>{info.biography["first-appearance"]}</Info></Item>
                        <Item>Alignment: <Info>{info.biography.alignment}</Info></Item>
                        <Item>Aliases: <Info>{info.biography.aliases.toString()}</Info></Item>
                        <Item>Groups: <Info>{info.connections["group-affiliation"]}</Info></Item>
                    </List>
                </div>
                <Img src={info.image.url}/>
            </Character>
        </Container>
    )
}