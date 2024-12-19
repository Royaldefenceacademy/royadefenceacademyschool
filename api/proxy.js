const fetch = require('node-fetch');

export default async function handler(req, res) {
    const payload = req.body;  // Get the data from the request body
    
    try {
        const response = await fetch('http://3.110.189.42:8000/enquiry/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // Wait for the response and send it back to the frontend
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
