// Quiz questions array
const questions = [
    {
      question: "1. Someone posts a hateful comment about your friend. What’s the best response?",
      choices: [
        "Reply with an insult to the bully",
        "Report the comment and tell your friend privately",
        "Ignore and scroll past"
      ],
      correct: 1,
      explanation: [
        "✖ Insulting back only adds fuel to the conflict.",
        "✔ Reporting and supporting is the responsible action.",
        "✖ Ignoring allows the bully to continue unchecked."
      ]
    },
    {
      question: "2. You see a classmate being mocked in a group chat. What should you do?",
      choices: [
        "Join in to avoid being targeted yourself",
        "Privately message the classmate and report the chat",
        "Screenshot the chat and send it to others"
      ],
      correct: 1,
      explanation: [
        "✖ Joining in still causes harm.",
        "✔ Support privately and report the issue.",
        "✖ Spreading screenshots increases harm."
      ]
    },
    {
      question: "3. A stranger sends you a rude message on social media. How should you react?",
      choices: [
        "Reply with sarcasm to make them feel stupid",
        "Block and report the user immediately",
        "Post the message to your story and make fun of it"
      ],
      correct: 1,
      explanation: [
        "✖ Sarcasm invites more conflict.",
        "✔ Blocking and reporting is safe and responsible.",
        "✖ Public shaming can cause more drama."
      ]
    },
    {
      question: "4. You notice someone being body-shamed in a comment section. What should you do?",
      choices: [
        "Speak up respectfully and report the comment",
        "Leave a funny comment to change the subject",
        "Do nothing—it’s not your concern"
      ],
      correct: 0,
      explanation: [
        "✔ Calling it out and reporting shows support.",
        "✖ Humor may seem harmless but can minimize the issue.",
        "✖ Doing nothing helps the bully continue."
      ]
    },
    {
      question: "5. You're angry and feel like posting a harsh comment online. What should you do?",
      choices: [
        "Type and send the message immediately",
        "Pause, take a break, and return when calm",
        "Message others to also attack the person"
      ],
      correct: 1,
      explanation: [
        "✖ Acting on anger leads to regret.",
        "✔ Cooling off helps you think before you type.",
        "✖ Encouraging attacks makes it worse."
      ]
    },
    {
      question: "6. Your friend shares embarrassing screenshots of someone. What should you do?",
      choices: [
        "Laugh and forward it",
        "Tell your friend it's wrong",
        "Comment something mean"
      ],
      correct: 1,
      explanation: [
        "✖ Sharing increases the harm.",
        "✔ Speaking up helps stop the behavior.",
        "✖ Mean comments support the bullying."
      ]
    },
    {
      question: "7. Someone is spreading rumors about you online. What should you do?",
      choices: [
        "Confront them aggressively",
        "Report and talk to someone you trust",
        "Post a long rant defending yourself"
      ],
      correct: 1,
      explanation: [
        "✖ Aggression can make things worse.",
        "✔ Reporting and seeking help is smart.",
        "✖ Rants may invite more negativity."
      ]
    },
    {
      question: "8. You’re in a group chat mocking a classmate’s photo. What do you do?",
      choices: [
        "Leave the group and explain why",
        "Stay quiet so they don't target you",
        "Join with a small joke"
      ],
      correct: 0,
      explanation: [
        "✔ Standing up shows courage and kindness.",
        "✖ Silence means acceptance.",
        "✖ Jokes add to the harm."
      ]
    },
    {
      question: "9. A peer is being publicly shamed for a mistake online. What do you do?",
      choices: [
        "Send a private supportive message",
        "Join the joke with memes",
        "Comment that they deserve it"
      ],
      correct: 0,
      explanation: [
        "✔ Private support is kind and respectful.",
        "✖ Jokes add to the humiliation.",
        "✖ Blame increases the pain."
      ]
    },
    {
      question: "10. Your sibling is being cyberbullied. What should you do?",
      choices: [
        "Tell a trusted adult and help report",
        "Tell them to ignore it",
        "Help them write a mean reply"
      ],
      correct: 0,
      explanation: [
        "✔ Adults can help stop the bullying safely.",
        "✖ Ignoring doesn't always work.",
        "✖ Retaliation can escalate the problem."
      ]
    }
  ];
  
  // Display all questions
  function loadQuestions() {
    const qBox = document.getElementById("questions-box");
  
    questions.forEach((q, qIndex) => {
      // Create question container
      const qDiv = document.createElement("div");
      qDiv.className = "question-block";
  
      // Add question text
      const qTitle = document.createElement("h3");
      qTitle.textContent = q.question;
      qDiv.appendChild(qTitle);
  
      // Add each choice with radio btn (prevent multi-choice)
      q.choices.forEach((choice, cIndex) => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="q${qIndex}" value="${cIndex}">
          ${choice}
        `;
        qDiv.appendChild(label);
        qDiv.appendChild(document.createElement("br"));
      });
  
      // Add feedback placeholder
      const feedback = document.createElement("div");
      feedback.id = `feedback-${qIndex}`;
      feedback.className = "feedback";
      qDiv.appendChild(feedback);
  
      // Add question block to the page
      qBox.appendChild(qDiv);
    });
  }
  
  // Handle form submit
  document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    // Check each question's answer
    questions.forEach((q, qIndex) => {
      const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
      const feedbackDiv = document.getElementById(`feedback-${qIndex}`);
  
      if (selected) {
        const chosenIndex = parseInt(selected.value);
        const correct = chosenIndex === q.correct;
  
        // Show explanation and color
        feedbackDiv.innerHTML = q.explanation[chosenIndex];
        feedbackDiv.style.color = correct ? "green" : "red";
      } else {
        // No option selected
        feedbackDiv.innerHTML = "⚠ Please select an answer.";
        feedbackDiv.style.color = "orange";
      }
    });
  });
  
  // Load questions when page loads
  window.onload = loadQuestions;