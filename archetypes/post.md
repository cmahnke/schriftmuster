---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
params:
  itemType: book
tags:
- Book
resources:
- src: "front.jpg"
  name: front
  params:
    iiif: front/info.json
    class: front
---
