import * as React from "react";
import { Position } from "../positions";
import { Theme, ThemeContext } from "../theme";
import LinkTo from "./LinkTo";
import LinkToEmail from "./LinkToEmail";

function getStyles(theme: Theme) {
  return {
    children: {
      color: theme.colors.tertiary,
      fontSize: "9pt",
    },
  };
}

function formatName(props: Position): string {
  return [props.position, props.team, props.company]
    .filter((x) => x)
    .join(", ");
}

export default function PositionListing(props: Position) {
  const theme = React.useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <>
      <span>
        {formatName(props)} {"("}
        <LinkTo link={props.link} />; <LinkToEmail email={props.email} />
        {")"}
      </span>
      {props.children && <div style={styles.children}>{props.children}</div>}
    </>
  );
}
