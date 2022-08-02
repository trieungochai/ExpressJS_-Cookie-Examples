const getCookies = async (req, res) => {
  return res.send("getCookies");
};

const setCookies = async (req, res) => {
  res.setHeader("set-cookie", "username=kimchicucai");
  return res.send("setCookies");
};

const deleteCookies = async (req, res) => {
  return res.send("deleteCookies");
};

module.exports = { getCookies, setCookies, deleteCookies };
