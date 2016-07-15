from django.contrib.auth.models import User, Group
from rest_framework import serializers

from quizzical.models import Question, Choice, Category


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ('id', 'choice_text', 'votes')


class QuestionSerializer(serializers.ModelSerializer):
    choice_set = ChoiceSerializer(many=True ,read_only=True)
    class Meta:
        model = Question
        fields = ('id', 'question_text', 'category', 'choice_set')


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'category_text', 'slug')
