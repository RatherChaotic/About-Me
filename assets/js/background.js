// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

var ip_data = null
$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    ip_data = data
});
// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the columns
var fontSize = 20,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        for (const char of ip_data["ip"]) {
            var text = char;
            ctx.fillStyle = '#0f0';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > .1) {
                drops[i] = 0;
            }
        }
    }
}

// Loop the animation
setInterval(draw, 33);