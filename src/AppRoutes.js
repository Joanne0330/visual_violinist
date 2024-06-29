import {
  Routes,
  Route,
} from "react-router-dom";
import PracticePage from "./pages/PracticePage";
import HomePage from "./pages/HomePage"


const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage/>}/>
			<Route path="/learn/:id" element={<Learn/>}/>
			<Route path="/practice/:id" element={<PracticePage />} />
		</Routes>
	);
}

function Learn() {
	return <h2 style={{color: 'white'}}>Learn</h2>
}
  
export default AppRoutes;