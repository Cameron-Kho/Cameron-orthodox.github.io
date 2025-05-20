
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.game-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';

    // Special logic for NFL Game: fill dropdowns
    if (sectionId === "nfl-game") {
      // Delay to ensure Brython is fully loaded
      setTimeout(() => {
        if (typeof window.fillDropdowns === "function") {
          window.fillDropdowns();
        } else {
          console.error("fillDropdowns() is missing!");
        }
      }, 100); // 100ms delay
    }
  }
}

// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  const surpriseBtn = document.getElementById("surprise-btn");
  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", function() {
      const fortuneArea = document.getElementById("fortune-result");
      const randomNumber = Math.floor(Math.random() * 7) + 1;

      let resultHTML = `
        <h2>Read your fortune! 🎉</h2>
        <div class="lose">❓❓❓❓❓</div>
        <p>Your fortune is...........</p>
      `;

      // Wheel spin    
      if (randomNumber === 1) {
        resultHTML += `
          <div class="confetti">Luck is coming! Celebrate.</div>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q5bDNuanZ1amY5ejNxbzh4bmhibmltbzR5YzFvcmMzMHZiNmZ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U56UKYAO8ToW8ycuDe/giphy.gif"
          alt="Lucky Spin!" style="width:175px;height:175px">
        `;
      } else if (randomNumber === 2) {
        resultHTML += `
          <div class="confetti">Stay humble, and you will be rewarded</div>
        `;
      } else if (randomNumber === 3) {
        resultHTML += `
          <div class="confetti">This is not your good year, stay wary</div>
        `;
      } else if (randomNumber === 4) {
        resultHTML += `
          <div class="confetti">Don't take family for granted, spend more time with loved ones.</div>
        `;
      } else if (randomNumber === 5) {
        resultHTML += `
          <div class="confetti">Work hard this year, and you will be blessed next year</div>
        `;
      } else if (randomNumber === 6) {
        resultHTML += `
          <div class="confetti">An opportunity is coming soon, be on the lookout</div>
        `;
      } else {
        resultHTML += `
          <div class="confetti">Your fortune is confusing, try again</div>
        `;
      }

      fortuneArea.innerHTML = resultHTML;
    });
  }
});
