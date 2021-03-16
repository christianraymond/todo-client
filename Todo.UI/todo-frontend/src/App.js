import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Todo, NavBar, Register, Landing } from "./components";

function App() {
  return (
    <Router>
        <NavBar/>
      <div>
        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
