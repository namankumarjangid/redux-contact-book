import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Contacts from "./components/elements/Contacts";
import AddContact from "./components/elements/AddContact";
import EditContact from "./components/elements/EditContact";
import { Provider } from "react-redux";
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contacts/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
