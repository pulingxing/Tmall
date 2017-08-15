
$(document).ready(function(){
       function mouseover(e){
            var list = $('#subject li');
            var target = $(e.target).parents('li');
            list.removeClass('big');
            target.addClass('big');
        }
        (function(){
            var outer = $('#subject');
            outer.find('li').on('mouseover', mouseover);
        })();	
});
