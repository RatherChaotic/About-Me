let i = 0;
let text = "An ambitious high-school student wanting to code all the things!";
let speed = 75;
const timer = ms => new Promise(res => setTimeout(res, ms));


$(function() {
    $('#terminal').terminal({
        help: function() {
            this.echo('help : prints helpful commands\nprint : print whatever text you like\ngoto : go to a certain .html page')
        },
        print: function(what) {
            this.echo(what)
        },
        goto : function(where) {
            window.location.assign(where)
        }
    })
});

async function typing() {
    if (i < text.length) {
        document.getElementById("wia").innerHTML += text.charAt(i);
        i++;

    }
    else if (i === text.length) {
        await timer(3000)
        while (i > 0) {
            document.getElementById("wia").innerHTML = document.getElementById("wia").innerHTML.slice(0, -1);
            i--;
            await timer(100);
        }
    }
    setTimeout(typing, speed);
}

typing()