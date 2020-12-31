import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class ViewStudentComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student:{}
        }
    }

    componentDidMount(){
        StudentsService.getStudentById(this.state.id).then(res =>{
            this.setState({student: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                    <div className="card col-md-6 offset-md-3 ">
                        <h3 className="text-center">View Student Details</h3>
                        <div className="card-body">
                                <div className="row">
                                    <label> First Name :</label>
                                    <div>{this.state.student.fname}</div>
                                </div>
                                <div className="row">
                                    <label> Last Name :</label>
                                    <div>{this.state.student.lname}</div>
                                </div>
                                <div className="row">
                                    <label> Email Id :</label>
                                    <div>{this.state.student.email}</div>
                                </div>
                        </div>
                    </div>    
            </div>    
        );
    }
}



export default ViewStudentComponent;                