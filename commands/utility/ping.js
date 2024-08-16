const { SlashCommandBuilder } = require('discord.js');
const ping = require('ping');
const exec = require('child_process').exec;
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pings the testing server to see if it is online'),
	async execute(interaction) {
        await interaction.deferReply();
        ping.sys.probe(process.env.SERVER_ADDRESS, function(isAlive){
            exec("ping " + process.env.SERVER_ADDRESS, function (err, stdout, stderr) {
                if(isAlive){
                    interaction.editReply(stdout + "\n The testing server is up!");
                }
                else{
                    interaction.editReply(stdout + "\n<@695056854488973364><@695056854488973364><@695056854488973364> THE TESTING SERVER IS DOWN!!!")
                }
            });
        })
	},
};