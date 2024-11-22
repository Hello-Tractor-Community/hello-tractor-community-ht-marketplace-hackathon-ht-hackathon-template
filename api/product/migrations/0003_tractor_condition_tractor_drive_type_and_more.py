# Generated by Django 5.1.3 on 2024-11-22 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_tractor_features_alter_tractor_specifications'),
    ]

    operations = [
        migrations.AddField(
            model_name='tractor',
            name='condition',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='drive_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='engine_size',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='fuel_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='milleage',
            field=models.PositiveIntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='offer_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='transmission',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tractor',
            name='vin',
            field=models.CharField(default=1232, max_length=50),
            preserve_default=False,
        ),
    ]
