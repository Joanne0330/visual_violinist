import './styles.css';
import PracticePage from "./pages/PracticePage";

function App() {
  return (
    <>
      <div className="appHeader"> 
        <h1 className='appTitle'>The Visual Violinist</h1>
      </div>
      <div className="wallPaper" style={{backgroundImage: 'url("/assets/images/background.jpg")'}}>
        <div className="contentContainer">
          <PracticePage/>
        </div>
      </div>
      <h5 className="appFooter">© 2024 Joanne Chen. All rights reserved.</h5>
    </>
  );
}

export default App;
