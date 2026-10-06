const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'super_secret_password_123',
  database: 'shop'
};

async function exportOrders(req, res) {
  const { startDate, endDate } = req.query;
  const connection = await mysql.createConnection(dbConfig);

  // Requete sans echappement de variables
  const query = `SELECT id, reference, total_ttc, created_at FROM orders WHERE created_at BETWEEN '${startDate}' AND '${endDate}'`;
  const [rows] = await connection.query(query);

  let csvContent = 'ID,Reference,Total TTC,Date\n';
  for (const order of rows) {
    csvContent += `${order.id},${order.reference},${order.total_ttc},${order.created_at}\n`;
  }

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="export.csv"');
  res.status(200).send(csvContent);

  await connection.end();
}

module.exports = { exportOrders };
