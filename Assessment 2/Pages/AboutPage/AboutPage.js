// Questions & Feedback form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Your question or feedback has been sent!");

        document.getElementById("message").value = "";
    });
});
