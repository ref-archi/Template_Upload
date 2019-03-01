function ButtonClicked_Submit()
{
   if (document.getElementById("tech").value == "ChatBot"){
      $("#myModal_ChatBot2").modal('show');
      document.getElementById("slack_email2").value=document.getElementById("email").value;
   }
   else if(document.getElementById("tech").value == "OpenVpn")
  {
    openvpn_button();
  }
  else if(document.getElementById("tech").value == "OpenVpnPL")
  {
    openvpnpl_button();
  }
   else{
    document.getElementById("spinup_Submit").style.display = "none"; 
    document.getElementById("buttonreplacement_Submit").style.display = ""; 
 //gif
 setTimeout(function(){ 
    document.getElementById("spinup_Submit").style.display = ""; 
    document.getElementById("buttonreplacement_Submit").style.display = "none";
 },2000);

  //modal
  setTimeout(function(){ 
    if (document.getElementById('email').value != "" && document.getElementById('tech').value != ""){
        createenvironment()
    }else{
        alert("Please fill in the required fields!");
    }
},2000);
   }
}

function Java_Button()
{
  $('#tech').val("Java");
  $("#myModal_java").modal('show');
}

function ChatBot_Button()
{
  $('#tech').val("ChatBot");
  $("#myModal_ChatBot").modal('show');
}

function wordpress_button(){
  $('#tech').val("Wordpress");
  $("#myModal_wordpress").modal('show');
}

function docker_Button()
{
  $('#tech').val("Docker");
  $("#myModal_docker").modal('show');
}

function Flyway_Button()
{
  $('#tech').val("Flyway");
}

function aowp_Button()
{
  $('#tech').val("AOWP");
}

function nagios_button(){
  $('#tech').val("Nagios");
  $("#myModal_nagios").modal('show');
}

function jira_button(){
  $('#tech').val("Jira");
  $("#myModal_jira").modal('show');
}

function lemp_button(){
  $('#tech').val("LEMPServer");
  $("#myModal_lemp").modal('show');
}

function lamp_button(){
  $('#tech').val("LAMPServer");
  $("#myModal_lamp").modal('show');
}

function hcm_Button()
{
  $('#tech').val("HCM");
}
function openvpn_button()
{
  $('#tech').val("OpenVpn");
  $("#myModal_OpenVPN").modal('show');
}

function openvpnpl_button()
{
  $('#tech').val("OpenVpnPL");
  $("#myModal_OpenVPNPL").modal('show');
}

//openvpn modal
$("#vpn_create").click(function(){
  if($("#name").val() == "" || $("#instanceno").val() == "" || $("#email_vpn").val() == "")
  {
    alert("Please fill in the required fields!");
    console.log($("#name").val()+$("#instanceno").val()+$("#email_vpn").val());
    $("#myModal_OpenVPN").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_vpn").val();
    $("#myModal_OpenVPN").modal('hide');
    createenvironment();
  }
});

//platformopenvpn modal
$("#vpnpl_create").click(function(){
  if($("#namepl").val() == "" || $("#instancenopl").val() == "" || $("#email_vpnpl").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_OpenVPNPL").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_vpnpl").val();
    $("#myModal_OpenVPNPL").modal('hide');
    console.log($("#namepl").val()+$("#instancenopl").val()+$("#email_vpnpl").val());
    createenvironment();
  }
});

//Wordpress modal
$("#wordpress_create").click(function(){
  if($("#namewordpress").val() == "" || $("#email_wordpress").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_wordpress").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_wordpress").val();
    $("#myModal_wordpress").modal('hide');
    console.log($("#namewordpress").val()+$("#email_wordpress").val());
    createenvironment();
  }
});

//docker modal
$("#docker_create").click(function(){
  if($("#namedocker").val() == "" || $("#email_docker").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_docker").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_docker").val();
    $("#myModal_docker").modal('hide');
    console.log($("#namedocker").val()+$("#email_docker").val());
    createenvironment();
  }
});

//devops for java modal
$("#java_create").click(function(){
  if($("#namejava").val() == "" || $("#email_java").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_java").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_java").val();
    $("#myModal_java").modal('hide');
    console.log($("#namejava").val()+$("#email_java").val());
    createenvironment();
  }
});

