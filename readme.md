# sideEffects Issue
Vite respects the `sideEffects` field in `package.json` and will not tree-shake modules that don't declare themselves side effect free.

## Reproduction
In this repo we have an app.ts that imports a component from a barrel (Components/index.ts). The barrel also exports a function that is not used in the app.ts. The function is not used in the app.ts, but it is still included in the bundle.  
This happens because that second function imports video.js which is not declared side effect free in its package.json.

## Why is this an issue?
Imagine a component library where the components are exported from a barrel. The components themselves are side effect free, any components from that barrel that in turn use a node_module that is not declared side effect free will not be tree-shaken.

This has the potential to bloat the bundle size of a project massively.
For example video.js is around 500kb.

## Stats
We've added a few different stat examples here to show the impact of this issue.
