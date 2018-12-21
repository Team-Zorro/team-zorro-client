'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
const websiteEvents = require('./websites/events.js')
const snowAnimation = require('./snow.js')
$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Websites
  $('#show-all-websites').on('click', websiteEvents.onGetAllWebsites)
  $('#create-website').on('submit', websiteEvents.onCreateWebsite)
  $('.website-content').on('click', 'button', websiteEvents.onDeleteWebsite)
  // Blogs
  $('#show-all-blogs').on('click', blogEvents.onGetAllBlogs)
  $('#create-blog').on('submit', blogEvents.onCreateBlog)
  $('.blog-content').on('click', 'button', blogEvents.onDeleteBlog)

  // $('#clickeme').on('click', console.log('here'))
  // let skipReady= true

  // if(skipReady)  {
  // $(document).ready(snowAnimation.init)
  // }
  // var sound1url = 'https://audio.code.org/win3.mp3';
  // <button onclick="new Audio(sound1url).play();">Play sound1 individually</button>
  // $('.clickme').on('click', 'button', blogEvents.playSoundAsync(sound1url))
  // let x = document.getElementById("myAudio")
  // $('#play').on('click', playAudio)
  // function playAudio() {
  //   console.log('play')
  //   // x.play();
  // }
  //
  // function pauseAudio() {
  //   x.pause();
  // }
})
