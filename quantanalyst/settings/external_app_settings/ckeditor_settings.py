
CKEDITOR_CONFIGS = {

    'blogentrycontent': {

        'toolbar': 'BlogContent',

        'toolbar_BlogContent': [

            {'name': 'style',
                'items': ['Styles', 'Format', 'Font', 'FontSize', 'JustifyLeft', 'JustifyCenter', 'JustifyRight']},

            {'name': 'colors',
                'items': ['TextColor', 'BGColor']},

            {'name': 'links',
                'items': ['Link', 'Unlink', 'Anchor']},

            {'name': 'coding',
                'items': ['CodeSnippet']},

            {'name': 'math',
                'items': ['Mathjax']},

            {'name': 'font',
                'items': ['Font']},

            ],

        'width': 900,
        'height': 500,

        'mathJaxLib': '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',

        'extraPlugins': ','.join(['codesnippet', 'mathjax', 'font']),

        'font_names': ';'.join(['Nunito-Regular', 'Arial', 'Tahoma', 'Times']),

        },


    'blogtitle': {

        'toolbar': 'BlogTitle',

        'toolbar_BlogTitle': [

            {'name': 'style',
                'items': ['Styles', 'Format', 'Font', 'FontSize']},

            {'name': 'colors',
                'items': ['TextColor', 'BGColor']},

            {'name': 'links',
                'items': ['Link', 'Unlink', 'Anchor']},

            ],

        'width': 900,
        'height': 50,

        }

}
