

CKEDITOR_CONFIGS = {

    'blogentrycontent': {

        'toolbar': 'BlogContent',

        'toolbar_BlogContent': [

            {'name': 'style',
                'items': ['Styles', 'Format', 'Font', 'FontSize']},

            {'name': 'colors',
                'items': ['TextColor', 'BGColor']},

            {'name': 'links',
                'items': ['Link', 'Unlink', 'Anchor']},

            {'name': 'coding',
                'items': ['CodeSnippet']},

            {'name': 'math',
                'items': ['Mathjax']},

            ],

        'width': 900,
        'height': 500,

        'mathJaxLib': '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',

        'extraPlugins': ','.join(['codesnippet', 'mathjax']),

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
