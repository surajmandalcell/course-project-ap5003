import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import './App.css';
import { auth } from './services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
    const [user, loading, error] = useAuthState(auth);

    if (loading){
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
    );
}

export default App;
