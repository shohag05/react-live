import "./App.css";
import { GlobalProvider } from "./contexts/GlobalContext";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </>
  );
}

export default App;
