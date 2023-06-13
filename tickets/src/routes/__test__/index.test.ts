import request from 'supertest';
import { app } from '../../app';

const createTicke = (title: string) => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title,
      price: 20
    });
};

it('can fetch a list of tickets', async () => {
  await createTicke('Title 1');
  await createTicke('Title 2');
  await createTicke('Title 3');

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

  expect(response.body.length).toEqual(3);

});

// it('', async () => { });
