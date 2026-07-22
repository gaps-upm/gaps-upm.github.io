---
layout: archive
title: "Positions"
permalink: /positions/
author_profile: true
---

## Ofertas de Trabajo de Fin de Grado/Máster

{% for position in site.data.positions %}
### {{ position.title }}

{{ position.description | markdownify }}

{% if position.contact_person %}
**Persona de contacto:** {{ position.contact_person.name }} - [{{ position.contact_person.email }}](mailto:{{ position.contact_person.email }})
{% endif %}

{% endfor %}

<!-- 
* Position 1: name
    - Description
    - Contact: [fulano@upm.es](mailto:fulano@upm.es)
    - [Link](www.google.es)

## PhD positions

* Thesis 1: name
    - Description
    - Contact: [fulano@upm.es](mailto:fulano@upm.es)

## Bachelor and Master Thesis

* Line 1: Artificial Intelligence for medical applications
    - Description
    - Contact: [fulano@upm.es](mailto:fulano@upm.es) -->
