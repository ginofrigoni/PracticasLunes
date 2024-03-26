function createListUser(paramUsers) {
  const main = document.getElementById("main");
  const usersList = document.createElement("ul");
  usersList.className = "users-list";
  usersList.id = "usuarios";
  main.appendChild(usersList);

  for (const user of paramUsers) {
    createUser(user);
  }
}

function encontraUsuario(id){
  let userEncontrado = null;
  for (const user of users) {
      if(user["Object Id"] === id){
          userEncontrado = user;
      }
  }
  return userEncontrado;
}

function createUserDetails(id){
  let usuario = encontraUsuario(id);
  const div = document.getElementById("123");
  const prueba =  document.createElement("h1");
  prueba.innerText = usuario["Display name"];
  div.appendChild(prueba);
      
}

function createUser(user) {
  const users = document.getElementById("usuarios");
  const userItem = document.createElement("li");
  userItem.className = "user-item";
  users.appendChild(userItem);
  userItem.onclick = function () {
      userDetails(user);
    };

  const card = document.createElement("div");
  card.className = "card user-item__content";
  userItem.appendChild(card);

  const linkUser = document.createElement("a");
  linkUser.href = "./userInfo.html?id=" + user["Object Id"];
  card.appendChild(linkUser);

  const userItemImage = document.createElement("div");
  userItemImage.className = "user-item__image avatar";
  linkUser.appendChild(userItemImage);

  const userImage = document.createElement("img");
  //userImage.src = "./img/" + user + ".jpg";
  userImage.src = `./img/${user["Display name"]}.jpg`;
  userItemImage.appendChild(userImage);

  const userInfo = document.createElement("div");
  userInfo.className = "user-item__info";
  linkUser.appendChild(userInfo);

  const nombreUser = document.createElement("h2");
  nombreUser.innerText = user["Display name"];
  userInfo.appendChild(nombreUser);

  const cityUser = document.createElement("h3");
  cityUser.innerText = user.City;
  userInfo.appendChild(cityUser);
}
