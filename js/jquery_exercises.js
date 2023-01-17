"use strict";

$(document).ready(function(){
    //put all jQuery code in here
    // let $background = $('h1').on('click', function (){
    //     $background.css('background-color', 'red')
    // })
    // let $fontSize = $('p').on("dblclick", function(){
    //     $fontSize.css('font-size', '18px')
    // })
    // let $mouseHover = $('li').hover(function(){
    //     $mouseHover.css('color', 'red')},
    //     function(){
    //     $mouseHover.css('color', 'black')
    //     })
    $('.login').click(function(){
        $(this).css('background-color', 'red');
    });
    $('.menu, .close-menu').click(function(){
        $('.mobile-menu').toggleClass('open');
    });
})
// $(function (){
//     alert("DOM has finished loading")
// })
// $(function() {
//     alert($('#title').text());
// });
// alert($('#title').text());
// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('color', 'yellow')
//
// alert($('h1').text());
