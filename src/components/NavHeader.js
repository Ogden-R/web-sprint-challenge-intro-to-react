// // import React from 'react';
// // import constants from '../constants';
// // import styled from 'styled-components';
// import PageData from '../constants/PageData';

// export default function linkMaker({ href, className, text }) {
//     const link = document.createElement('a');
//     link.href = href;
//     link.className = className;
//     link.textContent = text;
//     return link;
// }

// // PageData(linkObj => {
// //     const linkElem = linkMaker(linkObj);
// //     document.querySelector('navBar').appendChild(linkElem);
// // })

// const linkElem = PageData.map(linkObj => {
//     return linkMaker(linkObj);
//   })
//   /*
//   for(let i=0; i< panelData.length; i++){
//     const panelElem = panelData[i];
//   } 
//   */
  
//  linkElem.forEach(linkElement => {
//     document.querySelector('navBar').appendChild(linkElement);
//   })