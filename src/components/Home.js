import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import CourseCard from '../Pages/CourseCard';
import search from '../Images/search.jpg'
import development from '../Images/development.jpg'
import science from '../Images/science.jpg'
import engineering from '../Images/engineering.jpeg'
import machine from '../Images/machine.jpg'
import Devops from '../Images/Devops.jpg'
import Blockchain from '../Images/Blockchain.jpg'
import mobile from '../Images/mobile.jpg'
import scan from '../Images/scan.png'
import learn from '../Images/learn.png'

const Home = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestedCourses, setSuggestedCourses] = useState([]);
  const navigate = useNavigate();
  const allCourses = [
    'Data Science',
    'Data Analysis',
    'Full Stack Development',
    'Data Engineering',
    'Machine Learning',
    'Devops',
    'Blockchain',
    'Mobile Development',
  ];

  useEffect(() => {
    setIsHomePage(true);
  }, []); 
  useEffect(() => {
    // Filter the suggested courses based on the search value
    const filteredCourses = allCourses.filter(course =>
      course.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestedCourses(filteredCourses);
  }, [searchValue]);


  const handleSearch = () => {
    const matchingCourse = allCourses.find(
      course => course.toLowerCase() === searchValue.toLowerCase()
    );

    if (matchingCourse) {
      alert(`Course found: ${matchingCourse}`);
      // Redirect to the corresponding course page using navigate()
      // Example: navigate(`/course-${matchingCourse}`);
    } else {
      alert('No course found');
    }


    // Redirect the user to the appropriate course page based on the search value
    // You can use a switch statement or an if-else block to check the search value and redirect the user to the appropriate course page
    switch (searchValue.toLowerCase()) {
      case "data analysis":
        navigate("/course-one");
        break;
      case "full stack development":
        navigate("/course-two");
        break;
      case "data science":
        navigate("/course-three");
        break;
      case "data engineering":
        navigate("/course-four");
        break;
      case "machine learning":
        navigate("/course-five");
        break;
      case "devops":
        navigate("/course-six");
        break;
        case "blockchain":
        navigate("/course-seven");
        break;
        case "mobile development":
        navigate("/course-nine");
        break;  
      default:
        // Redirect to a default page or show an error message if the search value does not match any course
        break;
    }
  }
  
  

  return (
    <>
      <div className={`background-image ${isHomePage ? 'active' : ''}`}>
        <div className='background-image'>
          <div className="header-content">
            <h1>Fuel your ambition</h1>
            <div className="search-container">
              <input type="text" placeholder="Search our 4000+ courses" onChange={e => setSearchValue(e.target.value)}
          list="course-suggestions"  />
          <datalist id="course-suggestions">
          {suggestedCourses.map((course, index) => (
            <option key={index} value={course} />
          ))}
        </datalist> 
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="badge">
            </div>
          </div>
          <img src={scan} alt="Background" />
        </div>
      </div>
      <h2>Explore All Top courses</h2>
      <div className="course-cards-container">
      <CourseCard
            title="Data Science"
            description="Data science is a field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from data. Data scientists use their skills to collect, clean, analyze, and interpret data to solve real-world problems."
            image={science}
            to = "/course-three"
            
          />
          <CourseCard
            title="Data Analysis"
            description="Data analysis is the process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, in different business, science, and social science domains."
            image={search}
            to = '/course-one'
          />
          <CourseCard
          title="Data Engineering"
          description="Data engineering is the discipline of designing, developing, and deploying the architecture and infrastructure necessary to collect, store, process, and analyze data. Data engineers build the systems that make data accessible to data scientists and analysts, so that they can use it to solve business problems."
          image={engineering}
          to = "/course-four"
          />
          <CourseCard
          title="Machine Learning"
          description="Machine learning and deep learning are two of the most powerful tools in the field of artificial intelligence. Machine learning algorithms can learn from data and make predictions, while deep learning algorithms can learn to recognize patterns and make decisions in a way that is similar to how humans do."
          image={machine}
          to = "/course-five"
          />
          <CourseCard
          title="Devops"
          description="DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high quality. DevOps aims at establishing a culture and environment where building, testing, and releasing software can happen rapidly, frequently, and more reliably"
          image={Devops}
          to = "/course-six"
          />
          <CourseCard
          title="Full Stack Development"
          description="Full stack development is a software development approach in which a developer works on both the front-end and back-end of a web application. This means that a full stack developer is responsible for both the user interface (UI) and the underlying logic of the application."
          image={development}
          to = '/course-two'
          />
          <CourseCard
          title="BlockChain"
          description="Blockchain is a distributed ledger technology that allows for secure, transparent, and tamper-proof transactions. It is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system."

          image={Blockchain}
          to = '/course-seven'

          />
          <CourseCard 
          title="Mobile Development"
          description="Mobile development is the process of creating mobile apps. It includes the creation of the user interface, the functionality, and the back-end code that powers the app. Mobile apps can be developed for a variety of platforms, including Android, iOS, and Windows Phone."
          image={mobile}
          to = '/course-nine'
          />


      </div>
      <div className='benefits'>
      <div className='benefits-content'>
        <h3>Learn And Grow</h3>
        <p>You can grow by follow the following:-</p>
        <h3>Experience</h3>
        <p>Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</p>
        <h3>Practice</h3>
        <p>Demonstrating your knowledge is a critical part of learning. Our courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
        <h3>Apply</h3>
        <p>Learning on our platforms transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.</p>
      </div>
      <img src={learn} alt='learn'/>
        </div>
    </>
  );
};

export default Home;
