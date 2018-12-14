
// clic sur flêche droite



$(".slide_droit").click(function () {

    if ($(".principale_droite").hasClass("photo1")) {

        $(".principale_droite").removeClass("photo1");
        $(".principale_droite").addClass("photo2");

    }

    else if ($(".principale_droite").hasClass("photo2")) {

        $(".principale_droite").removeClass("photo2");
        $(".principale_droite").addClass("photo3");

    }
    else {

        $(".principale_droite").removeClass("photo3");
        $(".principale_droite").addClass("photo1");

    }
    });

// clic sur flêche gauche

$(".slide_gauche").click(function () {

    if ($(".principale_droite").hasClass("photo1")) {

        $(".principale_droite").removeClass("photo1");
        $(".principale_droite").addClass("photo3");

    }

    else if ($(".principale_droite").hasClass("photo2")) {

        $(".principale_droite").removeClass("photo2");
        $(".principale_droite").addClass("photo1");

    }
    else {

        $(".principale_droite").removeClass("photo3");
        $(".principale_droite").addClass("photo2");

    }
});

function  slide() {

    if ($(".principale_droite").hasClass("photo1")) {


        $(".principale_droite").removeClass("photo1");
        $(".principale_droite").addClass("photo2");

    }


else if ($(".principale_droite").hasClass("photo2")) {

        $(".principale_droite").addClass("photo3");
        $(".principale_droite").removeClass("photo2");

    }

else {

        $(".principale_droite").addClass("photo1");
        $(".principale_droite").removeClass("photo3");

    }
    setTimeout(slide,2000);
};

setTimeout(slide,2000);


// page de profil

$(".profil").click(function () {


   window.location = "profil.html";
});


$(".profilA").click(function () {

    $(".ensemble").hide();

    window.location = "index.html";
});

