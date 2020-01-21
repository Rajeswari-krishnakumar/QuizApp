import React from 'react';
import allQuestions from './allQuestions';
import FirstFlow from './ActivityFlowTypes/FirstFlow';
import SecondFlow from './ActivityFlowTypes/SecondFlow'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
	let allActivity = allQuestions['activities']
    return (
      <div>
        Error Find
        <Router>
			<nav>
				<ul className="row">
					<li className="col-md-2">
					  <Link to="/1">Activity 1</Link>
					</li>
					<li className="col-md-2">
					  <Link to="/2">Activity 2</Link>
					</li>
				</ul>
			</nav>
			<main>
				<Switch>
					<Route exact path="/1">
						<FirstFlow questions={allActivity[0]['questions']}/>
					</Route>
					<Route path="/2"> 
						<SecondFlow questions={allActivity[1]['questions']}/>
					</Route>
				</Switch>
			</main>
		 </Router>
      </div>
	);
}
export default Home
