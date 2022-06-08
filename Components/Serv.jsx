import React from 'react';

class Serv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            params: new URLSearchParams(window.location.search),
        }
    }

    getValue = (name) => {
        return this.state.params[name];
    }
    componentDidMount() {
    let q = window.location.search;
    let param = new URLSearchParams(q);
    let variable = param.get("Login")
    document.getElementById("Data").value += variable;
    variable = param.get("Password");
    document.getElementById("Data").value += variable;
    variable = param.get("Gender");
    document.getElementById("Data").value += variable;
    variable = param.get("timer");
    document.getElementById("Data").value += variable;
    variable = param.get("hid");
    document.getElementById("Data").value += variable;
    variable = param.get("TextArea");
    document.getElementById("Data").value += variable;
    }
    render(){
        return(
        <div>
            <label htmlFor={"Data"}>Recieved data</label>
            <textarea name={"Data"} id={"Data"}/>
        </div>
        )
    }
}

export default Serv;
// let q = window.location.search;
// let param = new URLSearchParams(q);
// let variable = param.get("Login")
// document.getElementById("Data").value += variable;
// variable = param.get("Password");
// document.getElementById("Data").value += variable;
// variable = param.get("Gender");
// document.getElementById("Data").value += variable;
// variable = param.get("timer");
// document.getElementById("Data").value += variable;
// variable = param.get("hid");
// document.getElementById("Data").value += variable;
// variable = param.get("TextArea");
// document.getElementById("Data").value += variable;