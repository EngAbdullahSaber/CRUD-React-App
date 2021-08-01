import React ,{Component} from 'react'

class CourseList extends  Component {
  
    state={
        isEdite :false
    }

    renderCourses =()=>{
        return (
            <li>
                <span>{this.props.details.name }</span>
                <button onClick={  () => {this.toggleState()}}>Edite Course</button>
                <button onClick={  () => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )     
    }


    toggleState = () => {
        let {isEdite} =this.state
        this.setState({
            isEdite: !isEdite
        })
    }


    updateCourseItem =(e)=>{
        e.preventDefault();
        this.props.editeCourse(this.props.index ,this.input.value)
        this.toggleState();
    }

    renderUpdateForm=()=>{
        return(
            <form onSubmit={this.updateCourseItem} >
            <input type="text" ref={(v) => {this.input =  v}}  defaultValue={this.props.details.name } />
            <button > Update Course</button>

        </form>
        )
    }
  render(){

    let isEdite = this.state.isEdite
    return (
        <React.Fragment>
        {
            isEdite?  this.renderUpdateForm()  :  this.renderCourses()
        }
        </React.Fragment>
        
      );
  }
 
}

export default CourseList;
