import React, {useEffect, useState} from "react";
import {getQuestions, QuestionDTO} from "../../network/QuestionsListHttpService";
import QuestionListItem from "./QuestionListItem";

const QuestionsList = () => {
    const [questions, setQuestions] = useState<QuestionDTO[]>([])

    useEffect(() => {
        getQuestions().then((response) => {
            setQuestions(response);
        });
    }, [])

    return <div className='flex flex-col gap-4'>
        {questions && questions.map(question => {
            return <QuestionListItem key={question.id} questionItem={question}/>
        })}
    </div>
}
export default QuestionsList