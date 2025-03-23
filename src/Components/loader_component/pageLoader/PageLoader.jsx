import React from 'react'
import './PageLoader.css'
import LoadingBackgroundMusic from '../../music_component/LoadingBackGroundMusic'
import file from '../../../assets/Loader.mp3';

function PageLoader() {
  return (
    <div class="container">
        <LoadingBackgroundMusic musicFile={file} loop={false} />
        <div id='loader'>
            <div id='title' class='flex'>
            <p class='loading-text'>LOADING</p>
            <div class='therefore'>∴</div>
            <p class="loading-number">%</p>
            </div>
            <div id='loading-bar-border'>
            <div class='loading-bar'>
            </div>
            </div>
            <div id='warning'>
            <p>
                <div class='exclamation'>!</div>
                CAUTION, Page Loading | Do not turn off.
            </p>
            <div id='line-cascates'></div>
            </div>
        </div>
    </div>
  )
}

export default PageLoader