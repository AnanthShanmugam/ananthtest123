import "./App.css";
import Teams from "./components/Teams";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
        <Router>
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route path="/teams/:id" component={Users} />
        </Switch>
      </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
