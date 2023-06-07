const express = require('express');
const tf = require('@tensorflow/tfjs');
const app = express();

app.use(express.json());

const categoryleveling = ['Extremely Weak', 'Weak', 'Ideal', 'Overweight', 'Obesity', 'Extreme Obesity'];

app.get('/', async (res) => {
  res.json({
    success: true,
    message: 'Machine Learning API is Ready. For more information please read the API Documentation : https://documenter.getpostman.com/view/23251415/2s93m911te#5b165e4e-d614-42a2-bb1a-61a73b892193',
  });
});

app.post('/predict', async (req, res) => {
  const model = await tf.loadLayersModel('https://raw.githubusercontent.com/sofit-c23-ps233/SoFit-MachineLearning/main/model_ml/model.json ');

  let data = {
    gender: Number(req.body.gender),
    height: Number(req.body.height),
    weight: Number(req.body.weight),
  };

  const example = tf.tensor2d([[data.gender, data.height, data.weight]]);
  const prediction = model.predict(example).argMax(1).dataSync()[0];
  const category = categoryleveling[prediction];
  res.json({ prediction, category });
});

app.listen(8080, () => {
  console.log('API run on port 8080');
});
