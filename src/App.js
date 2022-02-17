import Navbar from './components/Nav/Navbar';
import SlideView from './components/Carousel/SlideView';
import { ProcrastinationContext } from './components/context/procrastinationContext';
import { useState } from 'react';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ProcrastinationContext.Provider
      value={{
        isEnabled, setIsEnabled
      }}>
      <Navbar />
      <div className={ isEnabled ? 'content-wrapper dark' : 'content-wrapper light'}>
          <SlideView />
      </div>
    </ProcrastinationContext.Provider>
  );
}

export default App;
