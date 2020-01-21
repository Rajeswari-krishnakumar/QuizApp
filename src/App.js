import React, { useState } from 'react';
import './css/App.css';
import allQuestions from './allQuestions';
import ActivityFlow from './ActivityFlowTypes/ActivityFlow';

function App() {
  //allQuestion is the JSON data from s3
  let allActivity = allQuestions['activities'];
  const [activityClicked, setActivityStatus] = useState(false);
  const [activityNum, setActivityNumber] = useState(0);

  return (
    <div className="App">
      <div>
        {
          //Show home page when activity is not clicked
          !activityClicked &&
          <div>
            <header className="App-header">
              <p>
               CAE
              </p>
            </header>
            Error Find
            <div>
              <button onClick={()=>{setActivityNumber(1);setActivityStatus(true)}}>
                ACTIVITY ONE
              </button>
            </div>
            <div>
              <button onClick={()=>{setActivityNumber(2);setActivityStatus(true)}}>
                ACTIVITY TWO
              </button>
            </div>
          </div>
        }
        {
          activityClicked &&
          <ActivityFlow allActivity={allActivity} activityNum={activityNum} 
          showHomeScreen={()=>{setActivityStatus(false)}}/>
        }
      </div>
    </div>
  );
}

export default App;
