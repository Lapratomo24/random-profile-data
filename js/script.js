const randomFolks = document.querySelector(".random-peeps");
const seeUsers = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("select");

const getData = async function (numUsers) {
  const usersRequest = await fetch (
    `https://randomuser.me/api?results=${numUsers}`
  )
  const data = await usersRequest.json();
  const userResults = data.results;
  displayUsers(userResults);
};

getData(1);

const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";

  for (let user of userResults) {
    const country = user.location.country;
    const userName = user.name.first;
    const imageUrl = user.picture.medium;

    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h3>${userName}</h3>
      <p>${country}</p>
      <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
  }
};

seeUsers.classList.remove("hide");
selectUserNumber.addEventListener("change", (e) => {
  const numUsers = e.target.value;
  getData(numUsers);
});
