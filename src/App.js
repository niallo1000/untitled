import './App.css';
import React, { Component } from "react";


class App extends Component {

  componentDidMount () {
    this.renderMap ()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDNHCqa_zJUN2zrkeQ1fuaiipJuDxAkRF8&callback=initMap")
    window.initMap = this.initMap
  }



   initMap = () => {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return(
        <main>
          <div id="map"></div>
        </main>
    )
  }
}



function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.source = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default App;