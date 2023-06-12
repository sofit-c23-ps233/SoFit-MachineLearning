# Machine Learning for SoFit app

## Overview
Food and exersise recomendation acording to BMI

## 1. Tools and Requirements 
- Python Programming Language
- Tensorflow
- Google Colab
- Visual Studio Code
- TensorFlow.js

## Dataset
<p>https://www.kaggle.com/datasets/yasserh/bmidataset/code</p>
<p>The total of our datasets just 500 datasets</p>

## Deploy to Google Cloud Platform
Follow these steps bellow to deploy to Google Cloud Platform
1. **Clone the Repository in Google Cloud Platform**

   Start by cloning the repository:

   ```
   git clone https://github.com/sofit-c23-ps233/SoFit-MachineLearning.git
   ```

2. **Navigate to the Project Directory**

   Change to the SoFit-MachineLearning/js/ directory where the API configuration files will be deployed by using the following command:

   ```
   cd SoFit-MachineLearning/js/
   ```

3. **Install Dependencies**

   Install the project dependencies by running the following command:

   ```
   npm install / npm i
   ```

4. **Start the Server**

   To start the API server, run the following command:

   ```
   npm run start
   ```

5. **Deploy in Google App Engine**

   To deploy the API server, run the following command:

   ```
   # initialize the Google Cloud SDK
   gcloud init
   # deploy the Machine Learning API to Google App Engine
   gcloud app deploy
   ```
  
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTORS -->
## Contributors

1. Taryo - https://www.linkedin.com/in/taryoofficial/
2. Eldi - https://www.linkedin.com/in/eldiap/
3. Rifqi Alamsyah - https://www.linkedin.com/in/rifqialamsyh/
4. Rastra Wardana Nanditama - https://www.linkedin.com/in/rastrawrdn/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- REFERENCES -->
## References
- https://www.turing.com/kb/data-normalization-with-python-scikit-learn-tips-tricks-for-data-science
- https://towardsdatascience.com/smote-fdce2f605729
- https://levelup.gitconnected.com/body-mass-index-prediction-with-machine-learning-5f277ff531f5
