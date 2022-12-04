import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import { useEffect } from "react";
import { getUserAuth } from "../action";
import { connect } from "react-redux";
import Notifications from "../components/notification/Notifications.js"
import Jobs from "../components/Jobs/Jobs.js"
function App(props) {
	useEffect(() => {
		props.getUserAuth();
	}, []);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />

					<Route exact path="/notifications" component={Notifications}>
					<Route  path="/jobs" component={Jobs}></Route>

					</Route>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
