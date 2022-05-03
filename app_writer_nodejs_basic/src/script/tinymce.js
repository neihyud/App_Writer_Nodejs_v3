tinymce.init({
    selector: '#myTextarea',
    menubar: false,
    toolbar:  'undo redo | bold italic underline strikethrough backcolor' +
        ' fontselect formatselect fontsizeselect | alignleft aligncenter |' + 
    'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_style: "body { font-family: Arial; font-size: 12pt;}",
    plugins: 'autoresize',
    autoresize_on_init: false,
  /*   min_height: "100", */
});