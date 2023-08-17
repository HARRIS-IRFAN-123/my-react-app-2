import React from 'react'
import client_1 from '../Images/client_1.jpg'
import client_2 from '../Images/client_2.jpg'
import mobile from '../Images/mobile.jpg'
import "./CourseEight.css"
const CourseEight = () => {
    return (
        <div className='container-fluid p-4 text-center'>
            <h1>
                Mobile Development
        <img src={mobile} className='mobile' alt='mobile'/>
            </h1>
           
            <span>*** <b>4.1 stars</b> 118 ratings</span>
            <p>Mobile development is the process of creating mobile apps. It includes the creation of the user interface, the functionality, and the back-end code that powers the app. Mobile apps can be developed for a variety of platforms, including Android, iOS, and Windows Phone.</p>
            <ul className='first-url'>
            <li>4 months</li>
            </ul>
            <ul className='second-url'>
            <li>Self Paced</li>
            Progress at your own speed
            </ul>
            <ul className='third-url'>
            <li>Free</li> 
            Optional upgrade available
            </ul>
            <h2>There is one session available :</h2>
            <p>31,770 already enrolled! After a course session ends it will be archeived</p>
            <div className='enroll-box'>
              <button className='button' type='submit'>Enroll</button>
            </div>
            <nav>
            <ul className='nav-list'>
            <li>About</li>
             <li>What you'll learn</li>
            <li>Instructors</li>
            <li>Ways to Enroll</li>
            </ul>
            </nav>
            <h3>About this Course</h3>
            <p>This course will teach you the fundamentals of mobile development. You will learn how to create mobile apps for Android and iOS using the Java and Swift programming languages. You will also learn about the different aspects of mobile development, such as user interface design, app testing, and app deployment.</p>
            <h2>What will you learn</h2>
            <ul className='learn-list'>
            <li>Create mobile apps for Android and iOS using Java and Swift</li>
            <li>Understand the different aspects of mobile development</li>
            <li>Design user interfaces that are user-friendly and accessible</li>
            <li>Explain how blockchains work</li>
            <li>Discuss the different applications of blockchain technology</li>
            </ul>
            <h3>About The Instructors</h3>
        <div className='card-container'>
        <div className='card'>
        <img src={client_1} alt='Sandip Saha Joy'/>
        <h1>Sandip Saha Joy</h1>
        <p>Cognitive Data Scientist. IBM Developer Skills Network</p>
        </div>
        <div className='card'>
        <img src={client_2} alt='Steve Ryan'/>
        <h2>Steve Ryan</h2>
        <p>Instructor & Content Developer . Skill-UP Technologies</p>
        </div>
        </div>
        </div>
    )
}

export default CourseEight
