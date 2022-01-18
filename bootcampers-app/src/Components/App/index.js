import UsersPage from "../UsersPage";
import NewUserForm from "../NewUserForm";
import LandingPage from "../LandingPage";
import "../../App.css";

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
