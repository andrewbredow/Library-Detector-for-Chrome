/**
    description: Runs whenever the popup is created in a tab
**/

var addLibrary = function(library) {
    var container = document.createElement('div');
    var link = document.createElement('a');

    link.href = library.url;
    link.innerHTML = library.name;
    link.setAttribute('style', "background: transparent url('../icons/" + library.icon + ".png') no-repeat left center; background-size: contain;");
    link.target = '_blank';

    container.appendChild(link);

    if (library.version) {
        var version = document.createElement('span');

        version.innerHTML = ' ' + library.version;
        container.appendChild(version);
    }

    document.getElementById('libraries').appendChild(container);
};

var handlePageLoad = function() {
    chrome.tabs.query({active: true}, function(tab) {
        var libraries = JSON.parse(localStorage.getItem('libraries_'+tab[0].id));
        if (libraries === null) return;
        for (var i=0, j=libraries.length; i < j; i++) {
            addLibrary(libraries[i]);
        }
    });
};

window.addEventListener("load", handlePageLoad, false);
