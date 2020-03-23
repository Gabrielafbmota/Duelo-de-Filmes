import { index, store, update, remove } from './controller';

export default [
  {
    method: 'get',
    path: '/macaddress',
    action: index
  },
  {
    method: 'post',
    path: '/macaddress',
    action: store
  },
  {
    method: 'update',
    path: '/macaddress/:id',
    action: update
  },
  {
    method: 'delete',
    path: '/macaddress/:id',
    action: remove
  }
];
