import React, {useState, useEffect} from "react"
import {Card} from "../Card"
import {Container} from "../../styles/GlobalStyles"
import {List, Item} from "./styles"

const randomNumber = () =>{
    const number = []    
    for(var i=0;i<4;i++){
        number.push(Math.floor(Math.random()*500))
    }

    return number
    }

export const Home = () =>{
    const[heros, setHeros]=useState([])
        
        useEffect(
            function(){
                let uno, dos, tres, cuatro
                const number = randomNumber()
                fetch(`https://www.superheroapi.com/api.php/2779530068814025/${number[0]}`)
                .then(res => res.json())
                .then(data => {
                    uno = data
                })
                .then(()=>fetch(`https://www.superheroapi.com/api.php/2779530068814025/${number[1]}`)
                .then(res => res.json())
                .then(data => {
                    dos = data
                }))
                .then(()=>fetch(`https://www.superheroapi.com/api.php/2779530068814025/${number[2]}`)
                .then(res => res.json())
                .then(data => {
                    tres = data
                }))
                .then(()=>fetch(`https://www.superheroapi.com/api.php/2779530068814025/${number[3]}`)
                .then(res => res.json())
                .then(data => {
                    cuatro = data
                }))
                .then(()=>setHeros([uno,dos,tres,cuatro]))
            }
    ,[])

    return (
        <Container>
            <h1>LOOK FOR ANY SUPERHERO</h1>
            <h4>Randoms heros</h4>
            <List>
                {heros.map(hero => <Item key={hero.id} ><Card img={hero.image.url} name={hero.name} id={hero.id} /></Item>)}
            </List>
        </Container>
    )
}