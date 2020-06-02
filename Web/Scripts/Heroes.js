
var herourl = "http://81.2.241.234:8080/hero";

$.delete = function (url, data) {

    if ($.isFunction(data)) {
        type = type || callback,
            callback = data,
            data = {}
    }

    return $.ajax({
        url: url,
        type: 'DELETE',
        success: callback,
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
                    var i = 0;
                    for (let x of jsonData) {
                        var para = document.createElement("p");
                        var t = document.createTextNode("Name: {" + x.name + "} Description: {" + x.description + "} ID: {" + x.id+"}");
                        para.appendChild(t);
                        frame.appendChild(para);
                        i++
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
                function getHero() {
                    try{
                    $.get(herourl, function (data) {
                       makeListener(data);
                    });
                    }
                    catch(Exception)
                    {
                        alert("Hiba a lista betöltése során: "+Exception);
                    }
                                   
                }
                
                function deleteHero() {
                    var deleteId = document.getElementById("deleteHeroId").value;
                   
                   // $.delete(herourl + deleteId,{});//meg írtam feljebb.
                   
                   $.ajax({
                       type: "DELETE",
                       url: this.herourl+"/" + deleteId,
                       data: {},
                       succes: function (data) {
                           //alert(data);
                           alert("Sikeres törlés!");
                           getHero();
                           responseView(data);
                           
                        }
                   });
				   if($.Error != null)
				   {
					   alert($.Error);
				   }
				   else{
                        alert("Sikeres törlés!");
                        
				   }
                }

                function setHero() {
                    var newName = document.getElementById("newHeroName").value;
                    var newDesc = document.getElementById("newHeroDesc").value;
					
                    $.post(herourl, { name: newName, desc: newDesc }, function(){alert("Sikeres feltöltés!"); getHero();});
                }


                function ButtonClick(id) {
                    if($(Date.now("HH.mm")-Login.logindate<10))
                    {
                        if (id == 1) {
                            $('frame').change(getHero());
                        }
                        //if (id == 2) {
                        //   // $("button").change(heroListener("SasaHőse", "NAgyonIlyesztőWierd"));
                        //}
                    }   
                }