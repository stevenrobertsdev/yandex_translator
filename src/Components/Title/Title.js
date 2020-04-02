import React from "react";

import styles from "./Title.module.css";

export const Title = ({ children }) => {
  return <h3 className={styles.Title}>{children}</h3>;
};
