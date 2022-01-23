import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import NavBar from "./pages/NavBar/NavBar";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import colors from "../src/utilities/colors";
const App = () => (
	<div className="container mx-auto">
		<NavBar />
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/register">
				<RegisterPage />
			</Route>
		</Switch>
	</div>
);

export default App;
