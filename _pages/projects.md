---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/projects.css' | relative_url }}">

{% assign project_groups = site.data.projects | group_by: "funding_type" %}

{% assign professor_slugs = site.data.projects | map: "professor" | compact | uniq | sort %}

<div class="filter-section project-filter-section">
  <h3>Filter by Project Type:</h3>
  <div class="filter-buttons" aria-label="Project type filters">
    <button class="filter-btn active" data-project-filter="all">All Projects</button>
    <button class="filter-btn" data-project-filter="european">European</button>
    <button class="filter-btn" data-project-filter="national">National</button>
    <button class="filter-btn" data-project-filter="regional">Regional</button>
    <button class="filter-btn" data-project-filter="private">Other / Private</button>
  </div>
</div>

<div class="filter-section project-filter-section">
  <h3>Filter by Professor:</h3>
  <div class="filter-buttons" aria-label="Professor filters">
    <button class="filter-btn active" data-project-professor-filter="all">All Professors</button>
    {% for professor_slug in professor_slugs %}
      {% case professor_slug %}
        {% when "jose-luis-blanco-murillo" %}
          {% assign professor_label = "José Luis Blanco Murillo" %}
        {% when "juan-parras-moral" %}
          {% assign professor_label = "Juan Parras Moral" %}
        {% else %}
          {% assign professor_label = professor_slug | replace: "-", " " | capitalize %}
      {% endcase %}
      <button class="filter-btn" data-project-professor-filter="{{ professor_slug }}">{{ professor_label }}</button>
    {% endfor %}
  </div>
</div>

<div class="projects-list">
{% for project_group in project_groups %}
  {% case project_group.name %}
    {% when "european" %}
      {% assign group_title = "European projects" %}
    {% when "national" %}
      {% assign group_title = "National projects" %}
    {% when "regional" %}
      {% assign group_title = "Regional projects" %}
    {% when "private" %}
      {% assign group_title = "Other / private projects" %}
    {% else %}
      {% assign group_title = project_group.name | capitalize | append: " projects" %}
  {% endcase %}

  <section class="project-group" data-project-group="{{ project_group.name }}">
    <h2>{{ group_title }}</h2>

    {% for project in project_group.items %}
    <article class="project-item{% if project.active %} project-item--active{% endif %}" data-funding-type="{{ project.funding_type }}" data-professor="{{ project.professor | default: 'none' }}">
      <header class="project-header">
        <div class="project-heading">
          <p class="project-meta">
            <span>{{ project.year_start }}{% if project.year_end %}-{{ project.year_end }}{% elsif project.active %}-present{% endif %}</span>
            {% if project.active %}
            <span class="project-status">Active</span>
            {% endif %}
          </p>
          <h3>{{ project.name }}</h3>
          {% assign project_professor = project.professor %}
          {% if project_professor %}
            {% case project_professor %}
              {% when "jose-luis-blanco-murillo" %}
                {% assign professor_name = "Prof. José Luis Blanco Murillo" %}
              {% when "juan-parras-moral" %}
                {% assign professor_name = "Prof. Juan Parras Moral" %}
              {% else %}
                {% assign professor_name = project_professor | replace: "-", " " | capitalize %}
            {% endcase %}
            <p class="project-owner-mini">
              <span>{{ professor_name }}</span>
              <span class="project-role-tag">{{ project.role | upcase }}</span>
            </p>
          {% endif %}
        </div>
      </header>

      {% if project.description %}
      <p class="project-description">{{ project.description }}</p>
      {% endif %}

      {% if project.partners %}
      <p class="project-detail"><strong>Partners:</strong> {{ project.partners }}</p>
      {% endif %}

      {% if project.area %}
      <p class="project-areas">
        {% for area in project.area %}
        <span>{{ area }}</span>
        {% endfor %}
      </p>
      {% endif %}

      {% if project.url or project.doi %}
      <p class="project-links">
        {% if project.url %}
        <a href="{{ project.url }}" target="_blank" rel="noreferrer noopener">Project website</a>
        {% endif %}
        {% if project.doi %}
        <a href="{{ project.doi }}" target="_blank" rel="noreferrer noopener">DOI</a>
        {% endif %}
      </p>
      {% endif %}
    </article>
    {% endfor %}
  </section>
{% endfor %}
</div>

<noscript>
  <p>The interactive filters require JavaScript. Enable it to explore projects by type.</p>
</noscript>

<script src="{{ '/assets/js/projects-filter.js' | relative_url }}" defer></script>
