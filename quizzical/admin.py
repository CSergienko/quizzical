from django.contrib import admin

from .models import Question, Choice, Category


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['question_text', 'category']}),
        ('Date information', {'fields': ['pub_date']})
    ]
    inlines = [ChoiceInline]
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['question_text']

class CategoryAdmin(admin.ModelAdmin):
    model = Category
    extra = 3

class ChoiceAdmin(admin.ModelAdmin):
    model = Choice
    extra = 3

admin.site.register(Question, QuestionAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Choice, ChoiceAdmin)
