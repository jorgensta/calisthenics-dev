import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styles/components/App.css';
import App from './App';
import About from './items/About';
import Home from './items/Home';
import Training from './items/Training';
import FAQ from './items/FAQ';
import Instagram from './items/Instagram';
import Contact from './items/Contact';
import Footer from './Footer';
import backgroundImage from "../assets/bilde1.jpg";

var wrapperStyle = {
  backgroundImage: 'url(' + backgroundImage + ')',
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  backgroundColor: "black",
}

const AppRouter = () => (

    <BrowserRouter>
        <div className="wrapper" style={wrapperStyle}>
            <App />
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/about" component={About} />
                    <Route path="/training" component={Training} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/instagram" component={Instagram} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            <Footer />
        </div>
    </BrowserRouter>

)

export default AppRouter;
