import React, { Component } from 'react';
/* global google */

class GoogleMapsTile extends Component {
  constructor(props) {
  super(props)
  this.state={

  }
 this.initMap=this.initMap.bind(this)
}
  componentDidMount() {
         window.initMap = this.initMap;
         loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDXs__DvSrweKmRBGuM9m0R40EvO9FkQEg&callback=initMap')
     }

     initMap() {
       let map = new google.maps.Map(document.getElementById('map'), {
         zoom: 12,
         center: {lat: this.props.lat, lng: this.props.lng}
       });
       let marker = new google.maps.Marker({
         position: {lat: this.props.lat, lng: this.props.lng},
         map: map,
       });
     }

render(){
  return(
    <div id='map'></div>
    )
  }
}

export default GoogleMapsTile;

   function loadJS(src) {
       var ref = window.document.getElementsByTagName("script")[0];
       var script = window.document.createElement("script");
       script.src = src;
       script.async = true;
       ref.parentNode.insertBefore(script, ref);
   }
