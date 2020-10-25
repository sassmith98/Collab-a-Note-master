import React from "react";
import HomePage from "./view/pages/HomePage";
import NotePage from "./view/pages/NotePage";
import DashBoardPage from "./view/pages/DashBoardPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from "./view/components/shared/NavigationBar";
import DashBoardNotesPage from "./view/components/DashboardPage/DashBoardNotesPage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";


function App() {

  return (
    <AuthProvider>
      <Router>
        <PrivateRoute extact path="/" component={HomePage} />
        <Route exact path="/userlogin" component={UserLogin} />
        <Route exact path="/usersignup" component={UserSignUp} />
          <NavigationBar/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/auth" component={HomePage}/>
            <Route path="/note" component={NotePage}/>
            <Route path="/dashboard" exact component={DashBoardPage}/>
            <Route path="/dashboard/course" component={DashBoardNotesPage}/>
          </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;
