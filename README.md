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

<b>Usage</b><br/><br/>
-Run the following command:<br/>
```
npm start
```
-Open a browser window. Go to the following webpage:<br/>
```
localhost:8000
```
You are now ready to use your webhook to send messages!<br/><br/>

<h2>Looking for something more?</h2><br/><br/>

I am working on a v2 update that will massive changes.<br>
<b>Planned changes:</b><br/><br/>
-Landing page with navigation and customization<br/>
-Easier ways of setting things<br/>
-Multiple types of things to send (embeds, simple text, and more)<br/>
-Security features<br/>

<h4>Stay tuned for the massive v2 update!</h4>

</html>
