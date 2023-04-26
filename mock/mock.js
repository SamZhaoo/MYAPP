import mockjs from 'mockjs';
export default {
  'POST /umi/list': (req, res) => {
    console.log(req.body);
    res.send(
      mockjs.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body, a: 2 },
            msg: '成功',
          },
          {
            code: 1,
            msg: '失败',
          },
        ],
      }).data,
    );
  },
  'GET /api/list': (req, res) => {
    res.send(
      mockjs.mock({
        success: true,
        'data|10': [
          {
            id: '@id',
            title: '@name',
            description: '@cparagraph(2)',
          },
        ],
      }),
    );
  },
};
