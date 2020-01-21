import React, { useState } from 'react';
import FirstFlowResult from '.././ResultTypes/FirstFlowResult';

let result = [];
function FirstFlow(props){
	let allQuestions = props['questions'];
	let questionArr;
	const [questionNum, setQuestionNum] = useState(1);
	function showHomeScreen(){
		result=[];
		props.showHomeScreen();
	}
	function nextQuestion(userAns){
		//questionNum -1 => to match the array index
		let correctAns = allQuestions[questionNum-1]['is_correct'];
		//Construct the result array based on user answer
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
	      		<div className="centerContent">
	      			<div className="boldText extraMargin">ACTIVITY ONE</div>
	      			<div className="biggerText boldText extraMargin">Q{questionNum}.</div>
	      			<div className="greyBackground">
		      			{questionArr[0]}<strong>{questionArr[1]}</strong>{questionArr[2]}
		      		</div>
		      		<div>
		      			<button className="centerButton" onClick={()=>nextQuestion(true)}>CORRECT</button>
		      			<button className="centerButton" onClick={()=>nextQuestion(false)}>INCORRECT</button>
		      		</div>
	      		</div>
	      		):(
	      			<FirstFlowResult results={result} showHomeScreen={showHomeScreen} />
	      		)
    	}
    	</div>)

}
export default FirstFlow;