"use strict";

const courses = [
  {
    _id: 'anyid',
    title: 'Titulo1',
    teacher: 'Teacher1',
    description: 'Description',
    topic: 'Programacion',
  },
  {
    _id: 'anyid',
    title: 'Titulo2',
    teacher: 'Teacher1',
    description: 'Description',
    topic: 'Programacion',
  },
  {
    _id: 'anyid',
    title: 'Titulo3',
    teacher: 'Teacher1',
    description: 'Description',
    topic: 'Programacion',
  },
];

module.exports = {
  getCourses: () => {
    return courses;
  },
};
