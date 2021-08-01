import './App.css';
import React ,{Component} from 'react'
import CourseForm from './Componenets/CourseForm'
import CourseList from './Componenets/CourseList'
class App extends  Component {
  
  state ={
    courses :[
      {name :"html"},
      {name :"css"},
      {name :"js"},
      {name :"React"},
    ],
    current:''
  }

  //UpdateCourse
  updateCourse =(e) =>{
    this.setState({
      current :e.target.value
    })
  }

  //addCourse
  addCourse =(e) =>{
    e.preventDefault();
    let current= this.state.current;
    let courses =this.state.courses;
    courses.push({name :current});
    this.setState({
      courses,
      current:''

    })

  }

  //DelteCourse
  deleteCourse = (index) => {
    let courses =this.state.courses
    courses.splice(index , 1);
    this.setState({
      courses
    })
  }

  //EditeCourse
  editeCourse=(index ,value) =>{
    let courses =this.state.courses;
    let course = courses[index];
    course['name'] =value;
    this.setState({
      courses
    })
  }



  render(){
    const {courses} = this.state;
    const couseList = courses.map((course ,index) =>{
      return <CourseList details={course} key ={index} index={index} editeCourse ={this.editeCourse}  deleteCourse={this.deleteCourse}/>

    });
  return (
    <section className="App">
      <h2>Add Courses</h2>
      <CourseForm  current={this.state.current}  updateCourse={this.updateCourse} addCourse={this.addCourse}/>
      <ul>{couseList}</ul>
    </section>
  );
  }
}

export default App;
