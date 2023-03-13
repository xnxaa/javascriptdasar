function greeting(name) {
    console.log('halo vivi', name)
}

// void = procedure
const nama = greeting('vivi')
console.log(nama)

function lulus (
    nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
        const lulusKedokteran = nilaiIPA > 70 &&
        nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;

        console.log('Lulus Kedokteran', lulusKedokteran)
}

lulus (80,60,70,80);
lulus (80,90,90,90);


// jika dua nilai berbeda

function lulusKedokteran (
    nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
        const lulusKedokteran = nilaiIPA > 70 &&
        nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;

        console.log('Lulus Kedokteran', lulusKedokteran)
}

lulusKedokteran (80,60,70,80);
lulusKedokteran (80,90,90,90);

function lulusInformatika (
    nilaiIPA, nilaiMTK, nilaiBahasa) {
        const lulusInformatika = nilaiIPA > 70 && nilaiMTK > 70 && nilaiBahasa > 70;

        console.log('Lulus Informatika', lulusInformatika)
}

lulusInformatika (80,80,80);
lulusInformatika (80,90,90);