import React from "react";
import { Link } from "react-router-dom";

const MachineLearningPage = () => {
  return (
    <React.Fragment>
      <div class="px-4 pt-5 my-5 ">
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row justify-content-md-start text-start g-5 py-5">
            <div class="col-md-10">
              <h1 class="display-5 fw-bold lh-1 mb-3">Thiel-sen Regression </h1>
              <p class="lead">
                Theil-Sen is a non-parametric method which means it makes no
                assumption about the underlying distribution of the data. Since
                Theil-Sen is a median-based estimator, it is more robust against
                corrupted data i.e. outliers.
                <br /> It can be significantly more accurate than non-robust
                simple linear regression (least squares) for skewed (i.e., data
                has distortion or asymmetry that deviates from the symmetrical
                bell curve, or normal distribution) and heteroskedastic data
                (i.e., refers to data with unequal variability (scatter) across
                a set of second, predictor variables. Heteroscedastic data tends
                to follow a cone shape on a scatter graph), and competes well
                against least squares even for normally distributed data. It has
                been called "the most popular non-parametric technique for
                estimating a linear trend" in a book called Encyclopedia of
                Environmetrics. The underlying method of Theil-Sen regression is
                quite simple. Suppose if there exist N points (𝑝<sub>1</sub>
                ,𝑝<sub>2</sub>,𝑝<sub>3</sub>,𝑝<sub>4</sub>,…,𝑝<sub>𝑛</sub>),
                compute median of slopes of all the lines through all pairs of
                points and then robustly fit a line to sample points in the
                plane.
              </p>
            </div>
          </div>
          {/* SECTION 1 : */}

          {/* SECTION 2 : */}
          <div class="row justify-content-md-start text-end g-5 py-5 flex-row-reverse">
            <div class="col-md-10 ">
              <h1 class="display-5 fw-bold lh-1 mb-3">Ridge Regression</h1>
              <p class="lead">
                Ridge regression is used when the data suffers from the
                multicollinearity i.e. two or more independent variables are
                highly correlated. Multicollinearity is a problem because it
                undermines the statistical significance of an independent
                variable. When the issue of multicollinearity occurs,
                least-squares are unbiased, and variances are large, this
                results in predicted values to be far away from the actual
                values. This method performs L2 regularization. The cost
                function of ridge regression is:
                <br />
                <br />
                <img src="https://latex.codecogs.com/svg.image?Total&space;Cost=&space;RSS(w)&plus;\lambda&space;*\left&space;(&space;\left|w&space;\right|&space;\right&space;)^{2}&space;" />
                <br />
                <br />
                <img src="https://latex.codecogs.com/svg.image?RSS(w)&space;=&space;\sum_{i=0}^{N}\left&space;(&space;Y_{i}-F(X_{i})&space;\right&space;)^{2}&space;" />
                <br />
                <br />
                Here, λ, i.e. alpha, is tuning parameters, if λ increase
                variance decrease and bias increase if λ decrease variance
                increase and bias decrease hence in essence, λ controls model
                complexity. RSS stands for Residual Sum of Squares, Yᵢ is the
                known value of iᵗʰ observation and 𝔽 (Xᵢ) gives the predicted
                value of iᵗʰ observation and w, is the measure of magnitude of
                coefficient, if measure of magnitude of coefficient is a small
                value that means model is not over fit
              </p>
            </div>
          </div>
          {/* SECTION 2 : */}

          {/* SECTION 3 : */}
          <div class="row justify-content-md-start text-start g-5 py-5">
            <div class="col-md-10">
              <h1 class="display-5 fw-bold lh-1 mb-3">
                Support Vector Regression
              </h1>
              <p class="lead">
                Support vector regression is a supervised learning algorithm
                that is used to predict discrete values. The basic idea behind
                the support vector regression is to find the best fit line i.e.
                the hyperplane that has the maximum numbers of points. The
                support vector regression tries to fit the best line within the
                threshold value. The threshold value is the distance between the
                hyperplane and boundary line. <br />
                <br />
                The objective of a support vector machine algorithm is to find a
                hyperplane in an n-dimensional space that distinctly classifies
                the data points. The data points on either side of the
                hyperplane that are closest to the hyperplane are called Support
                Vectors. These influence the position and orientation of the
                hyperplane and thus help build the SVM.
              </p>
            </div>
          </div>
          {/* SECTION 3 : */}

          {/* SECTION 4 : */}
          <div class="row justify-content-md-start text-end g-5 py-5 flex-row-reverse">
            <div class="col-md-10 ">
              <h1 class="display-5 fw-bold lh-1 mb-3">XGBoost Regression</h1>
              <p class="lead">
                XGBoost aka Extreme Gradient Boosting, is a very powerful for
                supervised regression models. XGBoost attempts to accurately
                predict a target variable by combining the estimates of a set of
                simpler, weaker models. XGBoost expects to have the base
                learners which are uniformly bad at the remainder so that when
                all the predictions are combined, bad predictions cancels out
                and better one sums up to form final good predictions.
                <br /> <br />
                XGBoost minimizes a regularized (L1 and L2) objective function
                that combines a convex loss function (based on the difference
                between the predicted and target outputs) and a penalty term for
                model complexity (in other words, the regression tree
                functions). The training proceeds iteratively, adding new trees
                that predict the residuals or errors of prior trees that are
                then combined with previous trees to make the final prediction.
                It's called gradient boosting because it uses a gradient descent
                algorithm to minimize the loss when adding new models.
              </p>
            </div>
          </div>
          {/* SECTION 4 : */}

          {/* SECTION 5 : */}
          <div class="row justify-content-md-start text-start g-5 py-5">
            <div class="col-md-10">
              <h1 class="display-5 fw-bold lh-1 mb-3">
                Gradient Boosting Regression
              </h1>
              <p class="lead">
                Gradient boosting algorithm is one of the most powerful
                algorithms in the field of machine learning. As we know that the
                errors in machine learning algorithms are broadly classified
                into two categories i.e. Bias Error and Variance Error. As
                gradient boosting is one of the boosting algorithms it is used
                to minimize bias error of the model.
                <br />
                <br /> Gradient boosting is a machine learning technique for
                regression, classification and other tasks, which produces a
                prediction model in the form of an ensemble of weak prediction
                models, typically decision trees. <br />
                <br />
                Gradient boosting algorithm can be used for predicting not only
                continuous target variable (as a Regressor) but also categorical
                target variable (as a Classifier). When it is used as a
                regressor, the cost function is Mean Square Error (MSE) and when
                it is used as a classifier then the cost function is Log loss.
              </p>
            </div>
          </div>
          {/* SECTION 5 : */}

          {/* SECTION 6 : */}
          <div class="row justify-content-md-start text-end g-5 py-5 flex-row-reverse">
            <div class="col-md-10 ">
              <h1 class="display-5 fw-bold lh-1 mb-3">
                Random Forest Regression
              </h1>
              <p class="lead">
                A Random Forest is an ensemble technique capable of performing
                both regression and classification tasks with the use of
                multiple decision trees and a technique called Bootstrap
                Aggregation, commonly known as bagging. Bagging, in the Random
                Forest method, involves training each decision tree on a
                different data sample where sampling is done with replacement.
                <br />
                <br />
                The basic idea behind this is to combine multiple decision trees
                in determining the final output rather than relying on
                individual decision trees.
              </p>
            </div>
          </div>
          {/* SECTION 6 : */}

          {/* SECTION 5 : */}
          <div class="row justify-content-md-start text-start g-5 py-5">
            <div class="col-md-10">
              <h1 class="display-5 fw-bold lh-1 mb-3">Voting Regression</h1>
              <p class="lead">
                A Voting Regressor is an ensemble meta-estimator that fits
                several base regressors, each on the whole dataset. Then it
                averages the individual predictions to form a final prediction.
                Voting is an ensemble method that combines the performances of
                multiple models to make predictions.
                <br />
                <br /> Voting in regression problems is somewhat different.
                Instead of finding the prediction with the highest frequency,
                regression models built with voting take the predictions of each
                model and compute their average value to derive a final
                prediction.
                <br />
                <br /> Clearly best performing model is gradient boosting
                followed XGBoost model. We will combine both the best performing
                model using voting regressor. A voting regressor is an ensemble
                meta-estimator that fits several base regressors, each on the
                whole dataset. Then it averages the individual predictions to
                form a final prediction.
              </p>
            </div>
          </div>
          {/* SECTION 5 : */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MachineLearningPage;
