import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "../styles/SiteDarkModeStyle.css";
import "../styles/SiteLightModeStyle.css";
import "../styles/GeneralSiteStyle.css";
import Navbar from "../components/Navbar/Navbar";

function Routering() {
  return (
    <Router>
      <ScrollToTop />

      <div className="layout-container">
        <div className="navbar-container">
            <Navbar/>
        </div>

        <div className="content-container">
          <Switch>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routering;