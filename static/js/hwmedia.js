$(document).ready(function () {
    $(".hm-navbar-nav li > ul > li > a").on("click", function (e) {
        location.href = "/sports/"
    })
    $(".hm-card").on("click", function (e) {
        e.preventDefault();
        location.href = "/content/"
    });
    $(".hm-card .fas.fa-play").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        location.href = "/content/?video=true"
    });

    $('[data-toggle="tooltip"]').tooltip({ 
        animated: 'fade',
        html: true 
    })
    HWMedia.api.translation(window.lang, function(data) {
        $("[i18n]").each(function() {
            $(this).html(T($(this).html()))
        })
    }, function(){
        $("[i18n]").each(function() {
            $(this).html(T($(this).html()))
        })
    });

    $(".hm-sidebar-overlay").on("click", function(e){
        $(".hm-sidebar").addClass("d-none");
        $(".hamburger").removeClass("is-active");
    });
    

    $(".hamburger_desk").click(function(e){
        $(this).toggleClass("is-active");
        if($(this).hasClass("is-active"))
        {
            $(".hm-sidebar").removeClass("d-none");
        }
        else{
            $("#menuToggle").addClass("opened_menu");
            $(".hm-sidebar").addClass("d-none");
        }
    });

    $(".hamburger_mob").click(function(e){
        $(this).toggleClass("is-active");
    });

    $('input').blur(function() {
        $(this).removeClass("full");
        if ($(this).val() != "") {
            $(this).addClass("full");
        }
     });

    $("#region_list .dropdown").on("click", function(e) {
        e.preventDefault()
        var _this = $(this)
        var id_sport = _this.data("id")
        HWMedia.api.championships_by_sport(1, function(data) {
            
            for(var i=0; i<data.data.length; i++){
                var d = data.data[i]
                $("#region_list .list-unstyled").append(`
                <li class="dropdown-item" data-id=`+d.id_championship+`>
                    <p class="regular">`+d.description+`</p>
                </li>`)
                
            }
        })
    })

    $(".open_explore").on("click", function (e) {
        $(".hm-block-explore").removeClass("d-none");
    });
    $(".close_explore").on("click", function (e) {
        $(".hm-block-explore").addClass("d-none");
        $(".hm-sidebar").addClass("d-none");
    });

    $(".open_filter_explore").on("click", function (e) {
        $(".hm-filter-explore").removeClass("d-none");
    });
    $(".close_filter").on("click", function (e) {
        $(".hm-filter-full-page").addClass("d-none");
    });

    $(".open_user_menu").on("click", function (e) {
        $(".hm-user-menu").removeClass("d-none");
    });
    $(".close_user_menu").on("click", function (e) {
        $(".hm-user-menu").addClass("d-none");
    });
    $("body").on("click", ".toggle-password", function(e) {
        e.preventDefault();
        var _this = $(this)
        var input = _this.parent().find("input");
        var attr = input.attr("type");
        if (attr == 'password'){
            input.attr("type", "text");
        }else{
            input.attr("type", "password");
        }
        _this.toggleClass("far fa-eye")
        _this.toggleClass("far fa-eye-slash")
    });

    $(".clearable").each(function () {
        var $inp = $(this).find("input:text"),
            $cle = $(this).find(".clearable__clear"),
            $search = $(this).find(".fa-svg-search"),
            $arrow = $(this).find(".fa-svg-arrow-left")
            ;

        if ($inp.val().length > 0) {
            $cle.css("display", "inline");
            $search.css("display", "none");
            $arrow.css("display", "inline");
        } else {
            $cle.css("display", "none");
            $search.css("display", "inline");
            $arrow.css("display", "none");
        }

        $inp.on("input", function () {
            $cle.css("display", "inline");
            if ($inp.val().length > 0) {
                $cle.css("display", "inline");
                $search.css("display", "none");
                $arrow.css("display", "inline");
            } else {
                $cle.css("display", "none");
                $search.css("display", "inline");
                $arrow.css("display", "none");
            }
        });

        $cle.on("touchstart click", function (e) {
            e.preventDefault();
            $inp.val("").trigger("input");
        });

    });
});


