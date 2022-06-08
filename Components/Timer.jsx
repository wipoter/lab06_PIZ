import React from 'react';
import {Input, Button, Label} from "reactstrap";
const  Timer = function(){
    let flag = 0;
    let intervalID = null;
    let timerVar;
    function stopInter(intervalID) {
        clearInterval(intervalID);
    }
    function timerFunc(){
        if(timerVar === 0){
            stopInter(intervalID);
        }else {
            timerVar = timerVar - 1;
            console.log(timerVar);
            document.getElementById("GameTime").innerHTML = timerVar;
        }
    }
    function myFunction() {
        if(!flag) {
            let var1 = document.getElementById("timer").value;
            timerVar = 0;
            timerVar = timerVar + (var1[1] * 60);
            console.log(timerVar);
            timerVar = timerVar + (var1[3] * 10);
            console.log(timerVar);
            timerVar = timerVar + (var1[4] * 1);
            console.log(var1[4]);
            console.log(timerVar);
            if(timerVar >= 30 && timerVar <= 90) {
                intervalID = setInterval(timerFunc, 1000);
                flag = 1
            }else{
                alert("Pick time between 00:30 and 1:30")
            }
        }else if(flag === 1){
            stopInter(intervalID);
            flag = 2
        }else{
            intervalID = setInterval(timerFunc, 1000);
            flag = 1
        }
    }
    return(
        <div>
            <Label htmlFor={"timer"}>Pick time to make a move</Label><br/>
            <Input type={"time"} id={"timer"} name={"timer"} min={"00:30"} max={"01:30"} required/><br/>
            <Button onClick={myFunction} id={"ButtonTimer"}>Start Timer</Button>
            <h2 id={'GameTime'}>00</h2>
        </div>
    )
}
export default Timer;