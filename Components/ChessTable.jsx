import React from 'react';

let whiteK = document.getElementsByName("WhiteKing").length;
let blackK = document.getElementsByName("BlackKing").length;
let whiteQ = document.getElementsByName("WhiteQueen").length;
let blackQ = document.getElementsByName("BlackQueen").length;
let whiteT = document.getElementsByName("WhiteTower").length;
let blackT = document.getElementsByName("BlackTower").length;
let whiteB = document.getElementsByName("WhiteBishop").length;
let blackB = document.getElementsByName("BlackBishop").length;
let whiteH = document.getElementsByName("WhiteHorse").length;
let blackH = document.getElementsByName("BlackHorse").length;
let whiteP = document.getElementsByName("WhitePawn").length;
let blackP = document.getElementsByName("BlackPawn").length;

export let ChessData = [
    {
        numberOf: whiteK,
        chessFigure: "WhiteKing",
    },
    {
        numberOf: blackK,
        chessFigure: "BlackKing",
    },
    {
        numberOf: whiteQ,
        chessFigure: "WhiteQueen",
    },
    {
        numberOf: blackQ,
        chessFigure: "BlackQueen",
    },
    {
        numberOf: whiteT,
        chessFigure: "WhiteTower",
    },
    {
        numberOf: blackT,
        chessFigure: "BlackTower",
    },
    {
        numberOf: whiteB,
        chessFigure: "WhiteBishop",
    },
    {
        numberOf: blackB,
        chessFigure: "BlackBishop",
    },
    {
        numberOf: whiteH,
        chessFigure: "WhiteHorse",
    },
    {
        numberOf: blackH,
        chessFigure: "BlackHorse",
    },
    {
        numberOf:  whiteP,
        chessFigure: "WhitePawn",
    },
    {
        numberOf: blackP,
        chessFigure: "BlackPawn",
    }]

class ChessTable extends React.Component {
    getCount = (name) => {
        return document.getElementsByName(name).length;
    }

    componentDidMount(){
        this.props.setChessData({
            labels: ChessData.map((data) => data.chessFigure),
            datasets: [{
                label: "Number of Chess figures",
                data: [this.getCount("WhiteKing"),
                    this.getCount("BlackKing"),
                    this.getCount("WhiteQueen"),
                    this.getCount("BlackQueen"),
                    this.getCount("WhiteTower"),
                    this.getCount("BlackTower"),
                    this.getCount("WhiteBishop"),
                    this.getCount("BlackBishop"),
                    this.getCount("WhiteHorse"),
                    this.getCount("BlackHorse"),
                    this.getCount("WhitePawn"),
                    this.getCount("BlackPawn")],

            }]
        });
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th className="ClassW">
                            <img name="WhiteKing" src={require("./king.png")}/>
                            <div className="divClassTopBlack">1</div>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                    </tr>
                    <tr>
                        <th className="ClassG">
                            <img name="WhitePawn" src={require("./pawn.png")}/>
                            <div className="divClassTopWhite">2</div>
                        </th>
                        <th className="ClassW">
                            <img name="WhitePawn" src={require("./pawn.png")}/>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG">
                            <img name="WhiteTower" src={require("./castle.png")}/>
                        </th>
                        <th className="ClassW"/>
                        <th className="ClassG">
                            <img name="WhitePawn" src={require("./pawn.png")}/>
                        </th>
                        <th className="ClassW">
                            <img name="WhitePawn" src={require("./pawn.png")}/>
                        </th>
                    </tr>
                    <tr>
                        <th className="ClassW">3</th>
                        <th className="ClassG"/>
                        <th className="ClassW">
                            <img name="WhitePawn" src={require("./pawn.png")}/>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG">
                            <img name="BlackBishop" src={require("./bishopblack.png")}/>
                        </th>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                    </tr>
                    <tr>
                        <th className="ClassG">4</th>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW">
                            <img name="WhitePawn" src={require("./pawn.png")}/>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                    </tr>
                    <tr>
                        <th className="ClassW">5</th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                    </tr>
                    <tr>
                        <th className="ClassG">6</th>
                        <th className="ClassW">
                            <img name="BlackPawn" src={require("./pawnblack.png")}/>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW">
                            <img name="BlackPawn" src={require("./pawnblack.png")}/>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW">
                            <img name="WhiteBishop" src={require("./bishop.png")}/>
                        </th>
                    </tr>
                    <tr>
                        <th className="ClassW">
                            <img name="BlackPawn" src={require("./pawnblack.png")}/>
                            <div className="divClassTopBlack">7</div>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW">
                            <img name="BlackPawn" src={require("./pawnblack.png")}/>
                        </th>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG"/>
                        <th className="ClassW"/>
                        <th className="ClassG">
                            <img name="WhiteTower" src={require("./castle.png")}/>
                        </th>
                    </tr>
                    <tr>
                        <th className="ClassG">
                            <div className="divClassTop">8</div>
                            <div className="divClassBottom">h</div>
                        </th>
                        <th className="ClassW">
                            <img name="BlackKing" src={require("./kingblack.png")}/>
                            <div className="divClassBottomBlackF">g</div>
                        </th>
                        <th className="ClassG">
                            <img name="BlackTower" src={require("./castleblack.png")}/>
                            <div className="divClassBottomWhiteF">f</div>
                        </th>
                        <th className="ClassW">
                            <div className="divClassBottomBlack">e</div>
                        </th>
                        <th className="ClassG">
                            <div className="divClassBottomWhite">d</div>
                        </th>
                        <th className="ClassW">
                            <div className="divClassBottomBlack">c</div>
                        </th>
                        <th className="ClassG">
                            <img name="BlackTower" src={require("./castleblack.png")}/>
                            <div className="divClassBottomWhiteF">b</div>
                        </th>
                        <th className="ClassW">
                            <img name="BlackBishop" src={require("./bishopblack.png")}/>
                            <div className="divClassBottomBlackF">a</div>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ChessTable;