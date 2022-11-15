import customAxios from "./cAxios";

const axios = customAxios();

export interface QuestionDTO {
    id: string,
    questionsTitle: string,
    questionsDesc: string,
    createdTime: string,
    createdDate: string,
    userName: string,
    avatar: string,
    images: string[],
    answers: AnswerDTO[]
}

export interface AnswerDTO {
    id: string,
    questionId: string,
    userName: string,
    userAvatar: string,
    createdTime: string,
    createdDate: string,
    likesCount: string,
    dislikesCount: string,
    content:string
}

export const getQuestions = async (): Promise<QuestionDTO[]> => {
    const data = await axios.get<QuestionDTO[]>('/questions?_embed=answers');
    return data.data;
}

export type GetQuestionParams = {
    questionId: string,
    abortController: AbortController
}

export const getQuestion = async (params:GetQuestionParams): Promise<QuestionDTO> => {
    const data = await axios.get<QuestionDTO>(`/questions/${params.questionId}?_embed=answers`,{signal:params.abortController.signal})
    return data.data;
}