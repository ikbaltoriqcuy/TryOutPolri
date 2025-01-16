const payment = ({ dbs }) => {
    return Object.freeze({
      getAllPaymentPacket,
      insertPurchasePackage,
      getPurchasePackage,
      updatePackageQuota,
    });
  
    async function getAllPaymentPacket() {
      const connect = await dbs();
      const sqlExercises = "SELECT * FROM public.packetcourse";
      const packetcourse = await connect.query(sqlExercises);
      return packetcourse;
    }

    async function insertPurchasePackage(package) {
      const connect = await dbs();
      
      const checkUserSql = `SELECT * FROM public.purchase_packets WHERE user_id = $1`;
      const checkUserParams = [package.user_id];
      const userResult = await connect.query(checkUserSql, checkUserParams);
    
      if (userResult.rows.length > 0) {
        const updateSql = `
          UPDATE public.purchase_packets
          SET 
            price = $2,
            current_quota = $3,
            packet_id = $4,
            transactionid = $5,
            last_update = NOW()
            WHERE user_id = $1
        `;
        const updateParams = [
          package.user_id,
          package.price,
          package.current_quota,
          package.packet_id,
          package.transaction_id
        ];
        return connect.query(updateSql, updateParams);
      } else {
        // If user_id does not exist, insert a new record
        const insertSql = `
          INSERT INTO public.purchase_packets (user_id, price, current_quota, packet_id) 
          VALUES ($1, $2, $3, $4)
        `;
        const insertParams = [
          package.user_id,
          package.price,
          package.current_quota,
          package.packet_id,
        ];
        return connect.query(insertSql, insertParams);
      }
    }

    async function updatePackageQuota(data) {
      const connect = await dbs();
      const updateSql = `
        UPDATE public.purchase_packets
        SET 
          current_quota = $2,
          date_purchase = NOW()
        WHERE user_id = $1
      `;
      const updateParams = [
        data.user_id,
        data.current_quota,
      ];
      return connect.query(updateSql, updateParams);
    }

    async function getPurchasePackage(userId) {
      const connect = await dbs();
      const sqlExercises = `SELECT * public.purchase_packets WHERE user_id = $1`;
      return connect.query(sqlExercises, userId);
    }
  
  };
  
  module.exports = payment;
  