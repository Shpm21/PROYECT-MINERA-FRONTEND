export interface Course {
  id: number;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    description: 'Curso 1'
  },
  {
    id: 2,
    description: 'Curso 2'
  },
  {
    id: 3,
    description: 'Curso 3'
  },
  {
    id: 4,
    description: 'Curso 4'
  }
]

export const getCourses = () => courses;

export const getCourse = (id: number) => courses.find(c => c.id === id);