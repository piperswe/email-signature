import * as React from "react";
import { EducationCourse } from "../education";

export default function CourseListing(props: EducationCourse) {
  return (
    <>
      {props.subject} {props.courseNumber}-{props.section} with{" "}
      {props.instructor}
    </>
  );
}
