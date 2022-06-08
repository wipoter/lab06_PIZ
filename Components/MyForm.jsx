import React from 'react';
import Timer from "./Timer";
import axios from "axios";
import {Button, Form, Input, Label} from "reactstrap";

class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            gender: null,
            hidden: 'hiddendata',
            textarea: null,
            redirect: false,
            imageURL: null,
        }
    }
    handleValidation() {
        let login = this.state.login;
        let password = this.state.password;
        let gender = this.state.gender;
        let formIsValid = true;
        if(!login.length < 4 || login.length > 12){
            formIsValid = false;
            console.log(login)
        }
        if(password.test("[0-9]+") || password.length < 4 || password.length > 12){
            formIsValid = false;
            console.log(password)
        }
        if(!gender){
            formIsValid = false;
            console.log(gender)
        }
        return formIsValid;
    }
    contactSubmit = (e) => {
        e.preventDefault();
    }
    componentDidMount() {
        axios.get("https://random.dog/woof.json?ref=apilist.fun").then(res => {
            console.log(res);
            this.setState({imageURL: res.data.url});
        })
    }
    savePlayer = () => {
        axios.post("http://127.0.0.1:8000/user/", {
            login: this.state.login,
            password: this.state.password,
            sex: this.state.gender
        }).then(res => {
            alert(res.data.message);
        });
    }
    render() {
        return(
            <div>
                <Form id={'MySubmit'} className="form" onSubmit={this.contactSubmit}>
                    {this.state.imageURL &&  <img style={{height: "auto", width: "130x"}} src={this.state.imageURL}></img>}<br/>
                    <Label htmlFor={'Login'}>Login</Label><br/>
                    <Input type={"text"} id={'Login'} name={"Login"} className={'mb-1'} onChange={(event) => this.setState({login: event.target.value})} required={true}/><br/>
                    <Label htmlFor={'Password'}>Password</Label><br/>
                    <Input type={"password"} id={'Password'} name={"Password"} pattern={'[0-9]+'} onChange={(event) => this.setState({password: event.target.value})} required={true}/><br/>
                    <Label htmlFor={'Man'}>Man</Label>
                    <Input type={"radio"} id={"Man"} value={"Man"} name={"Gender"} onChange={(event) => this.setState({gender: event.target.value})}/>
                    <Label htmlFor={'Woman'}>Woman</Label>
                    <Input type={"radio"} id={"Woman"} value={"Woman"} name={"Gender"} onChange={(event) => this.setState({gender: event.target.value})}/><br/>
                    <Input type={"hidden"} id={'hid'} name={"hid"} value={'HiddenArea'}/>
                    <textarea id={'TextArea'} name={"TextArea"} onChange={(event) => this.setState({textarea: event.target.value})}/><br/>
                    <Input type={"submit"} id={'Submit'} value={'Submit'} onClick={this.savePlayer}/>
                    <Timer/>
                </Form>
                <a href={"https://www.chess.com/puzzles/problem/36833"} target={"_blank"}>Puzzle link </a>
                <a href={"https://www.chess.com/learn-how-to-play-chess"}  target={"_blank"}>Rules link</a><br/>
            </div>
        )
    }
}

export default MyForm;