---
title: SCSS Media Query
description: Media query mixin for scss/sass projects
date: 2022-09-22T04:39:26Z
published: true
---

```scss
//==== Mixins ====//
$breakpoints: (
  'phone': 400px,
  'phone-wide': 480px,
  'phablet': 560px,
  'tablet-small': 640px,
  'tablet': 768px,
  'tablet-wide': 1024px,
  'desktop': 1248px,
  'desktop-wide': 1440px,
  'desktop-large': 1680px,
);

@mixin mq($width, $type: min) {
  @if map_has_key($breakpoints, $width) {
    $width: map_get($breakpoints, $width);
  }

  @if $type == min {
    $width: $width - 1px;
  }

  @media only screen and (#{$type}-width: $width) {
    @content;
  }
}

```