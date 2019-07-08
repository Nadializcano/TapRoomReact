import React from 'react';
import Kegs from './Kegs';
export default KegsList;

const availableKegs = [
  {
    name: 'Elysian IPA',
    brand: 'Elysian Brewing',
    price: '109',
  },
  {
    name: 'Seattle Cider',
    brand: 'Seattle Cider Company',
    price: '129',
  },
  {
    name: 'Stella Artois',
    brand: 'Stella Artois',
    price: '109',
  },
  {
    name: 'Lagunitas IPA',
    brand: 'Lagunitas Brewing Company',
    price: '129',
  },
  {
    name: 'Sierra Nevada',
    brand: 'Sierra Nevada Brewing Co.',
    price: '100',
  },
  {
    name: 'Deschutes Mirror Pond',
    brand: 'Deschutes Brewery',
    price: '199',
  },
  {
    name: 'Pilsner Urquell',
    brand: 'Pilsner Urquell',
    price: '219',
  },
  {
    name: 'Alaskan Amber',
    brand: 'Alaskan Brewing Co.',
    price: '100',
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
