import { delay } from 'roadhog-api-doc'; // 模拟延时
export default delay(
  {
    'GET /umi/goods': {
      a: 1,
      b: 2,
    },
    'POST /umi/add': (req, res) => {
      res.end('ok');
    },
    'POST /umi/create': (req, res) => {
      console.log(req.body);
      res.send({
        err: req.body.name,
        msg: 'success',
      });
    },
  },
  2000,
);
