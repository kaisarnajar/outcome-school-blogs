# AI Engineer Roadmap — Study Notes

Notes (with diagrams) for all **257** blogs in the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by Amit Shekhar (Outcome School). Read them on the site: https://kaisarnajar.github.io/outcome-school-blogs/

## Contents

- [Step 1: Machine Learning Foundations](#step-1-machine-learning-foundations)
- [Step 2: Deep Learning and Neural Networks](#step-2-deep-learning-and-neural-networks)
- [Step 3: Generative AI and the Transformer Architecture](#step-3-generative-ai-and-the-transformer-architecture)
- [Step 4: How LLMs Generate Text](#step-4-how-llms-generate-text)
- [Step 5: Modern LLM Architecture](#step-5-modern-llm-architecture)
- [Step 6: Types of Language Models](#step-6-types-of-language-models)
- [Step 7: Training, Fine-Tuning, and Alignment](#step-7-training-fine-tuning-and-alignment)
- [Step 8: Prompt Engineering and Context Engineering](#step-8-prompt-engineering-and-context-engineering)
- [Step 9: Vector Search and Retrieval-Augmented Generation (RAG)](#step-9-vector-search-and-retrieval-augmented-generation-rag)
- [Step 10: AI Agents and Agentic Systems](#step-10-ai-agents-and-agentic-systems)
- [Step 11: Agentic Engineering and Agent Frameworks](#step-11-agentic-engineering-and-agent-frameworks)
- [Step 12: LLM Inference Engineering](#step-12-llm-inference-engineering)
- [Step 13: Evaluation and Observability](#step-13-evaluation-and-observability)
- [Step 14: AI Safety and Security](#step-14-ai-safety-and-security)
- [Step 15: Multimodal AI and Generative Models](#step-15-multimodal-ai-and-generative-models)
- [Step 16: AI Infrastructure, Deployment, and System Design](#step-16-ai-infrastructure-deployment-and-system-design)
- [Step 16: Supporting reads for AI System Design](#step-16-supporting-reads-for-ai-system-design)
- [Step 17: Frontier Ideas in AI](#step-17-frontier-ideas-in-ai)

## Step 1: Machine Learning Foundations

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 1 | [What is Machine Learning?](step-01-machine-learning-foundations/001-machine-learning.md) | 12 min | [link](https://outcomeschool.com/blog/machine-learning) |
| 2 | [Supervised vs Unsupervised Learning](step-01-machine-learning-foundations/002-supervised-vs-unsupervised-learning.md) | 7 min | [link](https://outcomeschool.com/blog/supervised-vs-unsupervised-learning) |
| 3 | [Linear Regression vs Logistic Regression](step-01-machine-learning-foundations/003-linear-regression-vs-logistic-regression.md) | 7 min | [link](https://outcomeschool.com/blog/linear-regression-vs-logistic-regression) |
| 4 | [What is Feature Engineering in Machine Learning?](step-01-machine-learning-foundations/004-feature-engineering.md) | 6 min | [link](https://outcomeschool.com/blog/feature-engineering) |
| 5 | [What is One-hot Encoding in Machine Learning?](step-01-machine-learning-foundations/005-one-hot-encoding.md) | 15 min | [link](https://outcomeschool.com/blog/one-hot-encoding) |
| 6 | [Precision vs Recall](step-01-machine-learning-foundations/006-precision-vs-recall.md) | 11 min | [link](https://outcomeschool.com/blog/precision-vs-recall) |
| 7 | [How does a confusion matrix work?](step-01-machine-learning-foundations/007-confusion-matrix.md) | 16 min | [link](https://outcomeschool.com/blog/confusion-matrix) |
| 8 | [What is Bayes' Theorem?](step-01-machine-learning-foundations/008-bayes-theorem.md) | 8 min | [link](https://outcomeschool.com/blog/bayes-theorem) |
| 9 | [What are L1 and L2 Loss Functions?](step-01-machine-learning-foundations/009-l1-and-l2-loss-functions.md) | 3 min | [link](https://outcomeschool.com/blog/l1-and-l2-loss-functions) |
| 10 | [What is Regularization in Machine Learning? L1 vs L2 Explained](step-01-machine-learning-foundations/010-regularization-in-machine-learning.md) | 3 min | [link](https://outcomeschool.com/blog/regularization-in-machine-learning) |
| 11 | [Why do we split data into train, validation, and test sets?](step-01-machine-learning-foundations/011-train-validation-test-split.md) | 14 min | [link](https://outcomeschool.com/blog/train-validation-test-split) |
| 12 | [How does Cross-Validation work?](step-01-machine-learning-foundations/012-cross-validation.md) | 17 min | [link](https://outcomeschool.com/blog/cross-validation) |
| 13 | [How does the Bias-Variance Tradeoff work?](step-01-machine-learning-foundations/013-bias-variance-tradeoff.md) | 17 min | [link](https://outcomeschool.com/blog/bias-variance-tradeoff) |
| 14 | [How do Decision Trees and Random Forests work?](step-01-machine-learning-foundations/014-decision-trees-and-random-forests.md) | 18 min | [link](https://outcomeschool.com/blog/decision-trees-and-random-forests) |
| 15 | [How does K-Means Clustering work?](step-01-machine-learning-foundations/015-k-means-clustering.md) | 16 min | [link](https://outcomeschool.com/blog/k-means-clustering) |
| 16 | [How does Data Augmentation work?](step-01-machine-learning-foundations/016-data-augmentation.md) | 14 min | [link](https://outcomeschool.com/blog/data-augmentation) |
| 17 | [What is Reinforcement Learning?](step-01-machine-learning-foundations/017-reinforcement-learning.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning) |
| 18 | [What is a Markov Decision Process (MDP)?](step-01-machine-learning-foundations/018-markov-decision-process-mdp.md) | 17 min | [link](https://outcomeschool.com/blog/markov-decision-process-mdp) |
| 19 | [What is Exploration vs Exploitation in Reinforcement Learning?](step-01-machine-learning-foundations/019-exploration-vs-exploitation.md) | 18 min | [link](https://outcomeschool.com/blog/exploration-vs-exploitation) |
| 20 | [What is a Value Function? Q-Learning Explained Step by Step](step-01-machine-learning-foundations/020-value-function-and-q-learning.md) | 17 min | [link](https://outcomeschool.com/blog/value-function-and-q-learning) |
| 21 | [What is Policy Gradient? The REINFORCE Algorithm Explained](step-01-machine-learning-foundations/021-policy-gradient-reinforce.md) | 18 min | [link](https://outcomeschool.com/blog/policy-gradient-reinforce) |
| 22 | [What is Actor-Critic in Reinforcement Learning? The Advantage Function Explained](step-01-machine-learning-foundations/022-actor-critic.md) | 17 min | [link](https://outcomeschool.com/blog/actor-critic) |
| 23 | [How does Self-Supervised Learning work?](step-01-machine-learning-foundations/023-self-supervised-learning.md) | 12 min | [link](https://outcomeschool.com/blog/self-supervised-learning) |
| 24 | [How does Semi-Supervised Learning work?](step-01-machine-learning-foundations/024-semi-supervised-learning.md) | 7 min | [link](https://outcomeschool.com/blog/semi-supervised-learning) |
| 25 | [What is Contrastive Learning?](step-01-machine-learning-foundations/025-contrastive-learning.md) | 15 min | [link](https://outcomeschool.com/blog/contrastive-learning) |
| 26 | [How does a Recommendation System work?](step-01-machine-learning-foundations/026-recommendation-system.md) | 21 min | [link](https://outcomeschool.com/blog/recommendation-system) |
| 27 | [What is Explainable AI?](step-01-machine-learning-foundations/027-explainable-ai-xai.md) | 7 min | [link](https://outcomeschool.com/blog/explainable-ai-xai) |

## Step 2: Deep Learning and Neural Networks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 28 | [What is a Neural Network and How Does It Work?](step-02-deep-learning-and-neural-networks/028-neural-network.md) | 17 min | [link](https://outcomeschool.com/blog/neural-network) |
| 29 | [What is Bias in Artificial Neural Network?](step-02-deep-learning-and-neural-networks/029-bias-in-artificial-neural-network.md) | 3 min | [link](https://outcomeschool.com/blog/bias-in-artificial-neural-network) |
| 30 | [What is a Multilayer Perceptron (MLP) and How Does It Work?](step-02-deep-learning-and-neural-networks/030-multilayer-perceptron-mlp.md) | 17 min | [link](https://outcomeschool.com/blog/multilayer-perceptron-mlp) |
| 31 | [What are Activation Functions in Neural Networks? Sigmoid, Tanh, ReLU, and Softmax Explained](step-02-deep-learning-and-neural-networks/031-activation-functions.md) | 17 min | [link](https://outcomeschool.com/blog/activation-functions) |
| 32 | [What is the Softmax Function and How Does It Work?](step-02-deep-learning-and-neural-networks/032-softmax-function.md) | 15 min | [link](https://outcomeschool.com/blog/softmax-function) |
| 33 | [What are Logits in Machine Learning?](step-02-deep-learning-and-neural-networks/033-logits-in-machine-learning.md) | 15 min | [link](https://outcomeschool.com/blog/logits-in-machine-learning) |
| 34 | [How Does Matrix Multiplication Work in Neural Networks?](step-02-deep-learning-and-neural-networks/034-matrix-multiplication-in-neural-networks.md) | 19 min | [link](https://outcomeschool.com/blog/matrix-multiplication-in-neural-networks) |
| 35 | [How Does Gradient Descent Work?](step-02-deep-learning-and-neural-networks/035-math-behind-gradient-descent.md) | 15 min | [link](https://outcomeschool.com/blog/math-behind-gradient-descent) |
| 36 | [What are Epoch, Batch, Batch Size, and Iteration in Machine Learning?](step-02-deep-learning-and-neural-networks/036-epoch-batch-and-iteration.md) | 16 min | [link](https://outcomeschool.com/blog/epoch-batch-and-iteration) |
| 37 | [How Does Backpropagation Work? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/037-math-behind-backpropagation.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-backpropagation) |
| 38 | [What are Optimizers in Deep Learning? SGD, Momentum, RMSProp, and Adam Explained](step-02-deep-learning-and-neural-networks/038-optimizers-in-deep-learning.md) | 16 min | [link](https://outcomeschool.com/blog/optimizers-in-deep-learning) |
| 39 | [How do learning rate schedules and warmup work?](step-02-deep-learning-and-neural-networks/039-learning-rate-schedules-and-warmup.md) | 16 min | [link](https://outcomeschool.com/blog/learning-rate-schedules-and-warmup) |
| 40 | [Why do vanishing and exploding gradients happen?](step-02-deep-learning-and-neural-networks/040-vanishing-and-exploding-gradients.md) | 18 min | [link](https://outcomeschool.com/blog/vanishing-and-exploding-gradients) |
| 41 | [Why Do We Initialize Weights Randomly in Neural Networks?](step-02-deep-learning-and-neural-networks/041-random-weight-initialization.md) | 20 min | [link](https://outcomeschool.com/blog/random-weight-initialization) |
| 42 | [What is Entropy in Information Theory?](step-02-deep-learning-and-neural-networks/042-entropy-in-information-theory.md) | 8 min | [link](https://outcomeschool.com/blog/entropy-in-information-theory) |
| 43 | [What is Cross-Entropy Loss?](step-02-deep-learning-and-neural-networks/043-math-behind-cross-entropy-loss.md) | 17 min | [link](https://outcomeschool.com/blog/math-behind-cross-entropy-loss) |
| 44 | [What is KL Divergence? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/044-kl-divergence.md) | 16 min | [link](https://outcomeschool.com/blog/kl-divergence) |
| 45 | [What is Dropout in Neural Networks?](step-02-deep-learning-and-neural-networks/045-dropout-in-neural-networks.md) | 14 min | [link](https://outcomeschool.com/blog/dropout-in-neural-networks) |
| 46 | [How does early stopping work?](step-02-deep-learning-and-neural-networks/046-early-stopping.md) | 12 min | [link](https://outcomeschool.com/blog/early-stopping) |
| 47 | [Batch Normalization vs Layer Normalization](step-02-deep-learning-and-neural-networks/047-batch-normalization-vs-layer-normalization.md) | 9 min | [link](https://outcomeschool.com/blog/batch-normalization-vs-layer-normalization) |
| 48 | [What is RMSNorm? Root Mean Square Layer Normalization Explained](step-02-deep-learning-and-neural-networks/048-rmsnorm-root-mean-square-layer-normalization.md) | 13 min | [link](https://outcomeschool.com/blog/rmsnorm-root-mean-square-layer-normalization) |
| 49 | [Convolutional Neural Networks](step-02-deep-learning-and-neural-networks/049-convolutional-neural-network-cnn.md) | 19 min | [link](https://outcomeschool.com/blog/convolutional-neural-network-cnn) |
| 50 | [How does Object Detection work?](step-02-deep-learning-and-neural-networks/050-object-detection.md) | 17 min | [link](https://outcomeschool.com/blog/object-detection) |
| 51 | [How does Semantic Segmentation work?](step-02-deep-learning-and-neural-networks/051-semantic-segmentation.md) | 14 min | [link](https://outcomeschool.com/blog/semantic-segmentation) |
| 52 | [What is a Recurrent Neural Network (RNN)?](step-02-deep-learning-and-neural-networks/052-recurrent-neural-network.md) | 4 min | [link](https://outcomeschool.com/blog/recurrent-neural-network) |
| 53 | [How does PyTorch work?](step-02-deep-learning-and-neural-networks/053-how-does-pytorch-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-pytorch-work) |
| 54 | [How does TensorFlow work?](step-02-deep-learning-and-neural-networks/054-how-does-the-machine-learning-library-tensorflow-work.md) | 9 min | [link](https://outcomeschool.com/blog/how-does-the-machine-learning-library-tensorflow-work) |

## Step 3: Generative AI and the Transformer Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 55 | [What is Generative AI?](step-03-generative-ai-and-the-transformer-architecture/055-what-is-generative-ai.md) | 14 min | [link](https://outcomeschool.com/blog/what-is-generative-ai) |
| 56 | [How does an LLM work?](step-03-generative-ai-and-the-transformer-architecture/056-large-language-model-llm.md) | 18 min | [link](https://outcomeschool.com/blog/large-language-model-llm) |
| 57 | [Inside ChatGPT: What Happens After You Hit Enter](step-03-generative-ai-and-the-transformer-architecture/057-inside-chatgpt-what-happens-after.md) | 3 min | [link](https://outcomeschool.substack.com/p/inside-chatgpt-what-happens-after) |
| 58 | [What are Autoregressive Models?](step-03-generative-ai-and-the-transformer-architecture/058-autoregressive-models.md) | 20 min | [link](https://outcomeschool.com/blog/autoregressive-models) |
| 59 | [Tokenization in LLMs](step-03-generative-ai-and-the-transformer-architecture/059-tokenization-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/tokenization-in-llms) |
| 60 | [What is Byte Pair Encoding (BPE) in LLMs?](step-03-generative-ai-and-the-transformer-architecture/060-bpe-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/bpe-in-llms) |
| 61 | [What are Embeddings?](step-03-generative-ai-and-the-transformer-architecture/061-what-are-embeddings.md) | 19 min | [link](https://outcomeschool.com/blog/what-are-embeddings) |
| 62 | [How do RNNs and Transformers differ?](step-03-generative-ai-and-the-transformer-architecture/062-how-do-rnns-and-transformers-differ.md) | 8 min | [link](https://outcomeschool.com/blog/how-do-rnns-and-transformers-differ) |
| 63 | [How Does the Transformer Architecture Work?](step-03-generative-ai-and-the-transformer-architecture/063-decoding-transformer-architecture.md) | 20 min | [link](https://outcomeschool.com/blog/decoding-transformer-architecture) |
| 64 | [Encoder vs Decoder in Transformers](step-03-generative-ai-and-the-transformer-architecture/064-encoder-vs-decoder-in-transformers.md) | 11 min | [link](https://outcomeschool.com/blog/encoder-vs-decoder-in-transformers) |
| 65 | [What is Self Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/065-self-attention-in-transformers.md) | 14 min | [link](https://outcomeschool.com/blog/self-attention-in-transformers) |
| 66 | [How Does Attention Work? The Math Behind Q, K, and V](step-03-generative-ai-and-the-transformer-architecture/066-math-behind-attention-qkv.md) | 14 min | [link](https://outcomeschool.com/blog/math-behind-attention-qkv) |
| 67 | [Why Do We Scale Attention by √dₖ?](step-03-generative-ai-and-the-transformer-architecture/067-scaling-dot-product-attention.md) | 17 min | [link](https://outcomeschool.com/blog/scaling-dot-product-attention) |
| 68 | [What is Causal Masking in Attention?](step-03-generative-ai-and-the-transformer-architecture/068-causal-masking-in-attention.md) | 10 min | [link](https://outcomeschool.com/blog/causal-masking-in-attention) |
| 69 | [What is Multi-Head Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/069-multi-head-attention-in-transformers.md) | 15 min | [link](https://outcomeschool.com/blog/multi-head-attention-in-transformers) |
| 70 | [What is Cross Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/070-cross-attention-in-transformers.md) | 16 min | [link](https://outcomeschool.com/blog/cross-attention-in-transformers) |
| 71 | [Positional Embeddings in LLMs](step-03-generative-ai-and-the-transformer-architecture/071-positional-embeddings-in-llms.md) | 1 min | [link](https://outcomeschool.substack.com/p/positional-embeddings-in-llms) |
| 72 | [What is RoPE (Rotary Position Embedding)? The Math Behind It](step-03-generative-ai-and-the-transformer-architecture/072-math-behind-rope-rotary-position-embedding.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-rope-rotary-position-embedding) |
| 73 | [What is the Feed-Forward Network in LLMs?](step-03-generative-ai-and-the-transformer-architecture/073-feed-forward-networks-in-llms.md) | 21 min | [link](https://outcomeschool.com/blog/feed-forward-networks-in-llms) |

## Step 4: How LLMs Generate Text

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 74 | [How does Temperature control LLM output?](step-04-how-llms-generate-text/074-how-does-temperature-control-llm-output.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-temperature-control-llm-output) |
| 75 | [How do Top-k and Top-p Sampling work?](step-04-how-llms-generate-text/075-how-do-top-k-and-top-p-sampling-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-top-k-and-top-p-sampling-work) |
| 76 | [How do Greedy Decoding and Beam Search differ?](step-04-how-llms-generate-text/076-greedy-decoding-vs-beam-search.md) | 19 min | [link](https://outcomeschool.com/blog/greedy-decoding-vs-beam-search) |
| 77 | [What are Log Probabilities (Logprobs) in LLMs?](step-04-how-llms-generate-text/077-logprobs-in-llms.md) | 15 min | [link](https://outcomeschool.com/blog/logprobs-in-llms) |
| 78 | [Stop Tokens in LLMs](step-04-how-llms-generate-text/078-stop-tokens-in-llms.md) | 19 min | [link](https://outcomeschool.com/blog/stop-tokens-in-llms) |
| 79 | [How does Token Streaming work?](step-04-how-llms-generate-text/079-how-does-token-streaming-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-token-streaming-work) |
| 80 | [How does the Context Window work?](step-04-how-llms-generate-text/080-context-window.md) | 12 min | [link](https://outcomeschool.com/blog/context-window) |
| 81 | [What is the Lost in the Middle Problem in LLMs?](step-04-how-llms-generate-text/081-lost-in-the-middle-problem-in-llms.md) | 23 min | [link](https://outcomeschool.com/blog/lost-in-the-middle-problem-in-llms) |
| 82 | [Why Do LLMs Hallucinate? The Token-Level Explanation](step-04-how-llms-generate-text/082-why-do-llms-hallucinate-the-token-level-explanation.md) | 20 min | [link](https://outcomeschool.com/blog/why-do-llms-hallucinate-the-token-level-explanation) |

## Step 5: Modern LLM Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 83 | [What is Mixture of Experts (MoE)?](step-05-modern-llm-architecture/083-mixture-of-experts.md) | 16 min | [link](https://outcomeschool.com/blog/mixture-of-experts) |
| 84 | [What is Grouped Query Attention (GQA)?](step-05-modern-llm-architecture/084-grouped-query-attention.md) | 19 min | [link](https://outcomeschool.com/blog/grouped-query-attention) |
| 85 | [How does Sliding Window Attention work?](step-05-modern-llm-architecture/085-how-does-sliding-window-attention-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-sliding-window-attention-work) |
| 86 | [How do Attention Sinks work?](step-05-modern-llm-architecture/086-how-do-attention-sinks-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-attention-sinks-work) |
| 87 | [What is Flash Attention and Why Is It So Fast?](step-05-modern-llm-architecture/087-decoding-flash-attention.md) | 25 min | [link](https://outcomeschool.com/blog/decoding-flash-attention) |
| 88 | [What is DeepSeek-V4 and How Does It Work? Architecture Explained](step-05-modern-llm-architecture/088-decoding-deepseek-v4.md) | 21 min | [link](https://outcomeschool.com/blog/decoding-deepseek-v4) |

## Step 6: Types of Language Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 89 | [What are Small Language Models (SLMs)?](step-06-types-of-language-models/089-small-language-models-slms.md) | 20 min | [link](https://outcomeschool.com/blog/small-language-models-slms) |
| 90 | [What are Large Reasoning Models (LRMs)?](step-06-types-of-language-models/090-large-reasoning-models.md) | 21 min | [link](https://outcomeschool.com/blog/large-reasoning-models) |
| 91 | [What are Recursive Language Models (RLMs)?](step-06-types-of-language-models/091-recursive-language-models.md) | 13 min | [link](https://outcomeschool.com/blog/recursive-language-models) |
| 92 | [How do Diffusion Language Models (DLMs) work?](step-06-types-of-language-models/092-how-do-diffusion-language-models-dlms-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-diffusion-language-models-dlms-work) |
| 93 | [Jev and System One Models Explained](step-06-types-of-language-models/093-jev-and-system-one-models-explained.md) | 20 min | [link](https://outcomeschool.com/blog/jev-and-system-one-models-explained) |

## Step 7: Training, Fine-Tuning, and Alignment

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 94 | [How does Pretraining work?](step-07-training-fine-tuning-and-alignment/094-llm-pretraining.md) | 16 min | [link](https://outcomeschool.com/blog/llm-pretraining) |
| 95 | [What are the Chinchilla scaling laws?](step-07-training-fine-tuning-and-alignment/095-chinchilla-scaling-laws.md) | 16 min | [link](https://outcomeschool.com/blog/chinchilla-scaling-laws) |
| 96 | [How does Fine-Tuning work?](step-07-training-fine-tuning-and-alignment/096-how-does-fine-tuning-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-fine-tuning-work) |
| 97 | [How does Instruction Tuning work?](step-07-training-fine-tuning-and-alignment/097-instruction-tuning.md) | 17 min | [link](https://outcomeschool.com/blog/instruction-tuning) |
| 98 | [What is LoRA (Low-Rank Adaptation)?](step-07-training-fine-tuning-and-alignment/098-lora-low-rank-adaptation-of-llms.md) | 14 min | [link](https://outcomeschool.com/blog/lora-low-rank-adaptation-of-llms) |
| 99 | [How does Prefix Tuning work?](step-07-training-fine-tuning-and-alignment/099-how-does-prefix-tuning-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-prefix-tuning-work) |
| 100 | [How does Knowledge Distillation work?](step-07-training-fine-tuning-and-alignment/100-how-does-knowledge-distillation-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-knowledge-distillation-work) |
| 101 | [What is Continual Learning in LLMs? Solving Catastrophic Forgetting](step-07-training-fine-tuning-and-alignment/101-continual-learning-in-llms.md) | 14 min | [link](https://outcomeschool.com/blog/continual-learning-in-llms) |
| 102 | [What is Deep RL from Human Preferences? The Paper That Started RLHF](step-07-training-fine-tuning-and-alignment/102-decoding-deep-rl-from-human-preferences.md) | 16 min | [link](https://outcomeschool.com/blog/decoding-deep-rl-from-human-preferences) |
| 103 | [What is InstructGPT? How GPT-3 Learned to Follow Instructions](step-07-training-fine-tuning-and-alignment/103-decoding-instructgpt.md) | 17 min | [link](https://outcomeschool.com/blog/decoding-instructgpt) |
| 104 | [What is RLHF? Reinforcement Learning from Human Feedback Explained](step-07-training-fine-tuning-and-alignment/104-reinforcement-learning-from-human-feedback-rlhf.md) | 21 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-human-feedback-rlhf) |
| 105 | [What is a Reward Model and How Is It Trained?](step-07-training-fine-tuning-and-alignment/105-reward-model.md) | 17 min | [link](https://outcomeschool.com/blog/reward-model) |
| 106 | [What is Reward Hacking in Reinforcement Learning and How Do We Prevent It?](step-07-training-fine-tuning-and-alignment/106-reward-hacking.md) | 16 min | [link](https://outcomeschool.com/blog/reward-hacking) |
| 107 | [What is RLAIF? Reinforcement Learning from AI Feedback Explained](step-07-training-fine-tuning-and-alignment/107-reinforcement-learning-from-ai-feedback-rlaif.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-ai-feedback-rlaif) |
| 108 | [What is Proximal Policy Optimization (PPO)?](step-07-training-fine-tuning-and-alignment/108-proximal-policy-optimization-ppo.md) | 13 min | [link](https://outcomeschool.com/blog/proximal-policy-optimization-ppo) |
| 109 | [What is Direct Preference Optimization (DPO)?](step-07-training-fine-tuning-and-alignment/109-direct-preference-optimization-dpo.md) | 15 min | [link](https://outcomeschool.com/blog/direct-preference-optimization-dpo) |
| 110 | [What is Group Relative Policy Optimization (GRPO)?](step-07-training-fine-tuning-and-alignment/110-group-relative-policy-optimization-grpo.md) | 17 min | [link](https://outcomeschool.com/blog/group-relative-policy-optimization-grpo) |
| 111 | [What is Reinforcement Learning with Verifiable Rewards (RLVR)?](step-07-training-fine-tuning-and-alignment/111-reinforcement-learning-with-verifiable-rewards-rlvr.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning-with-verifiable-rewards-rlvr) |

## Step 8: Prompt Engineering and Context Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 112 | [How does Prompt Engineering work?](step-08-prompt-engineering-and-context-engineering/112-prompt-engineering.md) | 13 min | [link](https://outcomeschool.com/blog/prompt-engineering) |
| 113 | [How does In-Context Learning work?](step-08-prompt-engineering-and-context-engineering/113-in-context-learning.md) | 12 min | [link](https://outcomeschool.com/blog/in-context-learning) |
| 114 | [How does Chain-of-Thought (CoT) Prompting work?](step-08-prompt-engineering-and-context-engineering/114-how-does-chain-of-thought-prompting-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-chain-of-thought-prompting-work) |
| 115 | [How does Tree of Thoughts work?](step-08-prompt-engineering-and-context-engineering/115-how-does-tree-of-thoughts-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-tree-of-thoughts-work) |
| 116 | [How does Prompt Chaining work?](step-08-prompt-engineering-and-context-engineering/116-how-does-prompt-chaining-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-prompt-chaining-work) |
| 117 | [How does Prompt Caching work?](step-08-prompt-engineering-and-context-engineering/117-how-does-prompt-caching-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-prompt-caching-work) |
| 118 | [What is Context Engineering?](step-08-prompt-engineering-and-context-engineering/118-context-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/context-engineering) |
| 119 | [How does Context Compaction work?](step-08-prompt-engineering-and-context-engineering/119-how-does-context-compaction-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-context-compaction-work) |

## Step 9: Vector Search and Retrieval-Augmented Generation (RAG)

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 120 | [How does an embedding model work?](step-09-vector-search-and-retrieval-augmented-generation-rag/120-embedding-model.md) | 17 min | [link](https://outcomeschool.com/blog/embedding-model) |
| 121 | [How does Cosine Similarity work?](step-09-vector-search-and-retrieval-augmented-generation-rag/121-cosine-similarity.md) | 14 min | [link](https://outcomeschool.com/blog/cosine-similarity) |
| 122 | [How does a Vector Database work?](step-09-vector-search-and-retrieval-augmented-generation-rag/122-how-does-a-vector-database-work.md) | 31 min | [link](https://outcomeschool.com/blog/how-does-a-vector-database-work) |
| 123 | [How does Approximate Nearest Neighbor (ANN) Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/123-how-does-approximate-nearest-neighbor-ann-search-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-approximate-nearest-neighbor-ann-search-work) |
| 124 | [How does Semantic Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/124-how-does-semantic-search-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-semantic-search-work) |
| 125 | [How does an Inverted Index work?](step-09-vector-search-and-retrieval-augmented-generation-rag/125-inverted-index.md) | 17 min | [link](https://outcomeschool.com/blog/inverted-index) |
| 126 | [How does Hybrid Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/126-how-does-hybrid-search-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-hybrid-search-work) |
| 127 | [How does a Reranker work?](step-09-vector-search-and-retrieval-augmented-generation-rag/127-how-does-a-reranker-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-does-a-reranker-work) |
| 128 | [What is ColBERT? Late Interaction Retrieval Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/128-decoding-colbert.md) | 19 min | [link](https://outcomeschool.com/blog/decoding-colbert) |
| 129 | [How does RAG work?](step-09-vector-search-and-retrieval-augmented-generation-rag/129-retrieval-augmented-generation-rag.md) | 14 min | [link](https://outcomeschool.com/blog/retrieval-augmented-generation-rag) |
| 130 | [How to Chunk Documents for RAG? Chunking Strategies Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/130-chunking-strategies-for-rag.md) | 31 min | [link](https://outcomeschool.com/blog/chunking-strategies-for-rag) |
| 131 | [How does Contextual Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/131-how-does-contextual-retrieval-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-contextual-retrieval-work) |
| 132 | [How does HyDE work in RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/132-how-does-hyde-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-hyde-work) |
| 133 | [How do Query Rewriting and Multi-Query Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/133-how-do-query-rewriting-and-multi-query-retrieval-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-do-query-rewriting-and-multi-query-retrieval-work) |
| 134 | [How does an Embedding Cache work?](step-09-vector-search-and-retrieval-augmented-generation-rag/134-how-does-an-embedding-cache-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-an-embedding-cache-work) |
| 135 | [How does Semantic Caching work?](step-09-vector-search-and-retrieval-augmented-generation-rag/135-how-does-semantic-caching-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-semantic-caching-work) |
| 136 | [What is Agentic RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/136-agentic-rag.md) | 15 min | [link](https://outcomeschool.com/blog/agentic-rag) |
| 137 | [What is GraphRAG? How Knowledge Graphs Improve RAG](step-09-vector-search-and-retrieval-augmented-generation-rag/137-graphrag.md) | 14 min | [link](https://outcomeschool.com/blog/graphrag) |
| 138 | [What is Vectorless RAG? RAG Without Embeddings or a Vector Database](step-09-vector-search-and-retrieval-augmented-generation-rag/138-vectorless-rag.md) | 21 min | [link](https://outcomeschool.com/blog/vectorless-rag) |

## Step 10: AI Agents and Agentic Systems

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 139 | [What is an AI Agent? How It Works](step-10-ai-agents-and-agentic-systems/139-ai-agent.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent) |
| 140 | [How does Function Calling work in LLMs?](step-10-ai-agents-and-agentic-systems/140-how-does-function-calling-work-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-function-calling-work-in-llms) |
| 141 | [What is an AI Agent Loop?](step-10-ai-agents-and-agentic-systems/141-ai-agent-loop.md) | 20 min | [link](https://outcomeschool.com/blog/ai-agent-loop) |
| 142 | [What is a ReAct Agent?](step-10-ai-agents-and-agentic-systems/142-react-agent.md) | 19 min | [link](https://outcomeschool.com/blog/react-agent) |
| 143 | [What is a Plan-and-Execute Agent?](step-10-ai-agents-and-agentic-systems/143-plan-and-execute-agent.md) | 15 min | [link](https://outcomeschool.com/blog/plan-and-execute-agent) |
| 144 | [What is a Reflection Agent?](step-10-ai-agents-and-agentic-systems/144-reflection-agent.md) | 17 min | [link](https://outcomeschool.com/blog/reflection-agent) |
| 145 | [How does AI Agent Memory work?](step-10-ai-agents-and-agentic-systems/145-ai-agent-memory.md) | 17 min | [link](https://outcomeschool.com/blog/ai-agent-memory) |
| 146 | [How does ChatGPT remember you?](step-10-ai-agents-and-agentic-systems/146-how-does-chatgpt-remember-you.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-chatgpt-remember-you) |
| 147 | [What is MCP (Model Context Protocol)?](step-10-ai-agents-and-agentic-systems/147-what-is-mcp-model-context-protocol.md) | 16 min | [link](https://outcomeschool.com/blog/what-is-mcp-model-context-protocol) |
| 148 | [What are Agent Skills?](step-10-ai-agents-and-agentic-systems/148-what-are-agent-skills.md) | 20 min | [link](https://outcomeschool.com/blog/what-are-agent-skills) |
| 149 | [What is OKF (Open Knowledge Format)?](step-10-ai-agents-and-agentic-systems/149-what-is-okf-open-knowledge-format.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-okf-open-knowledge-format) |
| 150 | [What are Multi-Agent Systems?](step-10-ai-agents-and-agentic-systems/150-multi-agent-systems.md) | 20 min | [link](https://outcomeschool.com/blog/multi-agent-systems) |
| 151 | [What are AI SubAgents?](step-10-ai-agents-and-agentic-systems/151-ai-subagents.md) | 9 min | [link](https://outcomeschool.com/blog/ai-subagents) |
| 152 | [How AI Agents Communicate](step-10-ai-agents-and-agentic-systems/152-how-ai-agents-communicate.md) | 19 min | [link](https://outcomeschool.com/blog/how-ai-agents-communicate) |
| 153 | [What is AI Orchestration?](step-10-ai-agents-and-agentic-systems/153-ai-orchestration.md) | 18 min | [link](https://outcomeschool.com/blog/ai-orchestration) |
| 154 | [What is Sakana Fugu? The Technical Report Explained](step-10-ai-agents-and-agentic-systems/154-decoding-sakana-fugu.md) | 33 min | [link](https://outcomeschool.com/blog/decoding-sakana-fugu) |
| 155 | [How do Computer-Use Agents work?](step-10-ai-agents-and-agentic-systems/155-how-do-computer-use-agents-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-do-computer-use-agents-work) |
| 156 | [How do Browser Agents work?](step-10-ai-agents-and-agentic-systems/156-how-do-browser-agents-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-browser-agents-work) |
| 157 | [How do Human-in-the-Loop agents work?](step-10-ai-agents-and-agentic-systems/157-human-in-the-loop-agents.md) | 13 min | [link](https://outcomeschool.com/blog/human-in-the-loop-agents) |

## Step 11: Agentic Engineering and Agent Frameworks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 158 | [What is Harness Engineering?](step-11-agentic-engineering-and-agent-frameworks/158-harness-engineering-in-ai.md) | 12 min | [link](https://outcomeschool.com/blog/harness-engineering-in-ai) |
| 159 | [What is Loop Engineering?](step-11-agentic-engineering-and-agent-frameworks/159-what-is-loop-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-loop-engineering) |
| 160 | [What is Graph Engineering?](step-11-agentic-engineering-and-agent-frameworks/160-what-is-graph-engineering.md) | 27 min | [link](https://outcomeschool.com/blog/what-is-graph-engineering) |
| 161 | [AI Is Only as Good as Our Definition of Done](step-11-agentic-engineering-and-agent-frameworks/161-ai-is-only-as-good-as-our-definition-of-done.md) | 11 min | [link](https://outcomeschool.com/blog/ai-is-only-as-good-as-our-definition-of-done) |
| 162 | [How does LangChain work?](step-11-agentic-engineering-and-agent-frameworks/162-how-does-langchain-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-langchain-work) |
| 163 | [How does LangGraph work?](step-11-agentic-engineering-and-agent-frameworks/163-how-does-langgraph-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-langgraph-work) |
| 164 | [How does Claude Code work?](step-11-agentic-engineering-and-agent-frameworks/164-how-does-claude-code-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-claude-code-work) |
| 165 | [How does Cursor work?](step-11-agentic-engineering-and-agent-frameworks/165-how-does-cursor-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-cursor-work) |

## Step 12: LLM Inference Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 166 | [LLM Inference Optimization](step-12-llm-inference-engineering/166-llm-inference-optimization.md) | 13 min | [link](https://outcomeschool.com/blog/llm-inference-optimization) |
| 167 | [Prefill vs Decode: LLM Inference Optimization](step-12-llm-inference-engineering/167-prefill-vs-decode-llm-inference-optimization.md) | 35 min | [link](https://outcomeschool.com/blog/prefill-vs-decode-llm-inference-optimization) |
| 168 | [What is Prefill-Decode Disaggregation in LLM Inference?](step-12-llm-inference-engineering/168-prefill-decode-disaggregation.md) | 22 min | [link](https://outcomeschool.com/blog/prefill-decode-disaggregation) |
| 169 | [What is KV Cache in LLMs?](step-12-llm-inference-engineering/169-kv-cache-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/kv-cache-in-llms) |
| 170 | [What is KV Cache Compression?](step-12-llm-inference-engineering/170-kv-cache-compression.md) | 21 min | [link](https://outcomeschool.com/blog/kv-cache-compression) |
| 171 | [How does an LLM use GPU memory?](step-12-llm-inference-engineering/171-llm-gpu-memory.md) | 14 min | [link](https://outcomeschool.com/blog/llm-gpu-memory) |
| 172 | [What is Paged Attention in LLMs?](step-12-llm-inference-engineering/172-paged-attention-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/paged-attention-in-llms) |
| 173 | [What is Continuous Batching in LLMs?](step-12-llm-inference-engineering/173-continuous-batching-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/continuous-batching-in-llms) |
| 174 | [What is Speculative Decoding?](step-12-llm-inference-engineering/174-speculative-decoding.md) | 20 min | [link](https://outcomeschool.com/blog/speculative-decoding) |
| 175 | [What is N-gram Speculation in LLMs?](step-12-llm-inference-engineering/175-n-gram-speculation-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/n-gram-speculation-in-llms) |
| 176 | [What is Medusa? Multi-Head Speculative Decoding Explained](step-12-llm-inference-engineering/176-decoding-medusa.md) | 11 min | [link](https://outcomeschool.com/blog/decoding-medusa) |
| 177 | [What is EAGLE? Feature-Level Speculative Decoding Explained](step-12-llm-inference-engineering/177-decoding-eagle.md) | 9 min | [link](https://outcomeschool.com/blog/decoding-eagle) |
| 178 | [How does Model Quantization work?](step-12-llm-inference-engineering/178-how-does-model-quantization-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-model-quantization-work) |
| 179 | [How does GGUF work?](step-12-llm-inference-engineering/179-how-does-gguf-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-gguf-work) |
| 180 | [How does llama.cpp run LLMs on everyday hardware?](step-12-llm-inference-engineering/180-how-does-llama-cpp-run-llms-on-everyday-hardware.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-llama-cpp-run-llms-on-everyday-hardware) |
| 181 | [How does Ollama work?](step-12-llm-inference-engineering/181-how-does-ollama-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-ollama-work) |
| 182 | [How does vLLM work?](step-12-llm-inference-engineering/182-how-does-vllm-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-vllm-work) |
| 183 | [How does SGLang work?](step-12-llm-inference-engineering/183-how-does-sglang-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-sglang-work) |
| 184 | [How does TensorRT-LLM work?](step-12-llm-inference-engineering/184-how-does-tensorrt-llm-work.md) | 47 min | [link](https://outcomeschool.com/blog/how-does-tensorrt-llm-work) |

## Step 13: Evaluation and Observability

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 185 | [What is LLM Evaluation? Metrics, Benchmarks, and Methods Explained](step-13-evaluation-and-observability/185-llm-evaluation.md) | 20 min | [link](https://outcomeschool.com/blog/llm-evaluation) |
| 186 | [What is LLM as a Judge?](step-13-evaluation-and-observability/186-llm-as-a-judge.md) | 20 min | [link](https://outcomeschool.com/blog/llm-as-a-judge) |
| 187 | [How to Evaluate AI Agents? Metrics, Methods, and Best Practices](step-13-evaluation-and-observability/187-ai-agent-evaluation.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent-evaluation) |
| 188 | [What is AI Agent Observability? Traces, Spans, and Metrics Explained](step-13-evaluation-and-observability/188-ai-agent-observability.md) | 21 min | [link](https://outcomeschool.com/blog/ai-agent-observability) |

## Step 14: AI Safety and Security

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 189 | [How do LLM Guardrails work?](step-14-ai-safety-and-security/189-how-do-llm-guardrails-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-llm-guardrails-work) |
| 190 | [What is Prompt Injection in LLMs and How Do We Defend Against It?](step-14-ai-safety-and-security/190-prompt-injection-in-llms.md) | 34 min | [link](https://outcomeschool.com/blog/prompt-injection-in-llms) |
| 191 | [What is jailbreaking in LLMs?](step-14-ai-safety-and-security/191-jailbreaking-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/jailbreaking-in-llms) |
| 192 | [How does LLM Watermarking work?](step-14-ai-safety-and-security/192-how-does-llm-watermarking-work.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-llm-watermarking-work) |

## Step 15: Multimodal AI and Generative Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 193 | [What is Multimodal AI?](step-15-multimodal-ai-and-generative-models/193-multimodal-ai.md) | 15 min | [link](https://outcomeschool.com/blog/multimodal-ai) |
| 194 | [What is a Vision Transformer (ViT)?](step-15-multimodal-ai-and-generative-models/194-decoding-vision-transformer-vit.md) | 15 min | [link](https://outcomeschool.com/blog/decoding-vision-transformer-vit) |
| 195 | [How do Image Embeddings work?](step-15-multimodal-ai-and-generative-models/195-how-do-image-embeddings-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-image-embeddings-work) |
| 196 | [How does a Vision-Language Model (VLM) work?](step-15-multimodal-ai-and-generative-models/196-vision-language-model-vlm.md) | 16 min | [link](https://outcomeschool.com/blog/vision-language-model-vlm) |
| 197 | [What are Diffusion Models and How Do They Generate Images?](step-15-multimodal-ai-and-generative-models/197-diffusion-models.md) | 18 min | [link](https://outcomeschool.com/blog/diffusion-models) |
| 198 | [How does flow matching train a generative model?](step-15-multimodal-ai-and-generative-models/198-flow-matching.md) | 17 min | [link](https://outcomeschool.com/blog/flow-matching) |
| 199 | [What are Generative Adversarial Networks (GANs)?](step-15-multimodal-ai-and-generative-models/199-generative-adversarial-networks.md) | 18 min | [link](https://outcomeschool.com/blog/generative-adversarial-networks) |
| 200 | [What are Variational Autoencoders (VAEs)?](step-15-multimodal-ai-and-generative-models/200-variational-autoencoders.md) | 19 min | [link](https://outcomeschool.com/blog/variational-autoencoders) |

## Step 16: AI Infrastructure, Deployment, and System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 201 | [How does a GPU work for Deep Learning?](step-16-ai-infrastructure-deployment-and-system-design/201-how-does-a-gpu-work-for-deep-learning.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-a-gpu-work-for-deep-learning) |
| 202 | [How do CUDA Kernels work?](step-16-ai-infrastructure-deployment-and-system-design/202-how-do-cuda-kernels-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-do-cuda-kernels-work) |
| 203 | [How does a Google TPU work?](step-16-ai-infrastructure-deployment-and-system-design/203-how-does-a-google-tpu-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-a-google-tpu-work) |
| 204 | [How does an LPU work?](step-16-ai-infrastructure-deployment-and-system-design/204-how-does-an-lpu-work.md) | 26 min | [link](https://outcomeschool.com/blog/how-does-an-lpu-work) |
| 205 | [How does distributed training work?](step-16-ai-infrastructure-deployment-and-system-design/205-distributed-training.md) | 19 min | [link](https://outcomeschool.com/blog/distributed-training) |
| 206 | [Cloud vs On-device Model Deployment](step-16-ai-infrastructure-deployment-and-system-design/206-cloud-vs-on-device-model-deployment.md) | 29 min | [link](https://outcomeschool.com/blog/cloud-vs-on-device-model-deployment) |
| 207 | [How does Model Serving work?](step-16-ai-infrastructure-deployment-and-system-design/207-model-serving.md) | 17 min | [link](https://outcomeschool.com/blog/model-serving) |
| 208 | [How does a Model Registry work?](step-16-ai-infrastructure-deployment-and-system-design/208-model-registry.md) | 15 min | [link](https://outcomeschool.com/blog/model-registry) |
| 209 | [Android TensorFlow Lite Machine Learning Example](step-16-ai-infrastructure-deployment-and-system-design/209-android-tensorflow-lite-machine-learning-example.md) | 3 min | [link](https://outcomeschool.com/blog/android-tensorflow-lite-machine-learning-example) |
| 210 | [What is LLM Routing? How to Send Each Query to the Right LLM](step-16-ai-infrastructure-deployment-and-system-design/210-llm-routing.md) | 16 min | [link](https://outcomeschool.com/blog/llm-routing) |
| 211 | [Design a Real-Time Voice AI Agent](step-16-ai-infrastructure-deployment-and-system-design/211-design-a-real-time-voice-ai-agent.md) | 68 min | [link](https://outcomeschool.com/blog/design-a-real-time-voice-ai-agent) |
| 212 | [What is turn-taking in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/212-what-is-turn-taking-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-turn-taking-in-a-voice-ai-agent) |
| 213 | [How does endpointing decide when the user has finished speaking?](step-16-ai-infrastructure-deployment-and-system-design/213-endpointing-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/endpointing-in-voice-agents) |
| 214 | [How do silence-based and model-based turn detection differ?](step-16-ai-infrastructure-deployment-and-system-design/214-silence-vs-model-based-turn-detection.md) | 17 min | [link](https://outcomeschool.com/blog/silence-vs-model-based-turn-detection) |
| 215 | [How does dynamic endpointing adapt to how fast a user talks?](step-16-ai-infrastructure-deployment-and-system-design/215-dynamic-endpointing.md) | 17 min | [link](https://outcomeschool.com/blog/dynamic-endpointing) |
| 216 | [How does a voice agent handle long pauses when the user is thinking?](step-16-ai-infrastructure-deployment-and-system-design/216-long-pauses-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/long-pauses-in-voice-agents) |
| 217 | [How does a voice agent know a phone number or email is not finished yet?](step-16-ai-infrastructure-deployment-and-system-design/217-unfinished-input-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/unfinished-input-in-voice-agents) |
| 218 | [Why does a voice agent cut people off mid-sentence?](step-16-ai-infrastructure-deployment-and-system-design/218-voice-agents-cutting-users-off.md) | 15 min | [link](https://outcomeschool.com/blog/voice-agents-cutting-users-off) |
| 219 | [What is barge-in in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/219-what-is-barge-in-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-barge-in-in-a-voice-ai-agent) |
| 220 | [Cascaded vs Speech-to-Speech: How to choose the right voice agent architecture?](step-16-ai-infrastructure-deployment-and-system-design/220-cascaded-vs-speech-to-speech.md) | 16 min | [link](https://outcomeschool.com/blog/cascaded-vs-speech-to-speech) |
| 221 | [How do half-duplex and full-duplex voice agents differ?](step-16-ai-infrastructure-deployment-and-system-design/221-half-duplex-vs-full-duplex-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/half-duplex-vs-full-duplex-voice-agents) |
| 222 | [How does a voice agent tell a real interruption from a cough or background noise?](step-16-ai-infrastructure-deployment-and-system-design/222-interruption-vs-background-noise.md) | 16 min | [link](https://outcomeschool.com/blog/interruption-vs-background-noise) |
| 223 | [What are backchannels, and why should "mm-hmm" not stop the agent?](step-16-ai-infrastructure-deployment-and-system-design/223-backchannels-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/backchannels-in-voice-agents) |
| 224 | [How does a voice agent stop speaking instantly when interrupted?](step-16-ai-infrastructure-deployment-and-system-design/224-stopping-speech-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/stopping-speech-on-interruption) |
| 225 | [Why does TTS audio buffering make interruptions slow?](step-16-ai-infrastructure-deployment-and-system-design/225-tts-audio-buffering.md) | 17 min | [link](https://outcomeschool.com/blog/tts-audio-buffering) |
| 226 | [How does a voice agent truncate its memory to only what the user actually heard?](step-16-ai-infrastructure-deployment-and-system-design/226-truncating-context-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/truncating-context-on-interruption) |
| 227 | [How does a voice agent recover from a false interruption?](step-16-ai-infrastructure-deployment-and-system-design/227-false-interruption-recovery.md) | 15 min | [link](https://outcomeschool.com/blog/false-interruption-recovery) |
| 228 | [How does a voice agent handle the user and agent talking at the same time?](step-16-ai-infrastructure-deployment-and-system-design/228-overlapping-speech-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/overlapping-speech-in-voice-agents) |
| 229 | [How does a voice agent add its own backchannels like "okay" and "got it"?](step-16-ai-infrastructure-deployment-and-system-design/229-agent-side-backchannels.md) | 16 min | [link](https://outcomeschool.com/blog/agent-side-backchannels) |
| 230 | [How do you build a latency budget for a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/230-voice-agent-latency-budget.md) | 17 min | [link](https://outcomeschool.com/blog/voice-agent-latency-budget) |
| 231 | [How does the voice-to-voice latency of a voice agent get measured?](step-16-ai-infrastructure-deployment-and-system-design/231-voice-to-voice-latency.md) | 17 min | [link](https://outcomeschool.com/blog/voice-to-voice-latency) |
| 232 | [Why does the time-to-first-audio matter more than total response time?](step-16-ai-infrastructure-deployment-and-system-design/232-time-to-first-audio.md) | 14 min | [link](https://outcomeschool.com/blog/time-to-first-audio) |
| 233 | [How does sentence chunking feed LLM output into TTS faster?](step-16-ai-infrastructure-deployment-and-system-design/233-sentence-chunking-for-tts.md) | 18 min | [link](https://outcomeschool.com/blog/sentence-chunking-for-tts) |
| 234 | [How does a TTS model start speaking before the full sentence arrives?](step-16-ai-infrastructure-deployment-and-system-design/234-streaming-tts.md) | 17 min | [link](https://outcomeschool.com/blog/streaming-tts) |
| 235 | [How does speculative LLM generation start replying before the user finishes?](step-16-ai-infrastructure-deployment-and-system-design/235-speculative-generation-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/speculative-generation-in-voice-agents) |
| 236 | [How do filler phrases hide latency in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/236-filler-phrases-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/filler-phrases-in-voice-agents) |
| 237 | [How does a voice agent hide the delay of a slow tool call?](step-16-ai-infrastructure-deployment-and-system-design/237-slow-tool-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/slow-tool-calls-in-voice-agents) |
| 238 | [What are audio frames and chunk sizes in a real-time voice pipeline?](step-16-ai-infrastructure-deployment-and-system-design/238-audio-frames-and-chunk-sizes.md) | 16 min | [link](https://outcomeschool.com/blog/audio-frames-and-chunk-sizes) |
| 239 | [Why do sample rates like 8 kHz, 16 kHz, and 24 kHz matter for voice agents?](step-16-ai-infrastructure-deployment-and-system-design/239-sample-rates-for-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/sample-rates-for-voice-agents) |
| 240 | [How do WebRTC and WebSocket differ for voice AI agents?](step-16-ai-infrastructure-deployment-and-system-design/240-webrtc-vs-websocket-for-voice-ai.md) | 16 min | [link](https://outcomeschool.com/blog/webrtc-vs-websocket-for-voice-ai) |
| 241 | [How does the Opus codec compress voice for real-time calls?](step-16-ai-infrastructure-deployment-and-system-design/241-opus-codec.md) | 16 min | [link](https://outcomeschool.com/blog/opus-codec) |
| 242 | [How does a jitter buffer keep voice audio smooth over a bad network?](step-16-ai-infrastructure-deployment-and-system-design/242-jitter-buffer.md) | 16 min | [link](https://outcomeschool.com/blog/jitter-buffer) |
| 243 | [How does packet loss concealment hide missing audio?](step-16-ai-infrastructure-deployment-and-system-design/243-packet-loss-concealment.md) | 17 min | [link](https://outcomeschool.com/blog/packet-loss-concealment) |
| 244 | [How does a voice AI agent answer a phone call?](step-16-ai-infrastructure-deployment-and-system-design/244-phone-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/phone-calls-in-voice-agents) |
| 245 | [How do SIP and RTP carry a phone call to a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/245-sip-and-rtp.md) | 16 min | [link](https://outcomeschool.com/blog/sip-and-rtp) |
| 246 | [Why does phone audio make speech recognition worse?](step-16-ai-infrastructure-deployment-and-system-design/246-phone-audio-and-speech-recognition.md) | 17 min | [link](https://outcomeschool.com/blog/phone-audio-and-speech-recognition) |
| 247 | [How does DTMF keypad input work in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/247-dtmf-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/dtmf-in-voice-agents) |
| 248 | [How does voicemail and answering machine detection work?](step-16-ai-infrastructure-deployment-and-system-design/248-answering-machine-detection.md) | 16 min | [link](https://outcomeschool.com/blog/answering-machine-detection) |
| 249 | [How does an outbound calling voice agent work?](step-16-ai-infrastructure-deployment-and-system-design/249-outbound-calling-voice-agent.md) | 16 min | [link](https://outcomeschool.com/blog/outbound-calling-voice-agent) |
| 250 | [How does a voice agent transfer a call to a human with context?](step-16-ai-infrastructure-deployment-and-system-design/250-call-transfer-with-context.md) | 18 min | [link](https://outcomeschool.com/blog/call-transfer-with-context) |
| 251 | [How do you write a system prompt for a voice agent, not a chat bot?](step-16-ai-infrastructure-deployment-and-system-design/251-voice-agent-system-prompt.md) | 17 min | [link](https://outcomeschool.com/blog/voice-agent-system-prompt) |

## Step 16: Supporting reads for AI System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 252 | [What is System Design?](step-16b-supporting-reads/252-system-design.md) | 6 min | [link](https://outcomeschool.com/blog/system-design) |
| 253 | [HTTP Request vs HTTP Long-Polling vs WebSocket vs Server-Sent Events](step-16b-supporting-reads/253-http-request-long-polling-websocket-sse.md) | 9 min | [link](https://outcomeschool.com/blog/http-request-long-polling-websocket-sse) |
| 254 | [How do Voice and Video Call work?](step-16b-supporting-reads/254-voice-and-video-call.md) | 5 min | [link](https://outcomeschool.com/blog/voice-and-video-call) |

## Step 17: Frontier Ideas in AI

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 255 | [What is Joint Embedding Predictive Architecture (JEPA)?](step-17-frontier-ideas-in-ai/255-joint-embedding-predictive-architecture-jepa.md) | 28 min | [link](https://outcomeschool.com/blog/joint-embedding-predictive-architecture-jepa) |
| 256 | [How do World Models work?](step-17-frontier-ideas-in-ai/256-how-do-world-models-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-do-world-models-work) |
| 257 | [What is Recursive Self-Improvement (RSI)?](step-17-frontier-ideas-in-ai/257-what-is-recursive-self-improvement-rsi.md) | 23 min | [link](https://outcomeschool.com/blog/what-is-recursive-self-improvement-rsi) |
