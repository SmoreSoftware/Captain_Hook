<html>

<h1>Captain Hook</h1>
<h3>Ever wanted to screw around with webhooks? Now you can!</h3>

<b>Instillation</b><br/><br/>
-Clone or download the repository.<br/>
-Create a webhook on your desired server.<br/>
-Create a config.json. The content of it should be this:<br/>
```javascript
{
  "id": "your webhook ID goes here",
  "token": "your webhook token goes here"
}

```
You can get the values of "id" and "token" from looking at your webhook URL.<br/>
```
https://discordapp.com/api/webhooks/id/token
```
-Open a terminal window. Run the following command:<br/>
```
npm install
```
When that finishes running, you are installed and ready to go.<br/>

<b>Setting up</b><br/><br/>
-Run the following command:<br/>
```
npm start
```
-Open a browser window. Go to the following webpage:<br/>
```
localhost:8000
```
You are now ready to use your webhook to send messages!<br/><br/>

<b>Sending messages</b><br/><br/>
Once you get your webpage loaded in and you see a list of text fields, you are ready to send a message.<br/>
In order to send a message, you must fill in the text fields with what you want to send.<br/>
On v1, you must fill in all the text fields with an appropriate value.<br/>
How to fill in fields appropriately:<br/>
-Webhook Username should be what you want the username of the hook to be<br/>
-Webhook Avatar should be a link that will be used as the webhook's avatar/profile picture<br/>
-Color must be a hex value (find them [here](https://www.w3schools.com/colors/colors_picker.asp))<br/>
-Author name should be the name you want to show up in the message as the Author<br/>
-Author icon should be a link that will be used for the author's icon<br/>
-Title should be what you want the title to be<br/>
-First text field should be some text you want under the title<br/>
-Second text field should be some text you want under the first text field<br/>
-Field 1 Title should be the tile you want for the field under the second text field<br/>
-Field 1 Value should be the text you want under the Field 1 Title<br/>
-Field 1 Short should be true or false (this is explained below)<br/>
-Field 2 Title should be the tile you want for the field under or next to Field 1<br/>
-Field 2 Value should be the text you want under the Field 2 Title<br/>
-Field 2 Short should be true or false (this is explained below)<br/>
-Footer should be some text you want to appear at the bottom of the message<br/><br/>

<b>What does "short" do?</b><br/><br/>
The "short" option on Fields 1 and 2 determines how much space the fields should take up.<br/>
If you want Fields 1 and 2 to show up next to each other, set "short" to true for both of them.<br/>
Below are some examples of messages with different settings for the value of "short".<br/>
[Both true](https://cdn.discordapp.com/attachments/324656649665118209/325425626851049484/unknown.png)<br/>
[Neither true](https://cdn.discordapp.com/attachments/324656649665118209/325425677216251904/unknown.png)<br/>
[Field 1 true, Field 2 false](https://cdn.discordapp.com/attachments/324656649665118209/325434641312120833/unknown.png)<br/>
[Field 1 false, Field 2 true](https://cdn.discordapp.com/attachments/324656649665118209/325434680436588555/unknown.png)<br/>

<h2>Looking for something more?</h2><br/><br/>

I am working on a v2 update that will massive changes.<br>
<b>Planned changes:</b><br/><br/>
-Landing page with navigation and customization<br/>
-Easier ways of setting things<br/>
-Multiple types of things to send (embeds, simple text, and more)<br/>
-Security features<br/>

<h3>Stay tuned for the massive v2 update!</h3>

</html>
