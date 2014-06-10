Variables with events
==============================

Micro factory to add properties to javascript objects that contain get/set/modonget/modonset user specified functions.

It'll just let you assign functions for when:

A property is accessed.

A property is set/changed.


Example fiddle: http://jsfiddle.net/x9EmX/13/

It simply uses Object.defineProperty

But this let's you do some neat things, such as evented changing of some thing when a value on an object changes...

Let's say you're making a game and you want to have a HP var on your character linked to always update a HP progress bar.  
You can constantly check in your update loop to make sure it's updated, or you can just use this and have it automatically update any time the HP var on the character changes.

Neat stuff.

example:


```javascript
  var o = function (){};
  
  
  addProp.add(o, "fun", 5, function (x) {
      alert("it's retreived as " + x); //event for when it's set, this case the default of 5
  }, function (x) {
      alert("it's changed to " + x); //event when it's changed
  }, function (x) {
      return x * 10; // modifier of the set value
  }, function (x) {
      return x / 5; // modifier of the return value
  });
  
  alert("Value of fun: " + o.fun); //
  o.fun = 6; //change var to 6, but is then modified by the set modifier function above
  alert("Value of fun: " + o.fun); //return value after modified by return value modifier
  o.fun = 7; //change var to 7 which is then modified
```
