import React from "react";

import styles from "./styles.module.scss";

export const Layout: React.FC = (props) => {
  return <div className={styles.layout}>{props.children}</div>;
};
