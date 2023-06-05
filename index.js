import * as tf from '@tensorflow/tfjs';
const model = await tf.loadLayersModel("https://raw.githubusercontent.com/sofit-c23-ps233/SoFit-MachineLearning/main/model.json");
const example = tf.tensor2d([[0, 170, 102]]);
const prediction = model.predict(example).argMax(1).dataSync()[0];
console.log(prediction);