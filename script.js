document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const typedOutput = document.getElementById('typed-output');

    fetch('http://localhost:3000/jokes')
        .then(response => response.json())
        .then(jokes => {
            const jokeMap = {};
            jokes.forEach(joke => {
                jokeMap[joke.trigger] = joke.joke;
            });

            inputBox.addEventListener('input', (e) => {
                const text = e.target.value;
                new Typed('#typed-output', {
                    strings: [text],
                    typeSpeed: 50,
                    backSpeed: 50,
                    loop: false,
                    showCursor: false,
                    onComplete: () => checkForJokes(text, jokeMap)
                });
            });

            function checkForJokes(text, jokeMap) {
                // Check for single word jokes
                const words = text.split(' ');
                const lastWord = words[words.length - 1];
                if (jokeMap[lastWord]) {
                    showJoke(jokeMap[lastWord]);
                }

                // Check for sentence jokes
                for (let phrase in jokeMap) {
                    if (text.includes(phrase)) {
                        showJoke(jokeMap[phrase]);
                    }
                }
            }

            function showJoke(joke) {
                const jokePopup = document.createElement('div');
                jokePopup.classList.add('joke-popup');
                jokePopup.textContent = joke;
                document.body.appendChild(jokePopup);
                setTimeout(() => jokePopup.remove(), 3000);
            }
        });
});
