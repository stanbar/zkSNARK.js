# zkSNARK.js

JavaScript compiler for zkSNARK.
The compilation consist of two phases:
1. First it transforms js code to rank 1 constraint system (R1CS).
2. Then it transforms R1CS to Quadratic Arithmetic Program.

# Usage

Write JavaScript ES2020 source code in `input.js`, then execute compiler with
```
npm start
```

The compiler output to `output.zk`.
