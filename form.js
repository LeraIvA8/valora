const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    try {
        const res = await fetch("/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const dataRes = await res.json();
        result.textContent = dataRes.success
            ? "Отправлено"
            : "Ошибка";
    } catch (err) {
        result.textContent = "Ошибка";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    nameInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[0-9~`!@#$%^&*()_+=\[\]{}|\\:;"'<>,.?\/]/g, "");
    });

    phoneInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9+\-()\s]/g, "");
    });
});