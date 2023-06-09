import { CommandInteraction, Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const Command of CommandList) {
      if (
        (interaction as CommandInteraction).commandName === Command.data.name
      ) {
        await Command.run(interaction as CommandInteraction);
        break;
      }
    }
  }
};
