var type_key = "";
var type_code = "";

$(function () {

    $("#screen_body").keydown(function (e) {

        type_code = type_code + " " + e.keyCode;
        type_code = type_code.trim();
        if (e.keyCode == 13) {
            // Enter
            type_key = type_key + "\n";

        } else if (e.keyCode == 27) {
            // Esc
            view_clear();
        } else {

            type_key = type_key + e.key;
        }
        $('#view_area').val(type_key);
        $('#view_code').val(type_code);
        $('#div_view').text(type_key);
    });

    $('#btn_clear').on("click", function () {
        view_clear();
    });
});

function view_clear() {
    type_key = "";
    type_code = "";
    $('#view_area').val("");
    $('#view_code').val("");
    $('#div_view').text("");
}