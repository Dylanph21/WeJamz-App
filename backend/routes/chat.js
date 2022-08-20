var express = require('express');
var router = express.Router();
const {JamsChat} = require('../db/schema.js');
const {app} = require('../server.js')
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', () =>{
  console.log('a user is connected')
})

router.get('/:chatId', async (req, res) => {
  try {
    var history = await JamsChat.find({chat_id: req.params.chatId})
    if (!history) {
      var doc = new JamsChat({chat_id: req.params.chatId, members: req.body.members, chats: []})
      await doc.save()
      var history = await JamsChat.find({chat_id: req.params.chatId})
    }

    res.status(200).send(history)

  } catch (err) {
    console.log("***Error in get chat history, ", err)
  }

});
router.post('/:chatId', async (req, res) => {
  try {
    var chats = (await JamsChat.find({chat_id: req.params.chatId}))[0].chats
    chats.push({time: req.body.time, user: req.body.user, comment: req.body.comment})
    await JamsChat.findOneAndUpdate({chat_id: req.params.chatId},{chats: chats}, {
      new: true,
      upsert: true,
    })
    res.sendStatus(200)
  } catch (err) {
    console.log("***Error in sending a new chat history, ", err)
  }



});

module.exports = router;