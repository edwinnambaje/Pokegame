import React, { Component } from 'react'
import Pokecard from './card';
import "./Pokedex.css"
class Pokedex extends Component{
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
        let title;
        if(this.props.isWinner){
            title=<h1 className='Pokedex-winner'>Winning Hand</h1>
        }
        else{
            title=<h1 className='Pokedex-loser'>Losing hand</h1>
        }
        return(
            <div className='Pokedex'>
                <h1>PokeDex!</h1>
                {title};
                <p>Total Experience:{this.props.exp}</p>
                <div className='Pokedex-card'>
                {this.props.pokemon.map((p)=>(
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                ))}
                </div>
            </div>
        )

    }
}
export default Pokedex;