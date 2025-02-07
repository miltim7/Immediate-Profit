document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.querySelector("#phone");
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
    const form = document.querySelector("#signup-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form submitted!");
    });
});
