const getCookies = async (req, res) => {
  return res.send("getCookies");
};

const setCookies = async (req, res) => {
  return res.send("setCookies");
};

const deleteCookies = async (req, res) => {
  return res.send("deleteCookies");
};

module.exports = { getCookies, setCookies, deleteCookies };
