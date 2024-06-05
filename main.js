//import './style.css';
//import liff from '@line/liff';

liff
  .init({
    liffId: import.meta.env.VITE_LIFF_ID
  })
  .then(() => {
    document.querySelector('#app').innerHTML = `
    <h1>create-liff-app</h1>
    <p>LIFF init succeeded.</p>
    <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
      LIFF Documentation
    </a>
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
      })
      .catch((error) => {
        // Handle error
        console.log("Error scanning code:", error);
      });
  });

  // Append the scan button after LIFF initialization succeeds
  document.querySelector('#app').appendChild(scanButton);

  // Create an element to display the scan result
  const scanResultElement = document.createElement('p');
  scanResultElement.id = 'scanResult';
  document.querySelector('#app').appendChild(scanResultElement);

  })
  .catch((error) => {
    document.querySelector('#app').innerHTML = `
    <h1>create-liff-app</h1>
    <p>LIFF init failed.</p>
    <p><code>${error}</code></p>
    <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
      LIFF Documentation
    </a>
  `;
  });
