const { index, store, destroy } = require('./controller');


const main = () => {

    store({ nama: 'GANJAR PRANOWO', umur: 55, alamat: 'JAWA TENGAH', email: 'GANJAR@GMAIL.com' });
    store({ nama: 'PUAN MAHARANI', umur: 51, alamat: 'JAKARTA', email: 'PUAN@GMAIL.com' });
    

    index();
    
    
    destroy();
};


main();
