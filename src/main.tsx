import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

import "bootstrap/dist/css/bootstrap.min.css";

import { Avatar, createTheme, Stack, ThemeProvider } from "@mui/material";

import { Container } from "react-bootstrap";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import styled, { createGlobalStyle } from "styled-components";
import { Story } from "./pages/Story";
import { Gallery } from "./pages/Gallery";
import { Book } from "./pages/Book";
import { BookConfirm } from "./pages/BookConfirm";

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
	  <Route path="bookconfirm" element={<BookConfirm />} />
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

const Footer = styled.footer`
	display: flex;
	justify-content: center;
	flex-direction: column;
	row-gap: 1ch;

	min-heigth: 50px;
	padding: 20px;
	background: #091929;
	margin-top: 20px;
	color: white;
	& > * {
		margin: auto;
	}
`

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Navbar />
			{/* <Container> */}
			<RouterProvider router={router} />
			{/* </Container> */}
			{/* Footer */}
			<Footer>
				<div>
					Copyright 2023 Filippo Lissandrin
				</div>
				<Stack spacing={1} direction="row">
					<Avatar src="https://cdn.discordapp.com/avatars/338319779641294848/34a8c45d009d9ef39501d4fb748f932f.webp?size=160"/>
					<div style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center" }}><a href="https://github.com/MrFreex">MrFreex</a> on GitHub</div>
				</Stack>
			</Footer>
		</ThemeProvider>
	</React.StrictMode>
);
