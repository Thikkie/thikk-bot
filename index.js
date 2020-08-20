console.log("Im now alive");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
    console.log(message.content);
    if (message.content === 'status') {
        
        message.channel.send('HelloWorld');
    }
    
});
bot.on('message', message => {
  
  if (message.content === 'kill me pls') {
      message.channel.send("*bang!*  " + message.author.username + " is ded" );
      
      message.channel.send({files: ["https://i.ytimg.com/vi/YX1Fqsnjx7E/maxresdefault.jpg"]});
      
      
  }
});

//shooting

bot.on('message', message => {
 
  if (message.content.startsWith('%shoot')) {
    
    var shotvictim = [message.content.replace('%shoot','')];
    
    var shooter = [message.author.username];

    message.delete(1);
    
    
    
    
    var bodyparts = [" in the head"," in the heart"," in the butt"," in the thigh"," in the foot"," in the hand"," in the tail"," in the neck"," in the crotch",' in the legs',' in the arm',' but missed'];
    var randomBodyparts = bodyparts[Math.floor(Math.random() * bodyparts.length)];
    message.channel.send(shooter + " shot" + shotvictim + randomBodyparts);
      
      
      
      
    }
  });
bot.on("message", (message) => {
    const responseObject = {

    
    
    
    
    
    
    
    "Die":"monster!",
    "You":"dont",
    "belong":"in",
    "this":"world!",
    "It":"was",
    "not":"by",
    "my":"hand",
    "that":"i",
    

    
  };

 
    if(responseObject[message.content]) {
      message.channel.send(responseObject[message.content]);
    }
  });
 
 
 
  //Police

  bot.on("message", (message) => {
    const swearWords = ["Nigga", "nigga",'nigger','Nigger','Nigger','nigger'];
    if( swearWords.some(word => message.content.includes(word)) ) {
      message.delete(1);
    var warning= ['Got my eyes on you','Watch your mouth','That isnt really nice']
  
  var randomwarning = warning[Math.floor(Math.random() * warning.length)];
  

  message.delete(1);
  message.channel.send (randomwarning);
  message.channel.send(message.author.toString());
  
}});

//coing toss
bot.on('message', message => {
  if (message.content.includes ('%cointoss'))
  
  {var answers = ['Head.','Tail.']
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  message.channel.send(randomAnswer, {files: ["https://www.nzmint.com/productimages/magnify/1/724_1272_2101.jpg"]});
  
  
  
  }});


bot.on('message', message => {
    
    if (message.content === 'ur mom gae') {
        
        message.channel.send('no you');
    }
   
});



  
 


   
bot.on('message', message => {
    
    if (message.content.includes ('stfu')) {
        message.delete(1);
        message.channel.send('Naughty');
    }
    if (message.content.includes ('%invite')) {
      message.delete(1);
      message.channel.send('https://discordapp.com/oauth2/authorize?client_id=488699894186508290&scope=bot&permissions=8');
  }
   
});
bot.on('message', message => {
    
  if (message.content.includes ('%help')) {
      message.delete(1);
      message.channel.send({files:["https://cdn.discordapp.com/attachments/578153799592443914/691660838796394637/connro.png"]});
  }
 
});







bot.on('message', message => {
    if (message.content.startsWith("%say")) {
        message.delete(1);
        message.channel.sendMessage((message.content.replace('%say ','')));
        };
});

//Blackjack
bot.on('message', message => {
  if (message.content.includes ('%bj'))
  
  {const answers = ['https://lh6.ggpht.com/VGhrioGLXKYiSo2ZEkznilKYawK6pbRouI1QpUEBLuIS6oE8LbPwZsl42JAw9dzpwA',
                     'https://previews.123rf.com/images/pandawild/pandawild1509/pandawild150900126/45128574-poker-playing-card-2-diamond.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/29_Tre_di_fiori.jpg/349px-29_Tre_di_fiori.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/2000px-Playing_card_spade_4.svg.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/44_Cinque_di_picche.jpg/558px-44_Cinque_di_picche.jpg',
                   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/32_Sei_di_fiori.jpg/745px-32_Sei_di_fiori.jpg',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/2000px-Playing_card_club_7.svg.png',
                   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/2000px-Playing_card_club_8.svg.png',
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/819px-Playing_card_spade_9.svg.png',
                   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/819px-Playing_card_club_10.svg.png',
                   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Playing_card_spade_11.svg/2000px-Playing_card_spade_11.svg.png' ]
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  message.channel.send(`Here!`);
  message.channel.send(randomAnswer)
  
  }});
  
  //end bj
  //8ball
  bot.on('message', message => {
    if (message.content.includes ('%8ball'))
    
    {var answers = ['Yes','Kinda','100%.','no.','sure is','I think not','Probably',"Probably not"]
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer);

  }});
  bot.on('message', message => {
    var Percentage = ["92%",'94%',"56%",'72%',"91%","89%","69%"]
    var randomPercentage = Percentage[Math.floor(Math.random() * Percentage.length)];
    if (message.content.includes ('%kill'))
    message.channel.send('please wait...')
    
    .then(msg => bot.destroy())
    
    .then(message.channel.send("You can't kill me, Im not alive."))

    .then(() => bot.login(process.env.token));

    
    

  });

