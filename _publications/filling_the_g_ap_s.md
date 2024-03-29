---
title: "Filling the G_ap_s: Multivariate Time Series Imputation by Graph Neural Networks"
authors:
    - Andrea Cini<sup>*</sup>
    - Ivan Marisca<sup>*</sup>
    - Cesare Alippi
abstract: "Dealing with missing values and incomplete time series is a labor-intensive, tedious, inevitable task when handling data coming from real-world applications. Effective spatio-temporal representations would allow imputation methods to reconstruct missing temporal data by exploiting information coming from sensors at different locations. However, standard methods fall short in capturing the nonlinear time and space dependencies existing within networks of interconnected sensors and do not take full advantage of the available - and often strong - relational information. Notably, most state-of-the-art imputation methods based on deep learning do not explicitly model relational aspects and, in any case, do not exploit processing frameworks able to adequately represent structured spatio-temporal data. Conversely, graph neural networks have recently surged in popularity as both expressive and scalable tools for processing sequential data with relational inductive biases. In this work, we present the first assessment of graph neural networks in the context of multivariate time series imputation. In particular, we introduce a novel graph neural network architecture, named GRIN, which aims at reconstructing missing data in the different channels of a multivariate time series by learning spatio-temporal representations through message passing. Empirical results show that our model outperforms state-of-the-art methods in the imputation task on relevant real-world benchmarks with mean absolute error improvements often higher than 20%."
categories:
    - imputation
link: https://arxiv.org/abs/2108.00298
code: https://github.com/Graph-Machine-Learning-Group/grin
venue: ICLR 2022
thumbnail: 2108.00298.jpg
layout: abstract
order: 1
---
