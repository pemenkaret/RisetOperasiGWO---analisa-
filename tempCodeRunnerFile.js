// Inisialisasi parameter
const maxIterations = 2;
const n = 3;
const searchSpace = [-10, 10];

// Fungsi objektif
function objectiveFunction(x) {
  return x * x;
}

// Inisialisasi posisi serigala secara acak
let wolves = [-7, 5, 3];

// Menemukan solusi terbaik sementara
let alphaPos = wolves[2];
let betaPos = wolves[1];
let deltaPos = wolves[0];

for (let t = 0; t < maxIterations; t++) {
  let a = 2 - (2 * t / maxIterations); // Nilai a menurun secara linear dari 2 ke 0

  for (let i = 0; i < n; i++) {
    let r1 = Math.random();
    let r2 = Math.random();

    let A1 = 2 * a * r1 - a;
    let C1 = 2 * r2;

    let D_alpha = Math.abs(C1 * alphaPos - wolves[i]);
    let X1 = alphaPos - A1 * D_alpha;

    r1 = Math.random();
    r2 = Math.random();

    let A2 = 2 * a * r1 - a;
    let C2 = 2 * r2;

    let D_beta = Math.abs(C2 * betaPos - wolves[i]);
    let X2 = betaPos - A2 * D_beta;

    r1 = Math.random();
    r2 = Math.random();

    let A3 = 2 * a * r1 - a;
    let C3 = 2 * r2;

    let D_delta = Math.abs(C3 * deltaPos - wolves[i]);
    let X3 = deltaPos - A3 * D_delta;

    wolves[i] = (X1 + X2 + X3) / 3; // Update posisi serigala

    // Validasi agar posisi serigala tetap dalam batas pencarian
    if (wolves[i] < searchSpace[0]) {
      wolves[i] = searchSpace[0];
    } else if (wolves[i] > searchSpace[1]) {
      wolves[i] = searchSpace[1];
    }
  }

  // Update alpha, beta, dan delta berdasarkan nilai fungsi objektif
  let sortedWolves = [...wolves].sort((a, b) => objectiveFunction(a) - objectiveFunction(b));
  alphaPos = sortedWolves[0];
  betaPos = sortedWolves[1];
  deltaPos = sortedWolves[2];

  // Solusi terbaik sementara
  let bestPosition = alphaPos;
  let bestFitness = objectiveFunction(bestPosition);

  console.log(`Iterasi ${t + 1}:`);
  console.log(`Posisi serigala: ${wolves}`);
  console.log(`Nilai fungsi: ${wolves.map(objectiveFunction)}`);
  console.log(`Solusi terbaik sementara: x* = ${bestPosition}, f(x*) = ${bestFitness}`);
}

// Hasil Akhir
let bestPosition = alphaPos;
let bestFitness = objectiveFunction(bestPosition);

console.log('Solusi terbaik ditemukan:');
console.log(`x* = ${bestPosition}`);
console.log(`f(x*) = ${bestFitness}`);
console.log('Posisi serigala setelah iterasi:');
console.log(`x1 = ${wolves[0]}`);
console.log(`x2 = ${wolves[1]}`);
console.log(`x3 = ${wolves[2]}`);
console.log('Nilai fungsi serigala setelah iterasi:');
console.log(`f(x1) = ${objectiveFunction(wolves[0])}`);
console.log(`f(x2) = ${objectiveFunction(wolves[1])}`);
console.log(`f(x3) = ${objectiveFunction(wolves[2])}`);
