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
}

export const getQuestion = async (params:GetQuestionParams): Promise<QuestionDTO> => {
    const data = await axios.get<QuestionDTO>(`/questions/${params.questionId}?_embed=answers`)
    return data.data;
}

export type ToggleAnswerLikeParams = {
    answerId:string,
    count: string,
}

export const submitLike = async ({count,answerId}:ToggleAnswerLikeParams): Promise<QuestionDTO> => {
    const data = await axios.patch(`/answers/${answerId}`,{likesCount: parseInt(count) + 1});
    return data.data;
}

export const submitDislike = async ({count,answerId}:ToggleAnswerLikeParams): Promise<QuestionDTO> => {
    const data = await axios.patch(`/answers/${answerId}`,{dislikesCount: parseInt(count) + 1});
    return data.data;
}


export const submitNewAnswer = async (param:AnswerDTO): Promise<AnswerDTO> => {
    const data = await axios.post(`/answers`,param);
    return data.data;
}

export const submitNewQuestion = async (param: QuestionDTO) : Promise<QuestionDTO> => {
    const data = await axios.post('/questions',param);
    return data.data;
}