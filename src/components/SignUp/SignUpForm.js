import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    handleSubmit = event => {
        //console.log("Submitting");
        console.log(this.state);
    };

    render() {
        const { firstName, lastName, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={this.handleChange} />          
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="second name" placeholder="Last name" value={lastName} onChange={this.handleChange}/>        
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" placeholder="Enter your email"  value={email} onChange={this.handleChange} />
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={password} onChange={this.handleChange}/>              
                <button type="submit">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/#"}>sign in</Link>
                </p>
            </form>
        );
    }
} 