import React, { useState } from 'react';
import SecondFlowResult from '.././ResultTypes/SecondFlowResult';

let result = [], initialLoad=true;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function SecondFlow(props){
	const [roundNum, setRoundNum] = useState(1);
	const [questionNum, setQuestionNum] = useState(1);
	const [showRoundNum, setShowRoundNum] = useState(false);

	let questionArr, allQuestions;
	if(props['questions'][roundNum-1]){
		allQuestions = props['questions'][roundNum-1]['questions'];
	}
	//to show the round number for sometime
	async function showRoundNumScreen(){
			setShowRoundNum(true);
			await sleep(1000);
			setShowRoundNum(false);
	}
	if(initialLoad){
		initialLoad = false;
		showRoundNumScreen();
	}
	function nextQuestion(userAns){
		allQuestions = props['questions'][roundNum-1]['questions'];
		let correctAns = allQuestions[questionNum-1]['is_correct'];
		//Construct the result array based on user answer
		//Result array is an array of Obj-> An object for each round
		if(!result[roundNum-1]){
			result[roundNum-1] ={"round":roundNum,"result":[]}
		}
		if(userAns === correctAns){
			result[roundNum-1]["result"].push('CORRECT')
		}else{
			result[roundNum-1]["result"].push('FALSE')
		}
		//If there are no more questions, go to next round and start from 1st question
		//Else go to next question in same round
		if(!allQuestions[questionNum]){
			//Show Round screen only when there are more rounds
			if(props['questions'][roundNum]){
				showRoundNumScreen();
			}
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
			showRoundNum &&
			<div>
    			<h1>
    				ACTIVITY TWO
    			</h1>
    			<h2>
    				ROUND {roundNum}
    			</h2>
    		</div>
    	}
    	{
    		//If there are more questions, then show the questions.Else, show the result screen
      		!showRoundNum && questionArr ? (
	      		<div>
	      			<div>ACTIVITY TWO / Round {roundNum}</div>
	      			<div>Q{questionNum}.</div>
		      		{questionArr[0]}<strong>{questionArr[1]}</strong>{questionArr[2]}
		      		{allQuestions[questionNum-1]['stimulus']}
		      		<button onClick={()=>nextQuestion(true)}>CORRECT</button>
		      		<button onClick={()=>nextQuestion(false)}>INCORRECT</button>
	      		</div>
	      		):(
	      		!showRoundNum &&
	      			<SecondFlowResult results={result} showHomeScreen={props.showHomeScreen}/>
	      		)
    	}
    	</div>)
}
export default SecondFlow;