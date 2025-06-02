---
title: 'My Blog Post WIth Pictures'
pubDate: 2022-07-01
description: 'This is a post to demonstrate images.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "images"]
---

# My Markdown Page

Reference: https://docs.astro.build/en/guides/images/

<!-- Local image stored in src/assets/ -->
<!-- Use a relative file path or import alias -->
![Spaghetti](/src/assets/spaghetti.jpg)

<!-- Image stored in public/images/ -->
<!-- Use the file path relative to public/ -->
![Summertime](/AstroSandbox/images/summertime.jpg)

<!-- Remote image on another server -->
<!-- Use the full URL of the image -->
![Formula 1](https://i.redd.it/s9t2j717ur0f1.jpeg)