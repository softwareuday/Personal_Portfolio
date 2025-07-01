import React from 'react';
import './App.css';

function App() {
  return (
    <div className="personal-portfolio">
      {/* Background image div */}
      <div className="background-image"></div>
      
      {/* Profile photo circle */}
      <div className="profile-photo-container">
        <div className="profile-photo"></div>
      </div>
      
      <div className="content-wrapper">
        <header>
          <h1>UDAY KOTHI</h1>
          <p>Software Engineer | Java FullStack Developer</p>
        </header>
        
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <section id="about">
          <h2>About Me</h2>
          <section id="about">
 
  <p>
    I'm Uday Kothi, a passionate and self-taught Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. 
    I also work with Java and Spring Boot for backend development and enjoy solving real-world problems using full-stack solutions.
  </p>
  <p>
    My learning journey has been driven by curiosity and hands-on project building — from interactive chatbots to personal finance tools. 
    I'm committed to writing clean, responsive, and accessible code, and I enjoy turning creative ideas into working products.
  </p>
 
  
</section>

        </section>
        
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Rule-Based-Chatbot</h3>
              <p>HTML, CSS, JavaScript</p>
              <p>Developed a simple and interactive rule-based chatbot using vanilla JavaScript, designed to simulate basic conversations by matching user
                 inputs with predefined responses.</p>
              <a href="#" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <h3>Tour_and_Travelling</h3>
              <p>HTML,CSS</p>
              <p>Hyderabad Tourism Explorer is a web page I developed to showcase the top tourist spots, local festivals, and holidays in Hyderabad. 
                It features visually rich modules on places like Charminar, Golconda Fort, and Ramoji Film City, along with a dedicated section for public holidays.
                 The project highlights my frontend development skills and passion for creating informative and user-friendly web experiences..</p>
              <a href="https://softwareuday.github.io/Tour_and_Travelling/tour.html" className="project-link">View Project</a>
            </div>
              <div className="project-card">
              <h3>Amazon_Clone</h3>
              <p>HTML,CSS</p>
              <p>Amazon Clone is a full-featured e-commerce web application I built to replicate the core functionality and design of Amazon. It includes product listings,
                 a responsive homepage, shopping cart, and user interface elements similar to the real platform. This project demonstrates my skills in frontend development, 
                 component-based design, and building interactive web apps with a clean, scalable structure.</p>
              <a href="https://softwareuday.github.io/amazon-clone/amazon.html" className="project-link">View Project</a>
             
            </div>
              <div className="project-card">
              <h3>Weather-Prediction-Web-Page</h3>
              <p>HTML,CSS,JavaScript</p>
              <p>Weather Forecast Web App is a responsive web page I developed to display real-time weather information using the OpenWeather API.
                 It allows users to search for any city and view live data including temperature, weather conditions, and humidity. This project highlights
                  my skills in API integration, data handling, and building interactive, user-friendly web interfaces.</p>
              <a href="https://softwareuday.github.io/Weather-Prediction-Web-Page/basic.html" className="project-link">View Project</a>
             
            </div>
          </div>
        </section>
        
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript (ES6+)</li>
                <li>Java</li>
                <li>HTML5,CSS3</li>
                
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>DOM Manupulation</li>
               
              </ul>
            </div>
             <div className="skill-category">
              <h3>Backend Development </h3>
              <ul>
               
                <li>Spring Boot</li>
                <li>RESTful APIs</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <ul>
               
                <li>MySQL</li>
                <li>MongoDB(basic)</li>
              
              </ul>
            </div>
            
          </div>
        </section>
        
        <section id="contact">
          <h2>Get In Touch</h2>
          <div className="contact-methods">
            <a href="mailto:kothiuday34@gmail.com" className="contact-link">Email Me</a>
            <a href="https://www.linkedin.com/in/uday-kothi-a91a27283?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BasFpF3LmSoiMSEwSym0TYw%3D%3D" className="contact-link">LinkedIn</a>
            <a href="https://github.com/softwareuday" className="contact-link">GitHub</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;