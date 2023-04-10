import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import "./App.css";
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./components/Loading";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-dark-900">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
