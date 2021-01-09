import React from 'react';
// Components and pages
import Home from './pages/Home';
// Global styles
import GlobalStyle from './components/GlobalStyles';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Home />
		</div>
	);
}

export default App;
