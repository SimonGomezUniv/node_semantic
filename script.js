const myModule = require('./model');

// Appelez la fonction sayHello

i = myModule.calculateSimilarityScore('dog','cat');

console.log(i)

const word2vec = require('word2vec');

// Load pre-trained Word2Vec vectors
word2vec.loadModel('./GoogleNews-vectors-negative300.bin', (err, model) => {
  if (err) throw err;

  // Calculate cosine similarity between two words
  const word1 = 'dog';
  const word2 = 'cat';
  const similarity = model.similarity(word1, word2);
  function calculateSimilarityScore(word1, word2){
    return model.similarity(word1, word2)
  }
     // Serveur Express pour l'API web
     const express = require('express');
     const app = express();
     const port = 3000;
 
 
     app.get('/', function (req, res) {
         res.send(`
         <html>
             <head>
             <title>Calcul de proximité sémantique</title>
             </head>
             <body>
             <h1>Calcul de proximité sémantique</h1>
             <form action="/score" method="get">
                 <label for="word1">Mot 1:</label>
                 <input type="text" name="word1"><br><br>
                 <label for="word2">Mot 2:</label>
                 <input type="text" name="word2"><br><br>
                 <input type="submit" value="Calculer le score">
             </form>
             </body>
         </html>
         `);
     });
 
     // Route pour la fonction de calcul de similarité
     app.get('/score', (req, res) => {
     const word1 = req.query.word1;
     const word2 = req.query.word2;
 
     if (!word1 || !word2) {
         res.status(400).send('Bad request. Please provide both word1 and word2 parameters.');
         return;
     }
 
     const score = calculateSimilarityScore(word1, word2);
     res.send(`The similarity score between "${word1}" and "${word2}" is ${score}.`);
     });
 
     // Démarrage du serveur
     app.listen(port, () => {
     console.log(`Server listening at http://localhost:${port}`);
     });
 

  console.log(`The semantic similarity between '${word1}' and '${word2}' is ${similarity}`);
});

function launchServer(){
     
}

