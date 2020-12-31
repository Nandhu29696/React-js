import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';

class loginComponent extends Component {
    
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.LoginBtn=this.LoginBtn.bind(this);
        this.UsernameCh=this.UsernameCh.bind(this);
        this.PasswrdCh=this.PasswrdCh.bind(this);
    }
    UsernameCh = (event)=>{
        this.setState({username: event.target.value});
    }
    PasswrdCh = (event)=>{
        this.setState({password: event.target.value});
    }

    LoginBtn = (e) =>{
        e.preventDefault();
        let loginf = {username:this.state.fname, password:this.state.lname};
        
        console.log('student =>' + JSON.stringify(loginf));
        
        StudentsService.loginAd.then(res =>{
            this.props.history.push('/students');
        });
    }
    LoginBtn = (e) =>{
        this.props.history.push('/students');

    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username"  onChange={this.state.UsernameCh} placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"  onChange={this.state.PasswrdCh} placeholder="password" />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.LoginBtn}>Login</button>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default loginComponent;