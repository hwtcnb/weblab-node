const { rawListeners } = require("../model/db");
const pool = require("../model/db");

class UserController{
    async getAllUsers(req, res){
        try {
            let users = await pool.query(
                "SELECT * FROM users"
            )
            users = users.rows;
            res.json(users);
        } catch (error) {
            console.error(error.message)
        }
    }

    async createUser(request, response){
        try {
            if(!request.body) return response.sendStatus(400);
            let {name, surname, email, password, sex, year} = request.body;
            if (!sex) {
                sex = "no choose";
            }
            const newUser = await pool.query(
                "INSERT INTO users (name, surname, email, password, sex, year) VALUES($1, $2, $3, $4, $5, $6)",
                [name, surname, email, password, sex, year]
            )
            response.json(request.body);

        } catch (error) {
            console.error(error.message)
        }
    }

    async getUserById(req, res){
        try {
            const { id } = req.params;
            const user = await pool.query(
                "SELECT * FROM users WHERE user_id = $1",
                [id]
            )
            
            if (user.rows[0]) {
                res.json(user.rows[0]);
            }
            else res.send('User not found!')
        } catch (error) {
            console.error(error.message)
        }
    }

    async deleteUserById(req, res){
        try {
            const { id } = req.params;
            const deletedUser = await pool.query(
                "DELETE FROM users WHERE user_id = $1",
                [id]
            )
        
            res.sendStatus(200);
        } catch (error) {
            console.error(error.message)
        }
    }

    async updateUserById(req, res){
        try {
            const { id, column, edit } = req.params;
            const updatedUser = await pool.query(
                `UPDATE users
                SET ${column} = $1
                WHERE user_id = $2`, [edit, id]
                )
            if (updatedUser.rowCount === 1) {
                res.sendStatus(200)
            }
            else res.send('User not found!')
        } catch (error) {
            console.error(error.message)
        }
    }

    async getTen(req, res){
        try {
            const users = await pool.query(
                "SELECT * FROM users WHERE user_id > 0 LIMIT 10"
            )
            res.json(users.rows)
        } catch (error) {
            console.error(error.message)
        }
    }

    async getSome(req, res){
        const { count } = req.params
         try {
            const users = await pool.query(
                "SELECT * FROM users WHERE user_id > 0 LIMIT $1", [count]
            )
            res.json(users.rows)
        } catch (error) {
            console.error(error.message)
        }
    }

    async getCounter(req, res){
        try {
            const counter = await pool.query(
                "SELECT COUNT(*) as count FROM users"
            )
            res.json(counter.rows[0].count)
        } catch (error) {
            console.error(error.message)
        }
    }
}

module.exports = new UserController;