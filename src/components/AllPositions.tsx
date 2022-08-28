import * as React from "react";
import { Position } from "../positions";
import { usefulStyles } from "../theme";
import PositionListing from "./PositionListing";

const styles = {
  list: {
    ...usefulStyles.list,
    fontSize: "10pt",
  },
};

export interface AllPositionsProps {
  positions: Position[];
}

export default function AllPositions(props: AllPositionsProps) {
  return (
    <ul style={styles.list}>
      {props.positions.map((position) => (
        <li key={`${position.position}, ${position.team}, ${position.company}`}>
          <PositionListing {...position} />
        </li>
      ))}
    </ul>
  );
}
