const users = require('./data');


const index = () => {
    console.log("Daftar Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log("Pengguna baru berhasil ditambahkan.");
};


const destroy = () => {
    const deletedUser = users.pop();
    if (deletedUser) {
        console.log(`Pengguna ${deletedUser.nama} berhasil dihapus.`);
    } else {
        console.log("Tidak ada pengguna yang bisa dihapus.");
    }
};

module.exports = { index, store, destroy };
