(function ($) {
  jQuery.fn.showStan = function (settings) {
    var config = {
      'position': 'left',
      'space':200,
      'time':1000,
      'effect':'lineal'
    };

    if (settings) jQuery.extend(config, settings);

    this.each(function () {
      var e = $(this);

      switch (config.position) {
        case 'left':

          var left = function () {
                  e.css({
                    display: 'flex',
                    // transition: '1s',
                    transform: 'translateX(-' + config.space + 'px)'
                  });

                  setTimeout(function () {
                    e.css({
                      display: 'flex',
                      transition: '1s',
                      transform: 'translateX(0px)'
                    });
                  }, 1);
          }

          left();
          break;

        case 'top':

          var left = function () {
            e.css({
              display: 'flex',
              // transition: '1s',
              transform: 'translateY(-' + config.space + 'px)'
            });

            setTimeout(function () {
              e.css({
                display: 'flex',
                transition: '1s',
                transform: 'translateY(0px)'
              });
            }, 1);
          }

          left();
        break;
      }

    });

    return this;
  };
})(jQuery);
