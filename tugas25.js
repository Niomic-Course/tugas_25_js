function panggilData() {
    const angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log('Sebelumnya: ' + angka);

    // sort:
    let ascend = angka.sort();
    console.log('Ascending: ' + ascend);

    // reverse:
    let descend = angka.reverse();
    console.log('Descending: ' + descend);

    // filter:
    let filtering = angka.filter(function (data) {
        return data > 10;
    })
    console.log('Filter > 10: ' + filtering);
}

panggilData();