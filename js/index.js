const express = require('express');
const tf = require('@tensorflow/tfjs');
const app = express();

app.use(express.json());

const categoryleveling = ['Extremely Weak', 'Weak', 'Ideal', 'Overweight', 'Obesity', 'Extreme Obesity'];

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
  res.json({ category });
});

app.listen(3000, () => {
  console.log('API run on port 3000');
});
