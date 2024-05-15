const roles = ["Backend Engineer", "Machine Learning Engineer", "DevOps Engineer","Crypto Currency Enthusiast" ,"ML Researcher"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(deleteRole, 2000);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, 100);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, 1000);
});
