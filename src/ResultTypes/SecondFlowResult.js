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
      	<h5>
      		ACTIVITY TWO
      	</h5>
      	<h1>
      		Results
      	</h1>
      	{allResults}
      	<button onClick={props.showHomeScreen}> Home </button>
      </div>)

}
export default SecondFlowResult;