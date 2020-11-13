// This command serves as an is_up check. also it's fun for some reason :)
import { CommandClient, Command, CommandContext, Message, Intents } from 'https://raw.githubusercontent.com/harmony-org/harmony/main/mod.ts'


export class PingCommand extends Command {
    name = "ping"

    execute(ctx: CommandContext) {
        console.log(ctx.message.content)
        ctx.channel.send(`pong! Ping: ${ctx.client.ping}ms`)
    }
}