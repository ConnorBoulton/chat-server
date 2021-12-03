// const express = require('express')
// const messageController = require('./controllers/messages_controller')

// const app = express()

// app.use(express.json())

// const BASE_URL = '/api/messages'

// app.get(BASE_URL, messageController.read)
// app.post(BASE_URL, messageController.create)
// app.put(`${BASE_URL}/:id`, messageController.update)
// app.delete(`${BASE_URL}/:id`, messageController.delete)

// app.listen(3001, () => {
//     console.log("server listening on port 3001")
// })

const express = require("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});