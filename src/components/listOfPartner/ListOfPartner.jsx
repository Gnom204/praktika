import React from 'react'
import partner1 from '../../source/images/partner-1.png'
import partner2 from '../../source/images/partner-2.png'
import partner3 from '../../source/images/partner-3.png'
import partner4 from '../../source/images/partner-4.png'
import partner5 from '../../source/images/partner-5.png'
import partner6 from '../../source/images/partner-6.png'
import partner7 from '../../source/images/partner-7.png'
import './ListOfPartner.css'

function ListOfPartner() {

const list = [{
    id: 1,
    img: partner1
}, 
{
    id: 2,
    img: partner2
}, 
{
    id: 3,
    img: partner3
}, 
{
    id: 4,
    img: partner4
}, 
{
    id: 5,
    img: partner5
}, 
{
    id: 6,
    img: partner6
}, 
{
    id: 7,
    img: partner7
}]

  return (
    <div className='list-of-partner'>
        <h2 className='list-of-partner__title'>Наши партнеры и заказчики</h2>
        <div className='list-of-partner__list'>{list.map((item) => {
            return (
                <img className='list-of-partner__item' key={item.id} src={item.img} alt="" />
            )
        })}
        </div>
    </div>
  )
}

export default ListOfPartner