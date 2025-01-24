# Nest Mail

Nest Mail is an NPM package that allows you to send simple emails through Hack Club's [Nest](https://hackclub.app/) mail server.

# Usage

First, import the package:

```js
const { sendMessage, interactiveMessage } = require("nest-mail");
```

There are two functions available currently.

## Send Message

```js
sendMessage({
  user: "YOUR_NEST_USERNAME",
  pass: "YOUR_NEST_PASSWORD",
  to: "RECIPIENT_EMAIL_ADDRESS",
  subject: "EMAIL_SUBJECT",
  text: "EMAIL_BODY",
  logs: true, // true: errors and success messages will be logged || false: errors and success messages will not be logged
});
```

## Interactive Message

```js
interactiveMessage({
  logs: true, // true: errors and success messages will be logged || false: errors and success messages will not be logged
});
```

This will prompt the user in the console to enter their username, password, recipient email address, subject and email body.

# Future

Hopefully, more methods of sending emails will be added in the future, such as predefined messages where the end user still has to provide their Nest credentials.
