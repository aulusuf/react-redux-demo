import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
