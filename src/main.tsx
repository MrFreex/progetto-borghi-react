import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

import "bootstrap/dist/css/bootstrap.min.css";

import { createTheme, ThemeProvider } from "@mui/material";

import { Container } from "react-bootstrap";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { createGlobalStyle } from "styled-components";
import { Story } from "./pages/Story";
import { Gallery } from "./pages/Gallery";
import { Book } from "./pages/Book";

const theme = createTheme({
	palette: {
		primary: {
      main: "#091929"
    }
	},
});



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<Home />} />
      <Route path="story" element={<Story />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="book" element={<Book />} />
			{/*
      <Route path='signup' element={<Signup />} />
      <Route path='app-info' element={<AppInfo />} />
      <Route path='verify' element={<Scanned />} />
      <Route path='panel'>
        <Route index element={<Panel />} />
        <Route path='events'>
          <Route index element={<Events />} />
          <Route path='edit/:eventId' element={<EditEvent />} />
        </Route>
      </Route>
      */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Navbar />
			{/* <Container> */}
			<RouterProvider router={router} />
			{/* </Container> */}
			{/* Footer */}
		</ThemeProvider>
	</React.StrictMode>
);
