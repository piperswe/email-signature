export interface EducationCourse {
  subject: string;
  courseNumber: string;
  section: string;
  instructor: string;
}

export interface EducationTerm {
  term: string;
  courses: EducationCourse[];
}

export const blinnTerms: EducationTerm[] = [
  {
    term: "Fall 2022",
    courses: [
      {
        subject: "ENGL",
        courseNumber: "1301",
        section: "012",
        instructor: "Ms. Probst",
      },
      {
        subject: "SPCH",
        courseNumber: "1315",
        section: "001",
        instructor: "Ms. Dahmann",
      },
    ],
  },
];
