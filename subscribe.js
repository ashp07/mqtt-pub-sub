const BROKER_URL = "mqtt://localhost:1883";
const TOPIC_NAME = "test";
const CLIENT_ID = "subscribe.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});

client.on("connect", onConnected);
client.on("message", onMessageReceived)

function onConnected()
{
  client.subscribe(TOPIC_NAME);
}

function onMessageReceived(topic, message)
{
  console.log(topic);
  console.log(message.toString());
  console.log("");
}

