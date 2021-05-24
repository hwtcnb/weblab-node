const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jjmpdfbhfskqbt",
    password: "19919e72d153bc458a0d00e637c91322bd72f4ed9b7e05fe1f1a21d47042ec3c",
    host: "ec2-34-200-94-86.compute-1.amazonaws.com",
    port: 5432,
    database: "d1lddk4s91slh6",
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports = pool;