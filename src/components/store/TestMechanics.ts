import { makeAutoObservable, action } from "mobx";

type IQuestion = {
  label: string;
  type: "single" | "multiple";
  answers: { id: number; label: string; correct: boolean }[];
};

export class TestMechanics {
  public question: IQuestion = {
    label:
      "Бумажная полоска имеет длину 12 см. Для аппликации нужно отрезать 3/4 этой полоски. Сколько сантиметров нужно отрезать?",
    type: "multiple",
    answers: [
      {
        id: 1,
        label:
          "9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см",
        correct: true,
      },
      {
        id: 2,
        label:
          "9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см9 см",
        correct: false,
      },
      { id: 3, label: "109 см", correct: false },
      { id: 4, label: "109 см", correct: false },
      { id: 5, label: "109 см", correct: false },
      { id: 6, label: "109 см", correct: false },
      { id: 7, label: "109 см", correct: false },
      { id: 8, label: "109 см", correct: false },
      { id: 9, label: "109 см", correct: false },
      { id: 10, label: "109 см", correct: false },
      { id: 11, label: "109 см", correct: false },
    ],
  };

  public userAnswers: { id: number; value: boolean }[] = [];

  private userResultAnswer: "allRight" | "partiallyRight" | "incorrect" =
    "incorrect";

  constructor() {
    makeAutoObservable(this, {
      checkAnswers: action.bound,
    });
  }

  public setUserAnswer(answer: {
    id: number;
    value: boolean;
    checked: boolean;
  }) {
    if (answer.checked) {
      if (this.question.type === "multiple") {
        this.userAnswers.push(answer);
      } else {
        this.userAnswers = [answer];
      }
    } else {
      this.resetUserAnswer(answer.id);
    }
  }

  private resetUserAnswer(id: number) {
    this.userAnswers = this.userAnswers.filter((it) => it.id !== id);
  }

  public checkAnswers() {
    const countOfCorrect = this.question.answers.filter(
      (it) => it.correct
    ).length;

    if (this.userAnswers.some((it) => it.value)) {
      this.userResultAnswer =
        this.userAnswers.length !== countOfCorrect
          ? "partiallyRight"
          : "allRight";
    } else {
      this.userResultAnswer = this.userAnswers.find((it) => it.value)
        ? "partiallyRight"
        : "incorrect";
    }
    console.log(this.userResultAnswer);
  }
}

// center checkmarks
// check long text
// check long text without whitespaces
