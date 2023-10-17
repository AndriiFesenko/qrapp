
function onScanSuccess(qrCodeMessage) {
        alert(`QR Code detected: ${qrCodeMessage}`);
    }

const html5QrCode = new Html5Qrcode("qr-video");

function startScanning() {
    html5QrCode.start(
        {
            fps: 10,
            qrbox: 250,
        },
        onScanSuccess
    );
}

startScanning();
