const nilaiIPA = 70;
const nilaiMTK = 80;
const nilaiIPS = 70;
const nilaiBahasa = 90;

const luluskedokteran = nilaiIPA > 70 && nilaiMTK > 70 && nilaiBahasa > 70 && nilaiIPS > 70;

console.log('lulus Kedokteran = ', luluskedokteran);

// const lulusinformatika = nilaiIPA > 50 || nilaiBahasa || 70 || nilaiIPS > 70 &&  nilaiMTK > 80;

// console.log('lulus Informatika = ', lulusinformatika);

// const lulussekolah = (nilaiIPA + nilaiMTK + nilaiBahasa + nilaiIPS)/4 > 70;

// const luluskeperawatan = !luluskedokteran && lulussekolah;

// console.log('lulus  Keperawatan = ', luluskeperawatan);