var term = document.getElementById('term');

// Focus on search field on space input
document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        term.focus();
    }
});

document.addEventListener('click', event => {
    term.focus();
});

if (!!term) {
    term.addEventListener('keydown', event => {
        // If ctrl + enter : add https:// to command and use it as URL
        if (event.ctrlKey && event.key === 'Enter') {
            goToSite(term.value);
        } else if (event.key === 'Enter') {
            exec(term.value);
        }
    });
}

function exec(command) {
    command = command.replace(/^[ ]/g, '') // Remove leading spaces

    // If query is a command
    if (command.substr(0, 1) == ':') {
        // Inspect links to find matching shortcut (Ex: ':g' -> www.google.fr)
        var links = nav.querySelectorAll("a");

        for (var i = 0; i < links.length; i++) {
            var shortcut = links[i].getAttribute("data-shortcut");

            if (!!shortcut && shortcut == command.substr(1)) {
                window.location.replace(links[i].href);
            }
        }
    }

    // If query starts by http or https, it's an URL
    else if (command.substr(0, 7) === 'http://' || command.substr(0, 8) === 'https://') {
        window.location.replace(command);
    }

    // Else, send as query to Google
    else {
        window.location.replace('https://www.google.fr/search?q=' + command);
    }
}


// Uses string as URL
function goToSite(partial_url) {
    var url = 'https://www.' + partial_url.replace(/^[ ]/g, '');
    window.location.replace(url);
}