const express = require('express');
const request = require('request');
const bodyparser = require('body-parser');
const app = express();
const Discord = require('discord.js');
const config = require("./config.json");
const hook = new Discord.WebhookClient(config.id, config.token)

app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/webhook', (req, res) => {

  hook.edit(req.body.hookName, req.body.hookAvatar).catch(console.error);

  hook.sendSlackMessage({
    'username': req.body.hookName,
    'attachments': [{
      'pretext': `${req.body.pretext} \n`,
      'author_name': req.body.author,
      'author_icon': req.body.authorIcon,
      'title': req.body.title,
      'text': req.body.text,
      'fields': [{
          'title': req.body.title1,
          'value': req.body.value1,
          'short': req.body.short1
        },
        {
          'title': req.body.title2,
          'value': req.body.value2,
          'short': req.body.short2
        }
      ],
      'color': req.body.color,
      'footer': req.body.footer,
      'ts': Date.now() / 1000
    }]
  }).catch(console.error);

  console.log(req.body);

  res.redirect('/');
});

app.listen(8000, () => {
  try {
    console.log('Server started!');
  } catch (err) {
    console.error(err);
  }
});
