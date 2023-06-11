import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

enum Choices {
  PAPER = "papier",
  ROCK = "caillou",
  SCISSORS = "ciseaux",
}

enum WinStates {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

const choices = [Choices.PAPER, Choices.ROCK, Choices.SCISSORS];

const getPlayerChoice = (choice: string): Choices => {
  switch (choice) {
    case Choices.SCISSORS:
      return Choices.SCISSORS;
    case Choices.ROCK:
      return Choices.ROCK;
    case Choices.PAPER:
      return Choices.PAPER;
    default:
      return Choices.ROCK;
  }
};
const hasPlayerWin = (
  playerChoice: Choices,
  botChoices: Choices
): WinStates => {
  if (playerChoice === botChoices) {
    return WinStates.DRAW;
  }
  if (playerChoice === Choices.SCISSORS && botChoices === Choices.PAPER) {
    return WinStates.WIN;
  }
  if (playerChoice === Choices.PAPER && botChoices === Choices.ROCK) {
    return WinStates.WIN;
  }
  if (playerChoice === Choices.ROCK && botChoices === Choices.SCISSORS) {
    return WinStates.WIN;
  }
  return WinStates.LOSE;
};

export const rockPapierScissorsAI: Command = {
  data: new SlashCommandBuilder()
    .setName("pcsbot")
    .setDescription(
      "C'est un jeu de papier caillou ciseaux jouable contre le bot"
    )
    .addStringOption((option) => {
      return option
        .setName("choix")
        .setDescription("Papier/Caillou/Ciseaux")
        .setRequired(true)
        .setChoices(
          { name: "Papier", value: Choices.PAPER },
          { name: "Caillou", value: Choices.ROCK },
          { name: "Ciseaux", value: Choices.SCISSORS }
        );
    }),
  run: async (interaction: CommandInteraction) => {
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerChoice = getPlayerChoice(
      interaction.options.data[0].value as string
    );

    // console.log(interaction.options.);

    switch (hasPlayerWin(playerChoice, botChoice)) {
      case WinStates.DRAW:
        await interaction.reply({
          content: `Personne n'a gagné. Mon choix était ${botChoice}.`,
        });
        break;
      case WinStates.LOSE:
        await interaction.reply({
          content: `Tu as perdu. Mon choix était ${botChoice}.`,
        });
        break;
      case WinStates.WIN:
        await interaction.reply({
          content: `Tu as gagné. Mon choix était ${botChoice}.`,
        });
    }
  },
};