//nagios modal
$("#nagios_create").click(function(){
  if($("#namenagios").val() == "" || $("#email_nagios").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_nagios").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_nagios").val();
    $("#myModal_nagios").modal('hide');
    console.log($("#namenagios").val()+$("#email_nagios").val());
    createenvironment();
  }
});

//jira modal
$("#jira_create").click(function(){
  if($("#namejira").val() == "" || $("#email_jira").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_jira").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_jira").val();
    $("#myModal_jira").modal('hide');
    console.log($("#namejira").val()+$("#email_jira").val());
    createenvironment();
  }
});

//lemp modal
$("#lemp_create").click(function(){
  if($("#namelemp").val() == "" || $("#email_lemp").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_lemp").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_lemp").val();
    $("#myModal_lemp").modal('hide');
    console.log($("#namelemp").val()+$("#email_lemp").val());
    createenvironment();
  }
});

//lamp modal
$("#lamp_create").click(function(){
  if($("#namelamp").val() == "" || $("#email_lamp").val() == "")
  {
    alert("Please fill in the required fields!");
    $("#myModal_lamp").modal('show');
  }
  else
  {
    document.getElementById("email").value = $("#email_lamp").val();
    $("#myModal_lamp").modal('hide');
    console.log($("#namelamp").val()+$("#email_lamp").val());
    createenvironment();
  }
});

function ButtonClicked_ChatBot()
{
    document.getElementById("spinup_ChatBot").style.display = "none";
    document.getElementById("buttonreplacement_ChatBot").style.display = ""; 
 //gif
 setTimeout(function(){ 
    document.getElementById("spinup_ChatBot").style.display = ""; 
    document.getElementById("buttonreplacement_ChatBot").style.display = "none";
 },);

  //modal
  setTimeout(function(){ 
       chatbot()
},);

}


//for chatbot 2nd modal
$('#spinup_Template').click(function () {
  $("#myModal_ChatBot").modal('hide');
  $("#myModal_ChatBot2").modal('show');
});

$('#slack_cancel').click(function () {
  $("#myModal_ChatBot2").modal('hide');
  document.getElementById('tech').value="";
  document.getElementById('email').value="";
});

$('#slack_create').click(function () {
if (document.getElementById('slack_vtoken').value != "" && document.getElementById('slack_oauth').value != "" && document.getElementById('slack_email2').value != ""){
    var e=document.getElementById('slack_email2').value;
    document.getElementById('email').value=e;
    $("#myModal_ChatBot2").modal('hide');
    slack_chatbot_clicked()
}else{
    alert("Please fill in the required fields!");
    $("#myModal_ChatBot2").modal('show');
}

function slack_chatbot_clicked(){
    document.getElementById("spinup_Submit").style.display = "none"; 
    document.getElementById("buttonreplacement_Submit").style.display = ""; 
  //gif
  setTimeout(function(){ 
      document.getElementById("spinup_Submit").style.display = ""; 
      document.getElementById("buttonreplacement_Submit").style.display = "none";
  },2000);
    $("#myModal_ChatBot2").modal('hide');
    createenvironment();
}

});

//end


