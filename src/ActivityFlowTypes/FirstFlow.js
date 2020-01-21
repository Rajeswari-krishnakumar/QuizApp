import React, { useState } from 'react';
import FirstFlowResult from '.././ResultTypes/FirstFlowResult';

let result = [];
function FirstFlow(props){
	let allQuestions = props['questions'];
	let questionArr;
	const [questionNum, setQuestionNum] = useState(1);
	function nextQuestion(userAns){
		//questionNum -1 => to match the array index
		let correctAns = allQuestions[questionNum-1]['is_correct'];
		if(userAns === correctAns){
			result.push('CORRECT')
		}else{
			result.push('FALSE')
		}
		setQuestionNum(questionNum+1)
	}
	//Changes to show the text inbetween * in bold
	if(allQuestions[questionNum-1]){
		questionArr = allQuestions[questionNum-1]['stimulus'].split('*');
	}
	return (
    	<div>
    	{
    		//If there are more questions, then show the questions.Else, show the result screen
      		questionArr ? (
	      		<div>
		      		{questionArr[0]}<strong>{questionArr[1]}</strong>{questionArr[2]}
		      		<button onClick={()=>nextQuestion(true)}>CORRECT</button>
		      		<button onClick={()=>nextQuestion(false)}>INCORRECT</button>
	      		</div>
	      		):(
	      			<FirstFlowResult results={result}/>
	      		)
    	}
    	</div>)

}
export default FirstFlow;