import players from "../players"
import PlayerCard from "./PlayerCard"
import '../App.css';
const PlayerList=()=>{
    return(
        <div  className='cartes'>
            {
                players.map((el,i,t)=><PlayerCard key={i} el={el}/>)
            }
        </div>
    )
}