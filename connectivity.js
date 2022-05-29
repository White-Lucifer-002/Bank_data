const {Client} = require('pg')

const client = new Client({
 connectionString: "postgres://jefukwjslupkol:4afa76acd966fe363d680415f01a443d8daa7ce385fabd8b3e664a7be2d2f44f@ec2-52-3-2-245.compute-1.amazonaws.com:5432/d6ph5gatm5ao6g",
 ssl: {
 rejectUnauthorized: false
 }
});

module.exports = client