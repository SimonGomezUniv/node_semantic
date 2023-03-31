const model = require('./model');

// Serveur Express pour l'API web
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/score', (req, res) => {
    const word1 = req.query.word1;
    const word2 = req.query.word2;

    if (!word1 || !word2) {
        res.status(400).send('Bad request. Please provide both word1 and word2 parameters.');
        return;
    }

    const score = model.calculateSimilarityScore(word1, word2);
    res.json(`The similarity score between "${word1}" and "${word2}" is ${score}.`);
    });

// Démarrage du serveur
app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`);
});
        