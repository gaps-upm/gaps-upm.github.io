---
permalink: /
title: "Signal Processing Applications Group"
excerpt: "Signal Processing Applications Group"
author_profile: true
hide_title: true
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="{{ '/assets/css/home.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<link rel="stylesheet" href="{{ '/assets/css/news-feed.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<link rel="stylesheet" href="{{ '/assets/css/publications-slider.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<section class="home-hero" aria-labelledby="home-hero-title">
  <p class="home-hero__eyebrow">GAPS · Universidad Politécnica de Madrid</p>
  <h1 id="home-hero-title">Signal processing for intelligent systems</h1>
  <p class="home-hero__lead">Research at the intersection of signal processing, machine learning, sensing, communications, speech and sound.</p>
  <div class="home-hero__actions" aria-label="Main links">
    <a href="{{ '/projects/' | relative_url }}">Explore our research <span aria-hidden="true">-&gt;</span></a>
    <a href="{{ '/people/' | relative_url }}">Meet the team <span aria-hidden="true">-&gt;</span></a>
  </div>
</section>

<section class="home-section home-about" aria-labelledby="home-about-heading">
  <h2 id="home-about-heading">About GAPS</h2>
  <p>At GAPS, we advance signal processing and intelligent systems through research that bridges theory, data, and applications across speech and sound, sensing, communications, and system modelling.</p>
  <p>Founded in 1988 at Universidad Politécnica de Madrid, GAPS brings together decades of research experience in signal processing, combining a strong academic foundation with sustained activity in competitive research projects, technology transfer, and collaboration with industry and public institutions.</p>
</section>

{% include news-feed.html limit=5 %}

{% include publications-slider.html %}
