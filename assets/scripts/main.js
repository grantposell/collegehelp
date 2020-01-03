$(document).on("click", ".survey", function (event) {
    // console.log($(this))
    event.preventDefault();
    var zip = $("#zipInput").val().trim();

    console.log(zip);
    
    function doFetch(){
        let uri = 'https://www.zipcodeapi.com/rest/vbTp6aLEGsVTTrt1MtcFQuSJ8kjKMJpBZjzb5uSrn2sNXwa6WTcdt2GxWfretPXL/radius.json/' + zip + '/10/mile';
        
        let h = new Headers();
        h.append('Accept', 'application/json');
        let req = new Request(uri, {
            method: 'GET',
            headers: h,
            mode: 'no-cors'
        });
        fetch(req)
        .then( (response) => {
            console.log(response)
            if (response.ok){
                return response.json();
            } else {
                throw new Error('Bad HTTP');
            }
        })
        .then( (jsonData) => {
            console.log(jsonData);
            p.textContent = JSON.stringify(jsonData, null, 4)
        })
        .catch ( (err) => {
            console.log('ERROR:', err.message)
        });
    }
    doFetch();

});