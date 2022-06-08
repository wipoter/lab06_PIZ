import React from 'react';
import MyForm from "./MyForm";
import ChessTable, {ChessData} from "./ChessTable";
import MyChartBar from "./MyChartBar";
import {useState} from "react";
import {Table} from "reactstrap";

const MyPage = () => {
    const [chessData, setChessData] = useState({
        labels: ChessData.map((data) => data.chessFigure),
        datasets: [{
            label: "Number of Chess figures",
            data: ChessData.map((data) => data.numberOf),
        }]
    });
    return (
        <div>
            <Table className={"border-0"}>
                <tbody>
                <tr>
                    <th>
                        <MyForm/>
                    </th>
                    <th>
                        <ChessTable setChessData={setChessData}/>
                    </th>
                    <th>
                        <MyChartBar chartData={chessData}/>
                    </th>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyPage;