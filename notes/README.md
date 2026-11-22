# AI Engineer Roadmap — Study Notes

Notes (with diagrams) for all **265** blogs in the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by Amit Shekhar (Outcome School). Read them on the site: https://kaisarnajar.github.io/outcome-school-blogs/

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
| 15 | [How does Gradient Boosting work?](step-01-machine-learning-foundations/015-gradient-boosting.md) | 17 min | [link](https://outcomeschool.com/blog/gradient-boosting) |
| 16 | [How does K-Means Clustering work?](step-01-machine-learning-foundations/016-k-means-clustering.md) | 16 min | [link](https://outcomeschool.com/blog/k-means-clustering) |
| 17 | [How does Data Augmentation work?](step-01-machine-learning-foundations/017-data-augmentation.md) | 14 min | [link](https://outcomeschool.com/blog/data-augmentation) |
| 18 | [What is Reinforcement Learning?](step-01-machine-learning-foundations/018-reinforcement-learning.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning) |
| 19 | [What is a Markov Decision Process (MDP)?](step-01-machine-learning-foundations/019-markov-decision-process-mdp.md) | 17 min | [link](https://outcomeschool.com/blog/markov-decision-process-mdp) |
| 20 | [What is Exploration vs Exploitation in Reinforcement Learning?](step-01-machine-learning-foundations/020-exploration-vs-exploitation.md) | 18 min | [link](https://outcomeschool.com/blog/exploration-vs-exploitation) |
| 21 | [What is a Value Function? Q-Learning Explained Step by Step](step-01-machine-learning-foundations/021-value-function-and-q-learning.md) | 17 min | [link](https://outcomeschool.com/blog/value-function-and-q-learning) |
| 22 | [What is Policy Gradient? The REINFORCE Algorithm Explained](step-01-machine-learning-foundations/022-policy-gradient-reinforce.md) | 18 min | [link](https://outcomeschool.com/blog/policy-gradient-reinforce) |
| 23 | [What is Actor-Critic in Reinforcement Learning? The Advantage Function Explained](step-01-machine-learning-foundations/023-actor-critic.md) | 17 min | [link](https://outcomeschool.com/blog/actor-critic) |
| 24 | [How does Self-Supervised Learning work?](step-01-machine-learning-foundations/024-self-supervised-learning.md) | 12 min | [link](https://outcomeschool.com/blog/self-supervised-learning) |
| 25 | [How does Semi-Supervised Learning work?](step-01-machine-learning-foundations/025-semi-supervised-learning.md) | 7 min | [link](https://outcomeschool.com/blog/semi-supervised-learning) |
| 26 | [What is Contrastive Learning?](step-01-machine-learning-foundations/026-contrastive-learning.md) | 15 min | [link](https://outcomeschool.com/blog/contrastive-learning) |
| 27 | [How does a Recommendation System work?](step-01-machine-learning-foundations/027-recommendation-system.md) | 21 min | [link](https://outcomeschool.com/blog/recommendation-system) |
| 28 | [What is Explainable AI?](step-01-machine-learning-foundations/028-explainable-ai-xai.md) | 7 min | [link](https://outcomeschool.com/blog/explainable-ai-xai) |

## Step 2: Deep Learning and Neural Networks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 29 | [What is a Neural Network and How Does It Work?](step-02-deep-learning-and-neural-networks/029-neural-network.md) | 17 min | [link](https://outcomeschool.com/blog/neural-network) |
| 30 | [What is Bias in Artificial Neural Network?](step-02-deep-learning-and-neural-networks/030-bias-in-artificial-neural-network.md) | 3 min | [link](https://outcomeschool.com/blog/bias-in-artificial-neural-network) |
| 31 | [What is a Multilayer Perceptron (MLP) and How Does It Work?](step-02-deep-learning-and-neural-networks/031-multilayer-perceptron-mlp.md) | 17 min | [link](https://outcomeschool.com/blog/multilayer-perceptron-mlp) |
| 32 | [What are Activation Functions in Neural Networks? Sigmoid, Tanh, ReLU, and Softmax Explained](step-02-deep-learning-and-neural-networks/032-activation-functions.md) | 17 min | [link](https://outcomeschool.com/blog/activation-functions) |
| 33 | [What is the Softmax Function and How Does It Work?](step-02-deep-learning-and-neural-networks/033-softmax-function.md) | 15 min | [link](https://outcomeschool.com/blog/softmax-function) |
| 34 | [What are Logits in Machine Learning?](step-02-deep-learning-and-neural-networks/034-logits-in-machine-learning.md) | 15 min | [link](https://outcomeschool.com/blog/logits-in-machine-learning) |
| 35 | [How Does Matrix Multiplication Work in Neural Networks?](step-02-deep-learning-and-neural-networks/035-matrix-multiplication-in-neural-networks.md) | 19 min | [link](https://outcomeschool.com/blog/matrix-multiplication-in-neural-networks) |
| 36 | [How Does Gradient Descent Work?](step-02-deep-learning-and-neural-networks/036-math-behind-gradient-descent.md) | 15 min | [link](https://outcomeschool.com/blog/math-behind-gradient-descent) |
| 37 | [What are Epoch, Batch, Batch Size, and Iteration in Machine Learning?](step-02-deep-learning-and-neural-networks/037-epoch-batch-and-iteration.md) | 16 min | [link](https://outcomeschool.com/blog/epoch-batch-and-iteration) |
| 38 | [How Does Backpropagation Work? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/038-math-behind-backpropagation.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-backpropagation) |
| 39 | [What are Optimizers in Deep Learning? SGD, Momentum, RMSProp, and Adam Explained](step-02-deep-learning-and-neural-networks/039-optimizers-in-deep-learning.md) | 16 min | [link](https://outcomeschool.com/blog/optimizers-in-deep-learning) |
| 40 | [How do learning rate schedules and warmup work?](step-02-deep-learning-and-neural-networks/040-learning-rate-schedules-and-warmup.md) | 16 min | [link](https://outcomeschool.com/blog/learning-rate-schedules-and-warmup) |
| 41 | [Why do vanishing and exploding gradients happen?](step-02-deep-learning-and-neural-networks/041-vanishing-and-exploding-gradients.md) | 18 min | [link](https://outcomeschool.com/blog/vanishing-and-exploding-gradients) |
| 42 | [Why Do We Initialize Weights Randomly in Neural Networks?](step-02-deep-learning-and-neural-networks/042-random-weight-initialization.md) | 20 min | [link](https://outcomeschool.com/blog/random-weight-initialization) |
| 43 | [What is Entropy in Information Theory?](step-02-deep-learning-and-neural-networks/043-entropy-in-information-theory.md) | 8 min | [link](https://outcomeschool.com/blog/entropy-in-information-theory) |
| 44 | [What is Cross-Entropy Loss?](step-02-deep-learning-and-neural-networks/044-math-behind-cross-entropy-loss.md) | 17 min | [link](https://outcomeschool.com/blog/math-behind-cross-entropy-loss) |
| 45 | [What is KL Divergence? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/045-kl-divergence.md) | 16 min | [link](https://outcomeschool.com/blog/kl-divergence) |
| 46 | [What is Dropout in Neural Networks?](step-02-deep-learning-and-neural-networks/046-dropout-in-neural-networks.md) | 14 min | [link](https://outcomeschool.com/blog/dropout-in-neural-networks) |
| 47 | [How does early stopping work?](step-02-deep-learning-and-neural-networks/047-early-stopping.md) | 12 min | [link](https://outcomeschool.com/blog/early-stopping) |
| 48 | [Batch Normalization vs Layer Normalization](step-02-deep-learning-and-neural-networks/048-batch-normalization-vs-layer-normalization.md) | 9 min | [link](https://outcomeschool.com/blog/batch-normalization-vs-layer-normalization) |
| 49 | [What is RMSNorm? Root Mean Square Layer Normalization Explained](step-02-deep-learning-and-neural-networks/049-rmsnorm-root-mean-square-layer-normalization.md) | 13 min | [link](https://outcomeschool.com/blog/rmsnorm-root-mean-square-layer-normalization) |
| 50 | [Convolutional Neural Networks](step-02-deep-learning-and-neural-networks/050-convolutional-neural-network-cnn.md) | 19 min | [link](https://outcomeschool.com/blog/convolutional-neural-network-cnn) |
| 51 | [How does Object Detection work?](step-02-deep-learning-and-neural-networks/051-object-detection.md) | 17 min | [link](https://outcomeschool.com/blog/object-detection) |
| 52 | [How does Semantic Segmentation work?](step-02-deep-learning-and-neural-networks/052-semantic-segmentation.md) | 14 min | [link](https://outcomeschool.com/blog/semantic-segmentation) |
| 53 | [What is a Recurrent Neural Network (RNN)?](step-02-deep-learning-and-neural-networks/053-recurrent-neural-network.md) | 4 min | [link](https://outcomeschool.com/blog/recurrent-neural-network) |
| 54 | [How do LSTM and GRU work?](step-02-deep-learning-and-neural-networks/054-lstm-and-gru.md) | 19 min | [link](https://outcomeschool.com/blog/lstm-and-gru) |
| 55 | [How does OCR with Deep Learning work?](step-02-deep-learning-and-neural-networks/055-optical-character-recognition-ocr.md) | 15 min | [link](https://outcomeschool.com/blog/optical-character-recognition-ocr) |
| 56 | [How does PyTorch work?](step-02-deep-learning-and-neural-networks/056-how-does-pytorch-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-pytorch-work) |
| 57 | [How does TensorFlow work?](step-02-deep-learning-and-neural-networks/057-how-does-the-machine-learning-library-tensorflow-work.md) | 9 min | [link](https://outcomeschool.com/blog/how-does-the-machine-learning-library-tensorflow-work) |

## Step 3: Generative AI and the Transformer Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 58 | [What is Generative AI?](step-03-generative-ai-and-the-transformer-architecture/058-what-is-generative-ai.md) | 14 min | [link](https://outcomeschool.com/blog/what-is-generative-ai) |
| 59 | [How does an LLM work?](step-03-generative-ai-and-the-transformer-architecture/059-large-language-model-llm.md) | 18 min | [link](https://outcomeschool.com/blog/large-language-model-llm) |
| 60 | [Inside ChatGPT: What Happens After You Hit Enter](step-03-generative-ai-and-the-transformer-architecture/060-inside-chatgpt-what-happens-after.md) | 3 min | [link](https://outcomeschool.substack.com/p/inside-chatgpt-what-happens-after) |
| 61 | [What are Autoregressive Models?](step-03-generative-ai-and-the-transformer-architecture/061-autoregressive-models.md) | 20 min | [link](https://outcomeschool.com/blog/autoregressive-models) |
| 62 | [Tokenization in LLMs](step-03-generative-ai-and-the-transformer-architecture/062-tokenization-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/tokenization-in-llms) |
| 63 | [What is Byte Pair Encoding (BPE) in LLMs?](step-03-generative-ai-and-the-transformer-architecture/063-bpe-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/bpe-in-llms) |
| 64 | [What are Embeddings?](step-03-generative-ai-and-the-transformer-architecture/064-what-are-embeddings.md) | 19 min | [link](https://outcomeschool.com/blog/what-are-embeddings) |
| 65 | [How do RNNs and Transformers differ?](step-03-generative-ai-and-the-transformer-architecture/065-how-do-rnns-and-transformers-differ.md) | 8 min | [link](https://outcomeschool.com/blog/how-do-rnns-and-transformers-differ) |
| 66 | [How Does the Transformer Architecture Work?](step-03-generative-ai-and-the-transformer-architecture/066-decoding-transformer-architecture.md) | 20 min | [link](https://outcomeschool.com/blog/decoding-transformer-architecture) |
| 67 | [Encoder vs Decoder in Transformers](step-03-generative-ai-and-the-transformer-architecture/067-encoder-vs-decoder-in-transformers.md) | 11 min | [link](https://outcomeschool.com/blog/encoder-vs-decoder-in-transformers) |
| 68 | [What is Self Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/068-self-attention-in-transformers.md) | 14 min | [link](https://outcomeschool.com/blog/self-attention-in-transformers) |
| 69 | [How Does Attention Work? The Math Behind Q, K, and V](step-03-generative-ai-and-the-transformer-architecture/069-math-behind-attention-qkv.md) | 14 min | [link](https://outcomeschool.com/blog/math-behind-attention-qkv) |
| 70 | [Why Do We Scale Attention by √dₖ?](step-03-generative-ai-and-the-transformer-architecture/070-scaling-dot-product-attention.md) | 17 min | [link](https://outcomeschool.com/blog/scaling-dot-product-attention) |
| 71 | [What is Causal Masking in Attention?](step-03-generative-ai-and-the-transformer-architecture/071-causal-masking-in-attention.md) | 10 min | [link](https://outcomeschool.com/blog/causal-masking-in-attention) |
| 72 | [What is Multi-Head Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/072-multi-head-attention-in-transformers.md) | 15 min | [link](https://outcomeschool.com/blog/multi-head-attention-in-transformers) |
| 73 | [What is Cross Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/073-cross-attention-in-transformers.md) | 16 min | [link](https://outcomeschool.com/blog/cross-attention-in-transformers) |
| 74 | [Positional Embeddings in LLMs](step-03-generative-ai-and-the-transformer-architecture/074-positional-embeddings-in-llms.md) | 1 min | [link](https://outcomeschool.substack.com/p/positional-embeddings-in-llms) |
| 75 | [What is RoPE (Rotary Position Embedding)? The Math Behind It](step-03-generative-ai-and-the-transformer-architecture/075-math-behind-rope-rotary-position-embedding.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-rope-rotary-position-embedding) |
| 76 | [What is the Feed-Forward Network in LLMs?](step-03-generative-ai-and-the-transformer-architecture/076-feed-forward-networks-in-llms.md) | 21 min | [link](https://outcomeschool.com/blog/feed-forward-networks-in-llms) |

## Step 4: How LLMs Generate Text

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 77 | [How does Temperature control LLM output?](step-04-how-llms-generate-text/077-how-does-temperature-control-llm-output.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-temperature-control-llm-output) |
| 78 | [How do Top-k and Top-p Sampling work?](step-04-how-llms-generate-text/078-how-do-top-k-and-top-p-sampling-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-top-k-and-top-p-sampling-work) |
| 79 | [How do Greedy Decoding and Beam Search differ?](step-04-how-llms-generate-text/079-greedy-decoding-vs-beam-search.md) | 19 min | [link](https://outcomeschool.com/blog/greedy-decoding-vs-beam-search) |
| 80 | [What are Log Probabilities (Logprobs) in LLMs?](step-04-how-llms-generate-text/080-logprobs-in-llms.md) | 15 min | [link](https://outcomeschool.com/blog/logprobs-in-llms) |
| 81 | [Stop Tokens in LLMs](step-04-how-llms-generate-text/081-stop-tokens-in-llms.md) | 19 min | [link](https://outcomeschool.com/blog/stop-tokens-in-llms) |
| 82 | [How does Token Streaming work?](step-04-how-llms-generate-text/082-how-does-token-streaming-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-token-streaming-work) |
| 83 | [How does the Context Window work?](step-04-how-llms-generate-text/083-context-window.md) | 12 min | [link](https://outcomeschool.com/blog/context-window) |
| 84 | [What is the Lost in the Middle Problem in LLMs?](step-04-how-llms-generate-text/084-lost-in-the-middle-problem-in-llms.md) | 23 min | [link](https://outcomeschool.com/blog/lost-in-the-middle-problem-in-llms) |
| 85 | [Why Do LLMs Hallucinate? The Token-Level Explanation](step-04-how-llms-generate-text/085-why-do-llms-hallucinate-the-token-level-explanation.md) | 20 min | [link](https://outcomeschool.com/blog/why-do-llms-hallucinate-the-token-level-explanation) |

## Step 5: Modern LLM Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 86 | [What is Mixture of Experts (MoE)?](step-05-modern-llm-architecture/086-mixture-of-experts.md) | 16 min | [link](https://outcomeschool.com/blog/mixture-of-experts) |
| 87 | [What is Grouped Query Attention (GQA)?](step-05-modern-llm-architecture/087-grouped-query-attention.md) | 19 min | [link](https://outcomeschool.com/blog/grouped-query-attention) |
| 88 | [How does Sliding Window Attention work?](step-05-modern-llm-architecture/088-how-does-sliding-window-attention-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-sliding-window-attention-work) |
| 89 | [How do Attention Sinks work?](step-05-modern-llm-architecture/089-how-do-attention-sinks-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-attention-sinks-work) |
| 90 | [What is Flash Attention and Why Is It So Fast?](step-05-modern-llm-architecture/090-decoding-flash-attention.md) | 25 min | [link](https://outcomeschool.com/blog/decoding-flash-attention) |
| 91 | [What is DeepSeek-V4 and How Does It Work? Architecture Explained](step-05-modern-llm-architecture/091-decoding-deepseek-v4.md) | 21 min | [link](https://outcomeschool.com/blog/decoding-deepseek-v4) |

## Step 6: Types of Language Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 92 | [What are Small Language Models (SLMs)?](step-06-types-of-language-models/092-small-language-models-slms.md) | 20 min | [link](https://outcomeschool.com/blog/small-language-models-slms) |
| 93 | [What are Large Reasoning Models (LRMs)?](step-06-types-of-language-models/093-large-reasoning-models.md) | 21 min | [link](https://outcomeschool.com/blog/large-reasoning-models) |
| 94 | [What are Recursive Language Models (RLMs)?](step-06-types-of-language-models/094-recursive-language-models.md) | 13 min | [link](https://outcomeschool.com/blog/recursive-language-models) |
| 95 | [How do Diffusion Language Models (DLMs) work?](step-06-types-of-language-models/095-how-do-diffusion-language-models-dlms-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-diffusion-language-models-dlms-work) |
| 96 | [Jev and System One Models Explained](step-06-types-of-language-models/096-jev-and-system-one-models-explained.md) | 20 min | [link](https://outcomeschool.com/blog/jev-and-system-one-models-explained) |

## Step 7: Training, Fine-Tuning, and Alignment

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 97 | [How does Pretraining work?](step-07-training-fine-tuning-and-alignment/097-llm-pretraining.md) | 16 min | [link](https://outcomeschool.com/blog/llm-pretraining) |
| 98 | [What are the Chinchilla scaling laws?](step-07-training-fine-tuning-and-alignment/098-chinchilla-scaling-laws.md) | 16 min | [link](https://outcomeschool.com/blog/chinchilla-scaling-laws) |
| 99 | [How does Fine-Tuning work?](step-07-training-fine-tuning-and-alignment/099-how-does-fine-tuning-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-fine-tuning-work) |
| 100 | [How does Instruction Tuning work?](step-07-training-fine-tuning-and-alignment/100-instruction-tuning.md) | 17 min | [link](https://outcomeschool.com/blog/instruction-tuning) |
| 101 | [What is LoRA (Low-Rank Adaptation)?](step-07-training-fine-tuning-and-alignment/101-lora-low-rank-adaptation-of-llms.md) | 14 min | [link](https://outcomeschool.com/blog/lora-low-rank-adaptation-of-llms) |
| 102 | [How does Prefix Tuning work?](step-07-training-fine-tuning-and-alignment/102-how-does-prefix-tuning-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-prefix-tuning-work) |
| 103 | [How does Knowledge Distillation work?](step-07-training-fine-tuning-and-alignment/103-how-does-knowledge-distillation-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-knowledge-distillation-work) |
| 104 | [What is Continual Learning in LLMs? Solving Catastrophic Forgetting](step-07-training-fine-tuning-and-alignment/104-continual-learning-in-llms.md) | 14 min | [link](https://outcomeschool.com/blog/continual-learning-in-llms) |
| 105 | [What is Deep RL from Human Preferences? The Paper That Started RLHF](step-07-training-fine-tuning-and-alignment/105-decoding-deep-rl-from-human-preferences.md) | 16 min | [link](https://outcomeschool.com/blog/decoding-deep-rl-from-human-preferences) |
| 106 | [What is InstructGPT? How GPT-3 Learned to Follow Instructions](step-07-training-fine-tuning-and-alignment/106-decoding-instructgpt.md) | 17 min | [link](https://outcomeschool.com/blog/decoding-instructgpt) |
| 107 | [What is RLHF? Reinforcement Learning from Human Feedback Explained](step-07-training-fine-tuning-and-alignment/107-reinforcement-learning-from-human-feedback-rlhf.md) | 21 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-human-feedback-rlhf) |
| 108 | [What is a Reward Model and How Is It Trained?](step-07-training-fine-tuning-and-alignment/108-reward-model.md) | 17 min | [link](https://outcomeschool.com/blog/reward-model) |
| 109 | [What is Reward Hacking in Reinforcement Learning and How Do We Prevent It?](step-07-training-fine-tuning-and-alignment/109-reward-hacking.md) | 16 min | [link](https://outcomeschool.com/blog/reward-hacking) |
| 110 | [What is RLAIF? Reinforcement Learning from AI Feedback Explained](step-07-training-fine-tuning-and-alignment/110-reinforcement-learning-from-ai-feedback-rlaif.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-ai-feedback-rlaif) |
| 111 | [What is Proximal Policy Optimization (PPO)?](step-07-training-fine-tuning-and-alignment/111-proximal-policy-optimization-ppo.md) | 13 min | [link](https://outcomeschool.com/blog/proximal-policy-optimization-ppo) |
| 112 | [What is Direct Preference Optimization (DPO)?](step-07-training-fine-tuning-and-alignment/112-direct-preference-optimization-dpo.md) | 15 min | [link](https://outcomeschool.com/blog/direct-preference-optimization-dpo) |
| 113 | [What is Group Relative Policy Optimization (GRPO)?](step-07-training-fine-tuning-and-alignment/113-group-relative-policy-optimization-grpo.md) | 17 min | [link](https://outcomeschool.com/blog/group-relative-policy-optimization-grpo) |
| 114 | [What is Reinforcement Learning with Verifiable Rewards (RLVR)?](step-07-training-fine-tuning-and-alignment/114-reinforcement-learning-with-verifiable-rewards-rlvr.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning-with-verifiable-rewards-rlvr) |

## Step 8: Prompt Engineering and Context Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 115 | [How does Prompt Engineering work?](step-08-prompt-engineering-and-context-engineering/115-prompt-engineering.md) | 13 min | [link](https://outcomeschool.com/blog/prompt-engineering) |
| 116 | [How does the System Prompt work?](step-08-prompt-engineering-and-context-engineering/116-system-prompt.md) | 15 min | [link](https://outcomeschool.com/blog/system-prompt) |
| 117 | [How does In-Context Learning work?](step-08-prompt-engineering-and-context-engineering/117-in-context-learning.md) | 12 min | [link](https://outcomeschool.com/blog/in-context-learning) |
| 118 | [How does Chain-of-Thought (CoT) Prompting work?](step-08-prompt-engineering-and-context-engineering/118-how-does-chain-of-thought-prompting-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-chain-of-thought-prompting-work) |
| 119 | [How does Tree of Thoughts work?](step-08-prompt-engineering-and-context-engineering/119-how-does-tree-of-thoughts-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-tree-of-thoughts-work) |
| 120 | [How does Prompt Chaining work?](step-08-prompt-engineering-and-context-engineering/120-how-does-prompt-chaining-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-prompt-chaining-work) |
| 121 | [How does Prompt Caching work?](step-08-prompt-engineering-and-context-engineering/121-how-does-prompt-caching-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-prompt-caching-work) |
| 122 | [What is Context Engineering?](step-08-prompt-engineering-and-context-engineering/122-context-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/context-engineering) |
| 123 | [How does Context Compaction work?](step-08-prompt-engineering-and-context-engineering/123-how-does-context-compaction-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-context-compaction-work) |

## Step 9: Vector Search and Retrieval-Augmented Generation (RAG)

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 124 | [How does an embedding model work?](step-09-vector-search-and-retrieval-augmented-generation-rag/124-embedding-model.md) | 17 min | [link](https://outcomeschool.com/blog/embedding-model) |
| 125 | [How does Cosine Similarity work?](step-09-vector-search-and-retrieval-augmented-generation-rag/125-cosine-similarity.md) | 14 min | [link](https://outcomeschool.com/blog/cosine-similarity) |
| 126 | [How does a Vector Database work?](step-09-vector-search-and-retrieval-augmented-generation-rag/126-how-does-a-vector-database-work.md) | 31 min | [link](https://outcomeschool.com/blog/how-does-a-vector-database-work) |
| 127 | [How does Approximate Nearest Neighbor (ANN) Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/127-how-does-approximate-nearest-neighbor-ann-search-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-approximate-nearest-neighbor-ann-search-work) |
| 128 | [How does Semantic Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/128-how-does-semantic-search-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-semantic-search-work) |
| 129 | [How does an Inverted Index work?](step-09-vector-search-and-retrieval-augmented-generation-rag/129-inverted-index.md) | 17 min | [link](https://outcomeschool.com/blog/inverted-index) |
| 130 | [How does BM25 work?](step-09-vector-search-and-retrieval-augmented-generation-rag/130-bm25.md) | 16 min | [link](https://outcomeschool.com/blog/bm25) |
| 131 | [How does Hybrid Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/131-how-does-hybrid-search-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-hybrid-search-work) |
| 132 | [How does a Reranker work?](step-09-vector-search-and-retrieval-augmented-generation-rag/132-how-does-a-reranker-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-does-a-reranker-work) |
| 133 | [What is ColBERT? Late Interaction Retrieval Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/133-decoding-colbert.md) | 19 min | [link](https://outcomeschool.com/blog/decoding-colbert) |
| 134 | [How does RAG work?](step-09-vector-search-and-retrieval-augmented-generation-rag/134-retrieval-augmented-generation-rag.md) | 14 min | [link](https://outcomeschool.com/blog/retrieval-augmented-generation-rag) |
| 135 | [How to Chunk Documents for RAG? Chunking Strategies Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/135-chunking-strategies-for-rag.md) | 31 min | [link](https://outcomeschool.com/blog/chunking-strategies-for-rag) |
| 136 | [How does Contextual Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/136-how-does-contextual-retrieval-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-contextual-retrieval-work) |
| 137 | [How does HyDE work in RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/137-how-does-hyde-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-hyde-work) |
| 138 | [How do Query Rewriting and Multi-Query Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/138-how-do-query-rewriting-and-multi-query-retrieval-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-do-query-rewriting-and-multi-query-retrieval-work) |
| 139 | [How does an Embedding Cache work?](step-09-vector-search-and-retrieval-augmented-generation-rag/139-how-does-an-embedding-cache-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-an-embedding-cache-work) |
| 140 | [How does Semantic Caching work?](step-09-vector-search-and-retrieval-augmented-generation-rag/140-how-does-semantic-caching-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-semantic-caching-work) |
| 141 | [What is Agentic RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/141-agentic-rag.md) | 15 min | [link](https://outcomeschool.com/blog/agentic-rag) |
| 142 | [What is GraphRAG? How Knowledge Graphs Improve RAG](step-09-vector-search-and-retrieval-augmented-generation-rag/142-graphrag.md) | 14 min | [link](https://outcomeschool.com/blog/graphrag) |
| 143 | [What is Vectorless RAG? RAG Without Embeddings or a Vector Database](step-09-vector-search-and-retrieval-augmented-generation-rag/143-vectorless-rag.md) | 21 min | [link](https://outcomeschool.com/blog/vectorless-rag) |

## Step 10: AI Agents and Agentic Systems

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 144 | [What is an AI Agent? How It Works](step-10-ai-agents-and-agentic-systems/144-ai-agent.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent) |
| 145 | [How does Function Calling work in LLMs?](step-10-ai-agents-and-agentic-systems/145-how-does-function-calling-work-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-function-calling-work-in-llms) |
| 146 | [What is an AI Agent Loop?](step-10-ai-agents-and-agentic-systems/146-ai-agent-loop.md) | 20 min | [link](https://outcomeschool.com/blog/ai-agent-loop) |
| 147 | [What is a ReAct Agent?](step-10-ai-agents-and-agentic-systems/147-react-agent.md) | 19 min | [link](https://outcomeschool.com/blog/react-agent) |
| 148 | [What is a Plan-and-Execute Agent?](step-10-ai-agents-and-agentic-systems/148-plan-and-execute-agent.md) | 15 min | [link](https://outcomeschool.com/blog/plan-and-execute-agent) |
| 149 | [What is a Reflection Agent?](step-10-ai-agents-and-agentic-systems/149-reflection-agent.md) | 17 min | [link](https://outcomeschool.com/blog/reflection-agent) |
| 150 | [How does AI Agent Memory work?](step-10-ai-agents-and-agentic-systems/150-ai-agent-memory.md) | 17 min | [link](https://outcomeschool.com/blog/ai-agent-memory) |
| 151 | [How does ChatGPT remember you?](step-10-ai-agents-and-agentic-systems/151-how-does-chatgpt-remember-you.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-chatgpt-remember-you) |
| 152 | [What is MCP (Model Context Protocol)?](step-10-ai-agents-and-agentic-systems/152-what-is-mcp-model-context-protocol.md) | 16 min | [link](https://outcomeschool.com/blog/what-is-mcp-model-context-protocol) |
| 153 | [What are Agent Skills?](step-10-ai-agents-and-agentic-systems/153-what-are-agent-skills.md) | 20 min | [link](https://outcomeschool.com/blog/what-are-agent-skills) |
| 154 | [What is OKF (Open Knowledge Format)?](step-10-ai-agents-and-agentic-systems/154-what-is-okf-open-knowledge-format.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-okf-open-knowledge-format) |
| 155 | [What are Multi-Agent Systems?](step-10-ai-agents-and-agentic-systems/155-multi-agent-systems.md) | 20 min | [link](https://outcomeschool.com/blog/multi-agent-systems) |
| 156 | [What are AI SubAgents?](step-10-ai-agents-and-agentic-systems/156-ai-subagents.md) | 9 min | [link](https://outcomeschool.com/blog/ai-subagents) |
| 157 | [How AI Agents Communicate](step-10-ai-agents-and-agentic-systems/157-how-ai-agents-communicate.md) | 19 min | [link](https://outcomeschool.com/blog/how-ai-agents-communicate) |
| 158 | [What is AI Orchestration?](step-10-ai-agents-and-agentic-systems/158-ai-orchestration.md) | 18 min | [link](https://outcomeschool.com/blog/ai-orchestration) |
| 159 | [What is Sakana Fugu? The Technical Report Explained](step-10-ai-agents-and-agentic-systems/159-decoding-sakana-fugu.md) | 33 min | [link](https://outcomeschool.com/blog/decoding-sakana-fugu) |
| 160 | [How do Computer-Use Agents work?](step-10-ai-agents-and-agentic-systems/160-how-do-computer-use-agents-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-do-computer-use-agents-work) |
| 161 | [How do Browser Agents work?](step-10-ai-agents-and-agentic-systems/161-how-do-browser-agents-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-browser-agents-work) |
| 162 | [How do Human-in-the-Loop agents work?](step-10-ai-agents-and-agentic-systems/162-human-in-the-loop-agents.md) | 13 min | [link](https://outcomeschool.com/blog/human-in-the-loop-agents) |

## Step 11: Agentic Engineering and Agent Frameworks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 163 | [What is Harness Engineering?](step-11-agentic-engineering-and-agent-frameworks/163-harness-engineering-in-ai.md) | 12 min | [link](https://outcomeschool.com/blog/harness-engineering-in-ai) |
| 164 | [What is Loop Engineering?](step-11-agentic-engineering-and-agent-frameworks/164-what-is-loop-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-loop-engineering) |
| 165 | [What is Graph Engineering?](step-11-agentic-engineering-and-agent-frameworks/165-what-is-graph-engineering.md) | 27 min | [link](https://outcomeschool.com/blog/what-is-graph-engineering) |
| 166 | [AI Is Only as Good as Our Definition of Done](step-11-agentic-engineering-and-agent-frameworks/166-ai-is-only-as-good-as-our-definition-of-done.md) | 11 min | [link](https://outcomeschool.com/blog/ai-is-only-as-good-as-our-definition-of-done) |
| 167 | [How does LangChain work?](step-11-agentic-engineering-and-agent-frameworks/167-how-does-langchain-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-langchain-work) |
| 168 | [How does LangGraph work?](step-11-agentic-engineering-and-agent-frameworks/168-how-does-langgraph-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-langgraph-work) |
| 169 | [How does Claude Code work?](step-11-agentic-engineering-and-agent-frameworks/169-how-does-claude-code-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-claude-code-work) |
| 170 | [How does Cursor work?](step-11-agentic-engineering-and-agent-frameworks/170-how-does-cursor-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-cursor-work) |

## Step 12: LLM Inference Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 171 | [LLM Inference Optimization](step-12-llm-inference-engineering/171-llm-inference-optimization.md) | 13 min | [link](https://outcomeschool.com/blog/llm-inference-optimization) |
| 172 | [Prefill vs Decode: LLM Inference Optimization](step-12-llm-inference-engineering/172-prefill-vs-decode-llm-inference-optimization.md) | 35 min | [link](https://outcomeschool.com/blog/prefill-vs-decode-llm-inference-optimization) |
| 173 | [What is Prefill-Decode Disaggregation in LLM Inference?](step-12-llm-inference-engineering/173-prefill-decode-disaggregation.md) | 22 min | [link](https://outcomeschool.com/blog/prefill-decode-disaggregation) |
| 174 | [What is KV Cache in LLMs?](step-12-llm-inference-engineering/174-kv-cache-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/kv-cache-in-llms) |
| 175 | [What is KV Cache Compression?](step-12-llm-inference-engineering/175-kv-cache-compression.md) | 21 min | [link](https://outcomeschool.com/blog/kv-cache-compression) |
| 176 | [How does an LLM use GPU memory?](step-12-llm-inference-engineering/176-llm-gpu-memory.md) | 14 min | [link](https://outcomeschool.com/blog/llm-gpu-memory) |
| 177 | [What is Paged Attention in LLMs?](step-12-llm-inference-engineering/177-paged-attention-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/paged-attention-in-llms) |
| 178 | [What is Continuous Batching in LLMs?](step-12-llm-inference-engineering/178-continuous-batching-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/continuous-batching-in-llms) |
| 179 | [What is Speculative Decoding?](step-12-llm-inference-engineering/179-speculative-decoding.md) | 20 min | [link](https://outcomeschool.com/blog/speculative-decoding) |
| 180 | [What is N-gram Speculation in LLMs?](step-12-llm-inference-engineering/180-n-gram-speculation-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/n-gram-speculation-in-llms) |
| 181 | [What is Medusa? Multi-Head Speculative Decoding Explained](step-12-llm-inference-engineering/181-decoding-medusa.md) | 11 min | [link](https://outcomeschool.com/blog/decoding-medusa) |
| 182 | [What is EAGLE? Feature-Level Speculative Decoding Explained](step-12-llm-inference-engineering/182-decoding-eagle.md) | 9 min | [link](https://outcomeschool.com/blog/decoding-eagle) |
| 183 | [How does Model Quantization work?](step-12-llm-inference-engineering/183-how-does-model-quantization-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-model-quantization-work) |
| 184 | [How does GGUF work?](step-12-llm-inference-engineering/184-how-does-gguf-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-gguf-work) |
| 185 | [How does llama.cpp run LLMs on everyday hardware?](step-12-llm-inference-engineering/185-how-does-llama-cpp-run-llms-on-everyday-hardware.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-llama-cpp-run-llms-on-everyday-hardware) |
| 186 | [How does Ollama work?](step-12-llm-inference-engineering/186-how-does-ollama-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-ollama-work) |
| 187 | [How does vLLM work?](step-12-llm-inference-engineering/187-how-does-vllm-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-vllm-work) |
| 188 | [How does SGLang work?](step-12-llm-inference-engineering/188-how-does-sglang-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-sglang-work) |
| 189 | [How does TensorRT-LLM work?](step-12-llm-inference-engineering/189-how-does-tensorrt-llm-work.md) | 47 min | [link](https://outcomeschool.com/blog/how-does-tensorrt-llm-work) |

## Step 13: Evaluation and Observability

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 190 | [What is LLM Evaluation? Metrics, Benchmarks, and Methods Explained](step-13-evaluation-and-observability/190-llm-evaluation.md) | 20 min | [link](https://outcomeschool.com/blog/llm-evaluation) |
| 191 | [What is LLM as a Judge?](step-13-evaluation-and-observability/191-llm-as-a-judge.md) | 20 min | [link](https://outcomeschool.com/blog/llm-as-a-judge) |
| 192 | [How to Evaluate AI Agents? Metrics, Methods, and Best Practices](step-13-evaluation-and-observability/192-ai-agent-evaluation.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent-evaluation) |
| 193 | [What is AI Agent Observability? Traces, Spans, and Metrics Explained](step-13-evaluation-and-observability/193-ai-agent-observability.md) | 21 min | [link](https://outcomeschool.com/blog/ai-agent-observability) |

## Step 14: AI Safety and Security

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 194 | [How do LLM Guardrails work?](step-14-ai-safety-and-security/194-how-do-llm-guardrails-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-llm-guardrails-work) |
| 195 | [What is Prompt Injection in LLMs and How Do We Defend Against It?](step-14-ai-safety-and-security/195-prompt-injection-in-llms.md) | 34 min | [link](https://outcomeschool.com/blog/prompt-injection-in-llms) |
| 196 | [What is jailbreaking in LLMs?](step-14-ai-safety-and-security/196-jailbreaking-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/jailbreaking-in-llms) |
| 197 | [How does LLM Watermarking work?](step-14-ai-safety-and-security/197-how-does-llm-watermarking-work.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-llm-watermarking-work) |

## Step 15: Multimodal AI and Generative Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 198 | [What is Multimodal AI?](step-15-multimodal-ai-and-generative-models/198-multimodal-ai.md) | 15 min | [link](https://outcomeschool.com/blog/multimodal-ai) |
| 199 | [What is a Vision Transformer (ViT)?](step-15-multimodal-ai-and-generative-models/199-decoding-vision-transformer-vit.md) | 15 min | [link](https://outcomeschool.com/blog/decoding-vision-transformer-vit) |
| 200 | [How do Image Embeddings work?](step-15-multimodal-ai-and-generative-models/200-how-do-image-embeddings-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-image-embeddings-work) |
| 201 | [How does a Vision-Language Model (VLM) work?](step-15-multimodal-ai-and-generative-models/201-vision-language-model-vlm.md) | 16 min | [link](https://outcomeschool.com/blog/vision-language-model-vlm) |
| 202 | [What are Diffusion Models and How Do They Generate Images?](step-15-multimodal-ai-and-generative-models/202-diffusion-models.md) | 18 min | [link](https://outcomeschool.com/blog/diffusion-models) |
| 203 | [How does flow matching train a generative model?](step-15-multimodal-ai-and-generative-models/203-flow-matching.md) | 17 min | [link](https://outcomeschool.com/blog/flow-matching) |
| 204 | [What are Generative Adversarial Networks (GANs)?](step-15-multimodal-ai-and-generative-models/204-generative-adversarial-networks.md) | 18 min | [link](https://outcomeschool.com/blog/generative-adversarial-networks) |
| 205 | [What are Variational Autoencoders (VAEs)?](step-15-multimodal-ai-and-generative-models/205-variational-autoencoders.md) | 19 min | [link](https://outcomeschool.com/blog/variational-autoencoders) |

## Step 16: AI Infrastructure, Deployment, and System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 206 | [How does a GPU work for Deep Learning?](step-16-ai-infrastructure-deployment-and-system-design/206-how-does-a-gpu-work-for-deep-learning.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-a-gpu-work-for-deep-learning) |
| 207 | [How do CUDA Kernels work?](step-16-ai-infrastructure-deployment-and-system-design/207-how-do-cuda-kernels-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-do-cuda-kernels-work) |
| 208 | [How does a Google TPU work?](step-16-ai-infrastructure-deployment-and-system-design/208-how-does-a-google-tpu-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-a-google-tpu-work) |
| 209 | [How does an LPU work?](step-16-ai-infrastructure-deployment-and-system-design/209-how-does-an-lpu-work.md) | 26 min | [link](https://outcomeschool.com/blog/how-does-an-lpu-work) |
| 210 | [How does distributed training work?](step-16-ai-infrastructure-deployment-and-system-design/210-distributed-training.md) | 19 min | [link](https://outcomeschool.com/blog/distributed-training) |
| 211 | [Cloud vs On-device Model Deployment](step-16-ai-infrastructure-deployment-and-system-design/211-cloud-vs-on-device-model-deployment.md) | 29 min | [link](https://outcomeschool.com/blog/cloud-vs-on-device-model-deployment) |
| 212 | [How does Model Serving work?](step-16-ai-infrastructure-deployment-and-system-design/212-model-serving.md) | 17 min | [link](https://outcomeschool.com/blog/model-serving) |
| 213 | [How does a Model Registry work?](step-16-ai-infrastructure-deployment-and-system-design/213-model-registry.md) | 15 min | [link](https://outcomeschool.com/blog/model-registry) |
| 214 | [Android TensorFlow Lite Machine Learning Example](step-16-ai-infrastructure-deployment-and-system-design/214-android-tensorflow-lite-machine-learning-example.md) | 3 min | [link](https://outcomeschool.com/blog/android-tensorflow-lite-machine-learning-example) |
| 215 | [What is LLM Routing? How to Send Each Query to the Right LLM](step-16-ai-infrastructure-deployment-and-system-design/215-llm-routing.md) | 16 min | [link](https://outcomeschool.com/blog/llm-routing) |
| 216 | [Design a Real-Time Voice AI Agent](step-16-ai-infrastructure-deployment-and-system-design/216-design-a-real-time-voice-ai-agent.md) | 68 min | [link](https://outcomeschool.com/blog/design-a-real-time-voice-ai-agent) |
| 217 | [What is turn-taking in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/217-what-is-turn-taking-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-turn-taking-in-a-voice-ai-agent) |
| 218 | [How does endpointing decide when the user has finished speaking?](step-16-ai-infrastructure-deployment-and-system-design/218-endpointing-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/endpointing-in-voice-agents) |
| 219 | [How do silence-based and model-based turn detection differ?](step-16-ai-infrastructure-deployment-and-system-design/219-silence-vs-model-based-turn-detection.md) | 17 min | [link](https://outcomeschool.com/blog/silence-vs-model-based-turn-detection) |
| 220 | [How does dynamic endpointing adapt to how fast a user talks?](step-16-ai-infrastructure-deployment-and-system-design/220-dynamic-endpointing.md) | 17 min | [link](https://outcomeschool.com/blog/dynamic-endpointing) |
| 221 | [How does a voice agent handle long pauses when the user is thinking?](step-16-ai-infrastructure-deployment-and-system-design/221-long-pauses-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/long-pauses-in-voice-agents) |
| 222 | [How does a voice agent know a phone number or email is not finished yet?](step-16-ai-infrastructure-deployment-and-system-design/222-unfinished-input-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/unfinished-input-in-voice-agents) |
| 223 | [Why does a voice agent cut people off mid-sentence?](step-16-ai-infrastructure-deployment-and-system-design/223-voice-agents-cutting-users-off.md) | 15 min | [link](https://outcomeschool.com/blog/voice-agents-cutting-users-off) |
| 224 | [What is barge-in in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/224-what-is-barge-in-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-barge-in-in-a-voice-ai-agent) |
| 225 | [Cascaded vs Speech-to-Speech: How to choose the right voice agent architecture?](step-16-ai-infrastructure-deployment-and-system-design/225-cascaded-vs-speech-to-speech.md) | 16 min | [link](https://outcomeschool.com/blog/cascaded-vs-speech-to-speech) |
| 226 | [How do half-duplex and full-duplex voice agents differ?](step-16-ai-infrastructure-deployment-and-system-design/226-half-duplex-vs-full-duplex-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/half-duplex-vs-full-duplex-voice-agents) |
| 227 | [How does a voice agent tell a real interruption from a cough or background noise?](step-16-ai-infrastructure-deployment-and-system-design/227-interruption-vs-background-noise.md) | 16 min | [link](https://outcomeschool.com/blog/interruption-vs-background-noise) |
| 228 | [What are backchannels, and why should "mm-hmm" not stop the agent?](step-16-ai-infrastructure-deployment-and-system-design/228-backchannels-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/backchannels-in-voice-agents) |
| 229 | [How does a voice agent stop speaking instantly when interrupted?](step-16-ai-infrastructure-deployment-and-system-design/229-stopping-speech-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/stopping-speech-on-interruption) |
| 230 | [Why does TTS audio buffering make interruptions slow?](step-16-ai-infrastructure-deployment-and-system-design/230-tts-audio-buffering.md) | 17 min | [link](https://outcomeschool.com/blog/tts-audio-buffering) |
| 231 | [How does a voice agent truncate its memory to only what the user actually heard?](step-16-ai-infrastructure-deployment-and-system-design/231-truncating-context-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/truncating-context-on-interruption) |
| 232 | [How does a voice agent recover from a false interruption?](step-16-ai-infrastructure-deployment-and-system-design/232-false-interruption-recovery.md) | 15 min | [link](https://outcomeschool.com/blog/false-interruption-recovery) |
| 233 | [How does a voice agent handle the user and agent talking at the same time?](step-16-ai-infrastructure-deployment-and-system-design/233-overlapping-speech-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/overlapping-speech-in-voice-agents) |
| 234 | [How does a voice agent add its own backchannels like "okay" and "got it"?](step-16-ai-infrastructure-deployment-and-system-design/234-agent-side-backchannels.md) | 16 min | [link](https://outcomeschool.com/blog/agent-side-backchannels) |
| 235 | [How do you build a latency budget for a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/235-voice-agent-latency-budget.md) | 17 min | [link](https://outcomeschool.com/blog/voice-agent-latency-budget) |
| 236 | [How does the voice-to-voice latency of a voice agent get measured?](step-16-ai-infrastructure-deployment-and-system-design/236-voice-to-voice-latency.md) | 17 min | [link](https://outcomeschool.com/blog/voice-to-voice-latency) |
| 237 | [Why does the time-to-first-audio matter more than total response time?](step-16-ai-infrastructure-deployment-and-system-design/237-time-to-first-audio.md) | 14 min | [link](https://outcomeschool.com/blog/time-to-first-audio) |
| 238 | [How does sentence chunking feed LLM output into TTS faster?](step-16-ai-infrastructure-deployment-and-system-design/238-sentence-chunking-for-tts.md) | 18 min | [link](https://outcomeschool.com/blog/sentence-chunking-for-tts) |
| 239 | [How does a TTS model start speaking before the full sentence arrives?](step-16-ai-infrastructure-deployment-and-system-design/239-streaming-tts.md) | 17 min | [link](https://outcomeschool.com/blog/streaming-tts) |
| 240 | [How does speculative LLM generation start replying before the user finishes?](step-16-ai-infrastructure-deployment-and-system-design/240-speculative-generation-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/speculative-generation-in-voice-agents) |
| 241 | [How do filler phrases hide latency in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/241-filler-phrases-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/filler-phrases-in-voice-agents) |
| 242 | [How does a voice agent hide the delay of a slow tool call?](step-16-ai-infrastructure-deployment-and-system-design/242-slow-tool-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/slow-tool-calls-in-voice-agents) |
| 243 | [What are audio frames and chunk sizes in a real-time voice pipeline?](step-16-ai-infrastructure-deployment-and-system-design/243-audio-frames-and-chunk-sizes.md) | 16 min | [link](https://outcomeschool.com/blog/audio-frames-and-chunk-sizes) |
| 244 | [Why do sample rates like 8 kHz, 16 kHz, and 24 kHz matter for voice agents?](step-16-ai-infrastructure-deployment-and-system-design/244-sample-rates-for-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/sample-rates-for-voice-agents) |
| 245 | [How do WebRTC and WebSocket differ for voice AI agents?](step-16-ai-infrastructure-deployment-and-system-design/245-webrtc-vs-websocket-for-voice-ai.md) | 16 min | [link](https://outcomeschool.com/blog/webrtc-vs-websocket-for-voice-ai) |
| 246 | [How does the Opus codec compress voice for real-time calls?](step-16-ai-infrastructure-deployment-and-system-design/246-opus-codec.md) | 16 min | [link](https://outcomeschool.com/blog/opus-codec) |
| 247 | [How does a jitter buffer keep voice audio smooth over a bad network?](step-16-ai-infrastructure-deployment-and-system-design/247-jitter-buffer.md) | 16 min | [link](https://outcomeschool.com/blog/jitter-buffer) |
| 248 | [How does packet loss concealment hide missing audio?](step-16-ai-infrastructure-deployment-and-system-design/248-packet-loss-concealment.md) | 17 min | [link](https://outcomeschool.com/blog/packet-loss-concealment) |
| 249 | [How does a voice AI agent answer a phone call?](step-16-ai-infrastructure-deployment-and-system-design/249-phone-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/phone-calls-in-voice-agents) |
| 250 | [How do SIP and RTP carry a phone call to a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/250-sip-and-rtp.md) | 16 min | [link](https://outcomeschool.com/blog/sip-and-rtp) |
| 251 | [Why does phone audio make speech recognition worse?](step-16-ai-infrastructure-deployment-and-system-design/251-phone-audio-and-speech-recognition.md) | 17 min | [link](https://outcomeschool.com/blog/phone-audio-and-speech-recognition) |
| 252 | [How does DTMF keypad input work in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/252-dtmf-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/dtmf-in-voice-agents) |
| 253 | [How does voicemail and answering machine detection work?](step-16-ai-infrastructure-deployment-and-system-design/253-answering-machine-detection.md) | 16 min | [link](https://outcomeschool.com/blog/answering-machine-detection) |
| 254 | [How does an outbound calling voice agent work?](step-16-ai-infrastructure-deployment-and-system-design/254-outbound-calling-voice-agent.md) | 16 min | [link](https://outcomeschool.com/blog/outbound-calling-voice-agent) |
| 255 | [How does a voice agent transfer a call to a human with context?](step-16-ai-infrastructure-deployment-and-system-design/255-call-transfer-with-context.md) | 18 min | [link](https://outcomeschool.com/blog/call-transfer-with-context) |
| 256 | [How do you write a system prompt for a voice agent, not a chat bot?](step-16-ai-infrastructure-deployment-and-system-design/256-voice-agent-system-prompt.md) | 17 min | [link](https://outcomeschool.com/blog/voice-agent-system-prompt) |
| 257 | [How does function calling work in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/257-function-calling-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/function-calling-in-voice-agents) |
| 258 | [How does a voice agent handle structured inputs like dates, numbers, and addresses?](step-16-ai-infrastructure-deployment-and-system-design/258-structured-inputs-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/structured-inputs-in-voice-agents) |
| 259 | [How does a voice agent confirm and correct misheard information?](step-16-ai-infrastructure-deployment-and-system-design/259-confirm-and-correct-in-voice-agents.md) | 18 min | [link](https://outcomeschool.com/blog/confirm-and-correct-in-voice-agents) |

## Step 16: Supporting reads for AI System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 260 | [What is System Design?](step-16b-supporting-reads/260-system-design.md) | 6 min | [link](https://outcomeschool.com/blog/system-design) |
| 261 | [HTTP Request vs HTTP Long-Polling vs WebSocket vs Server-Sent Events](step-16b-supporting-reads/261-http-request-long-polling-websocket-sse.md) | 9 min | [link](https://outcomeschool.com/blog/http-request-long-polling-websocket-sse) |
| 262 | [How do Voice and Video Call work?](step-16b-supporting-reads/262-voice-and-video-call.md) | 5 min | [link](https://outcomeschool.com/blog/voice-and-video-call) |

## Step 17: Frontier Ideas in AI

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 263 | [What is Joint Embedding Predictive Architecture (JEPA)?](step-17-frontier-ideas-in-ai/263-joint-embedding-predictive-architecture-jepa.md) | 28 min | [link](https://outcomeschool.com/blog/joint-embedding-predictive-architecture-jepa) |
| 264 | [How do World Models work?](step-17-frontier-ideas-in-ai/264-how-do-world-models-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-do-world-models-work) |
| 265 | [What is Recursive Self-Improvement (RSI)?](step-17-frontier-ideas-in-ai/265-what-is-recursive-self-improvement-rsi.md) | 23 min | [link](https://outcomeschool.com/blog/what-is-recursive-self-improvement-rsi) |
