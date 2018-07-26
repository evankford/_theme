function loadBit(target, number) {
  var max = number;
  var shows =  [];
  var targetDiv = target;
  var innerH = '';
  var url = 'http://api.bandsintown.com/artists/Aaron%20Shust/events.json?api_version=2.0&app_id=AaronShust&callback=?';
  jQuery.getJSON(url, function(data) {
  	shows = data;
    loadShows();
  });


function loadShows() {
    jQuery(targetDiv).html('');
  	var counter = 0;
    jQuery.each(shows, function(index, el) {
  	  counter ++;
      var dateToPush = new Date(this.datetime);
      var months = ['Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun' , 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var monthNumber = dateToPush.getMonth();
      var month = months[monthNumber] + '' ;
      var tickets;
      if (this.ticket_status === 'available') {
        if (this.ticket_type === 'Sold Out') {
  				tickets = '<span class="soldout">Sold Out</span>';
        } else {
        	tickets = '<a href="' + this.ticket_url + '" target="_blank">Buy Tickets</a>'
        }
      } else {
  	    tickets = '<a href="' + this.facebook_rsvp_url + '" target="_blank">More Info</a>';
      }
      var $toPush = '<div class="show"><div class="date">' + month + '. ' + dateToPush.getDate() + '</div><div class="location"><span class="city">' + this.formatted_location+ '</span><span class="venue">' + this.venue.name + '</span></div><div class="tickets">' + tickets + '</div></div>';

  		jQuery(targetDiv).append($toPush)
      
      // check number of iteration
      if (counter === max) {
        jQuery(window).trigger('bitDone');
  	    return false;
      }
    })
    jQuery(window).trigger('bitDone');
  };
}
