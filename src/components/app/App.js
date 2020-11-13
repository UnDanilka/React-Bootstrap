import './App.css';
import Header from '../header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Contacts from '../../pages/contacts/Contacts';
import Blog from '../../pages/blog/Blog';


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'
                        component={Home}/>
                    <Route exact path='/about'
                        component={About}/>
                    <Route exact path='/contacts'
                        component={Contacts}/>
                    <Route exact path='/blog'
                        component={Blog}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
