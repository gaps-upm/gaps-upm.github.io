---
layout: archive
title: "Positions"
permalink: /positions/
author_profile: true
hide_title: true
---

## Ofertas de Trabajo de Fin de Grado/Máster

{% for position in site.data.positions %}
### {{ position.title }}

{{ position.description | markdownify }}

{% if position.contact_person %}
**Persona de contacto:** {{ position.contact_person.name }} - [{{ position.contact_person.email }}](mailto:{{ position.contact_person.email }})
{% endif %}

{% endfor %}
