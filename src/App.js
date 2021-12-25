import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import {Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/skills' component={Skills} />
        <Route path='/home' component={Home} />
        

      </Switch>
    </div>
  );
}

export default App;
