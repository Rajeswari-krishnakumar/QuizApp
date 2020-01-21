import React from 'react';
function SecondFlowResult(props){
	let allResults = props.results.reduce((allResult,resultObj,i)=>{
		//Show the round number for each round
		allResult.push(<div className="resultDiv" key={i}><span>ROUND {i+1}</span></div>);
		resultObj["result"].forEach((result,j)=>{
			allResult.push(<div className="resultDiv" key={"r"+i+"q"+j}><span>Q{j+1}</span><span>{result}</span></div>);
		})
		return allResult;
	},[])
	return (
		<div className="centerContent homeScreen" style={{padding:0}}>
			<div className="boldText smallerText">
				ACTIVITY TWO
			</div>
			<div className="biggerText boldText" style={{padding:"10px 20px"}}>
				Results
			</div>
			{allResults}
			<button onClick={props.showHomeScreen}> Home </button>
		</div>)

}
export default SecondFlowResult;