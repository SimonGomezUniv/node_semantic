const word2vec = require('word2vec');

// Load pre-trained Word2Vec vectors
word2vec.loadModel('./GoogleNews-vectors-negative300.bin', (err, model) => {
  if (err) throw err;
  calculateSimilarityScore.model = model
  console.log("Model is Ready !")

})

function calculateSimilarityScore(word1, word2){
    if(calculateSimilarityScore.model){
        return calculateSimilarityScore.model.similarity(word1, word2)
    }
    return 'model is not ready'
}
module.exports = {
      calculateSimilarityScore:calculateSimilarityScore
};