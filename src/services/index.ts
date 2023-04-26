import request from '@/utils/request';

export async function queryCard(): Promise<any> {
  return request('/umi/goods');
}

export async function addCard(params: any): Promise<any> {
  return request('/umi/add', {
    method: 'POST',
    data: params,
  });
}

export async function createCard(params: any): Promise<any> {
  return request('/umi/create', {
    method: 'POST',
    data: params,
  });
}

export async function postListApi(params: any): Promise<any> {
  return request('/umi/list', {
    method: 'POST',
    data: params,
  });
}
export async function getListApi(params: any): Promise<any> {
  return request('/api/list', {
    method: 'GET',
    data: params,
  });
}
