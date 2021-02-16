const Discord=require('discord.js'); 
const client=new Discord.Client();

const prefix= '!';

const fs = require('fs');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
    
}

client.once('ready', ()=>{ 
    console.log('Suraj, Reporting Online!'); 
})

client.on('message', message=>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args=message.content.slice(prefix.length).split(/ +/);
const command =args.shift().toLowerCase();

if(command === 'help'){
    client.commands.get('help').execute(message, args);
} else if( command == 'hi'){
    message.channel.send('What do you want?')
} else if( command == 'joke'){
    message.channel.send('Why did the idiot summon me?')
}else if( command == 'why?'){
    message.channel.send('Because he was lonely lol')
}else if( command == '2882'){
    message.channel.send('Ayyyy a Palindrome!')
}else if( command == 'Samsung'){
    message.channel.send('Youre so BAD! Apple is so much better, Apple Fanboy for life man. Apple is so cool because it just it. Samsung is baddddddd, you absolute waste of resources. You literally dont knowanything about tech. Apple is the best company ever man, so cool. ')
}else if( command == 'grammar'){
    message.channel.send('Lmao xD Arush is bad lol imagine ')
}else if( command == 'hey'){
    client.commands.get('hey').execute(message, args);
}else if( command == 'sad'){
    client.commands.get('sad').execute(message, args);
}else if( command == 'manchild'){
    client.commands.get('manchild').execute(message, args);
}else if( command == 'tanish'){
    message.channel.send('why are u like this?')
}else if( command == 'pawan'){
    message.channel.send('Just take your Hentai and leave <https://www.google.com/search?q=go+to+hornu+jai%3B&rlz=1C1CHBF_enUS920US920&sxsrf=ALeKk01s_zFRoPzvhM_MQTfLhsSEkOcIww:1613492021770&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj6rLiW5u7uAhVUCM0KHes5AQoQ_AUoBHoECAsQBg&biw=1920&bih=975#imgrc=kM3nC-V-ulAp6M>')
}else if( command == '69420'){
    message.channel.send('lol why tho')
}else if( command == 'dank'){
    message.channel.send('pls beg')
}else if( command == 'mona'){
    message.channel.send('Go away! Let me masturbate in peace')
}else if( command == 'mission'){
    message.channel.send('Eliminate and Replace Suraj Makunur')
}


});



client.login('ODEwNTU0ODIwMTUzODM1NTQx.YClWAA.uuqHOGqunPfn1NxhbmwBt6L4zJM');