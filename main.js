// $(function() {

//     // дозволяє рухати елементами
//     // $('#child').draggable({
//         // containment: '#parent' // обмежує тільки в полі parent 
//         // containment: [150, 150, 450, 450] //буде рухати тільки по цим точкам
//         // axis: 'x'  // рухає тільки по осі x
//         // axis: 'y' // рухає тільки по осі y
        
//         // grid: [200, 200] // буде рухати по 200 пікселів в гору і в низ 

//         // cursor: 'move' // буде змінюватись курсор при рузу елемета, можем вказати лююибй курсор 
//         // cursor: 'pointer'

//         // handle: '#trigger' // зможемо пересувати тільки коли берем за trigger 

//         // revert: true, // приймає параметр boolean по дефолту false  // поверне елемент назад післятого як його відпустити
//         // revertDuration: 2000,
//         //приймає два параметри подію і ui
//         // start: function(event, ui) {
//         //     console.log(event);
//         //     console.log(ui)
//         // },
//         // stop: function(event, ui) {
//         //     console.log(event);
//         //     console.log(ui)
//         // }



//         //...........................
        
//         $('.drag').draggable()

//         $('.drop').droppable({
//             activeClass: 'active',
//             hoverClass: 'hover',
//             accept: '.drag',
//             // tolerance: '', // по дефолту intersect
//             // tolerance: 'touch', // спрацьовує тільки коли елемент торкнеться
//             // tolerance: 'fit', // спрацьовує тільки коли елемент поністю в елеемнті 
//             tolerance: 'pointer',
            

//             activate: function() {
//                 $(this).html('<h2>You activate drag effect</h2>')
//             },
//             deactivate: function() {
//                 $(this).html('<h2>You deactivate drag effect</h2>')
//             },
//             over: function () {
//                 $(this).html('<h2>Now you can drop this item</h2>')
//             },
//             out: function() {
//                 $(this).html('<h2>Come back</h2>')
//             },
//             drop: function(event) {
//                 console.log(event)
//                 // alert('Done!'); // спрацьовує коли елемент на drop
//             }
//         })





// })




// $(function() {
//     // можемо пересувати елементи 
//     $('#left, #right').sortable({
//         connectWith: '#left, #right', // можемо ставити елементи з одного блоку в інший 
//         cancel: 'h2', // не можемо рухати елементами h2
//         distance: 20, // дистанція в пікселях, відривається від блоку коли курсором проходиш 20 пікселів 
//         delay: 1000, // затримка в 1 секунду 
        
//     })



// })


// TASK 

$(function() {
    let check = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let count = 0;
    $('.box1, .box2').sortable({
        connectWith: '.box1, .box2',

    })

    $('#check').click(function() {
        console.log($('.box').length);
        for(let i = 0; i < $('.box').length; i++) {
            if($('.box2>.box').eq(i).text() == check[i]) {
                count++;
            }
        }
        if(count == 9) {
            alert('You win');
        } else {
            count == 0;
            alert('You Lose')
        }
    })
})













