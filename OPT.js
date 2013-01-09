$(document).ready(function () {
    var n = $("div").length;
    n = n / 3;
    if (n != 1) {
        for (var i = 2; i <= n; i++) {
            var page = "Page" + i;
            page = "#" + page;
            page = page.toString();
            $(page).hide();
        }
    }
    else {
        $("#Previous").attr("disabled", true);
        $("#Next").attr("disabled", true);
//        $("#Previous").hide();
//        $("#Next").hide();
    }
    $("#Previous").click(function () {
        for (var i = 2; i <= n; i++) {
            var page = "Page" + i;
            page = "#" + page;
            page = page.toString();
            if ($(page).css('display') == 'none') {
                continue;
            }
            else {
                $(page).hide();
                var pagePr = "Page" + (i - 1);
                pagePr = "#" + pagePr;
                pagePr = pagePr.toString();
                $(pagePr).show();
                return;
            }
        }
    });
    $("#Next").click(function () {
        if (n != 1) {
            for (var i = 1; i < n; i++) {

                var page = "Page" + i;
                page = "#" + page;
                page = page.toString();
                if ($(page).css('display') == 'none') {
                    continue;
                }
                else {
                    $(page).hide();
                    var pagePr = "Page" + (i + 1);
                    pagePr = "#" + pagePr;
                    pagePr = pagePr.toString();
                    $(pagePr).show();
                    return;
                }
            }
        }

    });
});