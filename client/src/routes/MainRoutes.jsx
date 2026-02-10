import React from 'react';
import { Routes, Route } from 'react-router-dom';

//CUSTOM IMPORT PAGES
import Home from '../pages/Home';

function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				Home
			</Route>
		</Routes>
	);
}

export default MainRoutes;
