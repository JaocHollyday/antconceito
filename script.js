const questions = [
    { text: "Você já presenciou ou sofreu algum tipo de preconceito?", options: ["Sim", "Não"] },
    { text: "Você acha que certos grupos têm mais privilégios do que outros?", options: ["Sim", "Não"] },
    { text: "Você já foi influenciado por estereótipos ao julgar alguém?", options: ["Sim", "Não"] }
];

let currentQuestion = 0;

function nextQuestion(responseIndex) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion].text;
    } else {
        showFeedback(responseIndex);
    }
}

function showFeedback(responseIndex) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = responseIndex === 1 ? 
        "Você reconhece a existência de preconceitos. Continue refletindo e agindo para combatê-los!" : 
        "Talvez seja interessante aprofundar seu conhecimento sobre vieses inconscientes.";
    feedback.classList.remove("hidden");
}