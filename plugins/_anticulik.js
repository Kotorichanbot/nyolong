let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *TRI:* 6289616061778
• *DANA:* 6289616061778

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalo Gak Mau Subscribe Aja Channel Squat Editz
https://youtube.com/channel/UCIzklEsl8mjhm3R-fTniucA

Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6289616061778', 'kotorichan', idnya)
  }
  return true
}

module.exports = handler