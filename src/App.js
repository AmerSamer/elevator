import './App.css';
import Elevator from './components/Elevator';
import { ElevatorProvider } from './Hooks/elevatorContext';
import ButtonsGroup from './components/ButtonsGroup';

function App() {
  return (
    <>
      <ElevatorProvider>
        <div className="text-center">
          <div className='mt-3'><h4>Elevator Exercise</h4></div>
          <div id="app-main" className='row w-75 text-center'>
            <div className='col-1 fw-bold mt-5'>
              <p className='mb-4'>9th</p>
              <p className='mb-4'>8th</p>
              <p className='mb-4'>7th</p>
              <p className='mb-4'>6th</p>
              <p className='mb-4'>5th</p>
              <p className='mb-4'>4th</p>
              <p className='mb-4'>3rd</p>
              <p className='mb-4'>2nd</p>
              <p className='mb-4'>1st</p>
              <p className='mb-4'>0th</p>
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