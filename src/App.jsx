import "./App.css";
import { GlobalProvider } from "./contexts/GlobalContext";
import AllRouters from "./Router";

function App() {
  return (
    <>
      <GlobalProvider>
        <AllRouters />
      </GlobalProvider>
    </>
  );
}

export default App;
