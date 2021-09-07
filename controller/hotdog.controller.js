const db = require("../db");

class HotDogController {
  async createHotDog(req, res) {
    const { name, title, description, image } = req.body;
    const newHotDog = await db.query(
      `INSERT INTO hot_dog(name, title, description, image) values ($1, $2, $3, $4) RETURNING *`,
      [name, title, description, image]
    );
    res.json(newHotDog.rows[0]);
  }
  async getHotDogs(req, res) {
    const hotDogs = await db.query(`select * from hot_dog`);
    res.json(hotDogs.rows);
  }
  async getOneHotDog(req, res) {
    const id = req.params.id;
    const hotDog = await db.query(`select * from hot_dog where id = $1`, [id]);
    res.json(hotDog.rows);
  }
  async updateHotDog(req, res) {
    const { id, name, title, description, image } = req.body;
    const updateHotDog = await db.query(
      `UPDATE hot_dog set name = $1, title = $2, description = $3, image = $4 where id = $5 RETURNING *`,
      [name, title, description, image, id]
    );
    res.json(updateHotDog.rows[0]);
  }
  async deleteHotDog(req, res) {
    const id = req.params.id;
    const deleteHotDog = await db.query(`DELETE from hot_dog where id = $1`, [
      id,
    ]);
    res.json(deleteHotDog.rows);
  }
}

module.exports = new HotDogController();
