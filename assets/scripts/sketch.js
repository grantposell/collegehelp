const api = 'https://www.zipcodeapi.com/rest/vbTp6aLEGsVTTrt1MtcFQuSJ8kjKMJpBZjzb5uSrn2sNXwa6WTcdt2GxWfretPXL/radius.json/';



$(document).on("click", ".survey", function (event) {
    var zip = $("#zipInput").val().trim();
    let uri = api + zip + '/10/mile';
    event.preventDefault();
    function getCheckout() {
        fetch(uri, {
            headers: new Headers({
                //In a more developed application I would put this in a dotenv file
                'Access-Control-Allow-Origin': 'https://www.zipcodeapi.com/rest/vbTp6aLEGsVTTrt1MtcFQuSJ8kjKMJpBZjzb5uSrn2sNXwa6WTcdt2GxWfretPXL/radius.json/'
                
            })
        })
            .then((res) => res.json())
            .then((data) => {
            })
    }
    getCheckout();
});
function setup() {
    loadJSON("../scripts/data.json", gotData);

}
function gotData(data) {
    console.log(data)
}
function draw() {

}