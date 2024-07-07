const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_58_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICA3NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklUWm9zVFJJVmdseUZTbE9rUkIrZXJNMGt6TWhSczlZaUJZTVI2S2ZSTDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkV0ckFOWXJ5VG5Tdm52NVZHSDA0c1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmIxNDIyMjItOTI0NC00NmNmLWJlYjEtN2UwOWY1MTJjYjU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDYsXG4gICAgICAxNTcsXG4gICAgICAxNzAsXG4gICAgICAxNyxcbiAgICAgIDE5OSxcbiAgICAgIDUzLFxuICAgICAgNDcsXG4gICAgICAxNzAsXG4gICAgICAxNjEsXG4gICAgICAxNzYsXG4gICAgICAyNDAsXG4gICAgICAyMzAsXG4gICAgICAxMjIsXG4gICAgICAxMjEsXG4gICAgICAyMjIsXG4gICAgICAxODAsXG4gICAgICAxNDcsXG4gICAgICAxMzksXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgNzAsXG4gICAgICAyMTQsXG4gICAgICA1NyxcbiAgICAgIDk3LFxuICAgICAgMjA1LFxuICAgICAgMTE5LFxuICAgICAgNjAsXG4gICAgICA0MixcbiAgICAgIDk0LFxuICAgICAgMTUxLFxuICAgICAgMTQzLFxuICAgICAgMjE3LFxuICAgICAgMjAyLFxuICAgICAgMTk5LFxuICAgICAgMTM0LFxuICAgICAgMzYsXG4gICAgICAxMTYsXG4gICAgICA1MixcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNHTldDOFFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTIwMDQ2MDA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNhcmZyYXpcIixcbiAgICBcImxpZFwiOiBcIjg1ODU2ODE1NzE0MzEwOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZlM0pjR0VJKzBwN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQWDh2Ykt6Z0tZZWd2NXBHRkpxZDJVSU9rVFBkcjE4VGZkRXY2bjZOcGlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNOaFZwQW1yblB1QzJPUzZNYkhxTnpHbEE0bVdFU0lwZG5uWXVyZ0ZkK1ZXb3lQMEMxMzl4TmZ2U2lPaEt1aGFENGVqczhDUUx0RThKblV6VmRQSUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRPNjR6ZVMxNW9qaWZqaFdmWm8zeVpDV05CbktVeUZYU29CSnQydGJVcVdGazAwcUFmYVVjK0kzYVpLQ0pGTkVZSC9TRG4wcWZHUUpibC91Nm5qNkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1MjAwNDYwMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzEwMjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnN3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDVmVINVlPaHRvT1M5eDRGY3hrU2tyQkVWNGVManFPZnRNNHdTMjlVR3VvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NjAzNTg0NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDMxMDI5ODgwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
