import React from 'react';
function FirstFlowResult(props){
	let allResults = props.results.reduce((allResult,result,i)=>{
		allResult.push(<div className="resultDiv" key={i}><span>Q{i+1}</span><span>{result}</span></div>);
		return allResult;
	},[])
	return (
            <div className="centerContent homeScreen" style={{padding:0}}>
            	<div className="boldText smallerText">
            		ACTIVITY ONE
            	</div>
            	<div className="biggerText boldText" style={{padding:"10px 20px"}}>
            		Results
            	</div>
            	{allResults}
            	<button onClick={props.showHomeScreen}> Home </button>
            </div>)
}
export default FirstFlowResult;