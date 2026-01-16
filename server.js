const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://rblx.sellhub.cx'
}));

app.use(express.json());

app.post('/create-checkout', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.swiftly.gg/api/crypto-com/create-checkout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Proxy request failed' });
  }
});

app.listen(3000, () => {
  console.log('Swiftly proxy running on port 3000');
});
