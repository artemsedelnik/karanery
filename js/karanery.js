/**
 * Created by ArtemSedelnik on 04.11.15.
 */
function $(selector){
    return new Karanery(selector);
}

function Karanery(selector) {

    var karanery = this;

    if (typeof selector == 'string'){
        var posID = selector.indexOf('#');
        var posClassName = selector.indexOf('.');

        if (posID != -1){
            findById(posID);
        }

        else if (posClassName != -1){
            findByClass(posClassName);
        }

    }

    function findByClass(posClassName){

        var className = selector.substr(posClassName + 1);

        if (posClassName == 0){
            var elements = document.getElementsByClassName(className);
            var i = 0;
            for (var element in elements){
                if (i == element){
                    karanery[element] = elements[element];
                }
                i++;
            }
        }

        else {
            var tag = selector.substr(0, posClassName);
            var elementsByTagName = document.getElementsByTagName(tag);
            var j = 0;
            for (var elementByTagName in elementsByTagName){
                if (j == elementByTagName){
                    if(elementsByTagName[elementByTagName].className.indexOf(className) != -1){
                        karanery[elementByTagName] = elementsByTagName[elementByTagName];
                    }
                    j++;
                }
            }
        }
        karanery.selector = selector;
    }


    function findById(posID){

        var id = selector.substr(posID + 1);
        if (posID == 0){
            karanery[0] = document.getElementById(id);
        }

        else {
            var tag = selector.substr(0, posID);
            var elementsByTagName = document.getElementsByTagName(tag);
            var i = 0;
            for (var element in elementsByTagName){
                if (element == i){
                    karanery[0] = document.getElementById(element);
                }
                i++;
            }
        }
        karanery.selector = selector;
    }
}

Karanery.prototype.addClass = function(className) {

    var karanery = this;
    var i = 0;
    for (var prop in karanery){
        if (karanery.hasOwnProperty(prop)){
            if (prop == i){
                karanery[prop].className += " " + className;
            }
            i++;
        }
    }
};