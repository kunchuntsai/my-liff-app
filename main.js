//import './style.css';
//import liff from '@line/liff';

liff
  .init({
    liffId: import.meta.env.VITE_LIFF_ID
  })
  .then(() => {
    const appContainer = document.querySelector('#app');
    appContainer.innerHTML = `
      <h1>PIA LIFF APP</h1>
      <p>LIFF init succeeded.</p>
    `;

    // Create an element to display the scan result
    const scanResultElement = document.createElement('p');
    scanResultElement.id = 'scanResult';
    appContainer.appendChild(scanResultElement);

    // Scan QR code immediately after LIFF initialization succeeds
    liff.scanCodeV2()
      .then((result) => {
        // Handle scan code result
        console.log("Scan code result:", result);
        // Display the scan result in the UI
        scanResultElement.textContent = `Scan Result: ${result.value}`;

        // Open the scanned URL in a new window
        const url = result.value;
        const newWindow = window.open(url, '_blank');
        if (!newWindow) {
          // Popup blocked, handle error (log only)
          console.error('Failed to open URL. Popup may be blocked by the browser.');
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error scanning code:", error);
        // Display error message in the current window
        const errorText = `Error: ${error.message}`;
        scanResultElement.textContent = errorText;
        console.error(errorText);
      });
  })
  .catch((error) => {
    console.error("LIFF initialization failed:", error);
    document.querySelector('#app').innerHTML = `
      <h1>PIA LIFF APP</h1>
      <p>LIFF init failed.</p>
      <p><code>${error}</code></p>
    `;
  });