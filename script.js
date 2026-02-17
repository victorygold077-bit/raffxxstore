// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Tombol order dengan pilihan WhatsApp
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
        const pilihan = prompt(
            'Pilih nomor WhatsApp:\n\n' +
            '1 - Owner (0857 8281 8816)\n' +
            '2 - Admin 1 (0817 7548 9578)\n' +
            '3 - Admin 2 (0877 1939 8553)\n' +
            '4 - Admin 3 (0838 4120 1992)\n\n' +
            'Ketik angka 1, 2, 3, atau 4:'
        );
        
        const whatsappNumbers = {
            '1': '6285782818816',
            '2': '6281775489578',
            '3': '6287719398553',
            '4': '6283841201992'
        };
        
        if (whatsappNumbers[pilihan]) {
            window.open(
                `https://wa.me/${whatsappNumbers[pilihan]}?text=Halo%20Raffxx%20Store,%20saya%20mau%20order%20akun%20game`,
                '_blank'
            );
        } else if (pilihan !== null) {
            alert('Pilihan tidak valid. Silakan pilih angka 1, 2, 3, atau 4.');
        }
    });
});

console.log('Raffxx Store siap!');
