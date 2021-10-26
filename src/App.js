import "./App.css";
import Navbar from "./components/Page Component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	NewArrival,
	ProductList,
} from "./components/Page Component/ProductList";
import { ProductDetails } from "./components/Page Component/ProductDetails";
import { Cart } from "./components/Page Component/Cart";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/product/:productId" exact component={ProductDetails} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/newArrival" exact component={NewArrival} />
					<Route>404 Route Not found </Route>
				</Switch>
			</Router>
		</div>
	);
	///////pushed to github and had fun
}

export default App;
