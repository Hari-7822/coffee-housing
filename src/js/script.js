
import {esp, cap, lat, milk, crm, latte} from './add';


function sum() {


var esp_val = parseInt(esp.value);
var cap_val = parseInt(cap.value);
var lat_val = parseInt(lat.value);
var milk_val = parseInt(milk.value);
var crm_val = parseInt(crm.value);
var latte_val = parseInt(latte.value);


const total = (esp_val * 4) + 
(cap_val * 6) + 
(lat_val * 8) + 
(milk_val * 2) + 
(crm_val * 3) + 
(latte_val * 6)

var tot = docment.querySelector('#tot')

tot.innerHTML = total


}
