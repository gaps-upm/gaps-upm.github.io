---
layout: archive
# title: "People"
permalink: /people/
author_profile: true
---

<link rel="stylesheet" href="{{ '/assets/css/people.css' | relative_url }}?v=16">

<div id="people-directory"></div>

<noscript>
	<p>The interactive directory requires JavaScript. Please enable it to view the team roster.</p>
</noscript>

<script>
	window.peopleData = {{ site.data.people | jsonify }};
	window.peopleRecords = {
		{% assign people_records = site.people | sort: "title" %}
		{% for person in people_records %}
			{% assign person_slug = person.person_slug | default: person.slug %}
			{{ person_slug | jsonify }}: {
				name: {{ person.title | jsonify }},
				slug: {{ person_slug | jsonify }},
				title: {{ person.role | default: "" | jsonify }},
				email: {{ person.email | default: "" | jsonify }},
				photo: {{ person.photo | default: "" | jsonify }},
				affiliation: {{ person.affiliation | default: "" | jsonify }},
				links: {{ person.links | jsonify }}
			}{% unless forloop.last %},{% endunless %}
		{% endfor %}
	};
	window.peopleBaseUrl = {{ '/people/' | relative_url | jsonify }};
</script>
<script src="{{ '/assets/js/people.js' | relative_url }}?v=16" defer></script>
