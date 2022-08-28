import * as React from "react";
import { fontsToCSS, Theme, ThemeContext } from "../theme";

function getStyles(theme: Theme) {
  return {
    container: {
      padding: "1em",
      backgroundColor: theme.colors.background,
      border: `1px solid ${theme.colors.tertiary}`,
      borderRadius: "0.5em",
      color: theme.colors.body,
      maxWidth: "700px",
      fontFamily: fontsToCSS(theme.fonts),
    },
    inner: {
      maxWidth: "80%",
    },
    nameBlock: {
      marginBottom: "1em",
    },
    name: {
      color: theme.colors.primary,
      fontSize: "16pt",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
    },
    pronouns: {
      color: theme.colors.secondary,
      fontSize: "11pt",
      fontWeight: "lighter",
      marginLeft: "1em",
      fontStyle: "italic",
    },
    legalName: {
      color: theme.colors.secondary,
      fontSize: "9pt",
    },
    content: {},
  };
}

export interface BaseProps {
  name?: string;
  pronouns?: string | null;
  includeLegalName?: boolean;
  legalNameDisclaimer?: string;
}

const defaultProps = {
  name: "Piper McCorkle",
  pronouns: "they/them",
  includeLegalName: false,
  legalNameDisclaimer:
    "My government name is Zebulon, but changing that is a painful process. In the meanwhile, please refer to me as “Piper,” regardless of my government name.",
};

export default function Base(
  overrideProps: React.PropsWithChildren<BaseProps>
) {
  const props = { ...defaultProps, ...overrideProps };
  const theme = React.useContext(ThemeContext);
  const styles = getStyles(theme);
  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <div style={overrideProps.children && styles.nameBlock}>
          <div style={styles.name}>
            {props.name}{" "}
            {props.pronouns && (
              <span style={styles.pronouns}>{props.pronouns}</span>
            )}
          </div>
          {props.includeLegalName && (
            <div style={styles.legalName}>{props.legalNameDisclaimer}</div>
          )}
        </div>
        {overrideProps.children && (
          <div style={styles.content}>{overrideProps.children}</div>
        )}
      </div>
    </div>
  );
}
