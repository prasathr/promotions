var Mouse = require("node-mouse/mouse.js");

var m = new Mouse();

m.on("mousemove", function(event) {
    console.log('receving events');
});
