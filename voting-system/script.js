const options = [
  { name: "Option 1", votes: 0 },
  { name: "Option 2", votes: 0 },
  { name: "Option 3", votes: 0 },
];

const optionsList = document.getElementById("options-list");

function renderOptions() {
  optionsList.innerHTML = "";
  options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.innerHTML = `
      <span>${option.name}</span>
      <span>${option.votes} votes</span>
      <button onclick="upvote(${index})">Upvote</button>
    `;
    optionsList.appendChild(optionDiv);
  });
}

function upvote(index) {
  options[index].votes++;
  renderOptions();
}

renderOptions();
