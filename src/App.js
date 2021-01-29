import './App.css';

import Header from "./components/header"
import Links from "./components/Links"
import Slider from "./components/Slider"
import BodyContent from "./components/BodyContent"
import FooterComponent from "./components/Footer"
import Copyright from "./components/Copyright"

function App() {
  return (
        <div>
            <Header />
            <Links />
            <Slider />
            <BodyContent />
            <FooterComponent />
            <Copyright />
        </div>
  );
}

export default App;
