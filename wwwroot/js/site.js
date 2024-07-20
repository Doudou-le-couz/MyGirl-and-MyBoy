document.addEventListener('DOMContentLoaded', function() {
    function applyStylesBasedOnPath() {
        var path = window.location.pathname;
        var buttons = document.querySelectorAll('button');

        // Vérifier si l'URL commence par "/AboutHer"
        if (path.startsWith('/AboutUs')) {
            document.querySelector('header').classList.add('colorAbout');
            document.querySelector('nav').classList.add('colorAbout');
            document.querySelector('footer').classList.add('colorAbout');
            buttons.forEach(function(button){
                button.classList.add('colorAboutButtons');
            });
        }
        // Vérifier si l'URL commence par "/Presentation"
        else if (path.startsWith('/Presentation')) {
            document.querySelector('header').classList.add('colorPres');
            document.querySelector('nav').classList.add('colorPres');
            document.querySelector('footer').classList.add('colorPres');
            buttons.forEach(function(button){
                button.classList.add('colorPresButtons');
            });
        }

        // Clique sur titre
        /*var Title = document.getElementById('Title');
        Title.addEventListener('click', function(){
            Redirect('/Presentation');
        });*/
        
        //----------------------------------------------------- SideBar
        var sidebarPoints = document.getElementById('sidebar-points');
        var sidebar = document.querySelector('.sidebar');
        var croix = document.getElementById('croix');
        $("#croix").css("visibility", "hidden");
        var btnNTM = document.getElementById('btnNTM');
        $('#btnNTM').css("visibility", "hidden");

        sidebarPoints.addEventListener('click', function() {
            console.log("Cliquer");
            $(".sidebar").addClass("sidebarAffichage");
            //sidebar.classList.add('sidebarAffichage');
            $("#sidebar-points").css("visibility", "hidden");
            $("#croix").css("visibility", "visible");
            $("#btnNTM").addClass("btnNTMAffichage");
        });

        croix.addEventListener('click', function() {
            $(".sidebar").removeClass("sidebarAffichage");
            //$(".sidebar").css("visibility", "hidden");
            //sidebar.classList.add('sidebarAffichage');
            $("#sidebar-points").css("visibility", "visible");
            $("#croix").css("visibility", "hidden");
            $("#btnNTM").removeClass("btnNTMAffichage"); 
        });

        

        btnNTM.addEventListener('click', function() {
            console.log('Bouton cliqué');
        });
    }

    // Appliquer les styles au chargement initial de la page
    applyStylesBasedOnPath();

    // Optionnel: écouter les changements d'URL avec popstate
    window.addEventListener('popstate', function() {
        // Réappliquer les styles si l'URL change
        applyStylesBasedOnPath();
    });
});



function Redirect(desiredPath) {
    var currentPath = window.location.pathname;
    if (currentPath !== desiredPath) {
        window.location.href = desiredPath;
    }
}



