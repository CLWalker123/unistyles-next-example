# UnistylesNextExample

Minimal reproduction repo for unistyles issue with NextJS in a monorepo

## Reproduction steps

Install dependencies

```yarn```

Start server

```yarn nx dev example-web```

Observe in the web inspector that there is a single `div` rendered:

```html
<div class="css-view-175oi2r" style="unistyles_<id>:[object Object]"></div>
```
