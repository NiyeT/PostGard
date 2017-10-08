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

    create('div','.username-wrapper frame input-wrapper','.signup-wrapper');
    // create('div','.username-container signup-container','.username-wrapper');
    create('div','.password-wrapper frame input-wrapper','.signup-wrapper');
    create('div','.input-container','.input-wrapper','a');
    create('div','.signup-input-box frame','.input-container','a');
    create('div','.signup-input-title frame','.input-container','a');
    $('.input-container').eq(0).css('margin-top','12em')
    $('.input-container').eq(2).css('margin-bottom','12em');

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
    $('.input-container').on('mouseover',function(){
      $(this).css('cursor','pointer')
    })
    $('.input-container').on('click',function(){
        $(this).find('.signup-input').focus();
        $(this).css('border-width','4px');
    })
  },
  tutorial:function(){
    create('div','.video-wrapper frame','.tutorial-wrapper');
    // <iframe width="854" height="480" src="https://www.youtube.com/embed/S3SKXfEMSYY" frameborder="0" allowfullscreen></iframe>
    create('iframe','.tutorial-video','.video-wrapper');
    $('.tutorial-video').attr('src','https://www.youtube.com/embed/S3SKXfEMSYY');
  },
  main:function(){
    create('div','.main-wrapper frame','.master-wrapper');
    create('div','.main-main','.main-wrapper');
    create('div','.tutorial-wrapper frame','.main-main');
    create('div','.signup-wrapper','.main-main');
    this.tutorial();
    this.signup();
  },
  draw:function(){
    this.wrapper();
    // this.navigation();
    this.main();
  }
}

tff.draw();