//testing
const superagent = require('superagent');
bot.on('message', async message => {
  if (message.content.includes ('%cat')){
    let msg = await  message.channel.send("Here your random cat pic");
    
    let {body} = await superagent
    .get('http://aws.random.cat/meow')
  
   if(!{body}) return message.channel.send("out of pic rn")
   let cEmbed = new Discord.RichEmbed()
   .setColor(0x00A2E8) 
   .setImage(body.file)
   .setTimestamp()
   .setFooter("Catto", bot.user.displayAvatarURL)
   message.channel.send({embed: cEmbed})
   
  }
  });
  //testing 2
  const snekfetch=require("snekfetch");
  bot.on('message', async message => {
    
    if (message.content.includes ('%meme')){
      let msg = await  message.channel.send("Meme?? Okay");
      let {body} = await snekfetch
      .get("https://www.reddit.com/r/dankmemes.json?sort=top&t=week")
      const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
      const randomnumber = Math.floor(Math.random() * allowed.length)       



       let mEmbed = new Discord.RichEmbed()
        .setColor(0x00A2E8) 
        .setImage(allowed[randomnumber].data.url)
        .setTimestamp()
        .setFooter("r/dankmemes", bot.user.displayAvatarURL)
       message.channel.send({embed: mEmbed})
    }  
  });
  //Testing Full Project 

  
  bot.on('message', async message => {
    
    if (message.content.includes ('r%')){
      var redditlink = message.content.replace('r%','');
      var trueredditlink = "https://www.reddit.com/r/" + redditlink + ".json?sort=top&t=week";
      console.log(trueredditlink);
      let msg = await  message.channel.send("Okay...");
      let {body} = await snekfetch
      .get(trueredditlink)
      const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
      const randomnumber = Math.floor(Math.random() * allowed.length)       



       let mEmbed = new Discord.RichEmbed()
        .setColor(0x00A2E8) 
        .setImage(allowed[randomnumber].data.url)
        .setTimestamp()
        .setFooter("r/" + redditlink, bot.user.displayAvatarURL)
       message.channel.send({embed: mEmbed})
       console.log(trueredditlink)
    }  
  });
  //testtingg
  bot.on('message', async message => {
    const fetch = require("node-fetch")
    if (message.content.includes ('r/')){
    
      const subReddits = message.content.replace('r/','');
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const url = `https://www.reddit.com/r/${random}.json?sort=top&t=week`;
    const res = await fetch(url);
    const json = await res.json();
    const posts = json.data
       .filter(f => msg.channel.nsfw || !f.nsfw);
  
    if (!posts.length) return message.channel.send("No posts, maybe try in a nsfw channel");
  
      const post = posts[Math.floor(Math.random() * posts.length)];
      const redditUrl = `https://www.reddit.com${post.reddit}`;
      const embed = new MessageEmbed()
          .setColor(0x00A2E8)
          .setImage(`https://imgur.com/${imageData.hash}${imageData.ext.replace(/\?.*/, '')}`)
          .setTitle("Post from r/" + random)
          .setURL(redditUrl)
          .setFooter("Requested by ", user.displayAvatarURL)
          //this might be imgur upvotes or reddit upvotes idk
          .addField("Votes", post.score);
      message.channel.send(embed)
      message.channel.send(url)
  }});







//storytime
bot.on('message',  message => {
  
  var nameUser = ["Young lad", "Ol' salt","Fine lad ","Big ol' seadog","Yer lass","Lassie"]; 
  var randomNameuser = nameUser[Math.floor(Math.random() * nameUser.length)];
  
  var tellStory = ["Wel' buckle up","All Hand Hoy then","Hava' sit","Avast Ye will ya?"]
  var randomStory = tellStory[Math.floor(Math.random() * tellStory.length)];
  
  var buckAlias = [" a son of a biscuit eater "," a scury dog ",' an ass ' ];
  var randomBucko = buckAlias[Math.floor(Math.random() * buckAlias.length)];

  var timing = [" a year ago"," a decade ago",' a long ass time ago' ];
  var randomTiming = timing[Math.floor(Math.random() * timing.length)];
  
  const story1 = ["A bucko of mine, he was" + randomBucko +"who shot me in the ass" + randomTiming +". So i tracked that dumb smug down"+ " and shot him in the ass too." ];
  
  if (message.content.includes ('%storytime')){
    message.delete(1)
    message.channel.send(randomNameuser + " wanna hear eh story from captain fish aye? " + randomStory)
     
     .then(message.channel.send(story1));

  }  
});
  
//botgame


bot.on('ready', () => {
  bot.user.setGame('vibing')
})


bot.login(process.env.token);
