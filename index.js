
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

    window.location = "index.html";
});

// lien github

$(".Github").click(function () {

    window.open ("https://github.com/cyriakleclercq");
});

// lien twitter

$(".social_media").click(function () {

    window.open ("https://twitter.com/DrModj0");
});

// lien linkedin

$(".portfolio").click(function () {

    window.open ("https://www.linkedin.com/in/cyriak-leclercq-03931513a/");
});

// page experience

$(".experience").click(function () {


    window.location = "experience.html";
});


$(".experienceA").click(function () {

    window.location = "index.html";
});

// page du parcours

$(".education").click(function () {


    window.location = "parcours.html";
});


$(".parcoursA").click(function () {

    window.location = "index.html";
});

// page de contact

$(".contact").click(function () {


    window.location = "contact.html";
});


$(".contactA").click(function () {

    window.location = "index.html";
});
