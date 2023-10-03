import { useEffect, useState } from "react";
import Home from "./Views/home";
import Loader from "./Helpers/Loader/loader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  return <>{loading ? <Loader /> : <Home />}</>;
}

export default App;
