import React from 'react'
import './EducationCard.css'

function EducationCard() {
  return (
    <div className='cyber-card'>
        <div className='vertical-col-1'>
            <div className='col-1-trian1'></div>
            <div className='col-1-rectan1'></div>
            <div className='col-1-shape'>
                <div className='shape-part1'>
                    <div className='shape-part1-trian1'></div>
                    <div className='shape-part1-trian2'></div>
                </div>
                <div className='shape-part2'></div>
            </div>
            <div className='col-1-rectan2'></div>
            <div className='col-1-trian2'></div>
        </div>
        <div className='vertical-col-2'>
            <div className='col-2-row-1'>
                <div className='col-2-rectan1'></div>
                <div className='col-2-shape'>
                    <div className='shape2-part1'>
                        <div className='shape2-part1-trian1'></div>
                        <div className='shape2-part1-trian2'></div>
                    </div>
                    <div className='shape2-part2'></div>
                </div>
                <div className='col-2-rectan2'></div>
            </div>
            <div className='col-2-row-2'>
                <div className='card-area'>
                    <div className='card-header-area'>
                        <div className='card-header-img'>
                            <img src='https://th.bing.com/th/id/R.e2326980441807c270ded222289a41e7?rik=MUn4OBDboZpoOQ&pid=ImgRaw&r=0'
                             className='card-image' />
                        </div>
                        <div className='card-header-name-area'>
                            <h2 className='institute-name'>University Of Sri Jayewardenepura</h2>
                            <h6 className='start-date'>JUNE 2023</h6>
                            <h6 className='end-date'>JUNE 2027</h6>
                        </div>
                    </div>
                    <div className='card-description-area'></div>
                    <div className='card-footer-area'></div>
                </div>
            </div>
            <div className='col-2-row-3'>
                <div className='row-3-col-2-rectan1'></div>
                <div className='row-3-col-2-shape'>
                    <div className='row-3-shape-part2'></div>
                    <div className='row-3-shape-part1'>
                        <div className='row-3-shape-part1-trian1'></div>
                        <div className='row-3-shape-part1-trian2'></div>
                    </div>
                </div>
                <div className='row-3-col-3-rectan2'></div>
            </div>
        </div>
        <div className='vertical-col-3'>
            <div className='col-3-train1'></div>
            <div className='col-3-rectan'></div>
            <div className='col-3-train2'></div>
        </div>
    </div>
  )
}

export default EducationCard;