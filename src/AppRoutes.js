import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PracticePage from "./pages/PracticePage";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/learn/:id" element={<Learn/>}/>
				<Route path="/practice/:id" element={<PracticePage />} />
			</Routes>
		</Router>
	);
}

function Home() {
  return <h2 style={{color: 'white'}}>Home</h2>;
}

function Learn() {
	return <h2 style={{color: 'white'}}>Learn</h2>
}
  
export default AppRoutes;