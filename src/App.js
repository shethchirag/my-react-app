import { useState } from "react";
import "./App.css";
import About from "./component/About";
import NavBar from "./component/NavBar";
import TextForm from "./component/Textform";
import Alert from "./component/alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#080b66";
      showAlert("dark mode is enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#3439cd12";
      showAlert("light mode is enable", "success");
    }
  };
  return (
    <Router>
      <div>
        <NavBar
          title="TextUtils"
          home="Home"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              mode={mode}
              heading="Enter The Text to Analysis"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
