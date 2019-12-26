
$(document).on("click", ".survey", function (event) {
    // console.log($(this))
    event.preventDefault();
    var zip = $("#zipInput").val().trim();

    console.log(zip)
    zipcodeRadius(zip);
});
function zipcodeRadius(zip) {
    var url = "https://www.zipcodeapi.com/rest/vbTp6aLEGsVTTrt1MtcFQuSJ8kjKMJpBZjzb5uSrn2sNXwa6WTcdt2GxWfretPXL/radius.json/" + zip + "/10/mile";
    console.log(url);
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
    }).then(function (response) {
        console.log(response)
    });
}
function setup() {
    loadJSON("./assets/scripts/data.json", gotData);

}
function gotData(data) {
    console.log(data)
}
function draw() {

}