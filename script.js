
    const typingElement = document.getElementById("typing");
    const phrases = [
      "I'm a Python Developer",
      "I'm a Web Developer",
      "I'm a Problem Solver"
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentPhrase = phrases[currentPhraseIndex];
      const visibleText = currentPhrase.slice(0, currentCharIndex);
      typingElement.textContent = visibleText;

      if (!isDeleting) {
        if (currentCharIndex < currentPhrase.length) {
          currentCharIndex++;
        } else {
          isDeleting = true;
          setTimeout(typeLoop, 1000);
          return;
        }
      } else {
        if (currentCharIndex > 0) {
          currentCharIndex--;
        } else {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(typeLoop, speed);
    }

    typeLoop();
