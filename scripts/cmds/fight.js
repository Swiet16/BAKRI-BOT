const fs = require('fs');

module.exports = {
  config: {
    name: "war",
    version: "1.0",
    author: "Doru",
    role: 2,
    category: "texts",
    guide: {
      vi: "Not Available",
      en: "cpx @(mention)"
    } 
  },

  onStart: async function ({ api, event, userData, args }) {
    var mentions = Object.keys(event.mentions);
    if(mentions.length === 0) return api.sendMessage("Kam se kam ek dost ko tag karna zaroori hai jise aap kuch bura bolna chahte hain", event.threadID);
    var arraytag = []; 
    mentions.forEach((mention) => {
      arraytag.push({id: mention, tag: event.mentions[mention]});
    });
    var a = function (a) { api.sendMessage(a, event.threadID); }
    
    // war.txt file se messages padhna
    function sendMessage() {
      fs.readFile('war.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        
        // war.txt se har ek message ko alag alag bhejna
        var messages = data.split("\n"); // Splitting messages by new line
        var delay = 2000; // Delay between messages in milliseconds
        messages.forEach((message, index) => {
          setTimeout(() => {
            arraytag.forEach((mention) => {
              a({body: message + " " + mention.tag, mentions: [{id: mention.id, tag: mention.tag}]});
            });
          }, index * delay);
        });

        // Fir se messages ko bhejne ke liye
        setTimeout(sendMessage, messages.length * delay); // Delaying to start sending messages again
      });
    }

    // Pehli baar messages ko bhejne ke liye
    sendMessage();
  }
};
