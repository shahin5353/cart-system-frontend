import React from "react";
import "./pages/AntOverwrite.css";
import "./components/components.css";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ModalMessage from "./modals/ModalMessage";
import Toasts from "./components/toasts/Toasts";
import { AppRoutes } from "../assets/constants/routes";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ErrorBoundary from "./components/misc/ErrorBoundary";

function App(props) {
  return (
    <ConnectedRouter history={props.history}>
      <ErrorBoundary>
        <div id="cover-spin"></div>
        <ModalMessage />
        <Toasts />
        <Switch>
          <PublicRoute
            exact
            restricted={true}
            path={AppRoutes.LOGIN}
            component={() => <LoginPage />}
          />
           <PublicRoute
            exact
            restricted={true}
            path={AppRoutes.REGISTER}
            component={() => <LoginPage />}
          />
          <PublicRoute
            exact
            path={AppRoutes.DEFAULT}
            component={() => <HomePage />}
          />
          {/* <PrivateRoute
            exact
            path={AppRoutes.CHECKOUT}
            component={() => <SaveBloodSamplesPage />}
          /> */}
          <PrivateRoute exact path="*" component={() => <NotFoundPage />} />
        </Switch>
      </ErrorBoundary>
    </ConnectedRouter>
  );
}

export default App;
