import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {email:"",password:"",};
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let emails = this.state.email;
        let passwords = this.state.password;

        let loginurl = "/login?username=" + emails + "&password=" + passwords;

        console.log(loginurl);

        //AjaxGet('GET', loginurl, (res) => {...})

    }

    render(){
        var email = this.state.email;
        var password = this.state.password;

        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input type="email" name="email" value={email} onChange={this.handleChange} />
                <br/>
                <input type="password" name="password" value={password} onChange={this.handleChange} />
                <br/>
                <input type="submit" value="提交" />
            </form>
        ) ;
    }
}

export default Login
