// Function to start QR code scanning
function startScanning() {
    // Create a new Instascan scanner
    const scanner = new Instascan.Scanner({ video: document.getElementById('qr-video') });

    // Add a listener for the 'scan' event
    scanner.addListener('scan', function (content) {
        alert('QR Code detected: ' + content);
    });

    // Start the scanner
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}

// Call the function to start scanning
startScanning();