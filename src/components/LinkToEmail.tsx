import * as React from "react";
import { Theme, ThemeContext } from "../theme";

function getStyles(theme: Theme) {
  return {
    link: {
      color: theme.colors.body,
      fontWeight: 500,
    },
  };
}

export interface LinkToEmailProps {
  email: string;
}

export default function LinkToEmail({ email }: LinkToEmailProps) {
  const theme = React.useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <a href={`mailto:${email}`} style={styles.link}>
      {email}
    </a>
  );
}
