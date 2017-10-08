var tff={
  wrapper:function(){
    create('div','.master-wrapper','.body');
  },
  navigation:function(){
    create('div','.navigation-wrapper','.master-wrapper')
    create('div','.login-wrapper spacer','.navigation-wrapper');
    create('div','.title-wrapper','.navigation-wrapper');
    create('div','.login-wrapper spacer','.navigation-wrapper');
  },
  signup:function(){
    create('div','.bank-wrapper frame input-wrapper','.signup-wrapper');
    // create('div','.bank-container signup-container','.bank-wrapper');
    //
    create('div','.username-wrapper frame input-wrapper','.signup-wrapper');
    // create('div','.username-container signup-container','.username-wrapper');
    create('div','.password-wrapper frame input-wrapper','.signup-wrapper');
    create('div','.input-container','.input-wrapper','a');
    create('div','.signup-input-box frame','.input-container','a');
    create('div','.signup-input-title frame','.input-container','a');
    create('input','.signup-input','.signup-input-box','a');
    $('.signup-input-title').eq(0).text('Bank:');
    $('.signup-input-title').eq(1).text('User:');
    $('.signup-input-title').eq(2).text('Pass:');

    // create('div','.password-container signup-container','.password-wrapper');
    // create('input','.signup-input-box','.signup-container','a');
    // create('div','.signup-title frame','.signup-container','a');
    // $('.signup-title').eq(0).text('Bank')
    // $('.signup-title').eq(1).text('User')
    // $('.signup-title').eq(2).text('Bank')

  },
  tutorial:function(){
    create('div','.video-wrapper','.tutorial-wrapper');
    // <iframe width="854" height="480" src="https://www.youtube.com/embed/S3SKXfEMSYY" frameborder="0" allowfullscreen></iframe>
    // create('iframe','.tutorial-video','.video-wrapper');
    var test=document.getElementsByClassName('video-wrapper')[0]
    console.log(test);
  },
  main:function(){
    create('div','.main-wrapper','.master-wrapper');
    create('div','.tutorial-wrapper frame','.main-wrapper');
    create('div','.signup-wrapper','.main-wrapper');
    this.tutorial();
    this.signup();
  },
  draw:function(){
    this.wrapper();
    this.navigation();
    this.main();
  }
}

tff.draw();
