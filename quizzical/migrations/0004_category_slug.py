# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-14 14:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizzical', '0003_question_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
