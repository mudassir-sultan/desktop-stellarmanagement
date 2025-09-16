$(document).ready(function () {


$("#expl_map img")
    .mouseover(function () {
            var src = $(this).attr("src").match(/[^\.]+/) + "_on.png";
            $(this).attr("src", src);
        })
        .mouseout(function () {
            var src = $(this).attr("src").replace("_on.png", ".png");
            $(this).attr("src", src);
});
    // Get a reference to the container.
    var container = $("#navBody");
  //  alert($('#dvHome').length == 0);
    if ($('#tgHome').length == 0) {
        container.slideUp(0);
    }
     // Bind the link to toggle the slide.
    $("#navHandle").click(function (event) {
        // Prevent the default event.
        event.preventDefault();
        // Toggle the slide based on its current
        // visibility.
        var myVar;
        if (container.is(":visible")) {
            // Hide - slide up.
            container.slideUp(1000);
            clearTimeout(myVar);
        } else {
            // Show - slide down.
            container.slideDown(1000);
        }

        $('#navMenu').bind('mouseenter', function () {
            clearTimeout(myVar);
        })

        $('#navMenu').bind('mouseleave', function () {
            if ($('#tgHome') != null) {
                myVar = setTimeout(function () { container.slideUp(1000); }, 3000);
            }
            else {
                clearTimeout(myVar);
            }
        });

    });
    $("#ancShows").find("li").mouseover(function () {
        setSideShow(this.id,0);
    });
    $("#ancFindProp").mouseover(function () {
        $("#fndProp").show("fast");
        $("#liFind").attr("class", "selfind");

    });
    $(document).mouseover(function (e) {
        var target = e.target;
       // var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
         if ($('#tgHome').length == 0) {
           if (!$(target).is('#ancFindProp') && !$(target).parents().is('#fndProp')) {
                $('#fndProp').hide("fast");
                $("#liFind").attr("class", "find");
            }
        }
    });
    $("#ancLogin").mouseover(function () {
        $("#pneLogin").show("fast");
        $("#nvlogin").attr("class", "ancLoginOn");
        $("#pneApply").hide("fast");
        $("#nvApply").attr("class", "nvApply");
        $("#liFind").attr("class", "find");
    });
    $("#ancApply").mouseover(function () {
        $("#pneApply").show("fast");
        $("#nvApply").attr("class", "ancApplyOn");
        $('#fndProp').hide("fast");
        $("#pneLogin").hide("fast");
        $("#nvlogin").attr("class", "nvlogin");
        $("#liFind").attr("class", "find");
    });
    $(document).mouseover(function (e) {
        var target = e.target;

        if (!$(target).is('#ancLogin') && !$(target).parents().is('#pneLogin') && !$(target).parents().is('#pneApply') && !$(target).is('#ancApply')) {
            $('#pneLogin').hide("fast");
            $("#nvlogin").attr("class", "nvlogin");

            $('#pneApply').hide("fast");
            $("#nvApply").attr("class", "nvApply");
        }
    });
      if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        
         $('a').on('click touchend', function (e) {
        var el = $(this);
        var link = el.attr('href');

	var rel = el.attr('rel');
        if (rel !== null && rel == 'lightbox') {
	
            return;
        }
        if (link == null || link == '#') {
                } else {
            if (link.indexOf("javascript:__doPostBack") >= 0)
            { } else {
                window.location = link;
            }
        }
    });
    }
});

function toggleUnit(source, id)
{
    var elem = '#' + id;
    var me = '#' + source;
  //  alert(elem);
  //  alert($(elem).is(":visible"));
     if ($(elem).is(":visible"))
    {
        $(elem).css("display" , "none");
          var src = $(me).children('img').attr("src").replace("ico_contract.png", "ico_expand.png");
        //  alert(src);
         $(me).children('img').attr("src", src);
    }else{
       // alert('false');
        $(elem).css("display", "block");
         var src = $(me).children('img').attr("src").replace("ico_expand.png", "ico_contract.png");
         $(me).children('img').attr("src", src);
    }   
    
}

