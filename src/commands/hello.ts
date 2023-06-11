import { Command } from "../interfaces/Command";
import { SlashCommandBuilder } from "@discordjs/builders";

export const hello: Command = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Hello world description"),
  run: async (interaction) => {
    await interaction.reply({ content: "Hello world", ephemeral: true });
  },
};
