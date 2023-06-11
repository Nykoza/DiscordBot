import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";
import { Message } from "discord.js";

interface Quiz {
  question: string;
  answers: string[];
}

const quiz: Quiz[] = [
  {
    question: "De quelle couleur est le ciel ?",
    answers: ["bleu"],
  },
  {
    question: "Quel jour est né nicolas ?",
    answers: ["21"],
  },
  {
    question: "De quelle couleur est le cul a enzo ?",
    answers: ["rouge"],
  },
  {
    question: "Combien y a t'il de piliers dans l'islam ?",
    answers: ["5"],
  },
  {
    question: "Hawaï appartient à quel pays ?",
    answers: ["États-Unis", "USA", "etats unis", "etats-unis"],
  },
  {
    question: "Combien d'États y-a-t-il aux États-Unis ?",
    answers: ["50"],
  },
  {
    question: "Quel est le plus long fleuve de France ?",
    answers: ["Rhin", "Le Rhin"],
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    answers: ["Océan Pacifique", "Pacifique", "ocean pacifique"],
  },
  {
    question: "Quel est le nom de la capitale du Laos ?",
    answers: ["Vientiane"],
  },
  {
    question: "Quand la Seconde Guerre mondiale a-t-elle pris fin ?",
    answers: ["1945"],
  },
  {
    question: "Quand le premier homme a-t-il atterri sur la lune ?",
    answers: ["1969"],
  },
  {
    question: "Qui a inventé l'avion ?",
    answers: ["Les frères Wright", "frères Wright", "Wright"],
  },
  {
    question: "En quelle année a eu lieu la découverte de l'Amérique ?",
    answers: ["1492"],
  },
  {
    question:
      "En quelle année l'invasion arabe de l'Espagne a-t-elle commencé ?",
    answers: ["711"],
  },
];

export const skyQuiz: Command = {
  data: new SlashCommandBuilder()
    .setName("quiz")
    .setDescription("Quiz de culture générale"),
  run: async (interaction) => {
    const item: Quiz = quiz[Math.floor(Math.random() * quiz.length)];

    const collectorFilter = (response: Message) => {
      return item.answers.some(
        (answer) => answer.toLowerCase() === response.content.toLowerCase()
      );
    };

    interaction.reply({ content: item.question, fetchReply: true }).then(() => {
      if (interaction.channel) {
        interaction.channel
          .awaitMessages({
            filter: collectorFilter,
            max: 1,
            time: 15000,
            errors: ["time"],
          })
          .then((collected) => {
            interaction.followUp(
              `${collected?.first()?.author} a trouvé la bonne réponse!`
            );
          })
          .catch((collected) => {
            interaction.followUp(
              "Personne n'a trouvé la bonne réponse à temps bande de nazes."
            );
          });
      }
    });
    //    await interaction.reply({ content: "Hello world", ephemeral: true });
  },
};
