object-memory-test
=====

Quick test of memory usage in V8 for function-based objects vs class-based objects vs plain objects.

```bash
node --expose-gc index.js --use-object && node --expose-gc index.js --use-class && node --expose-gc index.js --use-function
```
