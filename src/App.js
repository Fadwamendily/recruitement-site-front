import React from 'react';
import Landing from './pages/Landing';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/boards/home/Home';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/boards/adminboard/Admin';
import Condidat from './pages/boards/condidateboard/Condidat';
import Employer from './pages/boards/employerboard/Employer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>



          <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
          <PrivateRoute path="/condidat" roles={["condidat"]} component={Condidat} />
          <PrivateRoute path="/entreprise" roles={["entreprise"]} component={Employer} />
          <PublicRoute path="/login" restricted={true} component={Login} />
          <PublicRoute path="/register" restricted={true} component={Register} />

          {/* <PublicRoute path="/" restricted={false} component={Landing} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
