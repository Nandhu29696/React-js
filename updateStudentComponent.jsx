import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class updateStudentComponent extends Component {
     
    constructor(props){
        super(props)
        
        this.state={
            id: this.props.match.params.id,
            fname:'',
            lname:'',
            email:'' 
        }
        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    updateStudent = (e) =>{
        e.preventDefault();
        let student = {fname:this.state.fname, lname:this.state.lname, email:this.state.email};
        console.log('student =>' + JSON.stringify(student));
        
        StudentsService.updateStudent(student, this.state.id).then(res =>{
            this.props.history.push('/students');
        });
        
    }

    componentDidMount(){
        
        StudentsService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({fname: student.fname,
                        lname: student.lname,
                        email: student.email
                    });
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
                            <h3 className="text-center">Update Student</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name :</label>
                                        <input placeholder="first name" name="fname" className="form-control" 
                                           value={this.state.fname} onChange={this.changeFnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name :</label>
                                        <input placeholder="last name" name="lname" className="form-control" 
                                           value={this.state.lname} onChange={this.changeLnameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id :</label>
                                        <input placeholder="email id" name="email" className="form-control" 
                                           value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateStudent}>Update</button>
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


export default updateStudentComponent;