import { useContext, useEffect } from "react"
import ElevatorContext from "../Hooks/elevatorContext"

function Elevator(props) {
    const elvId = props.attr;
    const { value, floorsState, elevatorsState, callElevator, checkElevatorstate } = useContext(ElevatorContext)
    useEffect(() => {
        checkElevatorstate()
    }, [callElevator])

    return (<>
        <div>
            <div className="border col" id="floor-div"><p className={floorsState[9].isElv && floorsState[9].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[8].isElv && floorsState[8].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[7].isElv && floorsState[7].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[6].isElv && floorsState[6].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[5].isElv && floorsState[5].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[4].isElv && floorsState[4].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[3].isElv && floorsState[3].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[2].isElv && floorsState[2].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[1].isElv && floorsState[1].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[0].isElv && floorsState[0].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>zz</p></div>

        </div>
    </>)
}
export default Elevator