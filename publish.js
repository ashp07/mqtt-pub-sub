const BROKER_URL = "mqtt://localhost:1883";
const TOPIC_NAME = "test";
const CLIENT_ID = "publish.js";

var MQTT = require("mqtt");
var client  = MQTT.connect(BROKER_URL, {clientId: CLIENT_ID});

client.on("connect", onConnected);

function onConnected()
{
  client.publish(TOPIC_NAME, "Hello MQTT from NodeJS!");
  client.end();
}