function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const answers = {
        question1: 'Eviter de réécrire la même commande plusieurs fois',
        question2: "For est pour une répétiton definie et while est pour une répétition jusqu'à qune condition soit remplis",
    };

    for (const question in answers) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    resultDiv.textContent = `Vous avez obtenu ${score} sur 2 bonnes réponses.`;
}
