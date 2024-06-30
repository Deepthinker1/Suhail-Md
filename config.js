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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ *༈֎Ă̈wais Ĭ̈qbal⭐⃟❀❥︎* ㋛︎" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923189492995";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_21_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicCtwVmVLQ2dzMDZ0V3Q5WXlvSmxhV1FZSTFEcmc0S292S0c4Und3MWF5az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUFhNY3dDMURTUFdCWVplUUVmVFJyUVwiLFxuICBcInBob25lSWRcIjogXCI5M2U1MGIyOS05NzZiLTQyMmYtODBkOC1lYjVhMTMwOGQxZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgNDgsXG4gICAgICAzMSxcbiAgICAgIDkzLFxuICAgICAgNzgsXG4gICAgICA5NSxcbiAgICAgIDQwLFxuICAgICAgMTg0LFxuICAgICAgNjMsXG4gICAgICAxNDYsXG4gICAgICAxMTksXG4gICAgICAyNDAsXG4gICAgICAxMDUsXG4gICAgICAxMzgsXG4gICAgICA0NyxcbiAgICAgIDIzMSxcbiAgICAgIDE3NCxcbiAgICAgIDEyLFxuICAgICAgMyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAxMTIsXG4gICAgICAyMTgsXG4gICAgICAxNDcsXG4gICAgICAxMTcsXG4gICAgICA5OSxcbiAgICAgIDI0NCxcbiAgICAgIDE2OCxcbiAgICAgIDQwLFxuICAgICAgMTc3LFxuICAgICAgMjIsXG4gICAgICAxOTgsXG4gICAgICA0NyxcbiAgICAgIDIyNyxcbiAgICAgIDE4NyxcbiAgICAgIDI2LFxuICAgICAgNjEsXG4gICAgICAyMTEsXG4gICAgICA3NixcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaOUQyQkFTOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg5NDkyOTk1OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk4MDgzODExODIxNTA6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0x0L004R0VOdTNoYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzejkvSlpEV2VUMGFRTXhaWlVDeGROYzkzTGhJYmlvdkRoRzZGNFpTdGdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjY5TndHWDljb0RIazMvaG01U1RPTXBMSXVnSWIrR0tJVXNMV0lEUFl2cjN3VFRyelZ1Yk93bW9sY29GUXpXdGdRZkoxeVF3R3NmQVFSY0lGRTQwZ0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImR5aGtlOG1RelExSVByQlN1YlZUSzVGcjA3a1hTbnFwQjlNaE9oNnJMSkFmd2o4T0RXUldoV0V2YlZoSUJqR09PclFQRnJiTVUrWXo3L2lVWE5mK0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4OTQ5Mjk5NTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NTM2OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBYU1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFhTS5qc29uIjogIntcImtleURhdGFcIjpcImVyZjlOQm9obkI2TmlZUzVVaU45bUhTQ2NMM1VzUXlLdmVLVkpmYlBqWDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3ODMzMzQxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzUzNjk4ODkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𓆩Awais࿐",
  packname: process.env.PACK_NAME || "Awais-md",
  botname : process.env.BOT_NAME  || "𓆩Awais-md࿐",
  ownername:process.env.OWNER_NAME|| "Awais",


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