function showMessage(icon, title, description, button) {
    $("#message_modal .message_icon").addClass(icon);
    $("#message_modal .message_title").html(title);
    $("#message_modal .message_description").html(description);
    $("#message_modal .message_button").html(button);
    $("#message_modal").modal("show");
    $("#message_modal").on("hide.bs.modal", function (e) {
        $("#message_modal .message_icon").removeClass(icon)
        $("#message_modal .message_title").html("")
        $("#message_modal .message_description").html("")
        $("#message_button .message_button").html("")
    });
}
function choose(icon, title, description, button1, button2) {
    $("#choose_modal .choose_icon").addClass(icon);
    $("#choose_modal .choose_title").html(title);
    $("#choose_modal .choose_description").html(description);
    $("#choose_modal .choose_button1").html(button1);
    $("#choose_modal .choose_button2").html(button2);
    $("#choose_modal").modal("show");
    $("#choose_modal").on("hide.bs.modal", function (e) {
        $("#choose_modal .choose_icon").removeClass(icon)
        $("#choose_modal .choose_title").html("")
        $("#choose_modal .choose_description").html("")
        $("#choose_button1 .choose_button1").html("")
        $("#choose_button2 .choose_button2").html("")
    });
}
function videoModification() {
    $("#video_modification_modal").modal("show");
    $("#video_modification_modal").on("hide.bs.modal", function (e) {
    });
}
function showConfirmationModal() {
    $("#confirmation_modal").modal("show");
}
function showError(title, description) {
    showMessage('fa-times-circle red', title, description, T("$t(OK)"));
}
function showSuccess(title, description) {
    showMessage('fa-check-circle green', title, description, T("$t(OK)"));
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function loadCalendar(data, $container) {
    $container.empty();
    if (data.length == 0) {
        $container.append('<h6 i18n="" class="semibold white text-center" id="no-match">' + T("$t(NO MATCH FOR SELECTED DATA)") + '</h6>');
    }

    $.each(data, function (k, v) {
        if (k == 0) {
            $container.append('<div class="ft-section-calendar-day"></div>');
            //$container.find(".ft-section-calendar-day:last-child").append('<p class="p1 gray3 medium">'+moment(v.dateTime).format("DD MMMM")+'</p>');
        } else {
            if (moment(data[k - 1].dateTime).format("DD MMMM") != moment(v.dateTime).format("DD MMMM")) {
                $container.append('<div class="ft-section-calendar-day"></div>');
                //$container.find(".ft-section-calendar-day:last-child").append('<p class="p1 gray3 medium">'+moment(v.dateTime).format("DD MMMM")+'</p>');
            }
        }
        var timeZone = moment.tz.guess();
        var team_home_name = v.local_name;
        var team_away_name = v.visitor_name;
        var team_home_logo = v.local_logo;
        var team_away_logo = v.visitor_logo;
        var startDate = moment.tz(v.dateTime, timeZone).toDate();
        var center = "";
        var play = "";
        var play_url = false;
        var badge = "";
        var live = false;

        if (moment(v.dateTime) > moment()) {
            if (v.emit == "yes") {
                badge = "play";
            }
            center = moment(startDate).format("HH:mm")
        }

        if (moment(v.dateTime) < moment()) {
            if (v.emit == "yes") {
                play = "play";
                play_url = true;
            }
            center = v.local_goals + ' - ' + v.visitor_goals;
        }

        if (v.status == "live") {
            live = true;
            play = "";
            play_url = true;
            badge = "";
        }

        var tags = ['{', '}'];

        var match = {
            'team_home_name': team_home_name,
            'team_away_name': team_away_name,
            'team_home_logo': team_home_logo,
            'team_away_logo': team_away_logo,
            'center': center,
            'live': live,
            'badge': badge,
            'play': play,
            'play_url': play_url,
            'match': v,
            'url': v.id_content != 0 ? true : false
        }

        html = Mustache.render($("script[name=match]").html(), match, {}, tags);
        $container.find(".ft-section-calendar-day:last-child").append(html);

        $("[i18n]").each(function () {
            $(this).html(T($(this).html()))
        })

        $('[data-toggle="tooltip"]').tooltip();

    });
}

/** keycloak createUUID */
function createUUID() {
    var hexDigits = '0123456789abcdef';
    var s = generateRandomString(36, hexDigits).split("");
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = '-';
    var uuid = s.join('');
    return uuid;
}

function generateRandomString(len, alphabet) {
    var randomData = generateRandomData(len);
    var chars = new Array(len);
    for (var i = 0; i < len; i++) {
        chars[i] = alphabet.charCodeAt(randomData[i] % alphabet.length);
    }
    return String.fromCharCode.apply(null, chars);
}

function generateRandomData(len) {
    // use web crypto APIs if possible
    var array = null;
    var crypto = window.crypto || window.msCrypto;
    if (crypto && crypto.getRandomValues && window.Uint8Array) {
        array = new Uint8Array(len);
        crypto.getRandomValues(array);
        return array;
    }

    // fallback to Math random
    array = new Array(len);
    for (var j = 0; j < array.length; j++) {
        array[j] = Math.floor(256 * Math.random());
    }
    return array;
}
