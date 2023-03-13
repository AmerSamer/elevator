import { useContext, useEffect, useLayoutEffect, useState } from "react"
import ElevatorContext from '../Hooks/elevatorContext'
import { Howl, Howler } from "howler";
import arrivedSound from '../Sounds/arrivedSound.wav'

function ButtonsGroup() {
    const { callElevator, floorsState } = useContext(ElevatorContext)
    const [audio, setAudio] = useState(null);
    
    const playSound = (src) => {
        setAudio(new Howl({ src }));
    };
    useEffect(() => {
        floorsState.map(floor => {
            if (floor.isArrived) {
                playSound(arrivedSound);
            }
        })
    }, [floorsState])
    useLayoutEffect(() => {
        if (audio) {
            audio.play();
        }
    }, [audio]);

    return (<>
        <button onClick={() => callElevator(9)} disabled={floorsState[9].isCalled ? true : false} className={(!floorsState[9].isCalled && !floorsState[9].isArrived) ? 'btn btn-success m-1' : (floorsState[9].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[9].isCalled && !floorsState[9].isArrived) ? 'Call' : (floorsState[9].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(8)} disabled={floorsState[8].isCalled ? true : false} className={(!floorsState[8].isCalled && !floorsState[8].isArrived) ? 'btn btn-success m-1' : (floorsState[8].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[8].isCalled && !floorsState[8].isArrived) ? 'Call' : (floorsState[8].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(7)} disabled={floorsState[7].isCalled ? true : false} className={(!floorsState[7].isCalled && !floorsState[7].isArrived) ? 'btn btn-success m-1' : (floorsState[7].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[7].isCalled && !floorsState[7].isArrived) ? 'Call' : (floorsState[7].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(6)} disabled={floorsState[6].isCalled ? true : false} className={(!floorsState[6].isCalled && !floorsState[6].isArrived) ? 'btn btn-success m-1' : (floorsState[6].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[6].isCalled && !floorsState[6].isArrived) ? 'Call' : (floorsState[6].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(5)} disabled={floorsState[5].isCalled ? true : false} className={(!floorsState[5].isCalled && !floorsState[5].isArrived) ? 'btn btn-success m-1' : (floorsState[5].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[5].isCalled && !floorsState[5].isArrived) ? 'Call' : (floorsState[5].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(4)} disabled={floorsState[4].isCalled ? true : false} className={(!floorsState[4].isCalled && !floorsState[4].isArrived) ? 'btn btn-success m-1' : (floorsState[4].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[4].isCalled && !floorsState[4].isArrived) ? 'Call' : (floorsState[4].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(3)} disabled={floorsState[3].isCalled ? true : false} className={(!floorsState[3].isCalled && !floorsState[3].isArrived) ? 'btn btn-success m-1' : (floorsState[3].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[3].isCalled && !floorsState[3].isArrived) ? 'Call' : (floorsState[3].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(2)} disabled={floorsState[2].isCalled ? true : false} className={(!floorsState[2].isCalled && !floorsState[2].isArrived) ? 'btn btn-success m-1' : (floorsState[2].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[2].isCalled && !floorsState[2].isArrived) ? 'Call' : (floorsState[2].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(1)} disabled={floorsState[1].isCalled ? true : false} className={(!floorsState[1].isCalled && !floorsState[1].isArrived) ? 'btn btn-success m-1' : (floorsState[1].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[1].isCalled && !floorsState[1].isArrived) ? 'Call' : (floorsState[1].isArrived) ? 'Arrived' : 'Waiting'}</button>
        <button onClick={() => callElevator(0)} disabled={floorsState[0].isCalled ? true : false} className={(!floorsState[0].isCalled && !floorsState[0].isArrived) ? 'btn btn-success m-1' : (floorsState[0].isArrived) ? 'btn btn-outline-success m-1' : 'btn btn-danger m-1'} >{(!floorsState[0].isCalled && !floorsState[0].isArrived) ? 'Call' : (floorsState[0].isArrived) ? 'Arrived' : 'Waiting'}</button>
    </>)
}
export default ButtonsGroup