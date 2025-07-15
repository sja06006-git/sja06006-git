import * as I from './image'

export type User1 = {
    name: string
    jobTitle: string
    paragraph: string
}

// prettier-ignore
export const makeUser1 = (
    name:string, jobTitle:string, paragraph:string
): User1 => ({name, jobTitle, paragraph})

export const makeUserHong = (): User1 =>
    makeUser1(
        "홍길동",
        "Frontend Developer",
        "React와 Tailwind를 배우는 중입니다."
    )