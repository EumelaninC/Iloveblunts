document.getElementById("verify-age").addEventListener("click", function() {
    const birthYear = document.getElementById("age").value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age >= 21) {
        document.getElementById("age-verification").classList.add("hidden");
        document.getElementById("survey").classList.remove("hidden");
    } else {
        alert("You must be 21 years or older to enter this site.");
    }
});

const votes = {
    1: null,
    2: null,
    3: null,
};

document.querySelectorAll(".option").forEach(button => {
    button.addEventListener("click", function() {
        const question = this.getAttribute("data-question");
        const answer = this.getAttribute("data-answer");

        if (votes[question] === answer) {
            alert(`You already voted for this option.`);
        } else {
            votes[question] = answer;
            alert(`Your vote for question ${question} is: ${this.textContent}`);
        }
    });
});
