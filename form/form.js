document.addEventListener("DOMContentLoaded", () => {
    const phoneInputs = document.querySelectorAll(".phone");
    phoneInputs.forEach(phoneInput => {
        if (window.intlTelInput) {
            window.intlTelInput(phoneInput, {
                initialCountry: "auto",
                allowDropdown: true,
                separateDialCode: true,
                nationalMode: true,
                autoPlaceholder: "aggressive",
                geoIpLookup: function (success, failure) {
                    fetch("https://ipapi.co/json")
                        .then(res => res.json())
                        .then(data => success(data.country_code))
                        .catch(() => failure());
                },
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
            });
        }
    });
    const forms = document.querySelectorAll(".signup-form");
    forms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert("Form submitted!");
        });
    });
});