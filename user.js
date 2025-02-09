window.onload = function () {
  var storedName = localStorage.getItem("username");
  if (!storedName) {
    document.getElementById("usernameModal").style.display = "block";
  } else {
    document.getElementById("userName").textContent = storedName;
  }
};

function saveUserName() {
  var username = document.getElementById("usernameInput").value.trim();
  if (username) {
    localStorage.setItem("username", username);
    document.getElementById("userName").textContent = username;
    document.getElementById("usernameModal").style.display = "none";
  } else {
    alert("Please enter a valid name.");
  }
}
