let i = 0;
let text = "An ambitious high-school student wanting to code all the things!";
let speed = 75;
const timer = ms => new Promise(res => setTimeout(res, ms));

$(function() {
    $('#terminal').terminal({
        help: function(what) {
            if (what === undefined) {
                this.echo('help : prints commands\nprint : print whatever text you like\ngoto : go to a certain .html page')
            } else if (what === "print") {
                this.echo("print \"(arg)\"\n\nPrints a string to the console")
            } else if (what === "goto") {
                this.echo("goto \"(arg)\"\n\nGoes to a specific webpage\n\nLocations : github, home, ")
            } else {
                this.echo("[[;red;;]Command \"" + what + "\" not found!")
            }
        },
        print: function(what) {
            if (what === undefined) {
                this.echo("[[;red;;]Cannot print null!")
            } else {
                this.echo(what)
            }
        },
        goto : function(where) {
            if (where === "github") {
                location.assign("https://github.com/RatherChaotic")
            } else if (where ==="index" || where === "index.html" || where === "home"){
                location.assign("index.html")
            } else if (where.includes(".html")) {
                location.assign("pages/" + where)
            } else {
                    location.assign("pages/" + where + ".html")
                }
            },
        color : function(what) {
            color = what
        }
    }, {checkArity:false, greetings: " __          __         _                                           _    _                     \n" +
            " \\ \\        / /        | |                                         | |  | |                    \n" +
            "  \\ \\  /\\  / /    ___  | |   ___    ___    _ __ ___     ___        | |  | |  ___    ___   _ __ \n" +
            "   \\ \\/  \\/ /    / _ \\ | |  / __|  / _ \\  | '_ ` _ \\   / _ \\       | |  | | / __|  / _ \\ | '__|\n" +
            "    \\  /\\  /    |  __/ | | | (__  | (_) | | | | | | | |  __/  _    | |__| | \\__ \\ |  __/ | |   \n" +
            "     \\/  \\/      \\___| |_|  \\___|  \\___/  |_| |_| |_|  \\___| ( )    \\____/  |___/  \\___| |_|   \n" +
            "                                                             |/                                \n" +
            "Website Created by Aidan Spalding"})
});

async function typing() {
    if (i < text.length) {
        document.getElementById("wia").innerHTML += text.charAt(i);
        i++;

    }
    else if (i === text.length) {
        await timer(3000)
        while (i > 1) {
            document.getElementById("wia").innerHTML = document.getElementById("wia").innerHTML.slice(0, -1);
            i--;
            await timer(0);
        }
    }
    setTimeout(typing, speed);
}

typing()