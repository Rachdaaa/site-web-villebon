function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const answers = {
        question1: 'un un langage de scripts',
        question2: "oui",
        question3: 'des sites webs',
        
    };



    for (const question in answers) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    resultDiv.textContent = `Vous avez obtenu ${score} sur 3 bonnes réponses.`;
}