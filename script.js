const passworda = document.getElementById("passworda");
const passwordb = document.getElementById("passwordb");

passwordb.addEventListener("input", (event) => {
  if (passworda.value !== passwordb.value) {
    passwordb.setCustomValidity("Please enter matching passwords.)");
  } else {
    passwordb.setCustomValidity("");
  }
});
