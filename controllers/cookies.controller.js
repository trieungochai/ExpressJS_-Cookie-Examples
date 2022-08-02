const getCookies = async (req, res) => {
  // const cookies = req.headers.cookie;
  const cookies = req.cookies;
  return res.send(cookies);
};

const setCookies = async (req, res) => {
  // res.setHeader("set-cookie", "username=kimchicucai");
  res.cookie("username", "kimchicucai");
  return res.send("setCookies");
};

const deleteCookies = async (req, res) => {
  return res.send("deleteCookies");
};

module.exports = { getCookies, setCookies, deleteCookies };
