# What are L1 and L2 Loss Functions?

> **Step 1: Machine Learning Foundations** · ⏱️ 3 min read · [Read original](https://outcomeschool.com/blog/l1-and-l2-loss-functions)

## TL;DR
L1 and L2 are loss functions that minimize prediction error. L2 is preferred in most cases, but L1 is better when the data has outliers.

## Key Concepts
- **L1 Loss (Least Absolute Deviations, LAD)** — sum of absolute differences between true and predicted values.
- **L2 Loss (Least Square Errors, LS)** — sum of squared differences between true and predicted values.
- **Outlier** — an extreme data point that can dominate a squared error.

## How It Works
$$L1 = \sum_i |y_i - \hat{y}_i| \qquad L2 = \sum_i (y_i - \hat{y}_i)^2$$

Squaring makes large errors count disproportionately. With outliers, the squared differences produce a much larger error, so L2 performs badly. Options in that case: use L1, which is not affected by outliers, or remove the outliers and then use L2.

| | L1 | L2 |
|---|---|---|
| Full name | Least Absolute Deviations | Least Square Errors |
| Error | Sum of absolute differences | Sum of squared differences |
| Outliers | Not affected | Hurt performance |
| Default? | When outliers present | Preferred in most cases |

## Key Takeaways
- L1 = absolute differences (LAD); L2 = squared differences (LS).
- L2 is the general default.
- Outliers inflate L2 because of squaring; prefer L1 or clean the outliers first.
