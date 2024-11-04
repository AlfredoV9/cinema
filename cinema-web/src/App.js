import { useEffect } from "react";
import Routering from "./utilities/Routering";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  useEffect(() => {
    document.title = "CineMood";
  }, []);

  return <Routering />;
}

export default App;