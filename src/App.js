import Navbar from './components/Nav/Navbar';
import SlideView from './components/Carousel/SlideView';
import styled from 'styled-components';
import image from './assets/8.png'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2.5%;
  width: 100%;
  /* border: 1px solid red; */
  background-image: url(${image});
  background-position: center;
`


function App() {
  return (
    <>


      <Navbar />

    <AppWrapper>
        <SlideView />
    </AppWrapper>
    </>
  );
}

export default App;
