# Broadcast Channel API Demo
### A javascript demo for Broadcast Channel API
#### For full documentation please check MDN :
[![N|Solid](https://developer.mozilla.org/static/img/web-docs-sprite.22a6a085cf14.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)

Broadcast channel API makes it easier to communicate between tabs, windows and iframes of the same origin.
It's compatible with 
  - Google Chrome 54+
  - Mozilla Firefox 38+
  - Opera 41+

# How does it work ?
The API creates a communication channel on which you can send messages and subscribe to receive messages.
PS : Even if a browser context is subscribed to the channel it won't receive messages it sent.

# Syntax : 
  -  Create a channel : use the constructor **new BroadcastChannel()** that takes only one parameter, the channel's name.
  Example : 
```
    var channel = new BroadcastChannel("channel_name");
```
  - Send a message : use the method **postMessage()** with a single parameter, the string message
  Example : 
```
    channel.postMessage("This is my message");
```
  - Receive messages (Subscribe to the channel) : use the event **onmessage()** that takes a callback with a single parameter, the event.
  The event object has only one attribut that we need : **.data**  
  Example : 
```
    channel.onmessage = function(event){
        // handle the event...
        console.log(event.data);
    };
```

You can also send objects instead of strings:
```
    // Sender side
    var myObject = {
        name : "testing object",
        attr_1 : "Value 1"
        ....
    };
    channel.postMessage(JSON.stringify(myObject));
    
    //Receiver side 
    channel.onmessage = function(event){
        var receivedObject = JSON.parse(event.data);
        console.log(receivedObject.name); // this will print "testing object"
    }
```

