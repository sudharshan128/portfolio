fetch("data/projects.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("project-list");
    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
      container.appendChild(card);
    });
  });