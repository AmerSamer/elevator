import { useContext } from "react"
import ElevatorContext from "../Hooks/elevatorContext"
import { ReactComponent as Icon } from '../icons/elevatorIcon.svg';

function Elevator(props) {
    const elvId = props.attr;
    const { floorsState, elevatorsState } = useContext(ElevatorContext)

    return (<>
        <div className="bg-light">
            <div className="border col" id="floor-div">
                <div className={floorsState[9].isElv && floorsState[9].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[9].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[9].isElv && floorsState[9].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[9].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[8].isElv && floorsState[8].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[8].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[8].isElv && floorsState[8].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[8].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[7].isElv && floorsState[7].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[7].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[7].isElv && floorsState[7].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[7].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[6].isElv && floorsState[6].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[6].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[6].isElv && floorsState[6].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[6].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[5].isElv && floorsState[5].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[5].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[5].isElv && floorsState[5].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[5].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[4].isElv && floorsState[4].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[4].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[4].isElv && floorsState[4].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[4].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>

            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[3].isElv && floorsState[3].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[3].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[3].isElv && floorsState[3].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[3].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[2].isElv && floorsState[2].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[2].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[2].isElv && floorsState[2].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[2].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[1].isElv && floorsState[1].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[1].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[1].isElv && floorsState[1].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[1].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[0].isElv && floorsState[0].elevatorId.includes(elvId) ? "d-inline" : "d-none"}>
                    {floorsState[0].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival}
                    <div>
                        <Icon id="elevator-icon" className={floorsState[0].isElv && floorsState[0].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction ? "text-red d-inline" : (floorsState[0].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Elevator