# commonjs-issue-315

- https://github.com/rollup/rollup-plugin-commonjs/issues/315
- https://github.com/glixlur/rollup-plugin-ignore/issues/2

### Install
```sh
git clone https://github.com/aleclarson/rollup-bugs.git -b commonjs-issue-315 commonjs-issue-315
cd commonjs-issue-315
yarn
```

### Reproduce
```
$ rollup -c

index.js → bundle.js...
[!] TypeError: Cannot read property 'forEach' of null
TypeError: Cannot read property 'forEach' of null
    at Module.getReexports (./node_modules/rollup/dist/rollup.js:16972:31)
    at new NamespaceVariable (./node_modules/rollup/dist/rollup.js:7821:79)
    at Module.getAndCreateNamespace (./node_modules/rollup/dist/rollup.js:16996:38)
    at Module.traceExport (./node_modules/rollup/dist/rollup.js:17040:29)
    at ./node_modules/rollup/dist/rollup.js:20703:40
    at <anonymous>
```
