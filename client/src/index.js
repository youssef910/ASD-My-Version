import { Grommet } from "grommet";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { grommet } from "grommet/themes";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
	<Grommet theme={grommet} plain>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Grommet>,
	document.getElementById("root")
);
