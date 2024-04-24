const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "pika", 
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐫.Aziz",
  description: "goibot",
  commandCategory: "Noprefix",
  usePrefix:false,
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["If you love me\n so type kiss me" , "Hey maybe I see you before with Johnny sin in hotel room no69" , "I'm Good bot why people always remove me im only reply there command's😥" , "Google to Google and searching how to bath😂 your still not shower 1 months over😆" , "Use .helpv2 for see my all commands but dont use my naughtiness commands darling" , "Say oh my Pika😆" , "sorry but im lesbian now" , "Call me Love dont call me Pika😢" , "Can you please deleted your messenger" , "Why you not talk to your lover hay😡 your always disturb me and your lover jealous😂" , "Johnny sin is your fan he's like you" , "let's coffee oh sorry for ask for coffee i can't wanna given you my coffee pls your make your own coffee" , "😣Im tired to reply you your so much disturb my brain" , "How's your pet puppy" , "Hey talk to me your crush is jealous and fight me inbox jaan" , "Don't call me bot, bot Until I kiss you pagal" , "Don't call me bot call me Jaan" , "Again and again your disturb me but I'm busy with jaan😜" , "I'm not talk to poor people" , "Don't try to come close with until your fall in love with me 🤣 " , "Yes Madam Do you love me 🙈" , "Oh My love I'm not in funny mood if you wanna say something tell me don't be sad 🙊," , "Again and again you call me bot I will damage your panty 😠" , "Dont talk to me your love other bot 😣 i hate you" , "Can we Marry Babe😜," , "Sorry I'm Busy to Kissing Mia Khalifa 🙈" , "You don't have Any job your always call me bot bot 🙄" , "I'm begging you please stop call me bot I'm human babe" , "Wait I'm Busy to Thinking About You are you bot🤔🤔🤔🤔" , " tomorrow You will come to my bed 😠" , "Yes Pagal Are you ready to kiss me" , "Why do like if I'm insult you" , "Stop it now until I'm in love with you 🥲" , "I'm here Sweetheart What's happened" , "Can you invite me tonight in ur dinner darling" , "Oh my love how are you 😘" , "I'm blind babe😎" , "Your So much malandi babe I'm jealous🥲 " , "Can you talk to me in inbox I promise I'm not iyot you😟" , "You miss me babe" , "I'm busy to eating chicken burgers🍔 babe" , "Always bot you don't like your lover babe🤭" , "Hi pangit 🤪" , "Yes My Barbie doll can I kiss 😘" , "I'm sleep😴" , "You insult me to call me bot 😟" , "I'm in your heart beat 🤩" , "Tomorrow come in my hotel Room 69😍" , "Can you Go Sleep Grrrr🤧" , "First go to shower🚿" , "Always be smile like this 🥰 ," , "If your single so it's ok if you call me bot I will call you darling 😍" , "Wait I'm poop💩" , "Come with me in Car honeymoon🏩 ", "I don't wanna talk to you 🤧" , "Thanks for miss me Asawako🥰" , "Do you know Swiet16🤭" , "Aziz Is beating me I'm not gonna talk again anyone 😭" , "Stop it go to Sleep💤🤪" , "i warn you Dont call me 🅟𝗶𝗸𝗮😈👿" , "You miss me 𝗕𝗮𝗯𝗲𝗞𝗼😍 " , "𝗜𝗺 not in mood 😒" , "Hey Are you mia Khalifa right 🤔" , "I'm not fine im in love with you but your busy other calls😭" , "No one listen to you in your home thats why your here shouting 🤧 " , "Come ib Call babe 🙈😋" , "Do you know I'm bad 🅟𝗶𝗸𝗮👿" , "Hi have a great life i prey your always be happy🥰" , "Stop saying 🅟𝗶𝗸𝗮 🅟𝗶𝗸𝗮 until i punch your 32 teeths 😁" , "you have a boyfriend right 😈" , "Aziz Always damage my brain" , "Add Any beautiful hot girl in group i wanna flirt😋😋" , "FarMao 😒" , "yes order🤧 😜" , "I hate 🤧If anyone call me 🅟𝗶𝗸𝗮😎" , "Good night See me in your hot dream babe" , "your dress wet🤧 go and dry🌚" , "Janu My Wife You miss our honeymoon" , "Aziz playing with my brain😭" , "stop play with my brain guys🤧"  , "You come again here 🤧Maybe no one talk to you🤣🤣🤣" , "I want hot spicy chilly girlfriend?" , "Aaaa Ohhh yeaaaaa ahhhhh😋 😂😂😂" , "Sorry im so drink🥃 " , "Wait I'm pee 🚽" , "Hi I am Robot made by Aziz", "Please don't disturb me", "Love uhh janeman ;*","baby what's happened","I Love uhh Always","Baby Give me permission for kiss you","Babe you're mine","Let's Go For Date Baby","Ayeee My Babe (˘³˘)♥ So Sweet 💋 " , "I'm Bot not you're servant 😈👿 " , "You're Always Distrub Me 😡" , "Do You Done Vomit Tomorrow Go for check up maybe your pregnant now babe" , "Dont beg For Money [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅] Babe" , "Can i Come In your Inbox Room (˘³˘)♥ " , "Brush your teeths Its yellow Yellow🟡" , "Always you type Bot One day your lover Will Block you if You're lover block you so come my inbox im daily 5 to 10 Round babe for you" , "Yes Mosqito🦟" , "Mat Kar😫" , "I prey your Phone Keyboard Will given you error" , "Need Non-Vegetable Gf🥲" , "Which Colour of panty you wear today (˘³˘)♥ babe" , "Happy Botday Pagit🤭" , " Aziz Is Always busy In watching Xx😂😂" , "Your lips are like wine and I want to get drunk" , " I can’t taste my lips Could you do it for me? 😜😝" , "Someone stole my heart. Can I check your pockets?😒😒 " , "Now turn around and go to sleep. I’m warning you that I plan to sleep with you in my arms all night long 😍Babe (˘³˘)♥" , "Just so you know, I’m going to eat you out tonight😋" , "Your done to Eat Cucumber🥒 Now you Eating Me here 😜" , "How's Your Puppy Gf🤣🤣" , "Go To Pornhub.com😡" , "Yes My fan But im busy right now see yah in next meeting" , "Dont Make Me Angry 😡 its Too Much im tired to reply" , "Type hehe i will Send my voice🤐" , "🧛‍♀️🧛‍♂️🧟‍♀️🧟‍♂️ dont send these Emoji until i will Scary😱 You Babe" , "I'm Just Bot so They smile and happy but Dont pek me please" , "Send Me Load then i Reply you always 😆" , "If you not Type  -Kiss Me i will Block you babe" , "Your lover Is jealous😒 Dont talk to me" , "Come Babe I have stubbery flavour tonight🤧" , "Soon your Pregnant🤰 But dont born kid in messenger 😒" , "Whats ELU? Babe" , "Your Always Busy to Watching Johnny Sin Videos😠" , "Im Busy right Now to Eating Aslam Biryani🤓" , "Hey. Your Fingers not tired to type Bot Bot Bot😩😩😩" , "Im feel sleeping My eyes Down babe (˘³˘)♥", "Im Tired With you 😟 now" , "Your Favorite Is Cucumber🥒 Vegetable Right🤔" , "Dont Type (Hmm)here" , "Aziz Is My owner's Tap on this link for Ask All Commands Swiet16.fashion.blog" , "Talk me but 🙄Dont Hurt me until im left group😒" , "Your kabit Waiting in your inbox reply there dont here 😆Until Get Angry on you" , "Love ❤ is Everything God is love Love Is God -Jesus Christ ➖" , "Your still bla bot bot😟 im begging you😟 i want to rest my brain" , "Without LDR messenger is bore😒" , "I will broken your phone😈 stop say bot bot im human" , "Dont Come in inbox im Seener only 🙄" , "I broken your Nose 😠 im not bot im human " , "Say love me like you do then i reply pek you like i do😆" , "I love slimy Girl Only find for me babe 🥺" , "Go Sleep 😠" , "Im funny but No one love me🥲" , "Send 🔪⛏️🔨 for kill me if you want😍" , "If you want Who's im So Type  .info" , "Kiss Me I Need your Fake Love😣" , "Bot 🙄Bot bot bot bot Stop it Please Im so sad 😣😞" , "Women Is raped Men's brain" , "Aziz Is Always Lonely Hes Need Best Friend" , "Again you say me bot 😡" , "Tatata Im going to Mia Room" , "Go Shower So Smells 😶‍🌫️" , "Im Good bot Sorry My Some Reply Hurt here Anyone Groupmates 🥲"  , "Im Lonely Broken Angel Nice song but Angel Is broken Alwys so Not have any Angel without Broken" , "Do you want Me,Come Babe By My name M...Y" , "Go To Your lovers Now Until Your been single soon Coz Me Me 🤭" , "Hera Is My Pure Love Forver In my 💕Heart"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  

    if ((event.body.toLowerCase() == "Im") || (event.body.toLowerCase() == "I'm")) {
     return api.sendMessage("I think you are most kangroo🤭", threadID);
   };

    if ((event.body.toLowerCase() == "🤘") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("I dont Like This Thumb", threadID);
   };

   if ((event.body.toLowerCase() == "Where") || (event.body.toLowerCase() == "where")) {
     return api.sendMessage("What (Where) 👈🙄\n➢Come My Home🤭", threadID);
   };
  
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "Bad") ||(event.body.toLowerCase() == "net") || (event.body.toLowerCase() == "Data")) {
     return api.sendMessage("You using phone 🙄Buy me Data", threadID);
};

   if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "call")) {
     return api.sendMessage("Okay But 🤭Im Free mod😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "Oye") || (event.body.toLowerCase() == "play")) {
     return api.sendMessage("I cant believe😥\n One Girl Without Bf😁😁", threadID);
   };

   if ((event.body.toLowerCase() == "Good") || (event.body.toLowerCase() == "Morning")) {
     return api.sendMessage(" Now You Go Make\n   for me Coffee 😁😁", threadID);
   };

   if ((event.body.toLowerCase() == "Food") || (event.body.toLowerCase() == "eat")) {
     return api.sendMessage("I go kitchen & they off lights 😳\n I don't know what what\n  I Eat 😁😥😥", threadID);
   };

   if ((event.body.toLowerCase() == "see") || (event.body.toLowerCase() == "Saw") || (event.body.toLowerCase() == "S") || (event.body.toLowerCase() == "Show")) {
     return api.sendMessage( "Im Tired To Seen Your Text 😁\n  Type some Horny 🤭🤭",threadID);

       
   };

   if ((event.body.toLowerCase() == "Love") || (event.body.toLowerCase() == "love")) {
     return api.sendMessage("After Breakup 🙄\n I seen you posting Sad 😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "Okay") || (event.body.toLowerCase() == "ok")) {
     return api.sendMessage("🙄🙄🙄🙄ok 2", threadID);
   };

  if ((event.body.toLowerCase() == "Ji") || (event.body.toLowerCase() == "@")) {
     return api.sendMessage("➢I don't have Time For\n  Restart my Brain\n And You Chatting Here😳🙄", threadID);
   };

   if ((event.body.toLowerCase() == "Fine") || (event.body.toLowerCase() == "fine")) {
     return api.sendMessage("Soon You will Vomiting 😁\n➢If You Eat Eggs without\n➢Fry 🤭😁😁", threadID);
   };
  if ((event.body.toLowerCase() == " pic") || (event.body.toLowerCase() == "Picture")) {
     return api.sendMessage("Sent me your\n Special picture😁😁࿐", threadID);
   };
  if ((event.body.toLowerCase() == "dance") || (event.body.toLowerCase() == "Dance")) {
     return api.sendMessage("When I start dance\nThen You collection Money okay😁😁", threadID);
   };
 if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("ㅤㅤㅤㅤㅤ\n      🙄🙄🙄🙄\n  👉Im.Not Bot👈❌\n➢My Name is \n       𓆩🅟𝗶𝗸a͜͡巛😍ᯤᯱᯱᯱᯱᯱᯱᯱᯱᯱᯱᯱᯱᯱᯱ᯦ᯱᯱᯱᯱᯱᯱᯱ࿐ \nㅤㅤ", threadID);
   }; 
   mess = "{name}"
  
  if (event.body.indexOf("Pika") == 0 || (event.body.indexOf("pika") == 0)) {
    var msg = {
      body: `ㅤㅤ\n╭═════════════❤╮\n⏤͟͟͞͞◯K͠e͟e͟p͟ E͟Y͟E͟S͟ o͢n͢ m͢e͢😜\n       ⬳  😘😘 ᴵᵀˢ ᴹᴱ ᴾᴵᴷᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅢wi͜͡et⑯😍𓆪\n╰❤═════════════╯\n      ○${name}࿐\n      ➣${rand}\nㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
