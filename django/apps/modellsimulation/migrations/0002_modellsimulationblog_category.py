# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2018-12-20 22:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modellsimulation', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='modellsimulationblog',
            name='category',
            field=models.SlugField(default='modellsimulation', max_length=100),
        ),
    ]
