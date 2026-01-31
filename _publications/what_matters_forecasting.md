---
title: "What Matters in Deep Learning for Time Series Forecasting?"
authors:
    - Valentina Moretti
    - Andrea Cini
    - Ivan Marisca
    - Cesare Alippi
abstract: >
    Deep learning models have grown increasingly popular in time series applications. However, the large quantity of newly proposed architectures, together with often contradictory empirical results, makes it difficult to assess which components contribute significantly to final performance. We aim to make sense of the current design space of deep learning architectures for time series forecasting by discussing the design dimensions and trade-offs that can explain, often unexpected, observed results. This paper discusses the necessity of grounding model design on principles for forecasting groups of time series and how such principles can be applied to current models. In particular, we assess how concepts such as locality and globality apply to recent forecasting architectures. We show that accounting for these aspects can be more relevant for achieving accurate results than adopting specific sequence modeling layers and that simple, well-designed forecasting architectures can often match the state of the art. We discuss how overlooked implementation details in existing architectures (1) fundamentally change the class of the resulting forecasting method and (2) drastically affect the observed empirical results. Our results call for rethinking current faulty benchmarking practices and the need to focus on the foundational aspects of the forecasting problem when designing architectures. As a step in this direction, we propose an auxiliary forecasting model card, whose fields serve to characterize existing and new forecasting architectures based on key design choices.
categories:
    - prediction
link: https://arxiv.org/abs/2512.22702
# code: 
venue: Preprint
thumbnail: 2512.22702.webp
layout: abstract
order: 10
---
