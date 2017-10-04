"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),AddressAutocomplete=function(){function e(t,a){if(_classCallCheck(this,e),this.element=document.querySelector(t),!this.element)throw new Error("The element you specified is not a valid element. You should attach an input using a class '.some-class' or an ID '#some-id'.");this.callback=a,this.extractAddress=this.extractAddress.bind(this),this.getUsersLocation=this.getUsersLocation.bind(this),this.handle()}return _createClass(e,[{key:"handle",value:function(){var e=this;document.onreadystatechange=function(){e.init(),e.element.addEventListener("focus",e.getUsersLocation)}}},{key:"init",value:function(e){this.autocomplete=new google.maps.places.Autocomplete(this.element,{types:["geocode"]}),this.autocomplete.addListener("place_changed",this.extractAddress)}},{key:"extractAddress",value:function(){for(var e={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"short_name"},t=this.autocomplete.getPlace(),a=t.address_components,n=t.formatted_address,o={streetNumber:"",streetName:"",cityName:"",stateAbbr:"",zipCode:""},s=0;s<a.length;s++){var r=a[s].types[0];if(e[r])switch(r){case"street_number":o.streetNumber=a[s].long_name;break;case"route":o.streetName=a[s].long_name;break;case"locality":o.cityName=a[s].long_name;break;case"administrative_area_level_1":o.stateAbbr=a[s].short_name,o.state=a[s].long_name;break;case"postal_code":o.zipCode=a[s].long_name;break;case"country":o.countryAbbr=a[s].short_name,o.country=a[s].long_name}}var c=Object.assign({},o,{formattedAddress:n});this.callback&&this.callback(c)}},{key:"getUsersLocation",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a={lat:t.coords.latitude,lng:t.coords.longitude},n=new google.maps.Circle({center:a,radius:t.coords.accuracy});e.autocomplete.setBounds(n.getBounds())})}}]),e}();module.exports=AddressAutocomplete;
//# sourceMappingURL=index.js.map