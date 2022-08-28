import * as React from "react";
import { Theme, ThemeContext } from "../theme";

export function getStyles(theme: Theme) {
  return {
    link: {
      color: theme.colors.body,
      fontWeight: 500,
    },
  };
}

export interface LinkToProps {
  link: string;
}

export default function LinkTo({ link }: LinkToProps) {
  const theme = React.useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <a href={link} style={styles.link}>
      {link}
    </a>
  );
}
