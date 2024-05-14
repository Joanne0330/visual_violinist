import PracticePage from "./pages/PracticePage";

const appStyle = {
  backgroundImage: 'url("/assets/images/background.jpg")',
  backgroundSize: '100vw 100vh',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  // overflowX: 'hidden'
}

function App() {
  return (
    <>
      <div style={{ backgroundColor: 'pink'}}> 
        <h1 style={{color: 'white', marginTop: 0, marginBottom: 0, fontFamily: 'fantasy', padding: '10px'}}>The Visual Violinist</h1>
      </div>
      <div className="App" style={appStyle}>
        <div style={{padding: "15px"}}>
          <PracticePage/>
        </div>
      </div>
      <div style={{backgroundColor: 'pink', position: 'fixed', bottom: 0, width: "100%"}}>
        <h5 style={{color: 'white', fontFamily: 'fantasy', display: 'flex', justifyContent: 'center'}}>© 2024 Joanne Chen. All rights reserved.</h5>
      </div>
    </>
  );
}

export default App;
