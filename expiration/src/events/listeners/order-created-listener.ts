import { Listener, Subjects, OrderCreatedEvent } from '@nerojz86/common';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import { expirationQueue } from '../../queue/expiration-queue';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName: string = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log(`Wating this ${delay} msec to process the job`);

    await expirationQueue.add(
      {
        orderId: data.id
      },
      {
        delay: delay
      }
    );

    msg.ack();
  }
}