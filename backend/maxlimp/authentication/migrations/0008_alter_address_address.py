# Generated by Django 5.1.1 on 2024-11-04 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0007_alter_address_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='address',
            field=models.CharField(max_length=500, unique=True),
        ),
    ]
