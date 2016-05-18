// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // We need to pass along the keyword 'this' with each trigger event because 'this' is the context of the song that emits that event (it allows whatever hears the event to inherit the context of the song that caused it).

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to. (??)
    this.trigger('play', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }

});
