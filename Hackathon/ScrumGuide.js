var checks={
  'abagnale':'https://qph.ec.quoracdn.net/main-qimg-2fb01bd6057b3a6b56e2f48a2c18152d-c',
  'cuentas':'http://www.digitalcheck.com/wp-content/uploads/2013/02/Check%201.jpg',
  'firstbank':'http://www.thedailyscam.com/wp-content/uploads/2016/01/checkscam.jpg'
}

var fraud=[

]

var tffResponse={
  good:function(event){
    var getImagePath = URL.createObjectURL(event.target.files[0]);

    $('#verify-check').css('background-image', 'url(' + getImagePath + ')');
    $('#verify-text').css('color','green');
    $("#verify-text").text("Good Check");

    $('#verify-check').css('border', '4px solid green');
  },
  bad:function(event){
    console.log('response is bad')
    var getImagePath = URL.createObjectURL(event.target.files[0]);

    $('#verify-check').css('background-image', 'url(' + getImagePath + ')');
    $("#verify-text").text("Bad Check");
    $('#verify-check').css('border', '4px solid red');
  }
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
    var filename=file.name.match(/[^\.]+/)[0]
    console.log('file:',file)
    console.log('filename:',filename);
    $.ajax({
      'url':'localhost:3000/api/frauds/receive-image',
      'data':{'file':checks[filename]},
      'success':function(data){
        // data={
        //   'status':'good'
        // }
        data=String(data);
        
        tffResponse[data.status];
        var getImagePath = URL.createObjectURL(event.target.files[0]);
        //$('#clock').css('border', '2px solid green');
       // $('#line1').addClass('line1');
       // $('#line2').addClass('line2');
      }
    })


    var data={'status':true}
    if(data.status){
      data.status='good';
    }else{
      data.status='bad';
    }
    console.log('status:',data.status)
    tffResponse[data.status](event);
};
