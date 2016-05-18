// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
    
  // Returns an object with each Song model instance stored at .models
  model: SongModel

});