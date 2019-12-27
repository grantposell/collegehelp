
$(document).on("click", ".survey", function (event) {
    // console.log($(this))
    event.preventDefault();
    var zip = $("#zipInput").val().trim();

    console.log(zip)

    var invocation = new XMLHttpRequest();
    var url = 'https://www.zipcodeapi.com/rest/vbTp6aLEGsVTTrt1MtcFQuSJ8kjKMJpBZjzb5uSrn2sNXwa6WTcdt2GxWfretPXL/radius.json/' + zip + '/10/mile';
    function callOtherDomain() {
        if (invocation) 
        {
            invocation.open('GET', url, true);
            invocation.withCredentials = "true";
            invocation.onreadystatechange = handler;
            invocation.send();
        }
    }
});


function setup() {
    loadJSON("./assets/scripts/data.json", gotData);

}
function gotData(data) {
    console.log(data)
}
function draw() {

}