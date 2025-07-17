document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(e) {
        // Netlify s'encarregarà de l'enviament del formulari
        // No cal e.preventDefault() ni la lògica de simulació aquí

        // Opcional: Pots mantenir la neteja del formulari si vols
        contactForm.reset();

        // Opcional: Pots mostrar un missatge de confirmació si vols
        formResponse.textContent = 'El teu missatge ha estat enviat. Gràcies!';
        setTimeout(() => {
            formResponse.textContent = '';
        }, 5000);
    });
});
