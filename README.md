This repo exists to demonstrate an issue I'm having packaging sanitize-html with serverless-jetpack using the
experimental tracing mode. To reproduce:

```
yarn install
yarn package
```

This will fail with an error like:

```
Error: Encountered resolution error in /Users/alice/some/project/node_modules/sanitize-html/dist/sanitize-html.js for _process: Error: Cannot find module '_process' from '/Users/alice/some/project/node_modules/sanitize-html/dist'
    at /Users/alice/some/project/node_modules/trace-deps/lib/trace.js:269:17
    at async Promise.all (index 185)
    at traceFile (/Users/alice/some/project/node_modules/trace-deps/lib/trace.js:222:19)
    at _recurseDeps (/Users/alice/some/project/node_modules/trace-deps/lib/trace.js:98:22)
    at traceFile (/Users/alice/some/project/node_modules/trace-deps/lib/trace.js:286:20)
    at _recurseDeps (/Users/alice/some/project/node_modules/trace-deps/lib/trace.js:98:22)
    at traceFiles (/Users/alice/some/project/node_modules/trace-deps/lib/trace.js:331:19)
    at globAndZip (/Users/alice/some/project/node_modules/serverless-jetpack/util/bundle.js:512:20)
    at Jetpack.globAndZip (/Users/alice/some/project/node_modules/serverless-jetpack/index.js:744:21)
    at Jetpack.packageFunction (/Users/alice/some/project/node_modules/serverless-jetpack/index.js:780:21)
```
