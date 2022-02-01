import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Enjoy the little things...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../assets/images/one.JPG'
              text='Ask for delivery..+254 708 294717 We got something for everyone.'
              label='Birthday Cakes'
              path='/services'
            />
            <CardItem
              src='../assets/images/two.JPG'
              text='Ask for delivery..+254 708 294717 We got something for everyone'
              label='Doughnuts'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../assets/images/twelve.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste! '
              label='Hotdog n fries'
              path='/services'
            />
            <CardItem
              src='../assets/images/four.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Pizza'
              path='/products'
            />
            <CardItem
              src='../assets/images/five.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Cheesy humburger'
              path='/sign-up'
            />
             <CardItem
              src='../assets/images/eight.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Muffins'
              path='/sign-up'
            />
             <CardItem
              src='../assets/images/ten.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Scones'
              path='/sign-up'
            />
             <CardItem
              src='../assets/images/six.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Humburger'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../assets/images/eleven.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Yummy hotdogs'
              path='/services'
            />
            <CardItem
              src='../assets/images/seven.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Pizza'
              path='/products'
            />
            <CardItem
              src='../assets/images/nine.JPG'
              text='Ask for delivery..+254 708 294717 Beyond the boundaries of taste!'
              label='Sweet scones'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;