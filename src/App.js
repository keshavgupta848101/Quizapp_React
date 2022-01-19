import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';

import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
import Result from './components/Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';
function App() {
  // 
  const [name, setName] = useState("")
  const [questions, setQuestions] = useState("")
  const [score, setScore] = useState(0)

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}& type=multiple`)
    // console.log(data);
    setQuestions(data.results)
  }
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
          </Route>

          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>

          <Route path="/result" exact>
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
