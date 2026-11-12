# What is Regularization in Machine Learning? L1 vs L2 Explained

> **Step 1: Machine Learning Foundations** · ⏱️ 3 min read · [Read original](https://outcomeschool.com/blog/regularization-in-machine-learning)

## TL;DR
Regularization reduces overfitting by adding a penalty on the weights to the error function. L1 (Lasso) penalizes absolute weights; L2 (Ridge) penalizes squared weights.

## Key Concepts
- **Overfitting** — the model learns detail and noise in training data so much that it hurts performance on new data.
- **Regularization** — a technique that penalizes weights so they stay evenly distributed rather than favouring one feature.
- **L1 / Lasso** — penalty is the sum of absolute values of weights.
- **L2 / Ridge** — penalty is the sum of squared values of weights.
- **Tuning parameter p** — controls how strongly the model is penalized (same role in both).

## How It Works
A good model does not put too much weight on one particular feature. Regularization achieves this by adding a penalty term to the error:

$$\text{Loss} = \text{Error} + p \sum_j |w_j| \quad (L1) \qquad \text{Loss} = \text{Error} + p \sum_j w_j^2 \quad (L2)$$

Other techniques exist too, for example Dropout, which randomly switches off neurons in deep networks.

| | L1 (Lasso) | L2 (Ridge) |
|---|---|---|
| Penalty | Sum of absolute weights | Sum of squared weights |
| Strength set by | p | p |

## Key Takeaways
- Regularization combats overfitting by penalizing weights.
- L1 = Lasso = absolute values; L2 = Ridge = squares.
- The tuning parameter p sets penalty strength.
- Dropout is another regularization technique for neural networks.
