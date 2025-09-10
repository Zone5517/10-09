function renderUsers(users) {
  const container = document.getElementById("users");
  container.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const name = document.createElement("div");
    name.classList.add("user-name");
    name.textContent = `${user.id} - ${user.name}`;

    const email = document.createElement("div");
    email.classList.add("user-email");
    email.textContent = user.email;

    card.appendChild(name);
    card.appendChild(email);
    container.appendChild(card);
  });
}
