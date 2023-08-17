import React,{useState} from 'react'
import engineering from '../Images/engineering.jpeg'
import client_1 from '../Images/client_1.jpg';
import client_2 from '../Images/client_2.jpg';
import bank from '../Images/bank.png'
import person from "../Images/person.png"
import check from '../Images/check.png'
import certificate from '../Images/certificate.png'
import chart from '../Images/chart.png'
import "./CourseFour.css"
const CourseOne = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [courseTopic, setCourseTopic] = useState('Engineering');

    

    const handleNavLinkClick = (sectionId) => {
      if (activeSection === sectionId) {
        setActiveSection(null); // Hide the content if the same button is clicked again
      } else {
        setActiveSection(sectionId); // Show the content if a different button is clicked
      }
    };
    const footerImages = {
      'Engineering': engineering,
      // Add more images for other topics...
    };
    return (
        <>
        <header>
            <h4>Data Engineering In 2023</h4>
        </header>
        <div className='container-fluid p-4 text-center'>
            <h1>
            Data Engineering
        <img src={engineering} className='engineering' alt='engineering'/>
            </h1>
            <h5>Data engineering is the discipline of designing, developing, and deploying the architecture and infrastructure necessary to collect, store, process, and analyze data. Data engineers build the systems that make data accessible to data scientists and analysts, so that they can use it to solve business problems.</h5>
            <ul className='first-url'>
            <li>4 months</li>
            </ul>
            <ul className='second-url'>
            <li>Instructor</li>
            Mohsin & Ali Raza
            </ul>
            <div className='enroll-box'>
              <button className='button' type='submit'>Enroll</button>
            </div>
            <nav>
          <ul className='nav-list'>
            <li><button onClick={() => handleNavLinkClick('about')}>About</button></li>
            <li><button onClick={() => handleNavLinkClick('learn')}>What you'll learn</button></li>
            <li><button onClick={() => handleNavLinkClick('instructors')}>Instructors</button></li>
            <li><button onClick={() => handleNavLinkClick('enroll')}>Ways to Enroll</button></li>
          </ul>
        </nav>
        
          <div className='course-section'style={{ display: activeSection === 'about' ? 'block' : 'none' }}>
            <h3>About this Course</h3>
            <p>This course will teach you the fundamentals of data analysis. You will learn how to collect, clean, analyze, and interpret data using a variety of tools and techniques. You will also learn about the different types of data analysis and how to choose the right approach for your needs.</p>
          </div>
       
                
          <div className='course-section' style={{ display: activeSection === 'learn' ? 'block' : 'none' }}>
            <h2>What will you learn</h2>
            <ul className='learn-list'>
              <li>Collect and clean data using a variety of tools and techniques</li>
              <li>Analyze data using statistical methods</li>
              <li>Build data visualizations</li>
              <li>Communicate your findings to stakeholders</li>
            </ul>
          </div>
        
      
          <div className='course-section'style={{ display: activeSection === 'instructors' ? 'block' : 'none' }}>
            <h2>Instructors</h2>
            <div className='instructors-images'>
              <img src={client_1} alt='Instructor 1' />
              <img src={client_2} alt='Instructor 2' />
            </div>
          </div>
       
        
          <div className='course-section'style={{ display: activeSection === 'enroll' ? 'block' : 'none' }}>
            <h2>Ways to Enroll</h2>
            <p>Choose from the following enrollment options:</p>
            <ul className='learn-list'>
              <li>Option 1: Collect and clean data using a variety of tools and techniques</li>
              <li>Option 2: Analyze data using statistical methods</li>
              <li>Option 3: Build data visualizations</li>
              <li>Option 4: Communicate your findings to stakeholders</li>
            </ul>
          </div>
       
        </div>
        <h3>How Training Works</h3>
        <div className='Descriptions-container'>
  <div className='Description-card'>
    <div className='Description'>
     
      <img src={bank} alt="Description 1" />
      <h5>Learn from a structured curriculum</h5>
      <p>Build up your knowledge step-by-step through a course structure with the right balance of detail and depth. Learn the fundamentals and master the advanced concepts in an ever-developing industry.

</p>
    </div>
  </div>
  <div className='Description-card'>
    <div className='Description'>
      <img src={person} alt="Description 2" />
      <p>Bring theory into practice</p>
      <p>Practice each new skill you gain with more than 350 real-world exercises. Combine and integrate your skills creatively to solve the larger projects at the end of each topic.</p>
    </div>
  </div>
  <div className='Description-card'>
    <div className='Description'>
      <img src={check} alt="Description 3" />
      <p>Get personal attention</p>
      <p>The experts who develop the course are a message away to clarify concepts and answer questions. Positive and encouraging, they know what they’re talking about and provide clear in-depth explanations.</p>
    </div>
  </div>
  <div className='Description-card'>
    <div className='Description'>
      <img src={certificate} alt="Description 4" />
      <p>Earn verifiable certificates</p>
      <p>Demonstrate your expertise to your professional community by showcasing the major data science milestones you’ve reached and the most relevant projects you’ve completed.</p>
    </div>
  </div>
  <div className='Description-card'>
    <div className='Description'>
      <img src={chart} alt="Description 5" />
      <p>Secure a role in data science</p>
      <p>Each part of the course is structured so it can be used for reference later. You can look up any functions, techniques, or examples – to use in your daily work or simply as a refresher.</p>
    </div>
  </div>
  <div className='Description-card'>
    <div className='Description'>
      <img src={person} alt="Description 6" />
      <p>Resources</p>
      <p>Each part of the course is structured so it can be used for reference later. You can look up any functions, techniques, or examples – to use in your daily work or simply as a refresher.</p>
    </div>
  </div>
</div>
<div className='footer-container'>
        <div className='footer-content'>
          {/* Content about the course topic */}
          <h4>{courseTopic}</h4>
          <p>
          Break Into  Blockchain
          <p>Learn How to build smart contracts</p>
          <p>Learn Solidity for making smart contracts</p>
          <p>This easy-to-digest course gives you proper guidance and real-world practical examples.
</p>
          </p>
        </div>
        <div className='footer-image'>
          <img src={footerImages[courseTopic]} alt={`Footer for ${courseTopic}`} />
        </div>
      </div>
        </>
    )
}

export default CourseOne
