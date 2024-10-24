const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=2yxzFbIQ#NSKdXspx8khp-bBfSs-BkZa6hJQzpoGHb49BO4t82kA",
MONGODB: process.env.MONGODB || "mongodb+srv://brosura01:VVawIe1x450BJrUv@cluster0.39ggn.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
