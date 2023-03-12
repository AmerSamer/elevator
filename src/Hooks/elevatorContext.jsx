import { createContext, useState } from 'react';

const ElevatorContext = createContext();


export const ElevatorProvider = (props) => {
    const [value, setValue] = useState("test")
    const [floorsState, setFloorsState] = useState([
        { isElv: true, position: 0, isCalled: false, elevatorId: [0, 1, 2, 3, 4] },
        { isElv: false, position: 1, isCalled: false, elevatorId: [] },
        { isElv: false, position: 2, isCalled: false, elevatorId: [] },
        { isElv: false, position: 3, isCalled: false, elevatorId: [] },
        { isElv: false, position: 4, isCalled: false, elevatorId: [] },
        { isElv: false, position: 5, isCalled: false, elevatorId: [] },
        { isElv: false, position: 6, isCalled: false, elevatorId: [] },
        { isElv: false, position: 7, isCalled: false, elevatorId: [] },
        { isElv: false, position: 8, isCalled: false, elevatorId: [] },
        { isElv: false, position: 9, isCalled: false, elevatorId: [] },
    ])
    const [elevatorsState, setElevatorsState] = useState([
        { id: 0, position: 0, pastPosition: 0, inAction: false },
        { id: 1, position: 0, pastPosition: 0, inAction: false },
        { id: 2, position: 0, pastPosition: 0, inAction: false },
        { id: 3, position: 0, pastPosition: 0, inAction: false },
        { id: 4, position: 0, pastPosition: 0, inAction: false }
    ])

    const closestElevator = (floorNumberCalled) => {
        let arr = [];
        for (let i = 0; i < elevatorsState.length; i++) {
            arr.push(Math.abs(elevatorsState[i].position - floorNumberCalled));
        }
        const indexMenor = arr.indexOf(Math.min(...arr));
        return elevatorsState[indexMenor];
    }
    const callElevator = (floorNumberCalled) => {
        const closestElv = closestElevator(floorNumberCalled);
        setElevatorsState(s => {
            const newArr = s.slice();
            newArr[closestElv.id].inAction = true;
            newArr[closestElv.id].pastPosition = newArr[closestElv.id].position;
            newArr[closestElv.id].position = floorNumberCalled;

            return newArr;
        })
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
        console.log("floorsState", floorsState);
        console.log("elevatorsState", elevatorsState);
    }
    const checkElevatorstate = () => {
        floorsState.map((floor) => {
            if (floor.isCalled) {
                if (!floor.isElv) {
                    callElevator(floor.position)
                }
            }
        })
    }

    return (
        <ElevatorContext.Provider value={{ value, floorsState, elevatorsState, callElevator, checkElevatorstate }}>
            {props.children}
        </ElevatorContext.Provider>
    );
};


export default ElevatorContext;
