import { BrowserRouter } from "react-router-dom";
import MainRouter from "./config/router";

function App() {
	const user = localStorage.getItem("token");

	return (
		<div>
			<BrowserRouter>
				<MainRouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
