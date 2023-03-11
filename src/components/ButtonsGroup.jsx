import { useContext,useEffect } from "react"
import ElevatorContext from '../Hooks/elevatorContext'

function ButtonsGroup(){
    const {callElevator}=useContext(ElevatorContext)
    
    return(<>
            <button onClick={()=>callElevator(9)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(8)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(7)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(6)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(5)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(4)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(3)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(2)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(1)} className='btn btn-success m-1' >Call</button>
            <button onClick={()=>callElevator(0)} className='btn btn-success m-1' >Call</button>
    </>)
}
export default ButtonsGroup