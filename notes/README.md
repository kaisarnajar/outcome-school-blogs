# AI Engineer Roadmap — Study Notes

Short notes (with diagrams) for all **221** blogs in the [AI Engineer Roadmap](https://github.com/amitshekhariitbhu/ai-engineer-roadmap) by Amit Shekhar (Outcome School).
Each note has a TL;DR, key concepts, how it works, a Mermaid diagram where useful, and key takeaways.

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
| 7 | [What are L1 and L2 Loss Functions?](step-01-machine-learning-foundations/007-l1-and-l2-loss-functions.md) | 3 min | [link](https://outcomeschool.com/blog/l1-and-l2-loss-functions) |
| 8 | [What is Regularization in Machine Learning? L1 vs L2 Explained](step-01-machine-learning-foundations/008-regularization-in-machine-learning.md) | 3 min | [link](https://outcomeschool.com/blog/regularization-in-machine-learning) |
| 9 | [Why do we split data into train, validation, and test sets?](step-01-machine-learning-foundations/009-train-validation-test-split.md) | 14 min | [link](https://outcomeschool.com/blog/train-validation-test-split) |
| 10 | [How does the Bias-Variance Tradeoff work?](step-01-machine-learning-foundations/010-bias-variance-tradeoff.md) | 17 min | [link](https://outcomeschool.com/blog/bias-variance-tradeoff) |
| 11 | [How do Decision Trees and Random Forests work?](step-01-machine-learning-foundations/011-decision-trees-and-random-forests.md) | 18 min | [link](https://outcomeschool.com/blog/decision-trees-and-random-forests) |
| 12 | [How does K-Means Clustering work?](step-01-machine-learning-foundations/012-k-means-clustering.md) | 16 min | [link](https://outcomeschool.com/blog/k-means-clustering) |
| 13 | [How does Data Augmentation work?](step-01-machine-learning-foundations/013-data-augmentation.md) | 14 min | [link](https://outcomeschool.com/blog/data-augmentation) |
| 14 | [What is Reinforcement Learning?](step-01-machine-learning-foundations/014-reinforcement-learning.md) | 15 min | [link](https://outcomeschool.com/blog/reinforcement-learning) |
| 15 | [What is a Markov Decision Process (MDP)?](step-01-machine-learning-foundations/015-markov-decision-process-mdp.md) | 17 min | [link](https://outcomeschool.com/blog/markov-decision-process-mdp) |
| 16 | [What is Exploration vs Exploitation in Reinforcement Learning?](step-01-machine-learning-foundations/016-exploration-vs-exploitation.md) | 18 min | [link](https://outcomeschool.com/blog/exploration-vs-exploitation) |
| 17 | [What is a Value Function? Q-Learning Explained Step by Step](step-01-machine-learning-foundations/017-value-function-and-q-learning.md) | 17 min | [link](https://outcomeschool.com/blog/value-function-and-q-learning) |
| 18 | [What is Policy Gradient? The REINFORCE Algorithm Explained](step-01-machine-learning-foundations/018-policy-gradient-reinforce.md) | 18 min | [link](https://outcomeschool.com/blog/policy-gradient-reinforce) |
| 19 | [What is Actor-Critic in Reinforcement Learning? The Advantage Function Explained](step-01-machine-learning-foundations/019-actor-critic.md) | 17 min | [link](https://outcomeschool.com/blog/actor-critic) |
| 20 | [How does Self-Supervised Learning work?](step-01-machine-learning-foundations/020-self-supervised-learning.md) | 12 min | [link](https://outcomeschool.com/blog/self-supervised-learning) |
| 21 | [What is Contrastive Learning?](step-01-machine-learning-foundations/021-contrastive-learning.md) | 15 min | [link](https://outcomeschool.com/blog/contrastive-learning) |

## Step 2: Deep Learning and Neural Networks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 22 | [What is a Neural Network and How Does It Work?](step-02-deep-learning-and-neural-networks/022-neural-network.md) | 17 min | [link](https://outcomeschool.com/blog/neural-network) |
| 23 | [What is Bias in Artificial Neural Network?](step-02-deep-learning-and-neural-networks/023-bias-in-artificial-neural-network.md) | 3 min | [link](https://outcomeschool.com/blog/bias-in-artificial-neural-network) |
| 24 | [What is a Multilayer Perceptron (MLP) and How Does It Work?](step-02-deep-learning-and-neural-networks/024-multilayer-perceptron-mlp.md) | 17 min | [link](https://outcomeschool.com/blog/multilayer-perceptron-mlp) |
| 25 | [What are Activation Functions in Neural Networks? Sigmoid, Tanh, ReLU, and Softmax Explained](step-02-deep-learning-and-neural-networks/025-activation-functions.md) | 17 min | [link](https://outcomeschool.com/blog/activation-functions) |
| 26 | [What is the Softmax Function and How Does It Work?](step-02-deep-learning-and-neural-networks/026-softmax-function.md) | 15 min | [link](https://outcomeschool.com/blog/softmax-function) |
| 27 | [What are Logits in Machine Learning?](step-02-deep-learning-and-neural-networks/027-logits-in-machine-learning.md) | 15 min | [link](https://outcomeschool.com/blog/logits-in-machine-learning) |
| 28 | [How Does Matrix Multiplication Work in Neural Networks?](step-02-deep-learning-and-neural-networks/028-matrix-multiplication-in-neural-networks.md) | 19 min | [link](https://outcomeschool.com/blog/matrix-multiplication-in-neural-networks) |
| 29 | [How Does Gradient Descent Work?](step-02-deep-learning-and-neural-networks/029-math-behind-gradient-descent.md) | 15 min | [link](https://outcomeschool.com/blog/math-behind-gradient-descent) |
| 30 | [What are Epoch, Batch, Batch Size, and Iteration in Machine Learning?](step-02-deep-learning-and-neural-networks/030-epoch-batch-and-iteration.md) | 16 min | [link](https://outcomeschool.com/blog/epoch-batch-and-iteration) |
| 31 | [How Does Backpropagation Work? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/031-math-behind-backpropagation.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-backpropagation) |
| 32 | [What are Optimizers in Deep Learning? SGD, Momentum, RMSProp, and Adam Explained](step-02-deep-learning-and-neural-networks/032-optimizers-in-deep-learning.md) | 16 min | [link](https://outcomeschool.com/blog/optimizers-in-deep-learning) |
| 33 | [Why do vanishing and exploding gradients happen?](step-02-deep-learning-and-neural-networks/033-vanishing-and-exploding-gradients.md) | 18 min | [link](https://outcomeschool.com/blog/vanishing-and-exploding-gradients) |
| 34 | [Why Do We Initialize Weights Randomly in Neural Networks?](step-02-deep-learning-and-neural-networks/034-random-weight-initialization.md) | 20 min | [link](https://outcomeschool.com/blog/random-weight-initialization) |
| 35 | [What is Cross-Entropy Loss?](step-02-deep-learning-and-neural-networks/035-math-behind-cross-entropy-loss.md) | 17 min | [link](https://outcomeschool.com/blog/math-behind-cross-entropy-loss) |
| 36 | [What is KL Divergence? The Math Explained Step by Step](step-02-deep-learning-and-neural-networks/036-kl-divergence.md) | 16 min | [link](https://outcomeschool.com/blog/kl-divergence) |
| 37 | [What is Dropout in Neural Networks?](step-02-deep-learning-and-neural-networks/037-dropout-in-neural-networks.md) | 14 min | [link](https://outcomeschool.com/blog/dropout-in-neural-networks) |
| 38 | [Batch Normalization vs Layer Normalization](step-02-deep-learning-and-neural-networks/038-batch-normalization-vs-layer-normalization.md) | 9 min | [link](https://outcomeschool.com/blog/batch-normalization-vs-layer-normalization) |
| 39 | [What is RMSNorm? Root Mean Square Layer Normalization Explained](step-02-deep-learning-and-neural-networks/039-rmsnorm-root-mean-square-layer-normalization.md) | 13 min | [link](https://outcomeschool.com/blog/rmsnorm-root-mean-square-layer-normalization) |
| 40 | [Convolutional Neural Networks](step-02-deep-learning-and-neural-networks/040-convolutional-neural-network-cnn.md) | 19 min | [link](https://outcomeschool.com/blog/convolutional-neural-network-cnn) |
| 41 | [What is a Recurrent Neural Network (RNN)?](step-02-deep-learning-and-neural-networks/041-recurrent-neural-network.md) | 4 min | [link](https://outcomeschool.com/blog/recurrent-neural-network) |
| 42 | [How does PyTorch work?](step-02-deep-learning-and-neural-networks/042-how-does-pytorch-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-pytorch-work) |
| 43 | [How does TensorFlow work?](step-02-deep-learning-and-neural-networks/043-how-does-the-machine-learning-library-tensorflow-work.md) | 9 min | [link](https://outcomeschool.com/blog/how-does-the-machine-learning-library-tensorflow-work) |

## Step 3: Generative AI and the Transformer Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 44 | [What is Generative AI?](step-03-generative-ai-and-the-transformer-architecture/044-what-is-generative-ai.md) | 14 min | [link](https://outcomeschool.com/blog/what-is-generative-ai) |
| 45 | [How does an LLM work?](step-03-generative-ai-and-the-transformer-architecture/045-large-language-model-llm.md) | 18 min | [link](https://outcomeschool.com/blog/large-language-model-llm) |
| 46 | [Inside ChatGPT: What Happens After You Hit Enter](step-03-generative-ai-and-the-transformer-architecture/046-inside-chatgpt-what-happens-after.md) | 3 min | [link](https://outcomeschool.substack.com/p/inside-chatgpt-what-happens-after) |
| 47 | [What are Autoregressive Models?](step-03-generative-ai-and-the-transformer-architecture/047-autoregressive-models.md) | 20 min | [link](https://outcomeschool.com/blog/autoregressive-models) |
| 48 | [Tokenization in LLMs](step-03-generative-ai-and-the-transformer-architecture/048-tokenization-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/tokenization-in-llms) |
| 49 | [What is Byte Pair Encoding (BPE) in LLMs?](step-03-generative-ai-and-the-transformer-architecture/049-bpe-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/bpe-in-llms) |
| 50 | [What are Embeddings?](step-03-generative-ai-and-the-transformer-architecture/050-what-are-embeddings.md) | 19 min | [link](https://outcomeschool.com/blog/what-are-embeddings) |
| 51 | [How do RNNs and Transformers differ?](step-03-generative-ai-and-the-transformer-architecture/051-how-do-rnns-and-transformers-differ.md) | 8 min | [link](https://outcomeschool.com/blog/how-do-rnns-and-transformers-differ) |
| 52 | [How Does the Transformer Architecture Work?](step-03-generative-ai-and-the-transformer-architecture/052-decoding-transformer-architecture.md) | 20 min | [link](https://outcomeschool.com/blog/decoding-transformer-architecture) |
| 53 | [Encoder vs Decoder in Transformers](step-03-generative-ai-and-the-transformer-architecture/053-encoder-vs-decoder-in-transformers.md) | 11 min | [link](https://outcomeschool.com/blog/encoder-vs-decoder-in-transformers) |
| 54 | [What is Self Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/054-self-attention-in-transformers.md) | 14 min | [link](https://outcomeschool.com/blog/self-attention-in-transformers) |
| 55 | [How Does Attention Work? The Math Behind Q, K, and V](step-03-generative-ai-and-the-transformer-architecture/055-math-behind-attention-qkv.md) | 14 min | [link](https://outcomeschool.com/blog/math-behind-attention-qkv) |
| 56 | [Why Do We Scale Attention by √dₖ?](step-03-generative-ai-and-the-transformer-architecture/056-scaling-dot-product-attention.md) | 17 min | [link](https://outcomeschool.com/blog/scaling-dot-product-attention) |
| 57 | [What is Causal Masking in Attention?](step-03-generative-ai-and-the-transformer-architecture/057-causal-masking-in-attention.md) | 10 min | [link](https://outcomeschool.com/blog/causal-masking-in-attention) |
| 58 | [What is Multi-Head Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/058-multi-head-attention-in-transformers.md) | 15 min | [link](https://outcomeschool.com/blog/multi-head-attention-in-transformers) |
| 59 | [What is Cross Attention in Transformers?](step-03-generative-ai-and-the-transformer-architecture/059-cross-attention-in-transformers.md) | 16 min | [link](https://outcomeschool.com/blog/cross-attention-in-transformers) |
| 60 | [Positional Embeddings in LLMs](step-03-generative-ai-and-the-transformer-architecture/060-positional-embeddings-in-llms.md) | 1 min | [link](https://outcomeschool.substack.com/p/positional-embeddings-in-llms) |
| 61 | [What is RoPE (Rotary Position Embedding)? The Math Behind It](step-03-generative-ai-and-the-transformer-architecture/061-math-behind-rope-rotary-position-embedding.md) | 16 min | [link](https://outcomeschool.com/blog/math-behind-rope-rotary-position-embedding) |
| 62 | [What is the Feed-Forward Network in LLMs?](step-03-generative-ai-and-the-transformer-architecture/062-feed-forward-networks-in-llms.md) | 21 min | [link](https://outcomeschool.com/blog/feed-forward-networks-in-llms) |

## Step 4: How LLMs Generate Text

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 63 | [How does Temperature control LLM output?](step-04-how-llms-generate-text/063-how-does-temperature-control-llm-output.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-temperature-control-llm-output) |
| 64 | [How do Top-k and Top-p Sampling work?](step-04-how-llms-generate-text/064-how-do-top-k-and-top-p-sampling-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-top-k-and-top-p-sampling-work) |
| 65 | [What are Log Probabilities (Logprobs) in LLMs?](step-04-how-llms-generate-text/065-logprobs-in-llms.md) | 15 min | [link](https://outcomeschool.com/blog/logprobs-in-llms) |
| 66 | [Stop Tokens in LLMs](step-04-how-llms-generate-text/066-stop-tokens-in-llms.md) | 19 min | [link](https://outcomeschool.com/blog/stop-tokens-in-llms) |
| 67 | [How does Token Streaming work?](step-04-how-llms-generate-text/067-how-does-token-streaming-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-token-streaming-work) |
| 68 | [How does the Context Window work?](step-04-how-llms-generate-text/068-context-window.md) | 12 min | [link](https://outcomeschool.com/blog/context-window) |
| 69 | [What is the Lost in the Middle Problem in LLMs?](step-04-how-llms-generate-text/069-lost-in-the-middle-problem-in-llms.md) | 23 min | [link](https://outcomeschool.com/blog/lost-in-the-middle-problem-in-llms) |
| 70 | [Why Do LLMs Hallucinate? The Token-Level Explanation](step-04-how-llms-generate-text/070-why-do-llms-hallucinate-the-token-level-explanation.md) | 20 min | [link](https://outcomeschool.com/blog/why-do-llms-hallucinate-the-token-level-explanation) |

## Step 5: Modern LLM Architecture

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 71 | [What is Mixture of Experts (MoE)?](step-05-modern-llm-architecture/071-mixture-of-experts.md) | 16 min | [link](https://outcomeschool.com/blog/mixture-of-experts) |
| 72 | [What is Grouped Query Attention (GQA)?](step-05-modern-llm-architecture/072-grouped-query-attention.md) | 19 min | [link](https://outcomeschool.com/blog/grouped-query-attention) |
| 73 | [How does Sliding Window Attention work?](step-05-modern-llm-architecture/073-how-does-sliding-window-attention-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-sliding-window-attention-work) |
| 74 | [How do Attention Sinks work?](step-05-modern-llm-architecture/074-how-do-attention-sinks-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-attention-sinks-work) |
| 75 | [What is Flash Attention and Why Is It So Fast?](step-05-modern-llm-architecture/075-decoding-flash-attention.md) | 25 min | [link](https://outcomeschool.com/blog/decoding-flash-attention) |
| 76 | [What is DeepSeek-V4 and How Does It Work? Architecture Explained](step-05-modern-llm-architecture/076-decoding-deepseek-v4.md) | 21 min | [link](https://outcomeschool.com/blog/decoding-deepseek-v4) |

## Step 6: Types of Language Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 77 | [What are Small Language Models (SLMs)?](step-06-types-of-language-models/077-small-language-models-slms.md) | 20 min | [link](https://outcomeschool.com/blog/small-language-models-slms) |
| 78 | [What are Large Reasoning Models (LRMs)?](step-06-types-of-language-models/078-large-reasoning-models.md) | 21 min | [link](https://outcomeschool.com/blog/large-reasoning-models) |
| 79 | [What are Recursive Language Models (RLMs)?](step-06-types-of-language-models/079-recursive-language-models.md) | 13 min | [link](https://outcomeschool.com/blog/recursive-language-models) |
| 80 | [How do Diffusion Language Models (DLMs) work?](step-06-types-of-language-models/080-how-do-diffusion-language-models-dlms-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-do-diffusion-language-models-dlms-work) |
| 81 | [Jev and System One Models Explained](step-06-types-of-language-models/081-jev-and-system-one-models-explained.md) | 20 min | [link](https://outcomeschool.com/blog/jev-and-system-one-models-explained) |

## Step 7: Training, Fine-Tuning, and Alignment

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 82 | [How does Pretraining work?](step-07-training-fine-tuning-and-alignment/082-llm-pretraining.md) | 16 min | [link](https://outcomeschool.com/blog/llm-pretraining) |
| 83 | [How does Fine-Tuning work?](step-07-training-fine-tuning-and-alignment/083-how-does-fine-tuning-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-fine-tuning-work) |
| 84 | [What is LoRA (Low-Rank Adaptation)?](step-07-training-fine-tuning-and-alignment/084-lora-low-rank-adaptation-of-llms.md) | 14 min | [link](https://outcomeschool.com/blog/lora-low-rank-adaptation-of-llms) |
| 85 | [How does Prefix Tuning work?](step-07-training-fine-tuning-and-alignment/085-how-does-prefix-tuning-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-prefix-tuning-work) |
| 86 | [How does Knowledge Distillation work?](step-07-training-fine-tuning-and-alignment/086-how-does-knowledge-distillation-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-knowledge-distillation-work) |
| 87 | [What is Continual Learning in LLMs? Solving Catastrophic Forgetting](step-07-training-fine-tuning-and-alignment/087-continual-learning-in-llms.md) | 14 min | [link](https://outcomeschool.com/blog/continual-learning-in-llms) |
| 88 | [What is Deep RL from Human Preferences? The Paper That Started RLHF](step-07-training-fine-tuning-and-alignment/088-decoding-deep-rl-from-human-preferences.md) | 16 min | [link](https://outcomeschool.com/blog/decoding-deep-rl-from-human-preferences) |
| 89 | [What is InstructGPT? How GPT-3 Learned to Follow Instructions](step-07-training-fine-tuning-and-alignment/089-decoding-instructgpt.md) | 17 min | [link](https://outcomeschool.com/blog/decoding-instructgpt) |
| 90 | [What is RLHF? Reinforcement Learning from Human Feedback Explained](step-07-training-fine-tuning-and-alignment/090-reinforcement-learning-from-human-feedback-rlhf.md) | 21 min | [link](https://outcomeschool.com/blog/reinforcement-learning-from-human-feedback-rlhf) |
| 91 | [What is a Reward Model and How Is It Trained?](step-07-training-fine-tuning-and-alignment/091-reward-model.md) | 17 min | [link](https://outcomeschool.com/blog/reward-model) |
| 92 | [What is Reward Hacking in Reinforcement Learning and How Do We Prevent It?](step-07-training-fine-tuning-and-alignment/092-reward-hacking.md) | 16 min | [link](https://outcomeschool.com/blog/reward-hacking) |
| 93 | [What is Proximal Policy Optimization (PPO)?](step-07-training-fine-tuning-and-alignment/093-proximal-policy-optimization-ppo.md) | 13 min | [link](https://outcomeschool.com/blog/proximal-policy-optimization-ppo) |
| 94 | [What is Direct Preference Optimization (DPO)?](step-07-training-fine-tuning-and-alignment/094-direct-preference-optimization-dpo.md) | 15 min | [link](https://outcomeschool.com/blog/direct-preference-optimization-dpo) |
| 95 | [What is Group Relative Policy Optimization (GRPO)?](step-07-training-fine-tuning-and-alignment/095-group-relative-policy-optimization-grpo.md) | 17 min | [link](https://outcomeschool.com/blog/group-relative-policy-optimization-grpo) |

## Step 8: Prompt Engineering and Context Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 96 | [How does Chain-of-Thought (CoT) Prompting work?](step-08-prompt-engineering-and-context-engineering/096-how-does-chain-of-thought-prompting-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-does-chain-of-thought-prompting-work) |
| 97 | [How does Tree of Thoughts work?](step-08-prompt-engineering-and-context-engineering/097-how-does-tree-of-thoughts-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-tree-of-thoughts-work) |
| 98 | [How does Prompt Chaining work?](step-08-prompt-engineering-and-context-engineering/098-how-does-prompt-chaining-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-prompt-chaining-work) |
| 99 | [How does Prompt Caching work?](step-08-prompt-engineering-and-context-engineering/099-how-does-prompt-caching-work.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-prompt-caching-work) |
| 100 | [What is Context Engineering?](step-08-prompt-engineering-and-context-engineering/100-context-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/context-engineering) |
| 101 | [How does Context Compaction work?](step-08-prompt-engineering-and-context-engineering/101-how-does-context-compaction-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-does-context-compaction-work) |

## Step 9: Vector Search and Retrieval-Augmented Generation (RAG)

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 102 | [How does Cosine Similarity work?](step-09-vector-search-and-retrieval-augmented-generation-rag/102-cosine-similarity.md) | 14 min | [link](https://outcomeschool.com/blog/cosine-similarity) |
| 103 | [How does a Vector Database work?](step-09-vector-search-and-retrieval-augmented-generation-rag/103-how-does-a-vector-database-work.md) | 31 min | [link](https://outcomeschool.com/blog/how-does-a-vector-database-work) |
| 104 | [How does Approximate Nearest Neighbor (ANN) Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/104-how-does-approximate-nearest-neighbor-ann-search-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-approximate-nearest-neighbor-ann-search-work) |
| 105 | [How does Semantic Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/105-how-does-semantic-search-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-semantic-search-work) |
| 106 | [How does Hybrid Search work?](step-09-vector-search-and-retrieval-augmented-generation-rag/106-how-does-hybrid-search-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-hybrid-search-work) |
| 107 | [How does a Reranker work?](step-09-vector-search-and-retrieval-augmented-generation-rag/107-how-does-a-reranker-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-does-a-reranker-work) |
| 108 | [What is ColBERT? Late Interaction Retrieval Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/108-decoding-colbert.md) | 19 min | [link](https://outcomeschool.com/blog/decoding-colbert) |
| 109 | [How does RAG work?](step-09-vector-search-and-retrieval-augmented-generation-rag/109-retrieval-augmented-generation-rag.md) | 14 min | [link](https://outcomeschool.com/blog/retrieval-augmented-generation-rag) |
| 110 | [How to Chunk Documents for RAG? Chunking Strategies Explained](step-09-vector-search-and-retrieval-augmented-generation-rag/110-chunking-strategies-for-rag.md) | 31 min | [link](https://outcomeschool.com/blog/chunking-strategies-for-rag) |
| 111 | [How does Contextual Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/111-how-does-contextual-retrieval-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-contextual-retrieval-work) |
| 112 | [How does HyDE work in RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/112-how-does-hyde-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-hyde-work) |
| 113 | [How do Query Rewriting and Multi-Query Retrieval work?](step-09-vector-search-and-retrieval-augmented-generation-rag/113-how-do-query-rewriting-and-multi-query-retrieval-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-do-query-rewriting-and-multi-query-retrieval-work) |
| 114 | [How does an Embedding Cache work?](step-09-vector-search-and-retrieval-augmented-generation-rag/114-how-does-an-embedding-cache-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-an-embedding-cache-work) |
| 115 | [How does Semantic Caching work?](step-09-vector-search-and-retrieval-augmented-generation-rag/115-how-does-semantic-caching-work.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-semantic-caching-work) |
| 116 | [What is Agentic RAG?](step-09-vector-search-and-retrieval-augmented-generation-rag/116-agentic-rag.md) | 15 min | [link](https://outcomeschool.com/blog/agentic-rag) |
| 117 | [What is GraphRAG? How Knowledge Graphs Improve RAG](step-09-vector-search-and-retrieval-augmented-generation-rag/117-graphrag.md) | 14 min | [link](https://outcomeschool.com/blog/graphrag) |
| 118 | [What is Vectorless RAG? RAG Without Embeddings or a Vector Database](step-09-vector-search-and-retrieval-augmented-generation-rag/118-vectorless-rag.md) | 21 min | [link](https://outcomeschool.com/blog/vectorless-rag) |

## Step 10: AI Agents and Agentic Systems

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 119 | [What is an AI Agent? How It Works](step-10-ai-agents-and-agentic-systems/119-ai-agent.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent) |
| 120 | [How does Function Calling work in LLMs?](step-10-ai-agents-and-agentic-systems/120-how-does-function-calling-work-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-function-calling-work-in-llms) |
| 121 | [What is an AI Agent Loop?](step-10-ai-agents-and-agentic-systems/121-ai-agent-loop.md) | 20 min | [link](https://outcomeschool.com/blog/ai-agent-loop) |
| 122 | [What is a ReAct Agent?](step-10-ai-agents-and-agentic-systems/122-react-agent.md) | 19 min | [link](https://outcomeschool.com/blog/react-agent) |
| 123 | [What is a Plan-and-Execute Agent?](step-10-ai-agents-and-agentic-systems/123-plan-and-execute-agent.md) | 15 min | [link](https://outcomeschool.com/blog/plan-and-execute-agent) |
| 124 | [What is a Reflection Agent?](step-10-ai-agents-and-agentic-systems/124-reflection-agent.md) | 17 min | [link](https://outcomeschool.com/blog/reflection-agent) |
| 125 | [How does AI Agent Memory work?](step-10-ai-agents-and-agentic-systems/125-ai-agent-memory.md) | 17 min | [link](https://outcomeschool.com/blog/ai-agent-memory) |
| 126 | [How does ChatGPT remember you?](step-10-ai-agents-and-agentic-systems/126-how-does-chatgpt-remember-you.md) | 15 min | [link](https://outcomeschool.com/blog/how-does-chatgpt-remember-you) |
| 127 | [What is MCP (Model Context Protocol)?](step-10-ai-agents-and-agentic-systems/127-what-is-mcp-model-context-protocol.md) | 16 min | [link](https://outcomeschool.com/blog/what-is-mcp-model-context-protocol) |
| 128 | [What are Agent Skills?](step-10-ai-agents-and-agentic-systems/128-what-are-agent-skills.md) | 20 min | [link](https://outcomeschool.com/blog/what-are-agent-skills) |
| 129 | [What is OKF (Open Knowledge Format)?](step-10-ai-agents-and-agentic-systems/129-what-is-okf-open-knowledge-format.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-okf-open-knowledge-format) |
| 130 | [What are Multi-Agent Systems?](step-10-ai-agents-and-agentic-systems/130-multi-agent-systems.md) | 20 min | [link](https://outcomeschool.com/blog/multi-agent-systems) |
| 131 | [What are AI SubAgents?](step-10-ai-agents-and-agentic-systems/131-ai-subagents.md) | 9 min | [link](https://outcomeschool.com/blog/ai-subagents) |
| 132 | [How AI Agents Communicate](step-10-ai-agents-and-agentic-systems/132-how-ai-agents-communicate.md) | 19 min | [link](https://outcomeschool.com/blog/how-ai-agents-communicate) |
| 133 | [What is AI Orchestration?](step-10-ai-agents-and-agentic-systems/133-ai-orchestration.md) | 18 min | [link](https://outcomeschool.com/blog/ai-orchestration) |
| 134 | [What is Sakana Fugu? The Technical Report Explained](step-10-ai-agents-and-agentic-systems/134-decoding-sakana-fugu.md) | 33 min | [link](https://outcomeschool.com/blog/decoding-sakana-fugu) |
| 135 | [How do Computer-Use Agents work?](step-10-ai-agents-and-agentic-systems/135-how-do-computer-use-agents-work.md) | 17 min | [link](https://outcomeschool.com/blog/how-do-computer-use-agents-work) |
| 136 | [How do Browser Agents work?](step-10-ai-agents-and-agentic-systems/136-how-do-browser-agents-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-browser-agents-work) |
| 137 | [How do Human-in-the-Loop agents work?](step-10-ai-agents-and-agentic-systems/137-human-in-the-loop-agents.md) | 13 min | [link](https://outcomeschool.com/blog/human-in-the-loop-agents) |

## Step 11: Agentic Engineering and Agent Frameworks

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 138 | [What is Harness Engineering?](step-11-agentic-engineering-and-agent-frameworks/138-harness-engineering-in-ai.md) | 12 min | [link](https://outcomeschool.com/blog/harness-engineering-in-ai) |
| 139 | [What is Loop Engineering?](step-11-agentic-engineering-and-agent-frameworks/139-what-is-loop-engineering.md) | 21 min | [link](https://outcomeschool.com/blog/what-is-loop-engineering) |
| 140 | [What is Graph Engineering?](step-11-agentic-engineering-and-agent-frameworks/140-what-is-graph-engineering.md) | 27 min | [link](https://outcomeschool.com/blog/what-is-graph-engineering) |
| 141 | [AI Is Only as Good as Our Definition of Done](step-11-agentic-engineering-and-agent-frameworks/141-ai-is-only-as-good-as-our-definition-of-done.md) | 11 min | [link](https://outcomeschool.com/blog/ai-is-only-as-good-as-our-definition-of-done) |
| 142 | [How does LangChain work?](step-11-agentic-engineering-and-agent-frameworks/142-how-does-langchain-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-langchain-work) |
| 143 | [How does LangGraph work?](step-11-agentic-engineering-and-agent-frameworks/143-how-does-langgraph-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-langgraph-work) |
| 144 | [How does Claude Code work?](step-11-agentic-engineering-and-agent-frameworks/144-how-does-claude-code-work.md) | 20 min | [link](https://outcomeschool.com/blog/how-does-claude-code-work) |
| 145 | [How does Cursor work?](step-11-agentic-engineering-and-agent-frameworks/145-how-does-cursor-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-cursor-work) |

## Step 12: LLM Inference Engineering

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 146 | [LLM Inference Optimization](step-12-llm-inference-engineering/146-llm-inference-optimization.md) | 13 min | [link](https://outcomeschool.com/blog/llm-inference-optimization) |
| 147 | [Prefill vs Decode: LLM Inference Optimization](step-12-llm-inference-engineering/147-prefill-vs-decode-llm-inference-optimization.md) | 35 min | [link](https://outcomeschool.com/blog/prefill-vs-decode-llm-inference-optimization) |
| 148 | [What is Prefill-Decode Disaggregation in LLM Inference?](step-12-llm-inference-engineering/148-prefill-decode-disaggregation.md) | 22 min | [link](https://outcomeschool.com/blog/prefill-decode-disaggregation) |
| 149 | [What is KV Cache in LLMs?](step-12-llm-inference-engineering/149-kv-cache-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/kv-cache-in-llms) |
| 150 | [What is KV Cache Compression?](step-12-llm-inference-engineering/150-kv-cache-compression.md) | 21 min | [link](https://outcomeschool.com/blog/kv-cache-compression) |
| 151 | [How does an LLM use GPU memory?](step-12-llm-inference-engineering/151-llm-gpu-memory.md) | 14 min | [link](https://outcomeschool.com/blog/llm-gpu-memory) |
| 152 | [What is Paged Attention in LLMs?](step-12-llm-inference-engineering/152-paged-attention-in-llms.md) | 12 min | [link](https://outcomeschool.com/blog/paged-attention-in-llms) |
| 153 | [What is Continuous Batching in LLMs?](step-12-llm-inference-engineering/153-continuous-batching-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/continuous-batching-in-llms) |
| 154 | [What is Speculative Decoding?](step-12-llm-inference-engineering/154-speculative-decoding.md) | 20 min | [link](https://outcomeschool.com/blog/speculative-decoding) |
| 155 | [What is N-gram Speculation in LLMs?](step-12-llm-inference-engineering/155-n-gram-speculation-in-llms.md) | 20 min | [link](https://outcomeschool.com/blog/n-gram-speculation-in-llms) |
| 156 | [What is Medusa? Multi-Head Speculative Decoding Explained](step-12-llm-inference-engineering/156-decoding-medusa.md) | 11 min | [link](https://outcomeschool.com/blog/decoding-medusa) |
| 157 | [What is EAGLE? Feature-Level Speculative Decoding Explained](step-12-llm-inference-engineering/157-decoding-eagle.md) | 9 min | [link](https://outcomeschool.com/blog/decoding-eagle) |
| 158 | [How does Model Quantization work?](step-12-llm-inference-engineering/158-how-does-model-quantization-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-model-quantization-work) |
| 159 | [How does GGUF work?](step-12-llm-inference-engineering/159-how-does-gguf-work.md) | 21 min | [link](https://outcomeschool.com/blog/how-does-gguf-work) |
| 160 | [How does llama.cpp run LLMs on everyday hardware?](step-12-llm-inference-engineering/160-how-does-llama-cpp-run-llms-on-everyday-hardware.md) | 19 min | [link](https://outcomeschool.com/blog/how-does-llama-cpp-run-llms-on-everyday-hardware) |
| 161 | [How does Ollama work?](step-12-llm-inference-engineering/161-how-does-ollama-work.md) | 18 min | [link](https://outcomeschool.com/blog/how-does-ollama-work) |
| 162 | [How does vLLM work?](step-12-llm-inference-engineering/162-how-does-vllm-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-does-vllm-work) |
| 163 | [How does SGLang work?](step-12-llm-inference-engineering/163-how-does-sglang-work.md) | 25 min | [link](https://outcomeschool.com/blog/how-does-sglang-work) |
| 164 | [How does TensorRT-LLM work?](step-12-llm-inference-engineering/164-how-does-tensorrt-llm-work.md) | 47 min | [link](https://outcomeschool.com/blog/how-does-tensorrt-llm-work) |

## Step 13: Evaluation and Observability

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 165 | [What is LLM Evaluation? Metrics, Benchmarks, and Methods Explained](step-13-evaluation-and-observability/165-llm-evaluation.md) | 20 min | [link](https://outcomeschool.com/blog/llm-evaluation) |
| 166 | [What is LLM as a Judge?](step-13-evaluation-and-observability/166-llm-as-a-judge.md) | 20 min | [link](https://outcomeschool.com/blog/llm-as-a-judge) |
| 167 | [How to Evaluate AI Agents? Metrics, Methods, and Best Practices](step-13-evaluation-and-observability/167-ai-agent-evaluation.md) | 22 min | [link](https://outcomeschool.com/blog/ai-agent-evaluation) |
| 168 | [What is AI Agent Observability? Traces, Spans, and Metrics Explained](step-13-evaluation-and-observability/168-ai-agent-observability.md) | 21 min | [link](https://outcomeschool.com/blog/ai-agent-observability) |

## Step 14: AI Safety and Security

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 169 | [How do LLM Guardrails work?](step-14-ai-safety-and-security/169-how-do-llm-guardrails-work.md) | 14 min | [link](https://outcomeschool.com/blog/how-do-llm-guardrails-work) |
| 170 | [What is Prompt Injection in LLMs and How Do We Defend Against It?](step-14-ai-safety-and-security/170-prompt-injection-in-llms.md) | 34 min | [link](https://outcomeschool.com/blog/prompt-injection-in-llms) |
| 171 | [What is jailbreaking in LLMs?](step-14-ai-safety-and-security/171-jailbreaking-in-llms.md) | 18 min | [link](https://outcomeschool.com/blog/jailbreaking-in-llms) |
| 172 | [How does LLM Watermarking work?](step-14-ai-safety-and-security/172-how-does-llm-watermarking-work.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-llm-watermarking-work) |

## Step 15: Multimodal AI and Generative Models

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 173 | [What is Multimodal AI?](step-15-multimodal-ai-and-generative-models/173-multimodal-ai.md) | 15 min | [link](https://outcomeschool.com/blog/multimodal-ai) |
| 174 | [What is a Vision Transformer (ViT)?](step-15-multimodal-ai-and-generative-models/174-decoding-vision-transformer-vit.md) | 15 min | [link](https://outcomeschool.com/blog/decoding-vision-transformer-vit) |
| 175 | [How do Image Embeddings work?](step-15-multimodal-ai-and-generative-models/175-how-do-image-embeddings-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-do-image-embeddings-work) |
| 176 | [How does a Vision-Language Model (VLM) work?](step-15-multimodal-ai-and-generative-models/176-vision-language-model-vlm.md) | 16 min | [link](https://outcomeschool.com/blog/vision-language-model-vlm) |
| 177 | [What are Diffusion Models and How Do They Generate Images?](step-15-multimodal-ai-and-generative-models/177-diffusion-models.md) | 18 min | [link](https://outcomeschool.com/blog/diffusion-models) |
| 178 | [How does flow matching train a generative model?](step-15-multimodal-ai-and-generative-models/178-flow-matching.md) | 17 min | [link](https://outcomeschool.com/blog/flow-matching) |
| 179 | [What are Generative Adversarial Networks (GANs)?](step-15-multimodal-ai-and-generative-models/179-generative-adversarial-networks.md) | 18 min | [link](https://outcomeschool.com/blog/generative-adversarial-networks) |
| 180 | [What are Variational Autoencoders (VAEs)?](step-15-multimodal-ai-and-generative-models/180-variational-autoencoders.md) | 19 min | [link](https://outcomeschool.com/blog/variational-autoencoders) |

## Step 16: AI Infrastructure, Deployment, and System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 181 | [How does a GPU work for Deep Learning?](step-16-ai-infrastructure-deployment-and-system-design/181-how-does-a-gpu-work-for-deep-learning.md) | 24 min | [link](https://outcomeschool.com/blog/how-does-a-gpu-work-for-deep-learning) |
| 182 | [How do CUDA Kernels work?](step-16-ai-infrastructure-deployment-and-system-design/182-how-do-cuda-kernels-work.md) | 23 min | [link](https://outcomeschool.com/blog/how-do-cuda-kernels-work) |
| 183 | [How does a Google TPU work?](step-16-ai-infrastructure-deployment-and-system-design/183-how-does-a-google-tpu-work.md) | 16 min | [link](https://outcomeschool.com/blog/how-does-a-google-tpu-work) |
| 184 | [How does an LPU work?](step-16-ai-infrastructure-deployment-and-system-design/184-how-does-an-lpu-work.md) | 26 min | [link](https://outcomeschool.com/blog/how-does-an-lpu-work) |
| 185 | [Cloud vs On-device Model Deployment](step-16-ai-infrastructure-deployment-and-system-design/185-cloud-vs-on-device-model-deployment.md) | 29 min | [link](https://outcomeschool.com/blog/cloud-vs-on-device-model-deployment) |
| 186 | [How does Model Serving work?](step-16-ai-infrastructure-deployment-and-system-design/186-model-serving.md) | 17 min | [link](https://outcomeschool.com/blog/model-serving) |
| 187 | [Android TensorFlow Lite Machine Learning Example](step-16-ai-infrastructure-deployment-and-system-design/187-android-tensorflow-lite-machine-learning-example.md) | 3 min | [link](https://outcomeschool.com/blog/android-tensorflow-lite-machine-learning-example) |
| 188 | [What is LLM Routing? How to Send Each Query to the Right LLM](step-16-ai-infrastructure-deployment-and-system-design/188-llm-routing.md) | 16 min | [link](https://outcomeschool.com/blog/llm-routing) |
| 189 | [Design a Real-Time Voice AI Agent](step-16-ai-infrastructure-deployment-and-system-design/189-design-a-real-time-voice-ai-agent.md) | 68 min | [link](https://outcomeschool.com/blog/design-a-real-time-voice-ai-agent) |
| 190 | [What is turn-taking in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/190-what-is-turn-taking-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-turn-taking-in-a-voice-ai-agent) |
| 191 | [How does endpointing decide when the user has finished speaking?](step-16-ai-infrastructure-deployment-and-system-design/191-endpointing-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/endpointing-in-voice-agents) |
| 192 | [How do silence-based and model-based turn detection differ?](step-16-ai-infrastructure-deployment-and-system-design/192-silence-vs-model-based-turn-detection.md) | 17 min | [link](https://outcomeschool.com/blog/silence-vs-model-based-turn-detection) |
| 193 | [How does dynamic endpointing adapt to how fast a user talks?](step-16-ai-infrastructure-deployment-and-system-design/193-dynamic-endpointing.md) | 17 min | [link](https://outcomeschool.com/blog/dynamic-endpointing) |
| 194 | [How does a voice agent handle long pauses when the user is thinking?](step-16-ai-infrastructure-deployment-and-system-design/194-long-pauses-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/long-pauses-in-voice-agents) |
| 195 | [How does a voice agent know a phone number or email is not finished yet?](step-16-ai-infrastructure-deployment-and-system-design/195-unfinished-input-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/unfinished-input-in-voice-agents) |
| 196 | [Why does a voice agent cut people off mid-sentence?](step-16-ai-infrastructure-deployment-and-system-design/196-voice-agents-cutting-users-off.md) | 15 min | [link](https://outcomeschool.com/blog/voice-agents-cutting-users-off) |
| 197 | [What is barge-in in a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/197-what-is-barge-in-in-a-voice-ai-agent.md) | 17 min | [link](https://outcomeschool.com/blog/what-is-barge-in-in-a-voice-ai-agent) |
| 198 | [Cascaded vs Speech-to-Speech: How to choose the right voice agent architecture?](step-16-ai-infrastructure-deployment-and-system-design/198-cascaded-vs-speech-to-speech.md) | 16 min | [link](https://outcomeschool.com/blog/cascaded-vs-speech-to-speech) |
| 199 | [How do half-duplex and full-duplex voice agents differ?](step-16-ai-infrastructure-deployment-and-system-design/199-half-duplex-vs-full-duplex-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/half-duplex-vs-full-duplex-voice-agents) |
| 200 | [How does a voice agent tell a real interruption from a cough or background noise?](step-16-ai-infrastructure-deployment-and-system-design/200-interruption-vs-background-noise.md) | 16 min | [link](https://outcomeschool.com/blog/interruption-vs-background-noise) |
| 201 | [What are backchannels, and why should "mm-hmm" not stop the agent?](step-16-ai-infrastructure-deployment-and-system-design/201-backchannels-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/backchannels-in-voice-agents) |
| 202 | [How does a voice agent stop speaking instantly when interrupted?](step-16-ai-infrastructure-deployment-and-system-design/202-stopping-speech-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/stopping-speech-on-interruption) |
| 203 | [Why does TTS audio buffering make interruptions slow?](step-16-ai-infrastructure-deployment-and-system-design/203-tts-audio-buffering.md) | 17 min | [link](https://outcomeschool.com/blog/tts-audio-buffering) |
| 204 | [How does a voice agent truncate its memory to only what the user actually heard?](step-16-ai-infrastructure-deployment-and-system-design/204-truncating-context-on-interruption.md) | 17 min | [link](https://outcomeschool.com/blog/truncating-context-on-interruption) |
| 205 | [How does a voice agent recover from a false interruption?](step-16-ai-infrastructure-deployment-and-system-design/205-false-interruption-recovery.md) | 15 min | [link](https://outcomeschool.com/blog/false-interruption-recovery) |
| 206 | [How does a voice agent handle the user and agent talking at the same time?](step-16-ai-infrastructure-deployment-and-system-design/206-overlapping-speech-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/overlapping-speech-in-voice-agents) |
| 207 | [How does a voice agent add its own backchannels like "okay" and "got it"?](step-16-ai-infrastructure-deployment-and-system-design/207-agent-side-backchannels.md) | 16 min | [link](https://outcomeschool.com/blog/agent-side-backchannels) |
| 208 | [How do you build a latency budget for a voice AI agent?](step-16-ai-infrastructure-deployment-and-system-design/208-voice-agent-latency-budget.md) | 17 min | [link](https://outcomeschool.com/blog/voice-agent-latency-budget) |
| 209 | [How does the voice-to-voice latency of a voice agent get measured?](step-16-ai-infrastructure-deployment-and-system-design/209-voice-to-voice-latency.md) | 17 min | [link](https://outcomeschool.com/blog/voice-to-voice-latency) |
| 210 | [Why does the time-to-first-audio matter more than total response time?](step-16-ai-infrastructure-deployment-and-system-design/210-time-to-first-audio.md) | 14 min | [link](https://outcomeschool.com/blog/time-to-first-audio) |
| 211 | [How does sentence chunking feed LLM output into TTS faster?](step-16-ai-infrastructure-deployment-and-system-design/211-sentence-chunking-for-tts.md) | 18 min | [link](https://outcomeschool.com/blog/sentence-chunking-for-tts) |
| 212 | [How does a TTS model start speaking before the full sentence arrives?](step-16-ai-infrastructure-deployment-and-system-design/212-streaming-tts.md) | 17 min | [link](https://outcomeschool.com/blog/streaming-tts) |
| 213 | [How does speculative LLM generation start replying before the user finishes?](step-16-ai-infrastructure-deployment-and-system-design/213-speculative-generation-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/speculative-generation-in-voice-agents) |
| 214 | [How do filler phrases hide latency in a voice agent?](step-16-ai-infrastructure-deployment-and-system-design/214-filler-phrases-in-voice-agents.md) | 16 min | [link](https://outcomeschool.com/blog/filler-phrases-in-voice-agents) |
| 215 | [How does a voice agent hide the delay of a slow tool call?](step-16-ai-infrastructure-deployment-and-system-design/215-slow-tool-calls-in-voice-agents.md) | 17 min | [link](https://outcomeschool.com/blog/slow-tool-calls-in-voice-agents) |

## Step 16: Supporting reads for AI System Design

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 216 | [What is System Design?](step-16b-supporting-reads/216-system-design.md) | 6 min | [link](https://outcomeschool.com/blog/system-design) |
| 217 | [HTTP Request vs HTTP Long-Polling vs WebSocket vs Server-Sent Events](step-16b-supporting-reads/217-http-request-long-polling-websocket-sse.md) | 9 min | [link](https://outcomeschool.com/blog/http-request-long-polling-websocket-sse) |
| 218 | [How do Voice and Video Call work?](step-16b-supporting-reads/218-voice-and-video-call.md) | 5 min | [link](https://outcomeschool.com/blog/voice-and-video-call) |

## Step 17: Frontier Ideas in AI

| # | Note | Read time | Original |
|:-:|:--|:-:|:-:|
| 219 | [What is Joint Embedding Predictive Architecture (JEPA)?](step-17-frontier-ideas-in-ai/219-joint-embedding-predictive-architecture-jepa.md) | 28 min | [link](https://outcomeschool.com/blog/joint-embedding-predictive-architecture-jepa) |
| 220 | [How do World Models work?](step-17-frontier-ideas-in-ai/220-how-do-world-models-work.md) | 22 min | [link](https://outcomeschool.com/blog/how-do-world-models-work) |
| 221 | [What is Recursive Self-Improvement (RSI)?](step-17-frontier-ideas-in-ai/221-what-is-recursive-self-improvement-rsi.md) | 23 min | [link](https://outcomeschool.com/blog/what-is-recursive-self-improvement-rsi) |
