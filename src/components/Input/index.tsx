import React from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

type IInputRadioProps = {
  label: string;
  type: "single" | "multiple";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<IInputRadioProps> = React.memo(function Input({
  label,
  type,
  onChange,
}) {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type={type === "single" ? "radio" : "checkbox"}
        name={type === "single" ? "radio" : ""}
        onChange={onChange}
      />
      <span
        className={cn(styles.checkmark, {
          [styles.checkmarkMultiple]: type === "multiple",
          [styles.checkmarkSingle]: type === "single",
        })}
      />
      <div className={styles.answer}>{label}</div>
    </label>
  );
});
