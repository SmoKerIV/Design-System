import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/Layout";
import Menu from "./pages/Menu";
import Bcrumbs from "./pages/Bcrumbs";
import Tab from "./pages/Tab";
import Input from "./pages/Input";
import RadionChecks from "./pages/RadionChecks";
import Form from "./pages/Form";
import Button from "./pages/Button";
import Alert from "./pages/Alert";
import List from "./pages/List";
import Table from "./pages/Table";
import Modal from "./pages/Modal";
import RowCol from "./pages/RowCol";
import DivideSpace from "./pages/DividerSpace";
import CardC from "./pages/CardC";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/breadcrumbs",
    element: <Bcrumbs />,
  },
  {
    path: "/tabs",
    element: <Tab />,
  },
  {
    path: "/Input",
    element: <Input />,
  },
  {
    path: "/rnc",
    element: <RadionChecks />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  {
    path: "/Buttons",
    element: <Button />,
  },
  {
    path: "/Alerts",
    element: <Alert />,
  },
  {
    path: "/Lists",
    element: <List />,
  },
  {
    path: "/Table",
    element: <Table />,
  },
  {
    path: "/Modal",
    element: <Modal />,
  },
  {
    path: "/RowsAndCols",
    element: <RowCol />,
  },
  {
    path: "/DividerSpace",
    element: <DivideSpace />,
  },
  {
    path: "/Layout",
    element: <LayoutPage />,
  },
  {
    path: "/Cards",
    element: <CardC />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
