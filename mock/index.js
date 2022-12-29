export default {
  'GET /umi/goods': {
    a: 1,
    b: 2,
  },
  'POST /umi/add': (req, res) => {
    console.log(req);
    res.end('ok');
  },
};
