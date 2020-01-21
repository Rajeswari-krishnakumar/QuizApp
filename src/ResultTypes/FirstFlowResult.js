import React from 'react';
function FirstFlowResult(props){
	let allResults = props.results.reduce((allResult,result,i)=>{
		allResult.push(<div key={i}><span></span>Q{i+1}<span>{result}</span></div>);
		return allResult;
	},[])
	return (
      <div>
      	{allResults}
      </div>)

}
export default FirstFlowResult;