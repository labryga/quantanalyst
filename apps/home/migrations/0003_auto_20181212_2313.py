# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2018-12-12 23:13
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_homemenuitems'),
    ]

    operations = [
        migrations.RenameField(
            model_name='homemenuitems',
            old_name='avtive',
            new_name='active',
        ),
    ]
