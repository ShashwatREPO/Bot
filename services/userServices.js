const { default: axios } = require("axios");

module.exports = async function getGoogleToken(code) {
  const url = "https://sts.googleapis.com/v1/token";

  const values = {
    code,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.OAUTH_REDIRECT_URL
  };

  try {
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "Application/x-www-form-urlencoded"
      }
    });

    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
