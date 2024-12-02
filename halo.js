// Inisialisasi parameter
const maxIterations = 2;
const n = 3;
const searchSpace = [-10, 10];

// Fungsi objektif
function objectiveFunction(x) {
  return x * x;
}

// Inisialisasi posisi serigala
let wolves = [-7, 5, 3];

// Fungsi untuk memperbarui posisi serigala
function updatePosition(x, a, r1, r2, Xstarrrrrr) {
  const A = 2 * a * r1 - a;
  const C = 2 * r2;
  return Xstarrrrrr - A * Math.abs(C * Xstarrrrrr - x);
}

// Menemukan solusi terbaik sementara
let alphaPos = wolves[2]; // alpha adalah solusi terbaik
let betaPos = wolves[1]; // beta adalah solusi terbaik kedua
let deltaPos = wolves[0]; // delta adalah solusi terbaik ketiga

console.log("Iterasi 1:");
console.log(`Posisi serigala: x1=${wolves[0]}, x2=${wolves[1]}, x3=${wolves[2]}`);
console.log(`Nilai fungsi: f(x1)=${objectiveFunction(wolves[0])}, f(x2)=${objectiveFunction(wolves[1])}, f(x3)=${objectiveFunction(wolves[2])}`);
console.log(`Solusi terbaik sementara: x*=${alphaPos}`);

for (let t = 0; t < maxIterations; t++) {
  let a = 2 - (2 * (t + 1) / maxIterations); // Nilai a menurun secara linear dari 2 ke 0

  if (t === 0) {
    // Iterasi pertama
    wolves[0] = updatePosition(wolves[0], 2, 0.5, 0.6, alphaPos); // x1
    wolves[1] = updatePosition(wolves[1], 2, 0.3, 0.8, alphaPos); // x2
    // wolves[2] adalah solusi terbaik dan tidak berubah
  } else {
    // Iterasi kedua
    wolves[0] = updatePosition(wolves[0], 1, 0.4, 0.7, alphaPos); // x1
    wolves[1] = updatePosition(wolves[1], 1, 0.6, 0.9, alphaPos); // x2
    // wolves[2] adalah solusi terbaik dan tidak berubah
  }

  // Validasi agar posisi serigala tetap dalam batas pencarian
  wolves = wolves.map(x => Math.max(searchSpace[0], Math.min(searchSpace[1], x)));

  // Update alpha, beta, dan delta berdasarkan nilai fungsi objektif
  let sortedWolves = [...wolves].sort((a, b) => objectiveFunction(a) - objectiveFunction(b));
  alphaPos = sortedWolves[0];
  betaPos = sortedWolves[1];
  deltaPos = sortedWolves[2];

  console.log(`Iterasi ${t + 1}:`);
  console.log(`Posisi serigala: x1=${wolves[0].toFixed(3)}, x2=${wolves[1].toFixed(3)}, x3=${wolves[2].toFixed(3)}`);
  console.log(`Nilai fungsi: f(x1)=${objectiveFunction(wolves[0]).toFixed(3)}, f(x2)=${objectiveFunction(wolves[1]).toFixed(3)}, f(x3)=${objectiveFunction(wolves[2]).toFixed(3)}`);
  console.log(`Solusi terbaik sementara: x*=${alphaPos.toFixed(3)}`);
}

// Hasil Akhir
let bestPosition = alphaPos;
let bestFitness = objectiveFunction(bestPosition);

console.log('Hasil Akhir:');
console.log(`Posisi serigala: x1=${wolves[0].toFixed(3)}, x2=${wolves[1].toFixed(3)}, x3=${wolves[2].toFixed(3)}`);
console.log(`Nilai fungsi: f(x1)=${objectiveFunction(wolves[0]).toFixed(3)}, f(x2)=${objectiveFunction(wolves[1]).toFixed(3)}, f(x3)=${objectiveFunction(wolves[2]).toFixed(3)}`);
console.log(`Solusi terbaik diperbarui menjadi: x*=${bestPosition.toFixed(3)}, f(x*)=${bestFitness.toFixed(3)}`);
