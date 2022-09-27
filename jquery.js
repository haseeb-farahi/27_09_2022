


// $('button').click(()=>{
    // $('div').children('p:last').css({'color':'red'})
    // $('div').find('b').css({'color':'green'})
    // $('p').siblings('').css({'color':'blue','font-size': '20px'})
//     $('p').siblings('h1').css({'color':'blue','font-size': '20px'})
// $('p').next().css({'color':'green'})
// $('p').nextAll().css({'color':'yellow'})
// $('p').nextUntil('b').css({'color':'red'})
// $('p').prev('b').css({'color':'blue'})
// $('div').first().css({'color':'blue'})
// $('div').last().css({'color':'green'})
// $('p').filter('.test').css('color','red')


// })

// var xhr = new XMLHttpRequest
$('button').click(function(){
    // $('#output').load('try.html h1',function(responseTxt,statusTxt,xhr){
    //     console.log(xhr)
    //     if(statusTxt =="sucess"){
    //         alert('data loaded successfully')

    //     }else if(statusTxt == 'error'){
    //         alert('something went wrong' + xhr.status)
    //     }

    //     // alert('data loaded successfully!')
    // })
    $.get('try.html',function(data){
        $('#output').html(data)
    })
})
