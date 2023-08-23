import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LastNameContext from "./contexts/LastNameContext";
/**
 * -----------------------------------------
 * STEP 2. USE A PROVIDER WITH A VALUE DATA
 * -----------------------------------------
 */
ReactDOM.createRoot(document.querySelector("#root")).render(
  <LastNameContext.Provider value="Soro">
    <App />
  </LastNameContext.Provider>
);
