//import './style.css';
//import liff from '@line/liff';

liff
  .init({
    liffId: import.meta.env.VITE_LIFF_ID
  })
  .then(() => {
    const appContainer = document.querySelector('#app');
    appContainer.innerHTML = `
      <h1>PIA-LIFF-APP</h1>
      <p>LIFF init succeeded.</p>
    `;

    // Create a button element for scanning QR code
    const scanButton = document.createElement('button');
    scanButton.textContent = 'Scan QR Code';

    // Add click event listener to the button to trigger QR code scanning
    scanButton.addEventListener('click', function() {
      liff.scanCodeV2()
        .then((result) => {
          // Handle scan code result
          console.log("Scan code result:", result);
          // Display the scan result in the UI
          document.querySelector('#scanResult').textContent = `Scan Result: ${result.value}`;

          // Open the scanned URL in a new window
          const url = result.value;
          const newWindow = window.open(url, '_blank');
          if (!newWindow) {
            // Popup blocked, handle error
            console.error('Failed to open URL. Popup may be blocked by the browser.');
          }
        })
        .catch((error) => {
          // Handle error
          console.log("Error scanning code:", error);
        });
    });

    // Append the scan button below LIFF init succeeded message
    appContainer.appendChild(scanButton);

    // Create an element to display the scan result
    const scanResultElement = document.createElement('p');
    scanResultElement.id = 'scanResult';
    appContainer.appendChild(scanResultElement);
  })
  .catch((error) => {
    document.querySelector('#app').innerHTML = `
      <h1>PIA-LIFF-APP</h1>
      <p>LIFF init failed.</p>
      <p><code>${error}</code></p>
    `;
  });