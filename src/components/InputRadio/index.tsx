import React from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

type IInputRadioProps = {
  label: string;
  type: "single" | "multiple";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputRadio: React.FC<IInputRadioProps> = React.memo(
  function InputRadio({ label, type, onChange }) {
    return (
      <label className={styles.label}>
        <input
          type={type === "single" ? "radio" : "checkbox"}
          name={type === "single" ? "radio" : ""}
          onChange={(e) => onChange(e)}
        />
        <span
          className={cn(styles.checkmark, {
            [styles.checkmarkMultiple]: type === "multiple",
            [styles.checkmarkSingle]: type === "single",
          })}
        />
        <span className={styles.answer}>{label}</span>
      </label>
    );
  }
);
