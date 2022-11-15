import customAxios from "./cAxios";

const axios = customAxios();

export interface QuestionDTO {
    id: string,
    questionsTitle: string,
    questionsDesc: string,
    createdTime: string,
    createdDate: string,
    userName: string,
    "avatar": string,
    images: string[],
    "answers": []
}

export const getQuestions = async (): Promise<QuestionDTO[]> => {
    const data = await axios.get<QuestionDTO[]>('/questions');
    return data.data;
}