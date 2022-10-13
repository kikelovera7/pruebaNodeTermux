var Mqtt = require('azure-iot-device-mqtt').Mqtt;
var DeviceClient = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;

var connectionString = 'HostName=asa-EnriqueNodeJSTEST.azure-devices.net;DeviceId=DevicePrueba123;SharedAccessKey=GGH/mR396SROTfV1IVQQymxKPHi9Jy0mSJFN569uFlI=';


///RECEIVING MESSAGES
var client = DeviceClient.fromConnectionString(connectionString, Mqtt);
// LISTENING NEW MESSAGES SUBSCRIBING
client.on('message',function(msg){
    console.log("MESSAGE : ", msg);
    console.log('Id: ' + msg.messageId + ' Body: ' + msg.data);
    console.log(msg.properties);
    client.complete(msg)
    .then(data=>{
        console.log("DATA : ",data);
    })
    .catch(error=>{
        console.log("ERROR :", error)
    })
    ;
});

