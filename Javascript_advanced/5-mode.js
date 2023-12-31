function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

        // The Paragraph
    let welcomePara = document.createElement('p');
    welcomePara.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomePara);

    // The Buttons

    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    document.body.appendChild(spookyButton);

    // The darkmode

    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    document.body.appendChild(darkModeButton);
ß
    // The ScreamModeButton

    let ScreamModeButton = document.createElement('button');
    ScreamModeButton.textContent = 'Scream mode';
    document.body.appendChild(darkModeButton);

    // Adding event listeners to the button

    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    ScreamModeButton.addEventListener('click', screamMode);

    // calling the main function when the page loads

    windows.addEventListener('load', main)
}


