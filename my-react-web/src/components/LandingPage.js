import React from 'react';
import '../style/LandingPage.css'; // Import CSS file
function LandingPage() {
return (

<div className="landing-container">
<img class="pic" src="Screenshot 2024-11-27 144002.png"/>
<h1 className="landing-title"> </h1>
<img class="pic2" src="Screenshot 2024-11-27 145808.png"/> 
<p className="landing-subtitle">
</p>
<form className="form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="landing-button">Submit</button>
        </form>
        <footer className="landing-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
</div>

);
}
export default LandingPage;