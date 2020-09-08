import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'

export default class IRouter extends React.Component{
  
  render() {
    return (
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" render={() =>
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons} />
              </Admin>
            }></Route>
          </Switch>
        </BrowserRouter>
      </App>
    )
  }

}