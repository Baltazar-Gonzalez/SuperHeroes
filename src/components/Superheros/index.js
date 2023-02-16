import React, {useState, useEffect} from "react"
import {Container} from "../../styles/GlobalStyles"
import {Card} from "../Card"
import {Loading} from "../Loading"
import {List, Item} from "./styles"


export const Superheros = ({match}) =>{
    
    const [state, setState]=useState({loading:true, data:[]})


    useEffect(
        function(){
            fetch(`https://www.superheroapi.com/api.php/2779530068814025/search/${match.params.searchId}`)
            .then(res => res.json())
            .then(data => setState({data:data.results}))
            
        }, [] 
        )

        if(state.loading){
            return <Loading/>
        }

        return(
            <Container>
            <h6>Result for "{match.params.searchId}"</h6>
          {state.data==undefined?
            <h3>No match results</h3>
        :
            <List>
                {state.data.slice(0,16).map(hero => <Item><Card img={hero.image.url} name={hero.name} id={hero.id} key={hero.id}/></Item>)}
            </List>}
        </Container>
    )
}