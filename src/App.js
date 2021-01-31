import './App.css';
import {Route,Switch} from "react-router-dom"
import ContactListComponent from "./components/ContactListComponent";
import ContactDetailComponent from "./components/ContactDetailComponent"
import Error from "./components/Error"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ContactListComponent}/>
        <Route path='/contact' component={ContactDetailComponent}/>
        <Route component={Error}/>
        </Switch>
    </div>
  );
}

export default App;
