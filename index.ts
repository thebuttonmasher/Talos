
// Import commands
import { CommandClient, Command, CommandContext, Message, Intents } from 'https://raw.githubusercontent.com/harmony-org/harmony/main/mod.ts'
import { PingCommand } from "./commands/ping.ts";

// Init Discord command client
const client = new CommandClient({
    prefix: '!'
})

// Listen for event when client is ready (Identified through gateway / Resumed)
client.on('ready', () => {
    console.log(`Ready! User: ${client.user?.tag}`)
})
// Add commands
client.commands.add(PingCommand)

// Login to discord
client.connect('Redacted', Intents.All); // DON'T FORGET TO REDACT BEFORE COMMIT!!!


