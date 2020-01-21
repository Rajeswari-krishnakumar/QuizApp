import React, { useState } from 'react';
import './css/App.css';
import allQuestions from './allQuestions';
import FirstFlow from './ActivityFlowTypes/FirstFlow';
import SecondFlow from './ActivityFlowTypes/SecondFlow';
function App() {
  //allQuestion is the JSON data from s3
  let allActivity = allQuestions['activities'];
  const [activityOneClicked, setActivityOneStatus] = useState(false);
  const [activityTwoClicked, setActivityTwoStatus] = useState(false);
  return (
    <div className="App">
      <div>
        {
          !activityOneClicked && !activityTwoClicked &&
          <div>
            <header className="App-header">
              <p>
               CAE
              </p>
            </header>
            Error Find
            <div><a onClick={()=>{setActivityOneStatus(true)}}>ACTIVITY ONE</a></div>
            <div><a onClick={()=>{setActivityTwoStatus(true)}}>ACTIVITY TWO</a></div>
          </div>
        }
        {
          activityOneClicked && !activityTwoClicked &&
          <FirstFlow questions={allActivity[0]['questions']}/>
        }
        {
          !activityOneClicked && activityTwoClicked &&
          <SecondFlow questions={allActivity[1]['questions']}/>
        }
      </div>
    </div>
  );
}

export default App;
