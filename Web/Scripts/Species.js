var speciesurl = "http://81.2.241.234:8080/species";

$.delete = function (url, data) {

    if ($.isFunction(data)) {
        type = type || callback,
            callback = data,
            data = {}
    }

    return $.ajax({
        url: url,
        type: 'DELETE',
        success: function(data){alert(data.name+"Törlése")},
        data: data,
        contentType: type
        
    });
}

var createCORSRequest = function (method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
};
function makeListener(jsonData) {
    let frame = document.getElementById("frame");
    frame.innerHTML = "";
    for (let x of jsonData) {
        var para = document.createElement("p");
        var t = document.createTextNode(" ID: {" + x.id +"} Name: {" + x.name + "} Description: {" + x.description+"}");
        para.appendChild(t);
        frame.appendChild(para);
    }
}
function responseView(jsonData) {
    let frame = document.getElementById("frame");
    frame.innerHTML = "";
    var param = document.createElement("p");
    var t = document.createTextNode(jsonData);
    param.appendChild(t);
    frame.appendChild(param);
}
                function getSpecies() {
                    $.get(speciesurl, function (data) {
                        makeListener(data);
                    });
                                   
                }
              
                function deleteSpecies() {
                    var deleteId = document.getElementById("deleteSpecId").value;
                   
                   $.ajax({
                       type: "DELETE",
                       url: this.speciesurl+"/" + deleteId,
                       data: {},
                       succes: function (data) {
                        
                           
                           responseView(data);
                        }
                   }); 
                   alert("Sikeres feltöltés!")
                   getSpecies();
				   
                }

                function setSpecies() {
                    var newName = document.getElementById("newSpecName").value;
                    var newDesc = document.getElementById("newSpecDesc").value;
					
                    $.post(speciesurl, { name: newName, desc: newDesc }, function(){alert("Sikeres feltöltés!"); getSpecies();});
                }


                function ButtonClick(id) {
                    if($(Date.now("HH.mm")-Login.logindate<10))
                    {
                        if (id == 1) {
                            $('frame').change(getSpecies());
                        }
                        //if (id == 2) {
                        //   // $("button").change(heroListener("SasaHőse", "NAgyonIlyesztőWierd"));
                        //}
                    }   
                }