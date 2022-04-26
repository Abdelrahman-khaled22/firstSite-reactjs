import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
		
				<Route path="/" exact element={<Home/>} />
				<Route path="/signup" exact element={<SignUp/>} />
				<Route path="/pricing" exact element={<Pricing/>} />

				<Route path="*" element={<Home/>}></Route>

			</Routes>
			<Footer />
		</Router>
	);
}

export default App;