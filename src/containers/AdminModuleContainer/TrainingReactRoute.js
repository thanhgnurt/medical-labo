import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  Prompt,
  useRouteMatch,
} from "react-router-dom";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {
  let { url, path } = useRouteMatch();
  const [isAuthenticated, setCount] = useState(false);
  const login = (from, history) => {
    history.replace(from);
    setCount(true);
  };

  const signout = (history) => {
    history.push(`${url}/`);
    setCount(false);
  };
  return (
    <Router>
      <div>
        <AuthButton isAuthenticated={isAuthenticated} signout={signout} />

        <ul>
          <li>
            <Link to={`${url}/public`}>Public Page</Link>
          </li>
          <li>
            <Link to={`${url}/protected`}>Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${path}/public`}>
            <PublicPage />
          </Route>
          <Route path={`${path}/login`}>
            <LoginPage login={login} />
          </Route>
          <PrivateRoute url={url} path={`${path}/protected`} isAuthenticated={isAuthenticated}>
            <PreventingTransitionsExample />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton(props) {
  let history = useHistory();
  let signout = () => {
    props.signout(history);
  };

  return props.isAuthenticated ? (
    <p>
      Welcome! <button onClick={signout}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children,url, isAuthenticated, ...rest }) {
    

    console.log(url);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${url}/login`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

function LoginPage(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    props.login(from, history);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function PreventingTransitionsExample() {
  let { url, path } = useRouteMatch();
  console.log(url);
  

  return (
    <Router>
      <ul>
        <li>
          <Link to={`${url}/`}>Form</Link>
        </li>
        <li>
          <Link to={`${url}/one`}>One</Link>
        </li>
        <li>
          <Link to={`${url}/two`}>Two</Link>
        </li>
      </ul>

      <Switch>
        <Route path={path} exact render={() => <BlockingForm />} />
        <Route path={`${path}/one`} children={<h3>One</h3>} />
        <Route path={`${path}/two`} children={<h3>Two</h3>} />
      </Switch>
    </Router>
  );
}

function BlockingForm() {
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <Prompt
        when={isBlocking}
        message={(location) =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />

      <p>
        Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
      </p>

      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={(event) => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  );
}
