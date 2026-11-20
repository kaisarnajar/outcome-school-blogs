# AI Engineer Roadmap — Study Notes

Notes (with diagrams) for all **253** blogs in the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by Amit Shekhar (Outcome School). Read them on the site: https://kaisarnajar.github.io/outcome-school-blogs/

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
| 24 | [What is Contrastive Learning?](step-01-machine-learning-foundations/024-contrastive-learning.md) | 15 min | [link](https://outcomeschool.com/blog/contrastive-learning) |
| 25 | [How does a Recommendation System work?](step-01-machine-learning-foundations/025-recommendation-system.md) | 21 min | [link](https://outcomeschool.com/blog/recommendation-system) |
| 26 | [What is Explainable AI?](step-01-machine-learning-foundations/026-explainable-ai-xai.md) | 7 min | [link](https://outcomeschool.com/blog/explainable-ai-xai) |

## Step 2: Deep Learning and Neural Networks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 27 | [What is a Neural Network and How Does It Work?](step-02-deep-learning-and-neural-networks/027-neural-network.md) | 17 min | [link](https://outcomeschool.com/blog/neural-network) |
| 28 | [What is Bias in Artificial Neural Network?](step-02-deep-learning-and-neural-networks/028-bias-in-artificial-neural-network.md) | 3 min | [link](https://outcomeschool.com/blog/bias-in-artificial-neural-network) |
| 29 | [What is a Multilayer Perceptron (MLP) and How Does It Work?](step-02-deep-learning-and-neural-networks/029-multilayer-perceptron-mlp.md) | 17 min | [link](https://outcomeschool.com/blog/multilayer-perceptron-mlp) |
| 30 | [What are Activation Functions in Neural Networks? Sigmoid, Tanh, ReLU, and Softmax Explained](step-02-deep-learning-and-neural-networks/030-activation-functions.md) | 17 min | [link](https://outcomeschool.com/blog/activation-functions) |
| 31 | [What is the Softmax Function and How Does It Work?](step-02-deep-learning-and-neural-networks/031-softmax-function.md) | 15 min | [link](https://outcomeschool.com/blog/softmax-function) |
| 32 | [What are Logits in Machine Learning?](step-02-deep-learning-and-neural-networks/032-logits-in-machine-learning.md) | 15 min | [link](https://outcomeschool.com/blog/logits-in-machine-learning) |
| 33 | [How Does Matrix Multiplication Work in Neural Networks?](step-02-deep-learning-and-neural-networks/033-matrix-multiplication-in-neural-networks.md) | 19 min | [link](https://outcomeschool.com/blog/matrix-multiplication-in-neural-networks) |
| 34 | [How Does Gradient Descent Work?](step-02-deep-learning-and-neural-networks/034-math-behind-gradient-descent.md) | 15 min | [link](https://outcomeschool.com/blog/math-behind-gradient-descent) |
| 35 | [What are Epoch, Batch, Batch Size, and Iteration in Machine Learning?](step-02-deep-learning-and-neural-networks/035-epoch-batch-and-iteration.md) | 16 min | [link](https://outcomeschool.com/blog/epoch-batch-and-iteration) |
| 36 | [How Does Backpropagation Work? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/036-math-behind-backpropagation.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-backpropagation) |
| 37 | [What are Optimizers in Deep Learning? SGD, Momentum, RMSProp, and Adam Explained](step-02-deep-learning-and-neural-networks/037-optimizers-in-deep-learning.md) | 16 min | [link](https://outcomeschool.com/blog/optimizers-in-deep-learning) |
| 38 | [How do learning rate schedules and warmup work?](step-02-deep-learning-and-neural-networks/038-learning-rate-schedules-and-warmup.md) | 16 min | [link](https://outcomeschool.com/blog/learning-rate-schedules-and-warmup) |
| 39 | [Why do vanishing and exploding gradients happen?](step-02-deep-learning-and-neural-networks/039-vanishing-and-exploding-gradients.md) | 18 min | [link](https://outcomeschool.com/blog/vanishing-and-exploding-gradients) |
| 40 | [Why Do We Initialize Weights Randomly in Neural Networks?](step-02-deep-learning-and-neural-networks/040-random-weight-initialization.md) | 20 min | [link](https://outcomeschool.com/blog/random-weight-initialization) |
| 41 | [What is Entropy in Information Theory?](step-02-deep-learning-and-neural-networks/041-entropy-in-information-theory.md) | 8 min | [link](https://outcomeschool.com/blog/entropy-in-information-theory) |
| 42 | [What is Cross-Entropy Loss?](step-02-deep-learning-and-neural-networks/042-math-behind-cross-entropy-loss.md) | 17 min | [link](https://outcomeschool.com/blog/math-behind-cross-entropy-loss) |
| 43 | [What is KL Divergence? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/043-kl-divergence.md) | 16 min | [link](https://outcomeschool.com/blog/kl-divergence) |
| 44 | [What is Dropout in Neural Networks?](step-02-deep-learning-and-neural-networks/044-dropout-in-neural-networks.md) | 14 min | [link](https://outcomeschool.com/blog/dropout-in-neural-networks) |
| 45 | [How does early stopping work?](step-02-deep-learning-and-neural-networks/045-early-stopping.md) | 12 min | [link](https://outcomeschool.com/blog/early-stopping) |
| 46 | [Batch Normalization vs Layer Normalization](step-02-deep-learning-and-neural-networks/046-batch-normalization-vs-layer-normalization.md) | 9 min | [link](https://outcomeschool.com/blog/batch-normalization-vs-layer-normalization) |
| 47 | [What is RMSNorm? Root Mean Square Layer Normalization Explained](step-02-deep-learning-and-neural-networks/047-rmsnorm-root-mean-square-layer-normalization.md) | 13 min | [link](https://outcomeschool.com/blog/rmsnorm-root-mean-square-layer-normalization) |
| 48 | [Convolutional Neural Networks](step-02-deep-learning-and-neural-networks/048-convolutional-neural-network-cnn.md) | 19 min | [link](https://outcomeschool.com/blog/convolutional-neural-network-cnn) |
| 49 | [How does Object Detection work?](step-02-deep-learning-and-neural-networks/049-object-detection.md) | 17 min | [link](https://outcomeschool.com/blog/object-detection) |
| 50 | [How does Semantic Segmentation work?](step-02-deep-learning-and-neural-networks/050-semantic-segmentation.md) | 14 min | [link](https://outcomeschool.com/blog/semantic-segmentation) |
| 51 | [What is a Recurrent Neural Network (RNN)?](step-02-deep-learning-and-neural-networks/051-recurrent-neural-network.md) | 4 min | [link](https://outcomeschool.com/blog/recurrent-neural-network) |
| 52 | [How does PyTorch work?](step-02-deep-learning-and-neural-networks/052-how-does-pytorch-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-pytorch-work) |
| 53 | [How does TensorFlow work?](step-02-deep-learning-and-neural-networks/053-how-does-the-machine-learning-library-tensorflow-work.md) | 9 min | [link](https://outcomeschool.com/blog/how-does-the-machine-learning-library-tensorflow-work) |

## Step 3: Generative AI and the Transformer Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 54 | [What is Generative AI?](step-03-generative-ai-and-the-transformer-architecture/054-what-is-generative-ai.md) | 14 min | [link](https://outcomeschool.com/blog/what-is-generative-ai) |
| 55 | [How does an LLM work?](step-03-generative-ai-and-the-transformer-architecture/055-large-language-model-llm.md) | 18 min | [link](https://outcomeschool.com/blog/large-language-model-llm) |
| 56 | [Inside ChatGPT: What Happens After You Hit Enter](step-03-generative-ai-and-the-transformer-architecture/056-inside-chatgpt-what-happens-after.md) | 3 min | [link](https://outcomeschool.substack.com/p/inside-chatgpt-what-happens-after) |
| 57 | [What are Autoregressive Models?](step-03-generative-ai-and-the-transformer-architecture/057-autoregressive-models.md) | 20 min | [link](https://outcomeschool.com/blog/autoregressive-models) |
| 58 | [Tokenization in LLMs](step-03-generative-ai-and-the-transformer-architecture/058-tokenization-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/tokenization-in-llms) |
| 59 | [What is Byte Pair Encoding (BPE) in LLMs?](step-03-generative-ai-and-the-transformer-architecture/059-bpe-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/bpe-in-llms) |
| 60 | [What are Embeddings?](step-03-generative-ai-and-the-transformer-architecture/060-what-are-embeddings.md) | 19 min | [link](https://outcomeschool.com/blog/what-are-embeddings) |
| 61 | [How do RNNs and Transformers differ?](step-03-generative-ai-and-the-transformer-architecture/061-how-do-rnns-and-transformers-differ.md) | 8 min | [link](https://outcomeschool.com/blog/how-do-rnns-and-transformers-differ) |
| 62 | [How Does the Transformer Architecture Work?](step-03-generative-ai-and-the-transformer-architecture/062-decoding-transformer-architecture.md) | 20 min | [link](https://outcomeschool.com/blog/decoding-transformer-architecture) |
| 63 | [Encoder vs Decoder in Transformers](step-03-generative-ai-and-the-transformer-architecture/063-encoder-vs-decoder-in-transformers.md) | 11 min | [link](https://outcomeschool.com/blog/encoder-vs-decoder-in-transformers) |
| 64 | [What is Self Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/064-self-attention-in-transformers.md) | 14 min | [link](https://outcomeschool.com/blog/self-attention-in-transformers) |
| 65 | [How Does Attention Work? The Math Behind Q, K, and V](step-03-generative-ai-and-the-transformer-architecture/065-math-behind-attention-qkv.md) | 14 min | [link](https://outcomeschool.com/blog/math-behind-attention-qkv) |
| 66 | [Why Do We Scale Attention by √dₖ?](step-03-generative-ai-and-the-transformer-architecture/066-scaling-dot-product-attention.md) | 17 min | [link](https://outcomeschool.com/blog/scaling-dot-product-attention) |
| 67 | [What is Causal Masking in Attention?](step-03-generative-ai-and-the-transformer-architecture/067-causal-masking-in-attention.md) | 10 min | [link](https://outcomeschool.com/blog/causal-masking-in-attention) |
| 68 | [What is Multi-Head Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/068-multi-head-attention-in-transformers.md) | 15 min | [link](https://outcomeschool.com/blog/multi-head-attention-in-transformers) |
| 69 | [What is Cross Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/069-cross-attention-in-transformers.md) | 16 min | [link](https://outcomeschool.com/blog/cross-attention-in-transformers) |
| 70 | [Positional Embeddings in LLMs](step-03-generative-ai-and-the-transformer-architecture/070-positional-embeddings-in-llms.md) | 1 min | [link](https://outcomeschool.substack.com/p/positional-embeddings-in-llms) |
| 71 | [What is RoPE (Rotary Position Embedding)? The Math Behind It](step-03-generative-ai-and-the-transformer-architecture/071-math-behind-rope-rotary-position-embedding.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-rope-rotary-position-embedding) |
| 72 | [What is the Feed-Forward Network in LLMs?](step-03-generative-ai-and-the-transformer-architecture/072-feed-forward-networks-in-llms.md) | 21 min | [link](https://outcomeschool.com/blog/feed-forward-networks-in-llms) |

## Step 4: How LLMs Generate Text

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 73 | [How does Temperature control LLM output?](step-04-how-llms-generate-text/073-how-does-temperature-control-llm-output.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-temperature-control-llm-output) |
| 74 | [How do Top-k and Top-p Sampling work?](step-04-how-llms-generate-text/074-how-do-top-k-and-top-p-sampling-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-top-k-and-top-p-sampling-work) |
| 75 | [How do Greedy Decoding and Beam Search differ?](step-04-how-llms-generate-text/075-greedy-decoding-vs-beam-search.md) | 19 min | [link](https://outcomeschool.com/blog/greedy-decoding-vs-beam-search) |
| 76 | [What are Log Probabilities (Logprobs) in LLMs?](step-04-how-llms-generate-text/076-logprobs-in-llms.md) | 15 min | [link](https://outcomeschool.com/blog/logprobs-in-llms) |
| 77 | [Stop Tokens in LLMs](step-04-how-llms-generate-text/077-stop-tokens-in-llms.md) | 19 min | [link](https://outcomeschool.com/blog/stop-tokens-in-llms) |
| 78 | [How does Token Streaming work?](step-04-how-llms-generate-text/078-how-does-token-streaming-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-token-streaming-work) |
| 79 | [How does the Context Window work?](step-04-how-llms-generate-text/079-context-window.md) | 12 min | [link](https://outcomeschool.com/blog/context-window) |
| 80 | [What is the Lost in the Middle Problem in LLMs?](step-04-how-llms-generate-text/080-lost-in-the-middle-problem-in-llms.md) | 23 min | [link](https://outcomeschool.com/blog/lost-in-the-middle-problem-in-llms) |
| 81 | [Why Do LLMs Hallucinate? The Token-Level Explanation](step-04-how-llms-generate-text/081-why-do-llms-hallucinate-the-token-level-explanation.md) | 20 min | [link](https://outcomeschool.com/blog/why-do-llms-hallucinate-the-token-level-explanation) |

## Step 5: Modern LLM Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 82 | [What is Mixture of Experts (MoE)?](step-05-modern-llm-architecture/082-mixture-of-experts.md) | 16 min | [link](https://outcomeschool.com/blog/mixture-of-experts) |
| 83 | [What is Grouped Query Attention (GQA)?](step-05-modern-llm-architecture/083-grouped-query-attention.md) | 19 min | [link](https://outcomeschool.com/blog/grouped-query-attention) |
| 84 | [How does Sliding Window Attention work?](step-05-modern-llm-architecture/084-how-does-sliding-window-attention-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-sliding-window-attention-work) |
| 85 | [How do Attention Sinks work?](step-05-modern-llm-architecture/085-how-do-attention-sinks-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-attention-sinks-work) |
| 86 | [What is Flash Attention and Why Is It So Fast?](step-05-modern-llm-architecture/086-decoding-flash-attention.md) | 25 min | [link](https://outcomeschool.com/blog/decoding-flash-attention) |
| 87 | [What is DeepSeek-V4 and How Does It Work? Architecture Explained](step-05-modern-llm-architecture/087-decoding-deepseek-v4.md) | 21 min | [link](https://outcomeschool.com/blog/decoding-deepseek-v4) |

## Step 6: Types of Language Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 88 | [What are Small Language Models (SLMs)?](step-06-types-of-language-models/088-small-language-models-slms.md) | 20 min | [link](https://outcomeschool.com/blog/small-language-models-slms) |
| 89 | [What are Large Reasoning Models (LRMs)?](step-06-types-of-language-models/089-large-reasoning-models.md) | 21 min | [link](https://outcomeschool.com/blog/large-reasoning-models) |
| 90 | [What are Recursive Language Models (RLMs)?](step-06-types-of-language-models/090-recursive-language-models.md) | 13 min | [link](https://outcomeschool.com/blog/recursive-language-models) |
| 91 | [How do Diffusion Language Models (DLMs) work?](step-06-types-of-language-models/091-how-do-diffusion-language-models-dlms-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-diffusion-language-models-dlms-work) |
| 92 | [Jev and System One Models Explained](step-06-types-of-language-models/092-jev-and-system-one-models-explained.md) | 20 min | [link](https://outcomeschool.com/blog/jev-and-system-one-models-explained) |

## Step 7: Training, Fine-Tuning, and Alignment

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 93 | [How does Pretraining work?](step-07-training-fine-tuning-and-alignment/093-llm-pretraining.md) | 16 min | [link](https://outcomeschool.com/blog/llm-pretraining) |
| 94 | [How does Fine-Tuning work?](step-07-training-fine-tuning-and-alignment/094-how-does-fine-tuning-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-fine-tuning-work) |
| 95 | [How does Instruction Tuning work?](step-07-training-fine-tuning-and-alignment/095-instruction-tuning.md) | 17 min | [link](https://outcomeschool.com/blog/instruction-tuning) |
| 96 | [What is LoRA (Low-Rank Adaptation)?](step-07-training-fine-tuning-and-alignment/096-lora-low-rank-adaptation-of-llms.md) | 14 min | [link](https://outcomeschool.com/blog/lora-low-rank-adaptation-of-llms) |
| 97 | [How does Prefix Tuning work?](step-07-training-fine-tuning-and-alignment/097-how-does-prefix-tuning-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-prefix-tuning-work) |
| 98 | [How does Knowledge Distillation work?](step-07-training-fine-tuning-and-alignment/098-how-does-knowledge-distillation-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-knowledge-distillation-work) |
| 99 | [What is Continual Learning in LLMs? Solving Catastrophic Forgetting](step-07-training-fine-tuning-and-alignment/099-continual-learning-in-llms.md) | 14 min | [link](https://outcomeschool.com/blog/continual-learning-in-llms) |
| 100 | [What is Deep RL from Human Preferences? The Paper That Started RLHF](step-07-training-fine-tuning-and-alignment/100-decoding-deep-rl-from-human-preferences.md) | 16 min | [link](https://outcomeschool.com/blog/decoding-deep-rl-from-human-preferences) |
| 101 | [What is InstructGPT? How GPT-3 Learned to Follow Instructions](step-07-training-fine-tuning-and-alignment/101-decoding-instructgpt.md) | 17 min | [link](https://outcomeschool.com/blog/decoding-instructgpt) |
| 102 | [What is RLHF? Reinforcement Learning from Human Feedback Explained](step-07-training-fine-tuning-and-alignment/102-reinforcement-learning-from-human-feedback-rlhf.md) | 21 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-human-feedback-rlhf) |
| 103 | [What is a Reward Model and How Is It Trained?](step-07-training-fine-tuning-and-alignment/103-reward-model.md) | 17 min | [link](https://outcomeschool.com/blog/reward-model) |
| 104 | [What is Reward Hacking in Reinforcement Learning and How Do We Prevent It?](step-07-training-fine-tuning-and-alignment/104-reward-hacking.md) | 16 min | [link](https://outcomeschool.com/blog/reward-hacking) |
| 105 | [What is RLAIF? Reinforcement Learning from AI Feedback Explained](step-07-training-fine-tuning-and-alignment/105-reinforcement-learning-from-ai-feedback-rlaif.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-ai-feedback-rlaif) |
| 106 | [What is Proximal Policy Optimization (PPO)?](step-07-training-fine-tuning-and-alignment/106-proximal-policy-optimization-ppo.md) | 13 min | [link](https://outcomeschool.com/blog/proximal-policy-optimization-ppo) |
| 107 | [What is Direct Preference Optimization (DPO)?](step-07-training-fine-tuning-and-alignment/107-direct-preference-optimization-dpo.md) | 15 min | [link](https://outcomeschool.com/blog/direct-preference-optimization-dpo) |
| 108 | [What is Group Relative Policy Optimization (GRPO)?](step-07-training-fine-tuning-and-alignment/108-group-relative-policy-optimization-grpo.md) | 17 min | [link](https://outcomeschool.com/blog/group-relative-policy-optimization-grpo) |
| 109 | [What is Reinforcement Learning with Verifiable Rewards (RLVR)?](step-07-training-fine-tuning-and-alignment/109-reinforcement-learning-with-verifiable-rewards-rlvr.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning-with-verifiable-rewards-rlvr) |

## Step 8: Prompt Engineering and Context Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 110 | [How does Prompt Engineering work?](step-08-prompt-engineering-and-context-engineering/110-prompt-engineering.md) | 13 min | [link](https://outcomeschool.com/blog/prompt-engineering) |
| 111 | [How does In-Context Learning work?](step-08-prompt-engineering-and-context-engineering/111-in-context-learning.md) | 12 min | [link](https://outcomeschool.com/blog/in-context-learning) |
| 112 | [How does Chain-of-Thought (CoT) Prompting work?](step-08-prompt-engineering-and-context-engineering/112-how-does-chain-of-thought-prompting-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-chain-of-thought-prompting-work) |
| 113 | [How does Tree of Thoughts work?](step-08-prompt-engineering-and-context-engineering/113-how-does-tree-of-thoughts-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-tree-of-thoughts-work) |
| 114 | [How does Prompt Chaining work?](step-08-prompt-engineering-and-context-engineering/114-how-does-prompt-chaining-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-prompt-chaining-work) |
| 115 | [How does Prompt Caching work?](step-08-prompt-engineering-and-context-engineering/115-how-does-prompt-caching-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-prompt-caching-work) |
| 116 | [What is Context Engineering?](step-08-prompt-engineering-and-context-engineering/116-context-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/context-engineering) |
| 117 | [How does Context Compaction work?](step-08-prompt-engineering-and-context-engineering/117-how-does-context-compaction-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-context-compaction-work) |

## Step 9: Vector Search and Retrieval-Augmented Generation (RAG)

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 118 | [How does an embedding model work?](step-09-vector-search-and-retrieval-augmented-generation-rag/118-embedding-model.md) | 17 min | [link](https://outcomeschool.com/blog/embedding-model) |
| 119 | [How does Cosine Similarity work?](step-09-vector-search-and-retrieval-augmented-generation-rag/119-cosine-similarity.md) | 14 min | [link](https://outcomeschool.com/blog/cosine-similarity) |
| 120 | [How does a Vector Database work?](step-09-vector-search-and-retrieval-augmented-generation-rag/120-how-does-a-vector-database-work.md) | 31 min | [link](https://outcomeschool.com/blog/how-does-a-vector-database-work) |
| 121 | [How does Approximate Nearest Neighbor (ANN) Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/121-how-does-approximate-nearest-neighbor-ann-search-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-approximate-nearest-neighbor-ann-search-work) |
| 122 | [How does Semantic Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/122-how-does-semantic-search-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-semantic-search-work) |
| 123 | [How does an Inverted Index work?](step-09-vector-search-and-retrieval-augmented-generation-rag/123-inverted-index.md) | 17 min | [link](https://outcomeschool.com/blog/inverted-index) |
| 124 | [How does Hybrid Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/124-how-does-hybrid-search-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-hybrid-search-work) |
| 125 | [How does a Reranker work?](step-09-vector-search-and-retrieval-augmented-generation-rag/125-how-does-a-reranker-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-does-a-reranker-work) |
| 126 | [What is ColBERT? Late Interaction Retrieval Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/126-decoding-colbert.md) | 19 min | [link](https://outcomeschool.com/blog/decoding-colbert) |
| 127 | [How does RAG work?](step-09-vector-search-and-retrieval-augmented-generation-rag/127-retrieval-augmented-generation-rag.md) | 14 min | [link](https://outcomeschool.com/blog/retrieval-augmented-generation-rag) |
| 128 | [How to Chunk Documents for RAG? Chunking Strategies Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/128-chunking-strategies-for-rag.md) | 31 min | [link](https://outcomeschool.com/blog/chunking-strategies-for-rag) |
| 129 | [How does Contextual Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/129-how-does-contextual-retrieval-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-contextual-retrieval-work) |
| 130 | [How does HyDE work in RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/130-how-does-hyde-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-hyde-work) |
| 131 | [How do Query Rewriting and Multi-Query Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/131-how-do-query-rewriting-and-multi-query-retrieval-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-do-query-rewriting-and-multi-query-retrieval-work) |
| 132 | [How does an Embedding Cache work?](step-09-vector-search-and-retrieval-augmented-generation-rag/132-how-does-an-embedding-cache-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-an-embedding-cache-work) |
| 133 | [How does Semantic Caching work?](step-09-vector-search-and-retrieval-augmented-generation-rag/133-how-does-semantic-caching-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-semantic-caching-work) |
| 134 | [What is Agentic RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/134-agentic-rag.md) | 15 min | [link](https://outcomeschool.com/blog/agentic-rag) |
| 135 | [What is GraphRAG? How Knowledge Graphs Improve RAG](step-09-vector-search-and-retrieval-augmented-generation-rag/135-graphrag.md) | 14 min | [link](https://outcomeschool.com/blog/graphrag) |
| 136 | [What is Vectorless RAG? RAG Without Embeddings or a Vector Database](step-09-vector-search-and-retrieval-augmented-generation-rag/136-vectorless-rag.md) | 21 min | [link](https://outcomeschool.com/blog/vectorless-rag) |

## Step 10: AI Agents and Agentic Systems

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 137 | [What is an AI Agent? How It Works](step-10-ai-agents-and-agentic-systems/137-ai-agent.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent) |
| 138 | [How does Function Calling work in LLMs?](step-10-ai-agents-and-agentic-systems/138-how-does-function-calling-work-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-function-calling-work-in-llms) |
| 139 | [What is an AI Agent Loop?](step-10-ai-agents-and-agentic-systems/139-ai-agent-loop.md) | 20 min | [link](https://outcomeschool.com/blog/ai-agent-loop) |
| 140 | [What is a ReAct Agent?](step-10-ai-agents-and-agentic-systems/140-react-agent.md) | 19 min | [link](https://outcomeschool.com/blog/react-agent) |
| 141 | [What is a Plan-and-Execute Agent?](step-10-ai-agents-and-agentic-systems/141-plan-and-execute-agent.md) | 15 min | [link](https://outcomeschool.com/blog/plan-and-execute-agent) |
| 142 | [What is a Reflection Agent?](step-10-ai-agents-and-agentic-systems/142-reflection-agent.md) | 17 min | [link](https://outcomeschool.com/blog/reflection-agent) |
| 143 | [How does AI Agent Memory work?](step-10-ai-agents-and-agentic-systems/143-ai-agent-memory.md) | 17 min | [link](https://outcomeschool.com/blog/ai-agent-memory) |
| 144 | [How does ChatGPT remember you?](step-10-ai-agents-and-agentic-systems/144-how-does-chatgpt-remember-you.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-chatgpt-remember-you) |
| 145 | [What is MCP (Model Context Protocol)?](step-10-ai-agents-and-agentic-systems/145-what-is-mcp-model-context-protocol.md) | 16 min | [link](https://outcomeschool.com/blog/what-is-mcp-model-context-protocol) |
| 146 | [What are Agent Skills?](step-10-ai-agents-and-agentic-systems/146-what-are-agent-skills.md) | 20 min | [link](https://outcomeschool.com/blog/what-are-agent-skills) |
| 147 | [What is OKF (Open Knowledge Format)?](step-10-ai-agents-and-agentic-systems/147-what-is-okf-open-knowledge-format.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-okf-open-knowledge-format) |
| 148 | [What are Multi-Agent Systems?](step-10-ai-agents-and-agentic-systems/148-multi-agent-systems.md) | 20 min | [link](https://outcomeschool.com/blog/multi-agent-systems) |
| 149 | [What are AI SubAgents?](step-10-ai-agents-and-agentic-systems/149-ai-subagents.md) | 9 min | [link](https://outcomeschool.com/blog/ai-subagents) |
| 150 | [How AI Agents Communicate](step-10-ai-agents-and-agentic-systems/150-how-ai-agents-communicate.md) | 19 min | [link](https://outcomeschool.com/blog/how-ai-agents-communicate) |
| 151 | [What is AI Orchestration?](step-10-ai-agents-and-agentic-systems/151-ai-orchestration.md) | 18 min | [link](https://outcomeschool.com/blog/ai-orchestration) |
| 152 | [What is Sakana Fugu? The Technical Report Explained](step-10-ai-agents-and-agentic-systems/152-decoding-sakana-fugu.md) | 33 min | [link](https://outcomeschool.com/blog/decoding-sakana-fugu) |
| 153 | [How do Computer-Use Agents work?](step-10-ai-agents-and-agentic-systems/153-how-do-computer-use-agents-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-do-computer-use-agents-work) |
| 154 | [How do Browser Agents work?](step-10-ai-agents-and-agentic-systems/154-how-do-browser-agents-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-browser-agents-work) |
| 155 | [How do Human-in-the-Loop agents work?](step-10-ai-agents-and-agentic-systems/155-human-in-the-loop-agents.md) | 13 min | [link](https://outcomeschool.com/blog/human-in-the-loop-agents) |

## Step 11: Agentic Engineering and Agent Frameworks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 156 | [What is Harness Engineering?](step-11-agentic-engineering-and-agent-frameworks/156-harness-engineering-in-ai.md) | 12 min | [link](https://outcomeschool.com/blog/harness-engineering-in-ai) |
| 157 | [What is Loop Engineering?](step-11-agentic-engineering-and-agent-frameworks/157-what-is-loop-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-loop-engineering) |
| 158 | [What is Graph Engineering?](step-11-agentic-engineering-and-agent-frameworks/158-what-is-graph-engineering.md) | 27 min | [link](https://outcomeschool.com/blog/what-is-graph-engineering) |
| 159 | [AI Is Only as Good as Our Definition of Done](step-11-agentic-engineering-and-agent-frameworks/159-ai-is-only-as-good-as-our-definition-of-done.md) | 11 min | [link](https://outcomeschool.com/blog/ai-is-only-as-good-as-our-definition-of-done) |
| 160 | [How does LangChain work?](step-11-agentic-engineering-and-agent-frameworks/160-how-does-langchain-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-langchain-work) |
| 161 | [How does LangGraph work?](step-11-agentic-engineering-and-agent-frameworks/161-how-does-langgraph-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-langgraph-work) |
| 162 | [How does Claude Code work?](step-11-agentic-engineering-and-agent-frameworks/162-how-does-claude-code-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-claude-code-work) |
| 163 | [How does Cursor work?](step-11-agentic-engineering-and-agent-frameworks/163-how-does-cursor-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-cursor-work) |

## Step 12: LLM Inference Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 164 | [LLM Inference Optimization](step-12-llm-inference-engineering/164-llm-inference-optimization.md) | 13 min | [link](https://outcomeschool.com/blog/llm-inference-optimization) |
| 165 | [Prefill vs Decode: LLM Inference Optimization](step-12-llm-inference-engineering/165-prefill-vs-decode-llm-inference-optimization.md) | 35 min | [link](https://outcomeschool.com/blog/prefill-vs-decode-llm-inference-optimization) |
| 166 | [What is Prefill-Decode Disaggregation in LLM Inference?](step-12-llm-inference-engineering/166-prefill-decode-disaggregation.md) | 22 min | [link](https://outcomeschool.com/blog/prefill-decode-disaggregation) |
| 167 | [What is KV Cache in LLMs?](step-12-llm-inference-engineering/167-kv-cache-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/kv-cache-in-llms) |
| 168 | [What is KV Cache Compression?](step-12-llm-inference-engineering/168-kv-cache-compression.md) | 21 min | [link](https://outcomeschool.com/blog/kv-cache-compression) |
| 169 | [How does an LLM use GPU memory?](step-12-llm-inference-engineering/169-llm-gpu-memory.md) | 14 min | [link](https://outcomeschool.com/blog/llm-gpu-memory) |
| 170 | [What is Paged Attention in LLMs?](step-12-llm-inference-engineering/170-paged-attention-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/paged-attention-in-llms) |
| 171 | [What is Continuous Batching in LLMs?](step-12-llm-inference-engineering/171-continuous-batching-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/continuous-batching-in-llms) |
| 172 | [What is Speculative Decoding?](step-12-llm-inference-engineering/172-speculative-decoding.md) | 20 min | [link](https://outcomeschool.com/blog/speculative-decoding) |
| 173 | [What is N-gram Speculation in LLMs?](step-12-llm-inference-engineering/173-n-gram-speculation-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/n-gram-speculation-in-llms) |
| 174 | [What is Medusa? Multi-Head Speculative Decoding Explained](step-12-llm-inference-engineering/174-decoding-medusa.md) | 11 min | [link](https://outcomeschool.com/blog/decoding-medusa) |
| 175 | [What is EAGLE? Feature-Level Speculative Decoding Explained](step-12-llm-inference-engineering/175-decoding-eagle.md) | 9 min | [link](https://outcomeschool.com/blog/decoding-eagle) |
| 176 | [How does Model Quantization work?](step-12-llm-inference-engineering/176-how-does-model-quantization-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-model-quantization-work) |
| 177 | [How does GGUF work?](step-12-llm-inference-engineering/177-how-does-gguf-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-gguf-work) |
| 178 | [How does llama.cpp run LLMs on everyday hardware?](step-12-llm-inference-engineering/178-how-does-llama-cpp-run-llms-on-everyday-hardware.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-llama-cpp-run-llms-on-everyday-hardware) |
| 179 | [How does Ollama work?](step-12-llm-inference-engineering/179-how-does-ollama-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-ollama-work) |
| 180 | [How does vLLM work?](step-12-llm-inference-engineering/180-how-does-vllm-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-vllm-work) |
| 181 | [How does SGLang work?](step-12-llm-inference-engineering/181-how-does-sglang-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-sglang-work) |
| 182 | [How does TensorRT-LLM work?](step-12-llm-inference-engineering/182-how-does-tensorrt-llm-work.md) | 47 min | [link](https://outcomeschool.com/blog/how-does-tensorrt-llm-work) |

## Step 13: Evaluation and Observability

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 183 | [What is LLM Evaluation? Metrics, Benchmarks, and Methods Explained](step-13-evaluation-and-observability/183-llm-evaluation.md) | 20 min | [link](https://outcomeschool.com/blog/llm-evaluation) |
| 184 | [What is LLM as a Judge?](step-13-evaluation-and-observability/184-llm-as-a-judge.md) | 20 min | [link](https://outcomeschool.com/blog/llm-as-a-judge) |
| 185 | [How to Evaluate AI Agents? Metrics, Methods, and Best Practices](step-13-evaluation-and-observability/185-ai-agent-evaluation.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent-evaluation) |
| 186 | [What is AI Agent Observability? Traces, Spans, and Metrics Explained](step-13-evaluation-and-observability/186-ai-agent-observability.md) | 21 min | [link](https://outcomeschool.com/blog/ai-agent-observability) |

## Step 14: AI Safety and Security

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 187 | [How do LLM Guardrails work?](step-14-ai-safety-and-security/187-how-do-llm-guardrails-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-llm-guardrails-work) |
| 188 | [What is Prompt Injection in LLMs and How Do We Defend Against It?](step-14-ai-safety-and-security/188-prompt-injection-in-llms.md) | 34 min | [link](https://outcomeschool.com/blog/prompt-injection-in-llms) |
| 189 | [What is jailbreaking in LLMs?](step-14-ai-safety-and-security/189-jailbreaking-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/jailbreaking-in-llms) |
| 190 | [How does LLM Watermarking work?](step-14-ai-safety-and-security/190-how-does-llm-watermarking-work.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-llm-watermarking-work) |

## Step 15: Multimodal AI and Generative Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 191 | [What is Multimodal AI?](step-15-multimodal-ai-and-generative-models/191-multimodal-ai.md) | 15 min | [link](https://outcomeschool.com/blog/multimodal-ai) |
| 192 | [What is a Vision Transformer (ViT)?](step-15-multimodal-ai-and-generative-models/192-decoding-vision-transformer-vit.md) | 15 min | [link](https://outcomeschool.com/blog/decoding-vision-transformer-vit) |
| 193 | [How do Image Embeddings work?](step-15-multimodal-ai-and-generative-models/193-how-do-image-embeddings-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-image-embeddings-work) |
| 194 | [How does a Vision-Language Model (VLM) work?](step-15-multimodal-ai-and-generative-models/194-vision-language-model-vlm.md) | 16 min | [link](https://outcomeschool.com/blog/vision-language-model-vlm) |
| 195 | [What are Diffusion Models and How Do They Generate Images?](step-15-multimodal-ai-and-generative-models/195-diffusion-models.md) | 18 min | [link](https://outcomeschool.com/blog/diffusion-models) |
| 196 | [How does flow matching train a generative model?](step-15-multimodal-ai-and-generative-models/196-flow-matching.md) | 17 min | [link](https://outcomeschool.com/blog/flow-matching) |
| 197 | [What are Generative Adversarial Networks (GANs)?](step-15-multimodal-ai-and-generative-models/197-generative-adversarial-networks.md) | 18 min | [link](https://outcomeschool.com/blog/generative-adversarial-networks) |
| 198 | [What are Variational Autoencoders (VAEs)?](step-15-multimodal-ai-and-generative-models/198-variational-autoencoders.md) | 19 min | [link](https://outcomeschool.com/blog/variational-autoencoders) |

## Step 16: AI Infrastructure, Deployment, and System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 199 | [How does a GPU work for Deep Learning?](step-16-ai-infrastructure-deployment-and-system-design/199-how-does-a-gpu-work-for-deep-learning.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-a-gpu-work-for-deep-learning) |
| 200 | [How do CUDA Kernels work?](step-16-ai-infrastructure-deployment-and-system-design/200-how-do-cuda-kernels-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-do-cuda-kernels-work) |
| 201 | [How does a Google TPU work?](step-16-ai-infrastructure-deployment-and-system-design/201-how-does-a-google-tpu-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-a-google-tpu-work) |
| 202 | [How does an LPU work?](step-16-ai-infrastructure-deployment-and-system-design/202-how-does-an-lpu-work.md) | 26 min | [link](https://outcomeschool.com/blog/how-does-an-lpu-work) |
| 203 | [How does distributed training work?](step-16-ai-infrastructure-deployment-and-system-design/203-distributed-training.md) | 19 min | [link](https://outcomeschool.com/blog/distributed-training) |
| 204 | [Cloud vs On-device Model Deployment](step-16-ai-infrastructure-deployment-and-system-design/204-cloud-vs-on-device-model-deployment.md) | 29 min | [link](https://outcomeschool.com/blog/cloud-vs-on-device-model-deployment) |
| 205 | [How does Model Serving work?](step-16-ai-infrastructure-deployment-and-system-design/205-model-serving.md) | 17 min | [link](https://outcomeschool.com/blog/model-serving) |
| 206 | [How does a Model Registry work?](step-16-ai-infrastructure-deployment-and-system-design/206-model-registry.md) | 15 min | [link](https://outcomeschool.com/blog/model-registry) |
| 207 | [Android TensorFlow Lite Machine Learning Example](step-16-ai-infrastructure-deployment-and-system-design/207-android-tensorflow-lite-machine-learning-example.md) | 3 min | [link](https://outcomeschool.com/blog/android-tensorflow-lite-machine-learning-example) |
| 208 | [What is LLM Routing? How to Send Each Query to the Right LLM](step-16-ai-infrastructure-deployment-and-system-design/208-llm-routing.md) | 16 min | [link](https://outcomeschool.com/blog/llm-routing) |
| 209 | [Design a Real-Time Voice AI Agent](step-16-ai-infrastructure-deployment-and-system-design/209-design-a-real-time-voice-ai-agent.md) | 68 min | [link](https://outcomeschool.com/blog/design-a-real-time-voice-ai-agent) |
| 210 | [What is turn-taking in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/210-what-is-turn-taking-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-turn-taking-in-a-voice-ai-agent) |
| 211 | [How does endpointing decide when the user has finished speaking?](step-16-ai-infrastructure-deployment-and-system-design/211-endpointing-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/endpointing-in-voice-agents) |
| 212 | [How do silence-based and model-based turn detection differ?](step-16-ai-infrastructure-deployment-and-system-design/212-silence-vs-model-based-turn-detection.md) | 17 min | [link](https://outcomeschool.com/blog/silence-vs-model-based-turn-detection) |
| 213 | [How does dynamic endpointing adapt to how fast a user talks?](step-16-ai-infrastructure-deployment-and-system-design/213-dynamic-endpointing.md) | 17 min | [link](https://outcomeschool.com/blog/dynamic-endpointing) |
| 214 | [How does a voice agent handle long pauses when the user is thinking?](step-16-ai-infrastructure-deployment-and-system-design/214-long-pauses-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/long-pauses-in-voice-agents) |
| 215 | [How does a voice agent know a phone number or email is not finished yet?](step-16-ai-infrastructure-deployment-and-system-design/215-unfinished-input-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/unfinished-input-in-voice-agents) |
| 216 | [Why does a voice agent cut people off mid-sentence?](step-16-ai-infrastructure-deployment-and-system-design/216-voice-agents-cutting-users-off.md) | 15 min | [link](https://outcomeschool.com/blog/voice-agents-cutting-users-off) |
| 217 | [What is barge-in in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/217-what-is-barge-in-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-barge-in-in-a-voice-ai-agent) |
| 218 | [Cascaded vs Speech-to-Speech: How to choose the right voice agent architecture?](step-16-ai-infrastructure-deployment-and-system-design/218-cascaded-vs-speech-to-speech.md) | 16 min | [link](https://outcomeschool.com/blog/cascaded-vs-speech-to-speech) |
| 219 | [How do half-duplex and full-duplex voice agents differ?](step-16-ai-infrastructure-deployment-and-system-design/219-half-duplex-vs-full-duplex-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/half-duplex-vs-full-duplex-voice-agents) |
| 220 | [How does a voice agent tell a real interruption from a cough or background noise?](step-16-ai-infrastructure-deployment-and-system-design/220-interruption-vs-background-noise.md) | 16 min | [link](https://outcomeschool.com/blog/interruption-vs-background-noise) |
| 221 | [What are backchannels, and why should "mm-hmm" not stop the agent?](step-16-ai-infrastructure-deployment-and-system-design/221-backchannels-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/backchannels-in-voice-agents) |
| 222 | [How does a voice agent stop speaking instantly when interrupted?](step-16-ai-infrastructure-deployment-and-system-design/222-stopping-speech-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/stopping-speech-on-interruption) |
| 223 | [Why does TTS audio buffering make interruptions slow?](step-16-ai-infrastructure-deployment-and-system-design/223-tts-audio-buffering.md) | 17 min | [link](https://outcomeschool.com/blog/tts-audio-buffering) |
| 224 | [How does a voice agent truncate its memory to only what the user actually heard?](step-16-ai-infrastructure-deployment-and-system-design/224-truncating-context-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/truncating-context-on-interruption) |
| 225 | [How does a voice agent recover from a false interruption?](step-16-ai-infrastructure-deployment-and-system-design/225-false-interruption-recovery.md) | 15 min | [link](https://outcomeschool.com/blog/false-interruption-recovery) |
| 226 | [How does a voice agent handle the user and agent talking at the same time?](step-16-ai-infrastructure-deployment-and-system-design/226-overlapping-speech-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/overlapping-speech-in-voice-agents) |
| 227 | [How does a voice agent add its own backchannels like "okay" and "got it"?](step-16-ai-infrastructure-deployment-and-system-design/227-agent-side-backchannels.md) | 16 min | [link](https://outcomeschool.com/blog/agent-side-backchannels) |
| 228 | [How do you build a latency budget for a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/228-voice-agent-latency-budget.md) | 17 min | [link](https://outcomeschool.com/blog/voice-agent-latency-budget) |
| 229 | [How does the voice-to-voice latency of a voice agent get measured?](step-16-ai-infrastructure-deployment-and-system-design/229-voice-to-voice-latency.md) | 17 min | [link](https://outcomeschool.com/blog/voice-to-voice-latency) |
| 230 | [Why does the time-to-first-audio matter more than total response time?](step-16-ai-infrastructure-deployment-and-system-design/230-time-to-first-audio.md) | 14 min | [link](https://outcomeschool.com/blog/time-to-first-audio) |
| 231 | [How does sentence chunking feed LLM output into TTS faster?](step-16-ai-infrastructure-deployment-and-system-design/231-sentence-chunking-for-tts.md) | 18 min | [link](https://outcomeschool.com/blog/sentence-chunking-for-tts) |
| 232 | [How does a TTS model start speaking before the full sentence arrives?](step-16-ai-infrastructure-deployment-and-system-design/232-streaming-tts.md) | 17 min | [link](https://outcomeschool.com/blog/streaming-tts) |
| 233 | [How does speculative LLM generation start replying before the user finishes?](step-16-ai-infrastructure-deployment-and-system-design/233-speculative-generation-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/speculative-generation-in-voice-agents) |
| 234 | [How do filler phrases hide latency in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/234-filler-phrases-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/filler-phrases-in-voice-agents) |
| 235 | [How does a voice agent hide the delay of a slow tool call?](step-16-ai-infrastructure-deployment-and-system-design/235-slow-tool-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/slow-tool-calls-in-voice-agents) |
| 236 | [What are audio frames and chunk sizes in a real-time voice pipeline?](step-16-ai-infrastructure-deployment-and-system-design/236-audio-frames-and-chunk-sizes.md) | 16 min | [link](https://outcomeschool.com/blog/audio-frames-and-chunk-sizes) |
| 237 | [Why do sample rates like 8 kHz, 16 kHz, and 24 kHz matter for voice agents?](step-16-ai-infrastructure-deployment-and-system-design/237-sample-rates-for-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/sample-rates-for-voice-agents) |
| 238 | [How do WebRTC and WebSocket differ for voice AI agents?](step-16-ai-infrastructure-deployment-and-system-design/238-webrtc-vs-websocket-for-voice-ai.md) | 16 min | [link](https://outcomeschool.com/blog/webrtc-vs-websocket-for-voice-ai) |
| 239 | [How does the Opus codec compress voice for real-time calls?](step-16-ai-infrastructure-deployment-and-system-design/239-opus-codec.md) | 16 min | [link](https://outcomeschool.com/blog/opus-codec) |
| 240 | [How does a jitter buffer keep voice audio smooth over a bad network?](step-16-ai-infrastructure-deployment-and-system-design/240-jitter-buffer.md) | 16 min | [link](https://outcomeschool.com/blog/jitter-buffer) |
| 241 | [How does packet loss concealment hide missing audio?](step-16-ai-infrastructure-deployment-and-system-design/241-packet-loss-concealment.md) | 17 min | [link](https://outcomeschool.com/blog/packet-loss-concealment) |
| 242 | [How does a voice AI agent answer a phone call?](step-16-ai-infrastructure-deployment-and-system-design/242-phone-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/phone-calls-in-voice-agents) |
| 243 | [How do SIP and RTP carry a phone call to a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/243-sip-and-rtp.md) | 16 min | [link](https://outcomeschool.com/blog/sip-and-rtp) |
| 244 | [Why does phone audio make speech recognition worse?](step-16-ai-infrastructure-deployment-and-system-design/244-phone-audio-and-speech-recognition.md) | 17 min | [link](https://outcomeschool.com/blog/phone-audio-and-speech-recognition) |
| 245 | [How does DTMF keypad input work in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/245-dtmf-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/dtmf-in-voice-agents) |
| 246 | [How does voicemail and answering machine detection work?](step-16-ai-infrastructure-deployment-and-system-design/246-answering-machine-detection.md) | 16 min | [link](https://outcomeschool.com/blog/answering-machine-detection) |
| 247 | [How does an outbound calling voice agent work?](step-16-ai-infrastructure-deployment-and-system-design/247-outbound-calling-voice-agent.md) | 16 min | [link](https://outcomeschool.com/blog/outbound-calling-voice-agent) |

## Step 16: Supporting reads for AI System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 248 | [What is System Design?](step-16b-supporting-reads/248-system-design.md) | 6 min | [link](https://outcomeschool.com/blog/system-design) |
| 249 | [HTTP Request vs HTTP Long-Polling vs WebSocket vs Server-Sent Events](step-16b-supporting-reads/249-http-request-long-polling-websocket-sse.md) | 9 min | [link](https://outcomeschool.com/blog/http-request-long-polling-websocket-sse) |
| 250 | [How do Voice and Video Call work?](step-16b-supporting-reads/250-voice-and-video-call.md) | 5 min | [link](https://outcomeschool.com/blog/voice-and-video-call) |

## Step 17: Frontier Ideas in AI

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 251 | [What is Joint Embedding Predictive Architecture (JEPA)?](step-17-frontier-ideas-in-ai/251-joint-embedding-predictive-architecture-jepa.md) | 28 min | [link](https://outcomeschool.com/blog/joint-embedding-predictive-architecture-jepa) |
| 252 | [How do World Models work?](step-17-frontier-ideas-in-ai/252-how-do-world-models-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-do-world-models-work) |
| 253 | [What is Recursive Self-Improvement (RSI)?](step-17-frontier-ideas-in-ai/253-what-is-recursive-self-improvement-rsi.md) | 23 min | [link](https://outcomeschool.com/blog/what-is-recursive-self-improvement-rsi) |
