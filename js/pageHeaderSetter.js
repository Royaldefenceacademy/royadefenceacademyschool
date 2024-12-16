document.addEventListener('DOMContentLoaded', () => {
    // Select the topHeader element
    let topHeader = document.getElementById('topBar');

    // Get the page title from the data attribute
    let pageTile = topHeader.dataset.pagetitle || "Default Title"; // Fallback to a default value if not set

    // Sanitize the page title to prevent XSS
    let sanitizedTitle = document.createTextNode(pageTile);

    // Set the inner HTML dynamically
    topHeader.innerHTML = `
      <div class="topheader text-white balsamiq-regular">
        <div class="fs-2 text-center p-5" id="topHeaderTitle"></div>
      </div>
    `;

    // Insert the sanitized title into the appropriate location
    topHeader.querySelector('#topHeaderTitle').appendChild(sanitizedTitle);
});
