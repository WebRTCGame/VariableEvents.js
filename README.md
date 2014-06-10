EventedObjectPropertiesFactory
==============================

Micro factory to add properties to javascript objects that contain get/set/modonget/modonset user specified functions.

It'll just let you assign functions for when:

A property is accessed.

A property is set/changed.


Example fiddle: http://jsfiddle.net/x9EmX/12/

It simply uses Object.defineProperty

But this let's you do some neat things, such as evented changing of some thing when a value on an object changes...

Let's say you're making a game and you want to have a HP var on your character linked to always update a HP progress bar.  
You can constantly check in your update loop to make sure it's updated, or you can just use this and have it automatically update any time the HP var on the character changes.

Neat stuff.
