import _ from 'lodash';
import './style.css';
import Img from './lon-lat.png';
import Data from './data.json';
import {Data} from './data.json';
import Notes from './data.csv';


function component() {
    const element = document.createElement('div');
    const secElement = document.createElement('div');
  
    // Lodash, currently imported here for _.join to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // Add the image to our existing div.
   const MyImg = new Image();
   MyImg.src = Img;

   element.appendChild(Img)
  //  secElement.appendChild(MyImg);

  console.log(Data);
   return element;
    // return [secElement, element ];
  }
  
  document.body.appendChild(component());