// Bagaian Password
const hidePass = document.querySelector(".bxs-hide");
const inputPass = document.querySelector('input[type="password"]');

hidePass.addEventListener("click", () => {
  hidePass.classList.toggle("bxs-show");
  const type =
    inputPass.getAttribute("type") === "password" ? "text" : "password";
  inputPass.setAttribute("type", type);
});

// Simulasi
const submit = document.querySelector(".submit");
const forgetPass = document.getElementById("forgetPass");
submit.addEventListener("click", () => {
  alert("Data sedang terkirim");
});
forgetPass.addEventListener("click", () => {
  alert("Menuju halaman lupa password");
});
