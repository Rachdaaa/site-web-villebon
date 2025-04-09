function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;

    const answers = {
        question1: "Avec l'attribut a puis href",
        question2: "un lien hypertexte qui relie deux pages du même dossier",
        question3: "un repère que l'on peut mettre dans une page HTML si elle est très longue"
    };

    for (const question in answers) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    resultDiv.textContent = `Vous avez obtenu ${score} sur 3 bonnes réponses.`;
}
