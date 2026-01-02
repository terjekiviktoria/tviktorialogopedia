const contactForm = document.getElementById("contactForm"),
    serviceID = "service_8f8v3xc",
    templateID = "template_tpduhl8",
    publicKey = "5xyIdTQKiDm9-zcNV",
    btn = document.getElementById("formButton");

const sendMail = (e) => {
    e.preventDefault();

    btn.value = "Küldés folyamatban...";

    emailjs.sendForm(serviceID, templateID, contactForm, publicKey).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);

            // --- mezők ürítése ---
            document.getElementById("formName").value = "";
            document.getElementById("formPhone").value = "";   // <-- TELEFON
            document.getElementById("formSubject").value = "";
            document.getElementById("formMessage").value = "";

            // --- vissza az eredeti gombszöveg ---
            btn.value = "Üzenet küldése";

            // opcionális: átirányítás
            // window.location.href = "./thanks.html";
            alert("Köszönöm az üzenetet! Hamarosan jelentkezem. 😊");
        },
        function (error) {
            console.log("FAILED...", error);
            btn.value = "Üzenet küldése";
            alert("Hoppá, nem sikerült elküldeni az üzenetet.");
        }
    );
};

contactForm.addEventListener("submit", sendMail);
