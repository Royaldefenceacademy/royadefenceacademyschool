
console.log("i am loaded")
let form = document.getElementById('contact-form')

// console.log(form)
form.addEventListener('submit', async function (event) {

    event.preventDefault();

    // Collect form data
    const name = document.getElementById('Name').value;
    const phone = document.getElementById('number').value;
    const email = 'test@aissee.com'
    const type = [];

    // Collect checked checkboxes from IDs 11 to 14
    const checkboxes = ['type11', 'type4', 'type5', 'type14'];
    checkboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked) {
            type.push(id.replace('type', ''));  // Extracting number from ID
        }
    });

    // Create payload
    const payload = {
        name,
        phone,
        email,
        message: "test",  // You can update this as needed
        type
    };

    try {
        console.log('p0')
        const response = await fetch('https://www.royaldefenceacademy.com/api/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        console.log('p1')

        if (response.ok) {
            alert("Enquiry submitted successfully!");
        } else {
            alert("Failed to submit enquiry.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the enquiry.");
    }
});
