document.addEventListener("DOMContentLoaded", function() {
    // Asegúrate de que Html5QrcodeScanner esté definido
    if (typeof Html5QrcodeScanner !== "undefined") {
        function onScanSuccess(qrCodeMessage) {
            document.getElementById('result').innerText = 
                                                `<a data-label="Register" href="${qrCodeMessage}" class="rainbow-hover">
                                                    <span class="sp">ir al link</span>
                                                </a>`;
        }

        function onScanError(errorMessage) {
            // Ignora los errores de escaneo
        }

        let html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader", { fps: 75, qrbox: 250 });
        html5QrcodeScanner.render(onScanSuccess, onScanError);
    } else {
        console.error("Html5QrcodeScanner no está definido. Asegúrate de que la biblioteca html5-qrcode se haya cargado correctamente.");
    }
});