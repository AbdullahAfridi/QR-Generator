

var qrBox= document.getElementById("qrBox");
var qrText= document.getElementById("qrText");
var qrCode= document.getElementById("qrCode");

function qrGenerator(){
    if(qrText.value.length>0){
        qrCode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        qrBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
  
}