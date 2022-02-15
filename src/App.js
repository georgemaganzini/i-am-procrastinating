import Navbar from './components/Nav/Navbar';
import SlideView from './components/Carousel/SlideView';

function App() {
  return (
    <>
      <Navbar />
    <div className='content-wrapper'>
        <SlideView />
    </div>
    </>
  );
}

export default App;
