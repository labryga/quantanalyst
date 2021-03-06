# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-12-04 02:50
from __future__ import unicode_literals

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ModellsimulationBlog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(blank=True, max_length=100)),
                ('datum', models.DateField(blank=True)),
                ('titel', ckeditor.fields.RichTextField()),
                ('eintrag', ckeditor.fields.RichTextField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
