import React from 'react'
import Home from './components/Home';
import CourseOne from './Pages/CourseOne';
import CourseTwo from './Pages/CourseTwo';
import CourseThree from './Pages/CourseThree'
import CourseFour from './Pages/CourseFour'
import CourseFive from "./Pages/CourseFive"
import CourseSix from './Pages/CourseSix'
import CourseSeven from './Pages/CourseSeven'
import CourseNine from './Pages/CourseNine';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import CourseCard from './Pages/CourseCard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route exact path='/'Component={Home}/>
      <Route exact path='/course-one'Component={CourseOne}/>
      <Route exact path='/course-two'Component={CourseTwo}/>
      <Route exact path='/course-three'Component={CourseThree}/>
      <Route exact path='/course-four'Component={CourseFour}/>
      <Route exact path='/course-five'Component={CourseFive}/>
      <Route exact path='/course-six' Component={CourseSix}/>
      <Route exact path='/course-seven'Component={CourseSeven}/>
      <Route exact path='/course-nine' Component={CourseNine}/>
      <Route exact path='/register'Component={Register}/>
      <Route exact path='/login' Component={Login}/>
      <Route path="/course/:courseId" component={CourseCard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
