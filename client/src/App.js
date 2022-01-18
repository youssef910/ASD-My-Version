import { Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";

const App = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>
		<Route path="/about/this/site">
			<About />
		</Route>
		<Route path="/register">
			<RegisterPage />
		</Route>
	</Switch>
);

export default App;
