import './styles.css';
import AppRoutes from './AppRoutes';
import AppHeaderMenu from './AppHeaderMenu';

function App() {

  return (
    <>
      <AppHeaderMenu />
      <div className="wallPaper" style={{backgroundImage: 'url("/assets/images/background.jpg")'}}>
        <div className="contentContainer">
          <AppRoutes />
        </div>
      </div>
      <h5 className="appFooter">© 2024 Joanne Chen. All rights reserved.</h5>
    </>
  );
}

export default App;
