import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const hello: Command = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Hello world description")
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
    await interaction.reply({ content: "Hello world", ephemeral: true });
  },
};
