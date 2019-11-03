// Changes class name on div to switch between colours

const card= document.getElementById('card-click');

card.addEventListener('click', function() {
  card.classList.toggle('card-toggled');
})

const card_two= document.getElementById('card-click_two');

card_two.addEventListener('click', function() {
  card_two.classList.toggle('card-toggled_two');
})

const card_three= document.getElementById('card-click_three');

card_three.addEventListener('click', function() {
  card_three.classList.toggle('card-toggled_three');
})










var email = false,
    Mail = {

    init: function() {
      Mail.sendClick();
    },
      
  sendClick: function() {
    try {
      $('#send').on('click', function() {
        var mail = $('input[name="email"]').val();

  		  Mail._checkMail(mail);

        if (email == true) {
          Mail.flashMessenger("email is correct")
        } else {
          Mail.flashMessenger("email is not correct");
        }
      });
    }
    catch(err) {
    
    }
  },

  _checkMail: function(mail) {
    try {
      if (Mail._emailCorrect(mail) == false || mail.length == 0) {
        email = false;
      } else {
        email = true;
      }
    } catch(err) {

    }
  },

  _emailCorrect: function(mail) {
    try {
      var check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (check.test(mail)) {
        email = true;
        return true;
      } else {
        email = false;
        return false;
      }
    } catch(err) {

    }
  },
      
  flashMessenger: function(sMessage) {
    try {
      var message = '<div class="flash-messanger"><div class="flash-content"><p>' + sMessage + '</p></div></div>',
          flashMessage = $('body').find('.flash-messanger');

      if(flashMessage.length > 0) {
          $(flashMessage).find('p').text(sMessage);
      } else {
          $(message).appendTo('body');
      }

      $('div.flash-messanger').fadeIn('fast');
      $('div.flash-messanger').promise().done(function(){
          $(this).delay(2500).fadeOut('fast');
      });
    } catch (err) {
      
    }
  },

  
};

  $(document).ready(function() {
    Mail.init();
  });








require(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer"], function(Map, ArcGISDynamicMapServiceLayer) {
  var map = new Map("map", {
    center: [-88, 35],
    zoom: 4,
    basemap: "topo"
  });
  
  var layer = new ArcGISDynamicMapServiceLayer(
    "google.com.ua");
  map.addLayer(layer);
  
  layer.on("update-start", function(evt) {
     console.log('update-start', evt);
  });
  
  layer.on("update-end", function(evt) {
     console.log('update-end', evt);
  });

});



// ( function($) {
  
//   $(document).ready(function() {
    
//     var s           = $('.slider'),
//         sWrapper    = s.find('.slider-wrapper'),
//         sItem       = s.find('.slide'),
//         btn         = s.find('.slider-link'),
//         sWidth      = sItem.width(),
//         sCount      = sItem.length,
//         slide_date  = s.find('.slide-date'),
//         slide_title = s.find('.slide-title'),
//         slide_text  = s.find('.slide-text'),
//         slide_more  = s.find('.slide-more'),
//         slide_image = s.find('.slide-image img'),
//         sTotalWidth = sCount * sWidth;
    
//     sWrapper.css('width', sTotalWidth);
//     sWrapper.css('width', sTotalWidth);
    
//     var clickCount  = 0;
    
//     btn.on('click', function(e) {
//       e.preventDefault();

//       if( $(this).hasClass('next') ) {
        
//         ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
//       } else if ( $(this).hasClass('prev') ) {
        
//         ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
//       }
//       TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


//       //CONTENT ANIMATIONS

//       var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
//       var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

//       TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
//       TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
//       TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
//       TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
//       TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

//     });
          
//   });
// })(jQuery);

// $('.overlay').addClass('overlay-blue');