document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitem que el formulari s'enviï de la manera tradicional

        // Simulem un enviament
        const name = document.getElementById('name').value;
        formResponse.textContent = `Gràcies, ${name}. Hem rebut el teu missatge!`;

        // Netegem el formulari
        contactForm.reset();

        // Esborrem el missatge després de 5 segons
        setTimeout(() => {
            formResponse.textContent = '';
        }, 5000);
    });
});
