import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import PracticePage from "./pages/PracticePage";
import FlashCardPage from "./pages/FlashCardPage";


const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage/>}/>
			<Route exact path="/flash_card" element={<FlashCardPage/>}/>
			<Route path="/learn/:id" element={<LearnPage/>}/>
			<Route path="/practice/:id" element={<PracticePage />} />
		</Routes>
	);
}
  
export default AppRoutes;