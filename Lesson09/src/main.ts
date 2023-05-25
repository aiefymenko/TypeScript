//Utility types

//Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final project',
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});

//Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to database etc
    return assign
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}

// assignVerified.grade = 88;
recordAssignment({...assignGraded, verified: true})

//Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Student = 'Sara' | "Kelly";
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Student, LetterGrades> = {
    Sara: 'B',
    Kelly: 'U'
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Student, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 76, assign2: 15}
}

//Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: 'k123',
    grade: 85,
}

