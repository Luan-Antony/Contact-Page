document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const budget = document.getElementById('budget').value;

    if (!name || !email || !service || !budget) {
        alert('Please complete all fields!');
        return;
    }

    alert('Submission successful!');
});