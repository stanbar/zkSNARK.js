
// A, B, C = matrices of m vectors of length n, where for each
// 0 <= i < m, we want to satisfy A[i] * B[i] - C[i] = 0
export function r1cs_to_qap(A, B, C){
    A, B, C = transpose(A), transpose(B), transpose(C)
    new_A = A.map(lagrange_interp)
    new_B = B.map(lagrange_interp)
    new_C = C.map(lagrange_interp)
    Z = [1]
    for(let i = 1; i < A[0].length +1; i++) {
        Z = multiply_polys(Z, [-i, 1])
    }
    return (new_A, new_B, new_C, Z)
}
