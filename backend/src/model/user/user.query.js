const userData = ({ dbs }) => {
  return Object.freeze({
    getAllUsers,
    addUser,
    getUserById,
    getUserByEmail,
    getUserByEmailForRegister,
    changePassword,
    deleteUserById,
    updateUser
  });

  async function getAllUsers() {
    const connect = await dbs();
    const sql =
      "SELECT * FROM police_course";
    return connect.query(sql);
  }

  async function addUser(user) {
    const connect = await dbs();
    const { name, place_birth, date_birth, address, city, province, subdistrict, password, email, packet_id , phone, username } = user;
    const sql = 
      "INSERT INTO public.\"User\" (\"name\", place_birth, date_birth, address, city, province, subdistrict, \"password\", email, packet_id, phone, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING user_id";
    
    const bcrypt = require('bcrypt');
    const saltRounds = 10; 
    let hashedPassword = await bcrypt.hash(password, saltRounds);

    const params = [name, place_birth, date_birth, address, city, province, subdistrict, hashedPassword, email, packet_id, phone, username ];

    return connect.query(sql, params); 
  }

  async function getUserById(id) {
    const connect = await dbs();
    const sql = `
      SELECT 
        u.*,
        pp.price,
        pp.current_quota,
        pp.date_purchase,
        pp.packet_id
      FROM public."User" u
      LEFT JOIN public.purchase_packets pp ON u.user_id = pp.user_id
      WHERE u.user_id = $1
    `;
  
    const params = [id];
    return connect.query(sql, params);
  }

  async function getUserByEmailForRegister(email) {
    const connect = await dbs();
    const sql = `
      SELECT 
        u.*,
        pp.price,
        pp.current_quota,
        pp.date_purchase,
        pp.packet_id,
        pp.last_update
      FROM public."User" u
      LEFT JOIN public.purchase_packets pp ON u.user_id = pp.user_id
      WHERE u.email = $1
    `;
  
    const params = [email];
    return connect.query(sql, params);
  }

  async function getUserByEmail(email) {
    const connect = await dbs();
    const sqlSelect = `
      SELECT 
        u.*,
        pp.price,
        pp.current_quota,
        pp.date_purchase,
        pp.packet_id,
        pp.last_update
      FROM public."User" u
      LEFT JOIN public.purchase_packets pp ON u.user_id = pp.user_id
      WHERE u.email = $1
    `;
    const params = [email];
    const result = await connect.query(sqlSelect, params);
    const user = result.rows[0];

    if (user) {
        const lastUpdate = user.last_update;
        const now = new Date();
        
        const lastUpdateDate = new Date(lastUpdate);

        if (now.getDate() > lastUpdateDate.getDate() && now.getDay() !== lastUpdateDate.getDay()) {
             try {
              const getCurrentPacket = `
                SELECT quota_per_day 
                FROM public.packetcourse
                WHERE packet_id = $1;`;
              const quotaParam = [user.packet_id];
              const resultQuota = await connect.query(getCurrentPacket, quotaParam);
              const quota = resultQuota.rows[0];

              const sqlUpdate = `
                  UPDATE public.purchase_packets 
                  SET current_quota = 15 
                  WHERE user_id = $1
                  RETURNING *;
              `;
              const updateParam = [user.user_id];
              await connect.query(sqlUpdate, updateParam);

              user.current_quota = quota.quota_per_day ?? -1;
            } catch(e) {
              user.current_quota = -1;
            }
        }
    }
    return user;
}


  async function updateUser(user) {
    const connect = await dbs();
    const { user_id, name, place_birth, date_birth, address, city, province, subdistrict, email, packet_id , phone, username } = user;  
    const sql = "UPDATE public.\"User\" SET \"name\" = $1, place_birth = $2, date_birth = $3 , address = $4, city = $5, province = $6 , subdistrict = $7 , email = $8 , packet_id = $9, phone = $10 , username = $11 WHERE email = $12 RETURNING user_id";

    const params = [name, place_birth, date_birth, address, city, province, subdistrict, email, packet_id, phone , username, email];
    return connect.query(sql, params);
  }

  async function changePassword(email, newPwd) {
    console.log(email);
    const connect = await dbs();
    const sql = "UPDATE public.\"User\" SET password = $1 WHERE email = $2";

    const bcrypt = require('bcrypt');
    const saltRounds = 10; 
    let hashedPassword = await bcrypt.hash(newPwd, saltRounds);
  
    const params = [hashedPassword, email];
    return connect.query(sql, params);
  }

  async function deleteUserById(id) {
    const connect = await dbs();
    const sql = "DELETE FROM public.\"User\" WHERE user_id = $1";
  
    const params = [id];
    return connect.query(sql, params);
  }

};

module.exports = userData;
