---
cname: guide
title: Guide
vocab:
  - one / 一
  - two / 二
  - three / 三
---

# Guide

How to add material

## Cool formatting

:::tip
This is a tip!
:::

## Badges
We have badges!
<Badge text="tip" type="tip" vertical="middle"></Badge>
<Badge text="warning" type="warn" vertical="middle"></Badge>
<Badge text="error" type="error" vertical="middle"></Badge>

cname: {{ $page.frontmatter.cname }}

## Custom metadata

page.path: {{ $page.path }}

site.title: {{ $site.title }}

Vocab metadata

<div v-for='word in $page.frontmatter.vocab' class='word'>
{{word}}
</div>

{{ $page.frontmatter.vocab }}

## Table of Contents for a section

<toc-box section="speaking"></toc-box>



<vocab-box></vocab-box>