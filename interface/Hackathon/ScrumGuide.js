var checks={
  'Some_bank':'http://www.digitalcheck.com/wp-content/uploads/2013/02/Check%201.jpg',

}

$(document).ready(function(){
    $(".btn-email").click(function(){
        $(".btn-email").text("tff@gmail.com");
        $(this).removeClass('btn-email');
        $(this).addClass('new-email');

    });
});
function readURL(event){
    var file=event.target.files[0]

    console.log('file:',file)

    var getImagePath = URL.createObjectURL(event.target.files[0]);
    $('#verify-check').css('background-image', 'url(' + getImagePath + ')');
    $("#verify-text").text("Bad Check");
    $('#verify-check').css('border', '2px solid red');
    //$('#clock').css('border', '2px solid green');
   // $('#line1').addClass('line1');
   // $('#line2').addClass('line2');
};
