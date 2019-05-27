
CKEDITOR_CONFIGS = {

    'blogentrycontent': {

        'toolbar': 'BlogContent',

        'toolbar_BlogContent': [

            {'name': 'basicstyles', 
                'items': [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 
                'Superscript', '-', 'CopyFormatting', 'RemoveFormat', 
                'Format', 'Font', 'FontSize', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock',
                'TextColor', 'BGColor',
                ] },

            {'name': 'colors',
                'items': ['Preview', 'Indent', 'Outdent', 'Blockquote', 'Table']},

            {'name': 'links',
                'items': ['Link', 'Unlink', 'Anchor', 'CodeSnippet', 'Mathjax']},


            ],

        'width': 1000,
        'height': 500,

        'mathJaxLib': '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',

        'extraPlugins': ','.join(['codesnippet', 'mathjax']),

        'font_names': ';'.join(['Nunito-Regular', 'Arial', 'Tahoma', 'Times']),

        'language': 'de',

        },


    'blogtitle': {

        'toolbar': 'BlogTitle',

        'toolbar_BlogTitle': [

            {'name': 'basicstyles', 
                'items': [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 
                'Superscript', '-', 'CopyFormatting', 'RemoveFormat', 
                'Format', 'Font', 'FontSize', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock',
                'TextColor', 'BGColor',
                ] },

            ],

        'font_names': ';'.join(['Nunito-Regular', 'Arial', 'Tahoma', 'Times']),

        'width': 1000,
        'height': 50,

        }

}
