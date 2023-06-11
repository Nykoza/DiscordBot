import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const rockPapierScissors: Command = {
  data: new SlashCommandBuilder()
    .setName("pcs")
    .setDescription(
      "C'est un jeu de papier caillou ciseau jouable à 2 personnes"
    )
    .addStringOption((option) => {
      return option
        .setName("choix")
        .setDescription("Papier/Caillou/Ciseaux")
        .setRequired(true)
        .setChoices(
          { name: "Papier", value: "paper" },
          { name: "Caillou", value: "rock" },
          { name: "Ciseau", value: "scissors" }
        );
    }),
  run: async (interaction) => {
    await interaction.reply({
      content: "Encore en développement",
      ephemeral: true,
    });
  },
};
