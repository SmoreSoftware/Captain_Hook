<html>

<div align="center">
<h1>Captain Hook</h1>
<h3>Ever wanted to screw around with webhooks? Now you can!</h3>

<b>Instillation</b>
-Clone or download the repository.
-Create a webhook on your desired server.
-Create a config.json. The content of it should be this:
```javascript
{
  "id": "your webhook ID goes here",
  "token": "your webhook token goes here"
}

```
You can get the values of "id" and "token" from looking at your webhook URL.
```
https://discordapp.com/api/webhooks/id/token
```
-Open a terminal window. Run the following command:
```
npm install
```
When that finishes running, you are installed and ready to go.

<b>Usage</b>
-Run the following command:
```
npm start
```
-Open a browser window. Go to the following webpage:
```
localhost:8000
```
You are now ready to use your webhook to send messages!
</div>

</html>
