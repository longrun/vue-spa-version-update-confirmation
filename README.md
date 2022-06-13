# Vue3 SPA vesion up confirmation 

This is a Vue 3 / SPA sample implementation of a process that determines
that a newer version is available and asks the user if there wants to upgrade.

<img width="846" alt="screenshot" src="https://user-images.githubusercontent.com/15245958/173325469-bfdc8e73-9828-49d3-a6da-861456903bc6.png">

## Using

- Vue 3
- Vite
- Pinia

``
# SPA application version management strategy

Bump a version of manualy.

```
npm version (major|minor|patch)
```

Generate to `public/latestversion.json` that can access by this app can access.

```
grep -e '"version":' package.json | sed -e 's/^/{/' | sed -e 's/[,]/}/' > public/latestversion.json
```

... or Auto generate by GitHub Actions.

And you going to push the code.

# Thaks for
- [szboynono/mosha-vue-toastify](https://github.com/szboynono/mosha-vue-toastify)
