import { useContext } from "react"
import ElevatorContext from "../Hooks/elevatorContext"
import { ReactComponent as Icon } from '../icons/elevatorIcon.svg';
import './elevator.css';

function Elevator(props) {
    const elvId = props.attr;
    const { floorsState, elevatorsState } = useContext(ElevatorContext)

    const elevatorAnimation = (estimatedTimeArrival, position, pastPosition) => {
        if (position > pastPosition) {
            switch (estimatedTimeArrival) {
                case 0:
                    return 'vert-move-0';
                case 2:
                    return 'vert-move-2-up';
                case 4:
                    return 'vert-move-4-up';
                case 6:
                    return 'vert-move-6-up';
                case 8:
                    return 'vert-move-8-up';
                case 10:
                    return 'vert-move-10-up';
                case 12:
                    return 'vert-move-12-up';
                case 14:
                    return 'vert-move-14-up';
                case 16:
                    return 'vert-move-16-up';
                case 18:
                    return 'vert-move-18-up';
                default:
                    console.log(`Sorry, we are out of ${estimatedTimeArrival}.`);
            }
        } else {
            switch (estimatedTimeArrival) {
                case 0:
                    return 'vert-move-0';
                case 2:
                    return 'vert-move-2-down';
                case 4:
                    return 'vert-move-4-down';
                case 6:
                    return 'vert-move-6-down';
                case 8:
                    return 'vert-move-8-down';
                case 10:
                    return 'vert-move-10-down';
                case 12:
                    return 'vert-move-12-down';
                case 14:
                    return 'vert-move-14-down';
                case 16:
                    return 'vert-move-16-down';
                case 18:
                    return 'vert-move-18-down';
                default:
                    console.log(`Sorry, we are out of ${estimatedTimeArrival}.`);
            }
        }
    }

    return (<>
        <div className="bg-light">
            <div className="border col" id="floor-div">
                <div className={floorsState[9].isElv && floorsState[9].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[9].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[9].isElv && floorsState[9].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[9].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[9].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[8].isElv && floorsState[8].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[8].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[8].isElv && floorsState[8].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[8].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[8].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[7].isElv && floorsState[7].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[7].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[7].isElv && floorsState[7].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[7].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[7].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[6].isElv && floorsState[6].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[6].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[6].isElv && floorsState[6].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[6].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[6].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[5].isElv && floorsState[5].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[5].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[5].isElv && floorsState[5].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[5].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[5].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[4].isElv && floorsState[4].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[4].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[4].isElv && floorsState[4].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[4].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[4].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>

            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[3].isElv && floorsState[3].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[3].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[3].isElv && floorsState[3].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[3].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[3].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[2].isElv && floorsState[2].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[2].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[2].isElv && floorsState[2].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[2].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[2].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[1].isElv && floorsState[1].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[1].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[1].isElv && floorsState[1].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[1].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[1].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
            <div className="border col" id="floor-div">
                <div className={floorsState[0].isElv && floorsState[0].elevatorId.includes(elvId) ? "d-inline fst-italic" : "d-none"}>
                    {floorsState[0].elevatorId.includes(elvId) && elevatorsState[elvId].EstimatedTimeArrival === 0 ? null : elevatorsState[elvId].EstimatedTimeArrival + " sec."}
                    <Icon id="elevator-icon" className={floorsState[0].isElv && floorsState[0].elevatorId.includes(elvId) ? (elevatorsState[elvId].inAction && !floorsState[0].isArrived ? `text-red d-inline ${elevatorAnimation(elevatorsState[elvId].EstimatedTimeArrival, elevatorsState[elvId].position, elevatorsState[elvId].pastPosition)}` : (floorsState[0].isArrived ? "text-green d-inline" : "text-black d-inline")) : "d-none"} />
                </div>
            </div>
        </div>
    </>)
}
export default Elevator