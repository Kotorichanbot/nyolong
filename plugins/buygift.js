let handler = async m => m.reply(`
╭─「 BUY GIFT CODE 」
│ 
│ > Keterangan :
│• Fitur Gift adalah fitur kode yang berisi
│hadiah! Anda bisa mendapatkan exp & limit
│sepuasnya! Hingga masa berlaku kodegiftnya habis!
│
│ > Harga :
│• 10K / Minggu (7 Hari)
│• 25K / Bulan (4 Minggu)
│• 200K / Setahun (Permanen)
│
│ > Pembayaran :
│• Pulsa (XL) :
│+6289616061778
│• Dana
│ +629616061778
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['hadiah']
handler.command = /^(buygift)$/i

module.exports = handler
