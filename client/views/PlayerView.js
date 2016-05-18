// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // when a song ends, the HTML5 element itself will send out an 'ended' event
    this.$el.on('ended', (function() {
        // when it hears that, call the ended method on the song model
        this.model.ended();
      // we need to bind this to ensure the song passes as well
      }).bind(this)
    );
  },

  setSong: function(song){
    this.model = song;

    // ?? in solution, not clear to me what it does
    // if(!this.model){
    //   this.el.pause();
    // }

    // render regardless
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
