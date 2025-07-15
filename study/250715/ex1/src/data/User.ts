import * as C from './chance'
import * as I from './image'

export type IUser = {
    name: string
    jobTitle: string
    paragraph: string
}
// prettier-ignore
export const makeUser = (
    name: string, jobTitle: string, paragraph:string
): IUser => ({name, jobTitle, paragraph})
export const makeUserHong = () : IUser =>
    makeUser(
        "홍길동",
        "Frontend Developer",
        "React와 Tailwind를 배우는 중 입니다."
    )