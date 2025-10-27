---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

<div class="filter-section">
  <h3>Filter by Researcher:</h3>
  <div class="filter-buttons">
    <button class="filter-btn active" data-author="all">All Publications</button>
    {% for author in site.data.publication_authors %}
    <button class="filter-btn" data-author="{{ author.key }}">{{ author.label }}</button>
    {% endfor %}
  </div>
</div>

{% for group in site.data.publications %}
<section class="publication-year-group">
  <h3 class="publication-year">{{ group.year }}</h3>
  <ul class="publication-list">
  {% for publication in group.items %}
  <li class="publication-item"{% if publication.id %} id="{{ publication.id }}"{% endif %}{% if publication.authors_tags %} data-authors="{{ publication.authors_tags | join: ',' }}"{% endif %}>
    <div class="publication-citation">
      {{ publication.citation | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </div>
    {% if publication.links %}
    <div class="publication-links">
      {% for link in publication.links %}
      <a href="{{ link.url }}"{% if link.url contains 'http' %} target="_blank" rel="noreferrer noopener"{% endif %}>{{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
  </li>
  {% endfor %}
</ul>
</section>
{% endfor %}

<noscript>
  <p>The interactive filters require JavaScript. Enable it to explore publications by author.</p>
</noscript>

<script src="{{ '/assets/js/publications-filter.js' | relative_url }}" defer></script>
