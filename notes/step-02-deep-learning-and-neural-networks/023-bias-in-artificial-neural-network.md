# What is Bias in Artificial Neural Network?

> **Step 2: Deep Learning and Neural Networks** · ⏱️ 3 min read · [Read original](https://outcomeschool.com/blog/bias-in-artificial-neural-network)

## TL;DR
Bias is the constant c in $y = mx + c$. Without it the model's line must pass through the origin; with it the model can shift the line to fit the data.

## Key Concepts
- **Bias (c)** — a constant added to the model so it is not forced through the origin.
- **m and c** — both learned by the model during training.

## How It Works
- With $y = mx$, the model can only find lines through the origin, which often cannot fit the given data.
- Changing the model to $y = mx + c$ gives it freedom to shift the line and fit the best line.
- The model finds suitable values of m and c itself while training.

| Model | Constraint | Fit |
|---|---|---|
| y = mx | Line passes through origin | Often poor |
| y = mx + c | None; c shifts the line | Can fit best |

## Key Takeaways
- Bias is a constant that gives the model freedom to perform best.
- Without bias, the line is pinned to the origin.
- The model learns the bias value during training.
