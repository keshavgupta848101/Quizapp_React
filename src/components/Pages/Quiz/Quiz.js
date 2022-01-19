import React, { useEffect, useState } from 'react'
import './Quiz.css'
import { CircularProgress } from '@material-ui/core';

import Question from '../../Questions/Questions'
const Quiz = ({ name, score, setScore, questions, setQuestions, }) => {
    const [currQues, setCurrQues] = useState(0);
    const [options, setOptions] = useState();


    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };
    return (
        <div className='quiz'>
            <span className='subtitle'>Welcome, {name}</span>

            {questions ?
                <>
                    <div className="quizInfo">
                        {/* <span>{questions[currQues].category}</span> */}
                        <span>
                            {/* {questions[currQues].difficulty} */}
                            Score : {score}
                        </span>
                    </div>

                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}

                    />

                </> : <CircularProgress

                    style={{ margin: 100 }}
                    color='inherit'
                    size={150}
                    thickness={1}
                />}
        </div>
    )
}

export default Quiz