//CREATE ENVIRONMENT
function createenvironment(){
  //JAVA
  var select = document.getElementById('tech');
  console.log(select.value);
  if (select.value === 'Java'){
    $("#myModal_CreateEnvironment").modal('show');
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;
        var name = document.getElementById('namejava').value;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/CF_Deploy/buildWithParameters?token=c0Ketz8ORT&NAME='+name+'&EMAIL='+email, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhttp.send();

  }else if (select.value === 'ChatBot'){
    //CHATBOT
      $("#myModal_CreateEnvironment").modal('show');
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true
      xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 2) {	
      }
      };
          //get values
          var email = document.getElementById('email').value;
          var tech = document.getElementById('tech').value;
          var vtoken = document.getElementById('slack_vtoken').value;
          var oauth = document.getElementById('slack_oauth').value;
          var name = document.getElementById('namechatbot').value;
          console.log(tech);
          xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_ChatBot/buildWithParameters?token=c0Ketz8ORT&E_MAIL='+email+'&VTOKEN='+vtoken+'&ATOKEN='+oauth+'&NAME='+name, true)
          xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
          // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
          xhttp.send();
  }else if (select.value === 'Wordpress'){
  //WORDPRESS
  $("#myModal_CreateEnvironment").modal('show');
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true
  xhttp.onreadystatechange = function() {
  if (xhttp.readyState === 2) { 
  }
  };
      //get values
      var email = document.getElementById('email').value;
      var name = document.getElementById('namewordpress').value;
      console.log(tech);
      xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_wordpress/buildWithParameters?token=sFiJmFnC&EMAIL='+email+'&NAME='+name, true)
      xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
      // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhttp.send();
  }else if (select.value === 'Docker'){
    $("#myModal_CreateEnvironment").modal('show');
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;
        var name = document.getElementById('namedocker').value;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_Docker/buildWithParameters?token=EvWjxUjSPv&EMAIL='+email+'&NAME='+name, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhttp.send();
  }else if (select.value === 'Flyway'){
    alert ("Not Available");
  }else if (select.value === 'AOWP'){
    alert ("Not Available");
  }else if (select.value === 'HCM'){
    console.log("Not available");
    alert ("Not Available");
  }
  else if (select.value === 'OpenVpn'){
    //OpenVpn
      $("#myModal_CreateEnvironment").modal('show');
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true
      xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 2) { 
      }
      };
          //get values
          var email = document.getElementById('email').value;
          var tech = document.getElementById('tech').value;
          var name = document.getElementById('name').value;
          var instanceno = document.getElementById('instanceno').value;
          console.log(tech);
          xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_OpenVPN/buildWithParameters?token=TuwxeKDQ&EMAIL='+email+'&NAME='+name+'&INSTANCE='+instanceno, true)
          xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
          // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
          xhttp.send();
  }
   else if (select.value === 'OpenVpnPL'){
    //OpenVpn for Platform
      $("#myModal_CreateEnvironment").modal('show');
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true
      xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 2) { 
      }
      };
          //get values
          var email = document.getElementById('email').value;
          var tech = document.getElementById('tech').value;
          var name = $("#namepl").val();
          var instanceno = $("#instancenopl").val();
          console.log(name+instanceno);
          xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_Platform_OpenVPN/buildWithParameters?token=kjopsRPAdf&EMAIL='+email+'&NAME='+name+'&INSTANCE='+instanceno, true);
          xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
          // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
          xhttp.send();
  }
  else if (select.value === 'Nagios'){
    //NAGIOS
    $("#myModal_CreateEnvironment").modal('show');
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;
        var name = document.getElementById('namenagios').value;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_Nagios/buildWithParameters?token=zbRpiYrOLf&EMAIL='+email+'&NAME='+name, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhttp.send();
  }
  else if (select.value === 'Jira'){
    //JIRA
    $("#myModal_CreateEnvironment").modal('show');
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;
        var name = document.getElementById('namejira').value;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_Jira/buildWithParameters?token=dfE2UAd2sO&EMAIL='+email+'&NAME='+name, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhttp.send(); 
  }
  else if (select.value === 'LAMPServer'){
    //Lamp Server
    $("#myModal_CreateEnvironment").modal('show');
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;
        var name = document.getElementById('namelamp').value;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_LAMP_Server/buildWithParameters?token=gpJmkSsWUD&EMAIL='+email+'&NAME='+name, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhttp.send(); 
  }
  else if (select.value === 'LEMPServer'){
    //Lemp Server
    $("#myModal_CreateEnvironment").modal('show');
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 2) {	
    }
    };
        //get values
        var email = document.getElementById('email').value;
        var tech = document.getElementById('tech').value;
        var name = document.getElementById('namelemp').value;
        console.log(tech);
        xhttp.open('POST', 'https://john.smith:Accenture01@lisa.accenture.com/jenkins/job/refarch-instance/job/Ref_LEMP_Server/buildWithParameters?token=nLkNuxqUwn&EMAIL='+email+'&NAME='+name, true)
        xhttp.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhttp.send(); 
  }
}

function chatbot(){
  $("#myModal_ChatBot").modal('show');
}
// }


//////////////////////////////
$(document).ready(function(){
  openTab(event, 'all_tab')
});

