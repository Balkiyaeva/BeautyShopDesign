 // sidebar
  var isOpen = false;
    function openNav() {
      if (!isOpen) {
        document.getElementById("sidebar").style.width = "180px";
        document.getElementById("bod").style.opacity = "0.6";
        document.getElementById("headd1").style.opacity = "0.6";
        document.getElementById("fott").style.opacity = "0.6";
        isOpen = true;
      }
      else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("bod").style.opacity = "1";
        document.getElementById("headd1").style.opacity = "1";
        document.getElementById("fott").style.opacity = "1";
        isOpen = false;
      }
    }
//Search
  var lastResFind = "";
  var copy_page = "";
  function trimsamp(s) {
       s = s.replace( '&', 'and');
    return s;
  }

  function FindOnPage(inputId) {
    var obj = window.document.getElementById(inputId);
    var textToFind;

    if (obj) {
      textToFind = trimsamp(obj.value.trim());
    }
    else {
      alert("Nothing is found");
      return;
    }

    if (textToFind == "") {
      alert("There is no input");
      return;
    }

    if(copy_page.length>0)
          document.body.innerHTML=copy_page;
    else copy_page=document.body.innerHTML;

    document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
    document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:black; color:white'>"+textToFind+"</a>");
    window.location = '#'+textToFind;
   }
//map
  function initMap() {
    const addr = { lat: 51.091017, lng: 71.418059 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: addr,
    });
    const marker = new google.maps.Marker({
      position: addr,
      map: map,
    });
  }
 //popups
  function addToCart(item) {
    document.getElementById("ppcart").style.display = "block";
    var add = document.getElementById("added");
    add.innerHTML = item;

  }
  function subscribed() {
    document.getElementById("ppmail").style.display = "block";
    var add = document.getElementById("mailsub");
    add.innerHTML = "You will receive mails to " + document.getElementById("mailinput").value;
    document.getElementById("mailinput").value = "";
  }
  function closewindow(id){
    document.getElementById(id).style.display = "none";
  }
//rating
  function onestar(){
    remove();
    document.getElementById('1').className += " checked";
    document.getElementById('first').className += " checked";
  }
  function twostar(){
    onestar();
    document.getElementById('2').className += " checked";
    document.getElementById('second').className += " checked";
  }
  function threestar(){
    twostar();
    document.getElementById('3').className += " checked";
    document.getElementById('third').className += " checked";
  }
  function fourstar(){
    threestar();
    document.getElementById('4').className += " checked";
    document.getElementById('forth').className += " checked";
  }
  function fivestar(){
    fourstar();
    document.getElementById('5').className += " checked";
    document.getElementById('fifth').className += " checked";
  }
  function remove(){
    document.getElementById('1').className = "fa fa-star";
    document.getElementById('2').className = "fa fa-star";
    document.getElementById('3').className = "fa fa-star";
    document.getElementById('4').className = "fa fa-star";
    document.getElementById('5').className = "fa fa-star";
    document.getElementById('first').className = "fa fa-star";
    document.getElementById('second').className = "fa fa-star";
    document.getElementById('third').className = "fa fa-star";
    document.getElementById('forth').className = "fa fa-star";
    document.getElementById('fifth').className = "fa fa-star";
  }
 //comment
  function post() {
    writeName();
    document.getElementById("csection").style.display = "block";
  }

  function writeName() {
  var out1 = document.getElementById('result');
  var out2 = document.getElementById('result2');
  var out3 = document.getElementById('result3');
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var comment = document.getElementById('comment');
  out1.innerHTML = name.value;
  out2.innerHTML = email.value;
  out3.innerHTML = comment.value;
  }
