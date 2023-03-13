import { createContext, useState, useLayoutEffect } from 'react';
import { Howl, Howler } from "howler";
import arrivedSound from '../Sounds/arrivedSound.wav'
import Queue from "./Queue.js";
const queue = new Queue();

const ElevatorContext = createContext();

export const ElevatorProvider = (props) => {
    const [value, setValue] = useState("test")
    const [audio, setAudio] = useState(null);
    const [floorsState, setFloorsState] = useState([
        { isElv: true, position: 0, isCalled: false, isArrived: false, elevatorId: [0, 1, 2, 3, 4] },
        { isElv: false, position: 1, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 2, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 3, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 4, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 5, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 6, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 7, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 8, isCalled: false, isArrived: false, elevatorId: [] },
        { isElv: false, position: 9, isCalled: false, isArrived: false, elevatorId: [] },
    ])
    const [elevatorsState, setElevatorsState] = useState([
        { id: 0, position: 0, pastPosition: 0, inAction: false, EstimatedTimeArrival: 0, arrivalTime: 0 },
        { id: 1, position: 0, pastPosition: 0, inAction: false, EstimatedTimeArrival: 0, arrivalTime: 0 },
        { id: 2, position: 0, pastPosition: 0, inAction: false, EstimatedTimeArrival: 0, arrivalTime: 0 },
        { id: 3, position: 0, pastPosition: 0, inAction: false, EstimatedTimeArrival: 0, arrivalTime: 0 },
        { id: 4, position: 0, pastPosition: 0, inAction: false, EstimatedTimeArrival: 0, arrivalTime: 0 }
    ])

    const playSound = (src) => {
        setAudio(new Howl({ src }));
    };
    useLayoutEffect(() => {
        if (audio) {
            audio.play();
        }
    }, [audio]);

    const setTheNewElevatorValues = (positionOfClosestElv, floorNumberCalled, closestElv) => {
        setElevatorsState(s => {
            const newArr = s.slice();
            newArr[closestElv.id].inAction = true;
            newArr[closestElv.id].pastPosition = positionOfClosestElv;
            newArr[closestElv.id].position = floorNumberCalled;
            newArr[closestElv.id].EstimatedTimeArrival = Math.abs(floorNumberCalled - newArr[closestElv.id].pastPosition) * 2;
            newArr[closestElv.id].arrivalTime = Date.now() + (1000 * (Math.abs(floorNumberCalled - newArr[closestElv.id].pastPosition) * 2));
            return newArr;
        })
    }
    const setTheNewFloorValues = (floorNumberCalled, closestElv) => {
        setFloorsState(s => {
            const newArr = s.slice();
            newArr[floorNumberCalled].isElv = true;
            newArr[floorNumberCalled].isCalled = true;
            const index = newArr[elevatorsState[closestElv.id].pastPosition].elevatorId.indexOf(closestElv.id)
            if (index > -1) {
                newArr[elevatorsState[closestElv.id].pastPosition].elevatorId.splice(index, 1);
            }
            if (!newArr[floorNumberCalled].elevatorId.includes(closestElv.id)) {
                newArr[floorNumberCalled].elevatorId.push(closestElv.id)
            }
            return newArr;
        });
    }
    const closestElevator = (floorNumberCalled) => {
        const elevatorsOccupied = elevatorsState.filter(elv => elv.inAction);
        if (elevatorsOccupied.length === 5) {
            return null;
        } else {
            if (floorsState[floorNumberCalled].elevatorId.length === 0) {
                let arr = [];
                for (let i = 0; i < elevatorsState.length; i++) {
                    if (elevatorsState[i].inAction) {
                        arr.push(10);
                    } else {
                        arr.push(Math.abs(elevatorsState[i].position - floorNumberCalled));
                    }
                }
                const indexMenor = arr.indexOf(Math.min(...arr));
                return elevatorsState[indexMenor];
            } else {
                return elevatorsState[floorsState[floorNumberCalled].elevatorId[0]];
            }
        }
    }
    const callElevator = (floorNumberCalledd) => {
        let floorNumberCalled = floorNumberCalledd;
        if (floorNumberCalled !== -1) {
            queue.enqueue(floorNumberCalled);
        }
        if (!queue.isEmpty()) {
            const closestElv = closestElevator(queue.peek());
            if (closestElv !== null) {
                const positionOfClosestElv = closestElv.position;
                setTheNewElevatorValues(positionOfClosestElv, queue.peek(), closestElv);
                setTheNewFloorValues(queue.peek(), closestElv);
                queue.dequeue();
            } else {
                console.log("null get here");
            }
        }
    }

    // A method that runs every half second and checks if there are elevators 
    // that have reached the requested floor 
    // (the current time is greater than the time needed for the elevator to reach the destination) 
    // and are relevant for use at the moment
    setInterval(() => {
        for (let i = 0; i < elevatorsState.length; i++) {
            if (Date.now() - elevatorsState[i].arrivalTime > 0 && Date.now() - elevatorsState[i].arrivalTime < 1001) {
                setElevatorsState(s => {
                    const newArr = s.slice();
                    newArr[i].inAction = false;
                    newArr[i].EstimatedTimeArrival = 0;
                    newArr[i].arrivalTime = 0;
                    return newArr;
                })
                const floor = floorsState.filter(f => f.elevatorId[0] === i);
                setFloorsState(s => {
                    const newArr = s.slice();
                    newArr[floor[0].position].isArrived = true;
                    playSound(arrivedSound);
                    return newArr;
                })
                setTimeout(() => {
                    setFloorsState(s => {
                        const newArr = s.slice();
                        newArr[floor[0].position].isArrived = false;
                        newArr[floor[0].position].isCalled = false;
                        return newArr;
                    })
                }, 2000);
            }
        }
    }, 500)

    setTimeout(() => {
        callElevator(-1);
    }, 1000)

    return (
        <ElevatorContext.Provider value={{ value, floorsState, elevatorsState, callElevator }}>
            {props.children}
        </ElevatorContext.Provider>
    );
};


export default ElevatorContext;
