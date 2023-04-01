import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Routing from './Routing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <App /> */}
		<Routing />
	</React.StrictMode>
);
