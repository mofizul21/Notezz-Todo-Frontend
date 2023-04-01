import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UsersPage from './pages/UsersPage';
import ActiveTodos from './pages/ActiveTodos';
import CompeletedTodos from './pages/CompletedTodos';

const Routing = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signUp" element={<SignUp />} />
					<Route path="/active" element={ <ActiveTodos /> } />
					<Route path="/completed" element={ <CompeletedTodos /> } />
					<Route path="/users" element={ <UsersPage /> } />
					{/* Default Page Active Todos */}
					<Route path="/" element={ <ActiveTodos /> } />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Routing;
