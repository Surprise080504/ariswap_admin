import Login from "../views/Login/Login";

const routes = [
    {
        path: "/login",
        name: "Login",
        icon: "pe-7s-graph",
        layout: "/auth",
        component: Login,
    }
];

export default routes;
