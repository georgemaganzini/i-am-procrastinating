import Navbar from './components/Nav/Navbar';
import SlideView from './components/Carousel/SlideView';
import { ProcrastinationContext } from './procrastinationContext';
import { useState } from 'react';

function App() {
  const [test, setTest] = useState([]);
  return (
    <ProcrastinationContext.Provider
      value={{
        test,
        setTest,
      }}>
      <Navbar />
      <div className='content-wrapper'>
          <SlideView />
      </div>
    </ProcrastinationContext.Provider>
  );
}

export default App;
