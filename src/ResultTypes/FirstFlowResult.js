import React from 'react';
function FirstFlowResult(props){
	let allResults = props.results.reduce((allResult,result,i)=>{
		allResult.push(<div className="resultDiv" key={i}><span>Q{i+1}</span><span>{result}</span></div>);
		return allResult;
	},[])
	return (

      <div className="centerContent homeScreen" style={{padding:0}}>
      	<h5>
      		ACTIVITY ONE
      	</h5>
      	<h1>
      		Results
      	</h1>
      	{allResults}
      	<button onClick={props.showHomeScreen}> Home </button>
      </div>)

}
export default FirstFlowResult;