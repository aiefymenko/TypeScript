"use strict";
//Utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final project',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//Required and Readonly
const recordAssignment = (assign) => {
    //send to database etc
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88;
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'U'
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 }
};
const score = {
    studentId: 'k123',
    grade: 85,
};
const preview = {
    studentId: 'K123',
    title: 'FINAL Project'
};
