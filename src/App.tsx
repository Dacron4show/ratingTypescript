import "./App.css";
import Design from "./Components/Design";
import Thanks from "./Components/Thanks";
import { appStore } from "./Store/appStore";

function App() {
  const { isSubmitted } = appStore();
  return <>{!isSubmitted ? <Design /> : <Thanks />}</>;
}

export default App;
