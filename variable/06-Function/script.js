
function lulusKedokteran (
    nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
        const lulus = nilaiIPA > 70 &&
        nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;

        return lulus;
}

const nilaiIPAJohn = 90,
      nilaiIPSJohn = 50,
      nilaiMTKJohn = 90,
      nilaiBahasaJohn = 80;

const nilaiIPASinta = 80,
      nilaiIPSSinta = 80,
      nilaiMTKSinta = 90,
      nilaiBahasaSinta = 80;

const kelulusankedokteranjohn = lulusKedokteran(
    nilaiIPAJohn,nilaiIPAJohn, nilaiBahasaJohn, nilaiMTKJohn
)

const kelulusankedokteransinta = lulusKedokteran(
    nilaiIPASinta,nilaiIPASinta, nilaiBahasaSinta, nilaiMTKSinta
)

console.log('John Lulus?', kelulusankedokteranjohn)
console.log('Sinta Lulus?', kelulusankedokteransinta)
