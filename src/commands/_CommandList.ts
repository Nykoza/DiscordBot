import { Command } from "../interfaces/Command";
import { hello } from "./hello";
import { skyQuiz } from "./skiQuiz";
import { rockPapierScissors } from "./rockPapierScissors";
import { rockPapierScissorsAI } from "./rockPapierScissorsAI";

export const CommandList: Command[] = [
  hello,
  skyQuiz,
  rockPapierScissorsAI,
  rockPapierScissors,
];
