jQuery(document).ready(function(a) {
    "use strict";
    a("a.page-scroll").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), b.preventDefault()
    }), a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), a(document).on("click", ".navbar-collapse.in", function(b) {
        a(b.target).is("a") && "dropdown-toggle" != a(b.target).attr("class") && a(this).collapse("hide")
    });
        a(".level-bar-inner").css("width", "0"), a(window).on("load", function() {
            a(".level-bar-inner").each(function() {
                var b = a(this).data("level");
                a(this).animate({
                    width: b
                }, 800)
            })
        }), a(".level-label").tooltip(), a(".collapse").on("shown.bs.collapse", function() {
            a(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus")
        }).on("hidden.bs.collapse", function() {
            a(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus")
        }), a(".material-button-toggle").click(function() {
            a(this).toggleClass("open"), a(".option").toggleClass("scale-on")
        });
        a(".score-text")
    });
});