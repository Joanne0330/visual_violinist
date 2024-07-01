import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import PracticePage from "./pages/PracticePage";


const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage/>}/>
			<Route path="/learn/:id" element={<LearnPage/>}/>
			<Route path="/practice/:id" element={<PracticePage />} />
		</Routes>
	);
}
  
export default AppRoutes;