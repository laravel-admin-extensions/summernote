(function (window) {
    window.laravelAdminSummernoteImageUploader = function ($editor,file, uploadServer, uploadName) {
        var data = new FormData();
        data.append(uploadName || 'file', file);
        $.ajax({
            data: data,
            type: "POST",
            url: uploadServer,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            cache: false,
            contentType: false,
            processData: false,
            success: function (url) {
                $editor.summernote("insertImage", url);
            }
        });
    }
})(window);