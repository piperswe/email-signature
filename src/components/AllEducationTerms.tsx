import * as React from "react";
import { EducationTerm } from "../education";
import { usefulStyles } from "../theme";
import EducationTermListing from "./EducationTermListing";

export interface AllEducationTermsProps {
  terms: EducationTerm[];
}

export default function AllEducationTerms({ terms }: AllEducationTermsProps) {
  return (
    <ul style={usefulStyles.list}>
      {terms.map((term) => (
        <li key={term.term}>
          <EducationTermListing {...term} />
        </li>
      ))}
    </ul>
  );
}
