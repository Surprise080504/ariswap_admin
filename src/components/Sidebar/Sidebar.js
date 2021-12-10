import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Collapse,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Sidebar({ routes, image, background }) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the user collapse
  const [userCollapseState, setUserCollapseState] = React.useState(false);
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    setState(getCollapseStates(routes));
  }, []);
  // this creates the intial state of this component based on the collapse routes
  // that it gets through routes prop
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.submenus),
          ...getCollapseStates(prop.submenus),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/submenus/forms/RegularForms.jsx - route /regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].submenus)) {
        return true;
      } else if (location.pathname === routes[i].path) {
        return true;
      }
    }
    return false;
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (!prop.showInSideBar) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <Nav.Item
            className={getCollapseInitialState(prop.submenus) ? "active" : ""}
            as="li"
            key={key}
          >
            <Nav.Link
              className={state[prop.state] ? "collapsed" : ""}
              data-toggle="collapse"
              onClick={(e) => {
                e.preventDefault();
                setState({ ...state, ...st });
              }}
              aria-expanded={state[prop.state]}
            >
              <i className={prop.icon}></i>
              <p>
                {prop.name} <b className="caret"></b>
              </p>
            </Nav.Link>
            <Collapse in={state[prop.state]}>
              <div>
                <Nav as="ul">{createLinks(prop.submenus)}</Nav>
              </div>
            </Collapse>
          </Nav.Item>
        );
      }
      return (
        <Nav.Item
          className={activeRoute(prop.path)}
          key={key}
          as="li"
        >
          <Nav.Link to={prop.path} as={Link}>
            {prop.icon ? (
              <>
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </>
            ) : (
              <>
                <span className="sidebar-mini">{prop.mini}</span>
                <span className="sidebar-normal">{prop.name}</span>
              </>
            )}
          </Nav.Link>
        </Nav.Item>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  return (
    <>
      <div className="sidebar" data-color={background} data-image={image}>
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link
              className="simple-text logo-mini"
              to="/"
            >
              <div className="logo-img">
                <img
                  src={require("assets/img/logo.svg").default}
                  alt="react-logo"
                />
              </div>
            </Link>
            <Link
              className="simple-text logo-normal"
              to="/"
            >
              Ariswap NFT
            </Link>
          </div>
          {/* <div className="user">
            <div className="photo">
              <img
                alt="..."
                src={require("assets/img/default-avatar.png").default}
              ></img>
            </div>
            <div className="info">
              <a
                className={userCollapseState ? "collapsed" : ""}
                data-toggle="collapse"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  setUserCollapseState(!userCollapseState);
                }}
                aria-expanded={userCollapseState}
              >
                <span>
                  Tania Andrew <b className="caret"></b>
                </span>
              </a>
              <Collapse id="collapseExample" in={userCollapseState}>
                <div>
                  <Nav as="ul">
                    <li>
                      <a
                        className="profile-dropdown"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="sidebar-mini">MP</span>
                        <span className="sidebar-normal">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="profile-dropdown"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="sidebar-mini">EP</span>
                        <span className="sidebar-normal">Edit Profile</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="profile-dropdown"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="sidebar-mini">S</span>
                        <span className="sidebar-normal">Settings</span>
                      </a>
                    </li>
                  </Nav>
                </div>
              </Collapse>
            </div>
          </div> */}
          <Nav as="ul">{createLinks(routes)}</Nav>
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></div>
      </div>
    </>
  );
}

let linkPropTypes = {
  path: PropTypes.string,
  layout: PropTypes.string,
  name: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

Sidebar.defaultProps = {
  image: "",
  background: "black",
  routes: [],
};

Sidebar.propTypes = {
  image: PropTypes.string,
  background: PropTypes.oneOf([
    "black",
    "azure",
    "green",
    "orange",
    "red",
    "purple",
  ]),
  routes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        ...linkPropTypes,
        icon: PropTypes.string,
      }),
      PropTypes.shape({
        collapse: true,
        path: PropTypes.string,
        name: PropTypes.string,
        state: PropTypes.string,
        icon: PropTypes.string,
        submenus: PropTypes.shape({
          ...linkPropTypes,
          mini: PropTypes.string,
        }),
      }),
    ])
  ),
};

export default Sidebar;
