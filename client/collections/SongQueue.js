// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // if we hear an 'enqueue' event, add that song to the queue
    this.on('enqueue', this.add, this);
    // if we hear that the queue is added to (including the enqueue above), pass that song to determine whether to play it
    this.on('add', this.decideWhetherToPlay);
    // NOTE: can't use 'this.remove, this' here, because the test on line 45 in the spec doesn't pass in a second parameter. Hence we have to create our own removeFirstSong function instead.
    this.on('ended', this.removeFirstSong);
    this.on('dequeue', this.remove, this);
    this.on('remove', this.decideWhetherToPlay, this);
  },

  // Triggered with hearing an add or remove event, decides whether to call playFirst() or not
  decideWhetherToPlay: function() {
    var queue = this;
    // If there's one song in the queue (means there was nothing in queue before add)
    if (queue.length === 1) {
      // Play that song
      queue.playFirst();
    }
  },

  playFirst: function() {
    var queue = this;
    // Will only be triggered when a song is added to a previously empty queue
    queue.first().play();
  },

  removeFirstSong: function() {
    var queue = this;
    // Remove acts on the queue collection and takes a model as a parameter (the first item in the queue).
    // NOTE: could have been done with queue.shift()
    queue.remove(queue.first());
    // If there is at least one song in the queue still
    if( this.length >= 1 ){
      // play the first song
      this.playFirst();
    // if there are no songs left in the queue
    } else {
      // stop playing anything
      this.trigger('stop');
    }
  },




});
