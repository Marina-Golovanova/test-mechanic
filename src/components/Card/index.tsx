import React from "react";
import { observer } from "mobx-react";
import { InputRadio } from "../InputRadio";
import { TestMechanics } from "../store/TestMechanics";

import styles from "./styles.module.scss";

export const Card: React.FC = React.memo(
  observer(function Card() {
    const model = React.useMemo(() => new TestMechanics(), []);

    const handleInputChange = React.useCallback(
      (id: number, value: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          model.setUserAnswer({ id, value });
        } else {
          model.deleteUserAnswer(id);
        }
      },
      [model]
    );

    const handleButtonClick = React.useCallback(() => {
      model.checkAnswers();
    }, [model]);

    return (
      <div className={styles.card}>
        <h1 className={styles.question}>{model.question.label}</h1>

        <div className={styles.answers}>
          {model.question.answers.map((answ) => (
            <InputRadio
              key={answ.id}
              label={answ.label}
              type={model.question.type}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(answ.id, answ.correct, e);
              }}
            />
          ))}
        </div>

        <button
          onClick={handleButtonClick}
          disabled={!model.userAnswers.length}
        >
          Ответить
        </button>
      </div>
    );
  })
);
