---
title: Graph-based Forecasting with Missing Data through Spatiotemporal Downsampling
authors:
    - Ivan Marisca
    - Cesare Alippi
    - Filippo Maria Bianchi
abstract: Given a set of synchronous time series, each associated with a sensor-point in space and characterized by inter-series relationships, the problem of spatiotemporal forecasting consists of predicting future observations for each point. Spatiotemporal graph neural networks achieve striking results by representing the relationships across time series as a graph. Nonetheless, most existing methods rely on the often unrealistic assumption that inputs are always available and fail to capture hidden spatiotemporal dynamics when part of the data is missing. In this work, we tackle this problem through hierarchical spatiotemporal downsampling. The input time series are progressively coarsened over time and space, obtaining a pool of representations that capture heterogeneous temporal and spatial dynamics. Conditioned on observations and missing data patterns, such representations are combined by an interpretable attention mechanism to generate the forecasts. Our approach outperforms state-of-the-art methods on synthetic and real-world benchmarks under different missing data distributions, particularly in the presence of contiguous blocks of missing values.
categories:
    - prediction
    - dataset
link: https://arxiv.org/abs/2402.10634
venue: ICML 2024
thumbnail: 2402.10634.jpg
layout: abstract
order: 6
---
