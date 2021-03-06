
import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class StudentlistComponents extends Component {
    
    constructor(props){
        super(props)
        
        this.state={
            students:[]
        }
        this.addStudent=this.addStudent.bind(this);
        this.editStudent=this.editStudent.bind(this);
        this.deleteStudent=this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentsService.deleteStudent(id).then(res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }

    viewStudent(id){
        this.props.history.push(`/viewstudent/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/updatestudents/${id}`);
    }
    
    componentDidMount(){
        StudentsService.getStudents().then((res) =>{
            this.setState({students:res.data});
        });
    }
    
    addStudent(){
        this.props.history.push('/addstudents')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Student List</h2>                
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Gender</th>
                                <th>Location</th>
                                <th>Email Id</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.place}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.email}</td>
                                        <td>{student.password}</td>
                                        <td>
                                            <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default StudentlistComponents;