import React from 'react';
function FirstFlowResult(props){
	let allResults = props.results.reduce((allResult,result,i)=>{
		allResult.push(<div key={i}><span></span>Q{i+1}<span>{result}</span></div>);
		return allResult;
	},[])
	return (

      <div>
      	<div>
      		ACTIVITY ONE
      	</div>
      	<h1>
      		Results
      	</h1>
      	{allResults}
      	<button onClick={props.showHomeScreen}> Home </button>
      </div>)

}
export default FirstFlowResult;