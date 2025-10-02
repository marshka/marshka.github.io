---
title: Over-squashing in Spatiotemporal Graph Neural Networks
authors:
    - Ivan Marisca
    - Jacob Bamberger
    - Cesare Alippi
    - Michael M. Bronstein
abstract: >
    Graph Neural Networks (GNNs) have achieved remarkable success across various domains. However, recent theoretical advances have identified fundamental limitations in their information propagation capabilities, such as over-squashing, where distant nodes fail to effectively exchange information. While extensively studied in static contexts, this issue remains unexplored in Spatiotemporal GNNs (STGNNs), which process sequences associated with graph nodes. Nonetheless, the temporal dimension amplifies this challenge by increasing the information that must be propagated. In this work, we formalize the spatiotemporal over-squashing problem and demonstrate its distinct characteristics compared to the static case. Our analysis reveals that counterintuitively, convolutional STGNNs favor information propagation from points temporally distant rather than close in time. Moreover, we prove that architectures that follow either time-and-space or time-then-space processing paradigms are equally affected by this phenomenon, providing theoretical justification for computationally efficient implementations. We validate our findings on synthetic and real-world datasets, providing deeper insights into their operational dynamics and principled guidance for more effective designs.
categories:
    - prediction
    - analysis
link: https://arxiv.org/abs/2506.15507
# code: https://github.com/marshka/
venue: NeurIPS 2025
thumbnail: 2506.15507.webp
layout: abstract
order: 8
---
