import React from 'react';
import '../style/Navbar.css'; 
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo"><img src="logo.png"/></div>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link1"><img className="e" src="explore.png"/>Explore</a></li>
<li><a href="#" className="navbar-link2"><img className= "c" src="Screenshot 2024-11-27 142011.png"/>Create</a></li>
<li><a href="#" className="navbar-link3"><img className="i" src="inspire.png"/>Inspire</a></li>
<li><a href="#" className="navbar-link4"><img className="b" src="bam.png"/>Become a memeber</a></li>
</ul>
</nav>
);
}
export default Navbar;