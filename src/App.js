import Navbar from './components/Nav/Navbar';
import SlideView from './components/Carousel/SlideView';
import { ProcrastinationContext } from './components/context/procrastinationContext';
import { useState } from 'react';

function App() {
  const [test, setTest] = useState(()=>{
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

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
