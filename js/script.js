$('.mobile-tab').hide();

$('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(1000);
})

var block = document.getElementsById('vc');

block.onclick = function() {
    this.style.background = 'black';
    this.onclick = null;
}