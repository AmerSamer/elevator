import logo from './logo.svg';
import './App.css';
import Elevator from './components/Elevator';
import { ElevatorProvider } from './Hooks/elevatorContext';
import { useContext } from 'react';
import ButtonsGroup from './components/ButtonsGroup';

function App() {
  return (
    <>
      <ElevatorProvider>
        <div className="text-center">
          <div id="app-main" className=' row w-75 text-center'>
            <div className='col-1 fw-bold '>
              <p>9th</p>
              <p>8th</p>
              <p>7th</p>
              <p>6th</p>
              <p>5th</p>
              <p>4th</p>
              <p>3rd</p>
              <p>2nd</p>
              <p>1st</p>
              <p>0th</p>
            </div>
            <div className='col-1'>
              <Elevator attr={0} />
            </div>
            <div className='col-1'>
              <Elevator attr={1} />
            </div>
            <div className='col-1'>
              <Elevator attr={2} />
            </div>
            <div className='col-1'>
              <Elevator attr={3} />
            </div>
            <div className='col-1'>
              <Elevator attr={4} />
            </div>
            <div className='col-1'>
              <ButtonsGroup />
            </div>
          </div>
        </div>
      </ElevatorProvider>
    </>
  );
}

export default App;