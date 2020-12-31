import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class createStudentComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={
            fname:'',
            place:'',
            gender:'',
            email:'',
            password:''
        }
        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) =>{
        e.preventDefault();
        let student = {fname:this.state.fname, lname:this.state.lname, email:this.state.email};
        console.log('student =>' + JSON.stringify(student));
        
        StudentsService.createStudent(student).then(res =>{
            this.props.history.push('/user');
        });
    }

    changeFnameHandler = (event)=>{
        this.setState({fname: event.target.value});
    }

    changeLnameHandler = (event)=>{
        this.setState({lname:event.target.value});
    }

    changeEmailHandler = (event)=>{
        this.setState({email:event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name :</label>
                                        <input placeholder="first name" name="fname" className="form-control" 
                                           value={this.state.fname} onChange={this.changeFnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Gender :</label>
                                        <input placeholder="gender" name="gender" className="form-control" 
                                           value={this.state.lname} onChange={this.changeLnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Place :</label>
                                        <input placeholder="place" name="place" className="form-control" 
                                           value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id :</label>
                                        <input placeholder="email id" name="email" className="form-control" 
                                           value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Password :</label>
                                        <input placeholder="password" name="password" className="form-control" 
                                           value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>

                            </div>
                        </div>    

                    </div>    
                </div> 
            </div>
        );
    }
}

export default createStudentComponent;