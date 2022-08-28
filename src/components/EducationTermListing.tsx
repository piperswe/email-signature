import * as React from "react";
import { EducationTerm } from "../education";
import { usefulStyles } from "../theme";
import EducationCourseListing from "./EducationCourseListing";

export default function EducationTermListing(props: EducationTerm) {
  return (
    <>
      {props.term} Courses
      <ul style={usefulStyles.list}>
        {props.courses.map((course) => (
          <li
            key={`${course.subject} ${course.courseNumber} ${course.section}`}
          >
            <EducationCourseListing {...course} />
          </li>
        ))}
      </ul>
    </>
  );
}
