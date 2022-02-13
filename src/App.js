import Navbar from './components/Nav/Navbar';
import SlideView from './components/Carousel/SlideView';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: 36em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
`

function App() {
  return (
    <>


      <Navbar />

    <ContentWrapper>
        <SlideView />
    </ContentWrapper>
    </>
  );
}

export default App;
