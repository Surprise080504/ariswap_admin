import React, { Component } from 'react';
import routes from './routes';
import { PrivateRoute } from './privateRoute';
import { Route, Switch } from "react-router-dom";
import NotFound from "views/NotFound/NotFound";
import { ENV } from './config/config';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {
            routes.map((route, index) => {
              if (route.path) {
                return (
                  <PrivateRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    access={true}
                    component={props => (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    )}
                  />
                )
              }
              else {
                return (
                  route.submenus.map((subroute, subkey) => {
                    if (subroute.path) {
                      return (
                        <PrivateRoute
                          key={index + subkey}
                          path={subroute.path}
                          exact={subroute.exact}
                          access={true}
                          component={props => (
                            <subroute.layout {...props}>
                              <subroute.component {...props} />
                            </subroute.layout>
                          )}
                        />
                      )
                    }
                    else {
                      return (
                        subroute.submenus.map((nestedsubroute, nestedsubkey) => {
                          return (
                            <PrivateRoute
                              key={index + nestedsubkey}
                              path={nestedsubroute.path}
                              exact={nestedsubroute.exact}
                              access={true}
                              component={props => (
                                <nestedsubroute.layout {...props}>
                                  <nestedsubroute.component {...props} />
                                </nestedsubroute.layout>
                              )}
                            />
                          )
                        })
                      )
                    }
                  })
                )
              }
            })
          }
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;