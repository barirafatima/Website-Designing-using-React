import React from 'react';
import './style/App.css'; // Import global styles
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
function App() {
return (
<div>
<Navbar />
<LandingPage />
</div>
);
}
export default App;