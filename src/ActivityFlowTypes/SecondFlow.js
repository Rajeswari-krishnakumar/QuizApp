import React, { useState } from 'react';
import SecondFlowResult from '.././ResultTypes/SecondFlowResult';

let result = [];
function SecondFlow(props){
	const [roundNum, setRoundNum] = useState(1);
	const [questionNum, setQuestionNum] = useState(1);
	let questionArr, allQuestions;
	if(props['questions'][roundNum-1]){
		allQuestions = props['questions'][roundNum-1]['questions'];
	}

	function nextQuestion(userAns){
		allQuestions = props['questions'][roundNum-1]['questions'];
		let correctAns = allQuestions[questionNum-1]['is_correct'];
		if(userAns === correctAns){
			result.push('CORRECT')
		}else{
			result.push('FALSE')
		}
		//If there are no more questions, go to next round and start from 1st question
		//Else go to next question in same round
		if(!allQuestions[questionNum]){
			setRoundNum(roundNum+1);
			setQuestionNum(1);

		}else{
			setQuestionNum(questionNum+1);
		}
	}
	//Changes to show the text inbetween * in bold
	if(allQuestions){
		questionArr = allQuestions[questionNum-1]['stimulus'].split('*');
	}
	return (
    	<div>
    	{
    		//If there are more questions, then show the questions.Else, show the result screen
      		questionArr ? (
	      		<div>
		      		{questionArr[0]}<strong>{questionArr[1]}</strong>{questionArr[2]}
		      		{allQuestions[questionNum-1]['stimulus']}
		      		<button onClick={()=>nextQuestion(true)}>CORRECT</button>
		      		<button onClick={()=>nextQuestion(false)}>INCORRECT</button>
	      		</div>
	      		):(
	      			<SecondFlowResult results={result}/>
	      		)
    	}
    	</div>)
}
export default SecondFlow;