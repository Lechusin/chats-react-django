from django.apps import AppConfig
from django.conf import settings
import pika

class ChatConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'chat'

    def ready(self):
        # Establece la conexión con RabbitMQ
        connection = pika.BlockingConnection(pika.ConnectionParameters(
            host=settings.AMQP_SETTINGS['HOST'],
            port=settings.AMQP_SETTINGS['PORT'],
            virtual_host=settings.AMQP_SETTINGS['VHOST'],
            credentials=pika.credentials.PlainCredentials(
                settings.AMQP_SETTINGS['USER'],
                settings.AMQP_SETTINGS['PASSWORD']
            )
        ))

        # Crea un nuevo canal
        channel = connection.channel()

        # Declara una cola para recibir mensajes
        channel.queue_declare(queue='chat_messages')

        def callback(ch, method, properties, body):
            # Este es el callback que se ejecutará cuando se reciba un mensaje
            message = body.decode('utf-8')
            print("Mensaje recibido: %s" % message)

        # Registra el callback para recibir mensajes
        channel.basic_consume(
            queue='chat_messages',
            on_message_callback=callback,
            auto_ack=True
        )

        # Inicia la recepción de mensajes
        channel.start_consuming()
