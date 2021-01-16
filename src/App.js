import React from 'react';
// Components and pages
import Home from './pages/Home';
// Global styles
import GlobalStyle from './components/GlobalStyles';
// Router
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Route path={['/', '/game/:id']}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
