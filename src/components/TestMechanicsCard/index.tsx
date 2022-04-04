import React from "react";
import { observer } from "mobx-react";
import { Input } from "../Input";
import { TestMechanics } from "../store/TestMechanics";

import styles from "./styles.module.scss";

export const TestMechanicsCard: React.FC = React.memo(
  observer(function TestMechanicsCard() {
    const model = React.useMemo(() => new TestMechanics(), []);

    const handleInputChange = React.useCallback(
      (
        e: React.ChangeEvent<HTMLInputElement>,
        params: { id: number; value: boolean }
      ) => {
        model.setUserAnswer({ ...params, checked: e.target.checked });
      },
      [model]
    );

    return (
      <div className={styles.testMechanicsCard}>
        <h1 className={styles.question}>{model.question.label}</h1>

        <div className={styles.answers}>
          {model.question.answers.map((answer) => (
            <Input
              key={answer.id}
              label={answer.label}
              type={model.question.type}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleInputChange(e, { id: answer.id, value: answer.correct });
              }}
            />
          ))}
        </div>

        <button
          className={styles.button}
          onClick={model.checkAnswers}
          disabled={!model.userAnswers.length}
        >
          Ответить
        </button>
      </div>
    );
  })
);
