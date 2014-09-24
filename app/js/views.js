(function(v, runtime) {

  // mix your pages into "v", here's some samples:

  var navbar = $(".navbar");

  // A very simple "Page" abstraction for our single page app
  v.Page = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this);
    },
    render: function() {
      this.$el.html(this.template());
      if (this.components) {
        _.defer(this.components);
      }
      this.updateNav(this.nav);
      return this;
    },
    updateNav: function(hashValue) {
      navbar.find("li").removeClass("active");
      navbar.find("[href='" + hashValue + "']").parents("li").addClass("active");
    }
  });

  // Some pages
  v.Home = v.Page.extend({
    template: JST["app/templates/pages/home.hb"],
    nav: "#home"
  });

  v.TheShow = v.Page.extend({
    template: JST["app/templates/pages/the_show.hb"],
    nav: "#the-show"
  });

  v.ReservedSeating = v.Page.extend({
    template: JST["app/templates/pages/reserved_seating.hb"],
    nav: "#reserved-seating"
  });

  v.OpeningAct = v.Page.extend({
    template: JST["app/templates/pages/opening_act.hb"],
    nav: "#opening-act"
  });

  v.GuestArtist = v.Page.extend({
    template: JST["app/templates/pages/guest_artist.hb"],
    nav: "#guest-artist"
  });

  v.Choir = v.Page.extend({
    template: JST["app/templates/pages/choir.hb"],
    nav: "#choir"
  });

  v.Orchestra = v.Page.extend({
    template: JST["app/templates/pages/orchestra.hb"],
    nav: "#orchestra"
  });

  v.NewChurch = v.Page.extend({
    template: JST["app/templates/pages/new_church.hb"],
    nav: "#new-church"
  });

  v.Promo = v.Page.extend({
    template: JST["app/templates/pages/promo.hb"],
    nav: "#promo"
  });

  v.Map = v.Page.extend({
    template: JST["app/templates/pages/map.hb"],
    nav: "#map",
    components: function() {
      var map = L.map('map').setView([52.098831,-106.563257], 14);
      L.tileLayer('http://{s}.tile.cloudmade.com/e23d1defb9d94c8ba4c21d606df635bd/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
      }).addTo(map);
      L.marker([52.098831,-106.563257]).addTo(map)
        .bindPopup('Elim Church. <br>419 Slimmon Road, Saskatoon, SK').openPopup();
    }
  });

})(APP.Views, APP.Runtime);