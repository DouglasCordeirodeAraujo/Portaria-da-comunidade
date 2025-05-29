function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  const dropdown = document.getElementById("dropdownMenu");
  const button = document.querySelector('.menu-button');
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
};

// Limitar idade mínima de 18 anos
const inputDate = document.getElementById('dataNascimento');
if (inputDate) {
  const hoje = new Date();
  const ano = hoje.getFullYear() - 18;
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  inputDate.max = `${ano}-${mes}-${dia}`;
}