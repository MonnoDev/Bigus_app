import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Projects from "../pages/Projects/Projects";
import NewProject from "../pages/NewProject/NewProject";
import Project from "../pages/Project/Project";
import EditProject from "../pages/EditProject/EditProject";

export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/";
export const MAIN_ROUTE = "/";
export const PROFILE_ROUTE = "/profile";
export const PROJECTS_ROUTE = "/projects";
export const NEW_PROJECT_ROUTE = `${PROJECTS_ROUTE}/new`;
export const PROJECT_ROUTE = `${PROJECTS_ROUTE}/:id`;
export const EDIT_PROJECT_ROUTE = `${PROJECT_ROUTE}/edit`;

export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: LOGIN_ROUTE,
      Component: Login,
    },
    {
      path: REGISTER_ROUTE,
      Component: Register,
    },
  ],
};

export const authenticatedRoutes = {
  Layout: AuthenticatedLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      Component: Main,
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile,
    },
    {
      path: PROJECTS_ROUTE,
      Component: Projects,
    },
    {
      path: NEW_PROJECT_ROUTE,
      Component: NewProject,
    },
    {
      path: PROJECT_ROUTE,
      Component: Project,
    },
    {
      path: EDIT_PROJECT_ROUTE,
      Component: EditProject,
    },
  ],
};

export const topbarNavigationItems = [
  { route: MAIN_ROUTE, title: "Home" },
  { route: PROJECTS_ROUTE, title: "Projects" },
];
