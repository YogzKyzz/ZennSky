import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓𝐙 』*', `ʜᴀʟᴏ!, ᴀssᴀʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ sᴇᴍᴜᴀ😁. ᴋᴇɴᴀʟɪɴ ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴅɪ ʙᴇʀɪ ɴᴀᴍᴀ ᴢᴇɴɴsᴋʏ-ʙᴏᴛᴢ ᴏʟᴇʜ ᴏᴡɴᴇʀᴋᴜ<𝟹,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/KNkpoT4oX5yFA18GlPttgl', 'ɢʀᴜᴘ ʙᴏᴛᴢ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nGua sebenernya kang coly guys🤫🤭`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
