document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;

    if (q1 === 'c') {
        score++;
    }

    if (q2 === 'a') {
        score++;
    }

    if (q3 === 'c') {
        score++;
    }

    alert(`Você acertou ${score} de 3 perguntas!`);
});

