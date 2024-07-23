const md5 = require('md5');

const generateHash = async (req, res) => {
  const { merchant_id, order_id, amount, currency, merchant_secret } = req.body;

  if (!merchant_id || !order_id || !amount || !currency || !merchant_secret) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const formattedAmount = Number(amount).toFixed(2);

  const hash = md5(
    merchant_id +
    order_id +
    formattedAmount +
    currency +
    md5(merchant_secret).toUpperCase()
  ).toUpperCase();

  res.json({ hash });
  
};

module.exports = {
  generateHash,
};
