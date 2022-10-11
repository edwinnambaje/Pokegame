import React, { Component } from 'react'
import Pokedex from "./dex"

class Pokegame extends Component{
    static defaultProps={
        pokemon: [
            {id:4, name:"Edwin",type:"fire",base_experience:62},
            {id:10, name:"Tresor",type:"water",base_experience:34},
            {id:23, name:"Nambaje",type:"bug",base_experience:90},
            {id:32, name:"Kwibuka",type:"animal",base_experience:12},
            {id:45, name:"David",type:"flying",base_experience:52},
            {id:57, name:"Nkusi",type:"poison",base_experience:92},
            {id:21, name:"Kevin",type:"normal",base_experience:68},
            {id:333, name:"Eric",type:"electrical",base_experience:17}
        ]
    };
    render(){
        let hand1=[];
        let hand2=[...this.props.pokemon];
        while(hand1.length< hand2.length){
            let rpsk=Math.floor(Math.random()*hand2.length);
            let randPokemon=hand2.splice(rpsk,1)[0];
            hand1.push(randPokemon);
        }
        let exp1=hand1.reduce((exp,pokemon)=>exp+pokemon.base_experience,(0));
        let exp2=hand2.reduce((exp,pokemon)=>exp+pokemon.base_experience,(0));
        return(
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        );
    }
}
export default Pokegame;