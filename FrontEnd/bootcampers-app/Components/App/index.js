import "./App.css";
import UsersPage from "../UsersPage";
import NewUserForm from "../NewUserForm";
import LandingPage from "../LandingPage";

function App() {
	return (
		<div className="App">
			<LandingPage />
			<NewUserForm />
			<UsersPage />
		</div>
	);
}

export default App;
