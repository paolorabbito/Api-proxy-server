const needle = require('needle');

const baseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_KEY_VALUE;

exports.getMovie = async (req, res) => {
    let movie = req.query.t;
    console.log(movie)
    const apiRes =  await needle('get', `${baseUrl}?apikey=${apiKey}&t=${movie}`)
    const data = apiRes.body;
    res.status(200).json(data);
}