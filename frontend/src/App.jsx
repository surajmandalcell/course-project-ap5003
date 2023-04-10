import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import "./App.css";
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div class="min-h-screen bg-gray-100 flex justify-center items-center">
        <div class="bg-white p-12 rounded-lg shadow-md">
          <div class="flex flex-col items-center">
            <svg
              class="animate-spin h- w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                class="opacity-50"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 "
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container bg-dark-900">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
