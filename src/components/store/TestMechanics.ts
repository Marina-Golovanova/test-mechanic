import { makeAutoObservable } from "mobx";

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
      { id: 1, label: "9 см", correct: true },
      { id: 2, label: "90 см", correct: true },
      { id: 3, label: "109 см", correct: false },
      // { id: 4, label: "109 см", correct: false },
      // { id: 5, label: "109 см", correct: false },
      // { id: 6, label: "109 см", correct: false },
      // { id: 7, label: "109 см", correct: false },
      // { id: 8, label: "109 см", correct: false },
      // { id: 9, label: "109 см", correct: false },
    ],
  };

  private userResultAnswer: boolean = false;

  public userAnswers: { id: number; value: boolean }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUserAnswer(answer: { id: number; value: boolean }) {
    if (this.question.type === "multiple") {
      this.userAnswers.push(answer);
    } else {
      this.userAnswers = [answer];
    }
  }

  deleteUserAnswer(id: number) {
    this.userAnswers = this.userAnswers.filter((answ) => answ.id !== id);
  }

  checkAnswers() {
    if (this.userAnswers.map((answ) => answ.value).includes(false)) {
      this.userResultAnswer = false;
    } else if (
      this.userAnswers.length <
      this.question.answers.filter((answ) => answ.correct).length
    ) {
      this.userResultAnswer = false;
    } else {
      this.userResultAnswer = true;
    }
    console.log(this.userResultAnswer);
  }
}
