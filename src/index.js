// need to run some codde from here that will then send webpack sniffing down through all the files to figure out the dependencies to figure out what code needs to be bundled 
import {run} from "./app/app";
import "./main.scss";
import mainImage from './assets/webpack.svg';
console.log(mainImage);


//console.log(Tooltip);

import {AlertService} from "./app/alert.service";
import {ComponentService} from "./app/component.service";


const alertService = new AlertService();
const componentService = new ComponentService();

console.log('poo');
console.log('poo');

run(alertService, componentService)

if (module.hot) {
    module.hot.accept('./index.js', () => {
        console.log('hello from index.js')
    })
}