import { codeToR1csWithInputs } from './codeToR1cs.mjs';
import fs from 'fs/promises'

const sourceCode = await fs.readFile("./input.js")

const {
  r, A, B, C,
} = codeToR1csWithInputs(sourceCode, [3]);
console.log({
  r, A, B, C,
});
