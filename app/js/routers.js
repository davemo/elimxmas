(function(r, v, runtime) {

  // mix your routers into "r", here's a sample

  r.Main = Backbone.Router.extend({
    initialize: function() {
      _.bindAll(this);
      this.container = $("#page");
      $(window).on('hashchange', function() {
        $('.nav-collapse').collapse('hide');
      });
    },
    routes: {
      "home"       : "home",
      "the-show"   : "theShow",
      "reserved-seating" : "reservedSeating",
      "opening-act" : "openingAct",
      "guest-artist" : "guestArtist",
      "choir" : "choir",
      "orchestra" : "orchestra",
      "new-church" : "newChurch",
      "map" : "map",
      "promo" : "promo",
      "*path"      : "home"
    },
    home: function() {
      this._renderPage(new v.Home());
    },
    theShow: function() {
      this._renderPage(new v.TheShow());
    },
    reservedSeating: function() {
      this._renderPage(new v.ReservedSeating());
    },
    openingAct: function() {
      this._renderPage(new v.OpeningAct());
    },
    guestArtist: function() {
      this._renderPage(new v.GuestArtist());
    },
    choir: function() {
      this._renderPage(new v.Choir());
    },
    orchestra: function() {
      this._renderPage(new v.Orchestra());
    },
    newChurch: function() {
      this._renderPage(new v.NewChurch());
    },
    map: function() {
      this._renderPage(new v.Map());
    },
    promo: function() {
      this._renderPage(new v.Promo());
    },
    _renderPage: function(view) {
      this.container.empty().append(view.render().el);
    }
  });

})(APP.Routers, APP.Views, APP.Runtime);