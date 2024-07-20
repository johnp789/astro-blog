---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Javascript for-loop microbenchmark'
pubDate: 2024-07-20T11:00:00-05:00
description: 'Trying out a little for-loop microbenchmark'
author: 'John Pitney'
tags: ["programming", "javascript"]
---
A colleague and I got discussing the various ways to iterate over elements of a Javascript Array.  He'd heard that a C-style for loop was the fastest.

I ran some simple benchmarks; my script and results are in the gist.  He had heard right!  This benchmark has just about the shortest loop body
possible.  Any substantial loop body would likely make these differences insignificant.  The usual advice about readability, doing your own benchmarks, and
optimization apply.  Bun had an edge over Node.js except when doing for..of.

Check out the [benchmark script and results](https://gist.github.com/johnp789/3b94d2ecbde9b1952b434807cb128ff7).
