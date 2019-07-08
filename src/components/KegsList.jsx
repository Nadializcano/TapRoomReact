import React from 'react';
import Kegs from './Kegs';
export default KegsList;

const availableKegs = [
  {
    name: 'Elysian IPA',
    brand: 'Elysian Brewing',
    price: '12.00',
  },
  {
    name: 'Seattle Cider',
    brand: 'Seattle Cider Company',
    price: '13.30',
  },
  {
    name: 'Stella Artois',
    brand: 'Stella Artois',
    price: '10.00',
  },
  {
    name: 'Lagunitas IPA',
    brand: 'Lagunitas Brewing Company',
    price: '9.00',
  },
  {
    name: 'Sierra Nevada',
    brand: 'Sierra Nevada Brewing Co.',
    price: '9.00',
  },
  {
    name: 'Deschutes Mirror Pond',
    brand: 'Deschutes Brewery',
    price: '10.00',
  },
  {
    name: 'Pilsner Urquell',
    brand: 'Pilsner Urquell',
    price: '13.00',
  },
  {
    name: 'Alaskan Amber',
    brand: 'Alaskan Brewing Co.',
    price: '10.00',
  },
];

function KegsList(){

  return (
    <div>
      <hr/>
      {availableKegs.map((kegs, index) =>
        <Kegs name={kegs.name}
          brand={kegs.brand}
          price={kegs.price}
          key={index}/>
      )}
    </div>
  );}
