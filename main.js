import { app } from '@azure/functions';

app.serviceBusQueue('queueConsumer', {
    connection: 'ServiceBusConnection',
    queueName: '01J2EF7KK8WQTJSNXXVPQ4TVG1',
    handler: (message, context) => {
        context.log('Service bus queue function processed message:', message);
        context.log('EnqueuedTimeUtc =', context.triggerMetadata.enqueuedTimeUtc);
        context.log('DeliveryCount =', context.triggerMetadata.deliveryCount);
        context.log('MessageId =', context.triggerMetadata.messageId);
    },
});
