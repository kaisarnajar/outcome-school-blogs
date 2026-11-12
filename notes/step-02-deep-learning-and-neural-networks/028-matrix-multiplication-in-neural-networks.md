# How Does Matrix Multiplication Work in Neural Networks?

> **Step 2: Deep Learning and Neural Networks** · ⏱️ 19 min read · [Read original](https://outcomeschool.com/blog/matrix-multiplication-in-neural-networks)

## TL;DR
A whole layer of neurons is just one matrix multiplication plus a bias: `output = x @ W + b`. Matrix multiplication is a bundle of independent dot products, which is why GPUs with thousands of cores run neural networks so fast.

## Key Concepts
- **Vector** — ordered list of numbers (e.g. `[3, 2, 1]` for bedrooms, bathrooms, floors).
- **Matrix** — table of numbers; shape is rows x columns.
- **Dot product** — multiply matching entries of two equal-length vectors and add: quantities `[2,3,1]` with prices `[10,5,20]` gives 55. One neuron = one dot product.
- **Weight matrix W** — shape (number of inputs) x (number of neurons); each column holds one neuron's weights.
- **Batch** — several inputs processed together as rows of a matrix X.
- **Broadcasting** — the single bias row is added to every row of the result.

## How It Works
### Row-times-column rule
Each entry of `C = A @ B` is one dot product of a row of A and a column of B. For A = [[1,2,3],[4,5,6]] and B = [[7,8],[9,10],[11,12]], C = [[58,64],[139,154]].

### Shape rule
$$(m \times n)\ @\ (n \times p) = (m \times p)$$
The inside numbers must match; the outside numbers give the result shape. A mismatch raises a NumPy `ValueError`, one of the most common errors in building networks.

### One layer = one matmul
Input `x = [1,2,3]`, neuron 1 weights `[2,1,0]` bias 1, neuron 2 weights `[0,1,3]` bias -2. Computed neuron by neuron: 5 and 9. As a matrix, W = [[2,0],[1,1],[0,3]] (3 x 2), and `x @ W + b = [5, 9]`. A 1,000-neuron layer is still one line. The activation function comes after the multiplication. Some libraries store W transposed.

### Batches
Stack inputs as rows: X (2 x 3) @ W (3 x 2) gives [[5,9],[14,21]]. Same W for every input; one big multiplication is faster than many small ones. Example: batch 32, 784 inputs, 128 neurons gives W1 784 x 128, then W2 128 x 10; rows stay 32, columns become each layer's neuron count.

### Why GPUs
Total multiplications are $m \cdot n \cdot p$; for 32 x 784 x 128 that is 3,211,264 for one layer. No output entry depends on another, so all can be computed in parallel. A CPU has a few powerful cores; a GPU has thousands of simple ones (a professor vs a thousand teachers grading papers). GPUs also have units built for matmul.

## Diagram
```mermaid
flowchart LR
    X["Batch X: 32 x 784"] -->|"@ W1 (784 x 128)"| H["Hidden: 32 x 128"]
    H -->|"@ W2 (128 x 10)"| Y["Output: 32 x 10"]
```

## Key Takeaways
- Matrix multiplication = many dot products; each output entry is one row dot one column.
- Inner dimensions must match; outer dimensions give the output shape.
- A dense layer is `x @ W + b`, with shape of W = inputs x neurons.
- Batching turns many inputs into one big matmul; rows stay equal to batch size.
- Independent dot products are why GPUs are ideal for deep learning.
