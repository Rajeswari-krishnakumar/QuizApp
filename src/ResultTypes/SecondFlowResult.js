import React from 'react';
function SecondFlowResult(props){
	let allResults = props.results.reduce((allResult,resultObj,i)=>{
		//Show the round number for each round
		allResult.push(<div key={i}>ROUND {i+1}</div>);
		resultObj["result"].forEach((result,j)=>{
			allResult.push(<div key={"r"+i+"q"+j}>Q{j+1}<span>{result}</span></div>);
		})
		return allResult;
	},[])
	return (
      <div>
      	{allResults}
      	<button onClick={props.showHomeScreen}> Home </button>
      </div>)

}
export default SecondFlowResult;