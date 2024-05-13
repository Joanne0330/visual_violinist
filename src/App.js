import PracticePage from "./pages/PracticePage";

const appStyle = {
  backgroundImage: 'url("/assets/images/background.jpg")',
  backgroundSize: '100% 100%',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  // overflowX: 'hidden'
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <h1 style={{color: 'white', backgroundColor: 'pink', fontFamily: 'fantasy', margin: 0, padding: '10px'}}>The Visual Violinist</h1>
      <PracticePage/>
    </div>
  );
}

export default App;
