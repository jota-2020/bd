const options = document.querySelectorAll('.option');
const progressBar = document.getElementById('progress-bar');
let totalQuestions = document.querySelectorAll('.question').length;
let correctAnswers = 0;

options.forEach(option => {
  option.addEventListener('click', () => {
    const isCorrect = option.getAttribute('data-answer') === 'true';
    if (isCorrect && !option.classList.contains('correct')) {
      option.classList.add('correct');
      correctAnswers++;
    } else if (!isCorrect) {
      option.classList.add('incorrect');
    }

    if (!option.classList.contains('answered')) {
      option.classList.add('answered');
    }

    options.forEach(o => {
      if (o !== option && !o.classList.contains('answered')) {
        o.classList.remove('correct', 'incorrect');
      }
    });

    updateProgressBar();

    if (correctAnswers === totalQuestions) {
      displayMessage("Muy bien florecita, vas excelente!!");
    }
  });
});

function updateProgressBar() {
  let progressPercentage = (correctAnswers / totalQuestions) * 100;
  progressBar.style.width = progressPercentage + '%';
}

function displayMessage(message, fontSize = '30px', color = '#e2e2e2') {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');
  messageContainer.textContent = message;
  messageContainer.style.fontSize = fontSize;
  messageContainer.style.color = color;
  document.body.appendChild(messageContainer);

  setTimeout(() => {
    messageContainer.classList.add('active');
    setTimeout(() => {
      messageContainer.classList.remove('active');
      setTimeout(() => {
        messageContainer.remove();
      }, 500); // Tiempo de la animación de desaparición
    }, 5000); // 5 segundos
  }, 100); // Breve retraso para asegurar la aparición del mensaje
}
