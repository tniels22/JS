cat = 0;
for (var cat_index in piclist) {
    var category = piclist[cat_index];
    id = 1;
    cat++;
    jQuery('.largePhotoStream').append('<div class="'+cat+'">');
    jQuery('.thumbnailStream').append('<div class="'+cat+'">');
    for (var image_index in category) {
        var imagepair = category[image_index];
        var fullsize = baseurl + imagepair[0];
        var thumbnail = baseurl + imagepair[1];
        jQuery('.thumbnailStream .'+cat+'').append('<img id="'+id+'" src="' + thumbnail + '">');
        jQuery('.largePhotoStream .'+cat+'').append('<img id="'+id+'" src="' + fullsize + '">');
            id++;
          }
      }
        jQuery(document).ready(  function() {
          jQuery('img').click(function(event){
            currentItem = $('#'+this.id+'');
            currentItem.addClass('clicked');
            parent_class = $("img#"+this.id+"").parent().attr('class');
            var new_slide = $(".largePhotoStream ."+parent_class+" #"+this.id+"")
            new_slide.css('display', 'block');
            jQuery('img').click(function(event){
              new_slide.css('display', 'none');
            })
          });
          jQuery("#bttn1").click(function(event){
                $(".thumbnailStream  div.1").css('display', 'block');
                $(".thumbnailStream div.2").css('display', 'none');
                $(".thumbnailStream div.3").css('display', 'none');
                $(".thumbnailStream div.4").css('display', 'none');
          })
          jQuery("#bttn2").click(function(event){
                $(".thumbnailStream  div.1").css('display', 'none');
                $(".thumbnailStream div.2").css('display', 'block');
                $(".thumbnailStream div.3").css('display', 'none');
                $(".thumbnailStream div.4").css('display', 'none');
          })
          jQuery("#bttn3").click(function(event){
                $(".thumbnailStream  div.1").css('display', 'none');
                $(".thumbnailStream div.2").css('display', 'none');
                $(".thumbnailStream div.3").css('display', 'block');
                $(".thumbnailStream div.4").css('display', 'none');
          })
          jQuery("#bttn4").click(function(event){
                $(".thumbnailStream  div.1").css('display', 'none');
                $(".thumbnailStream div.2").css('display', 'none');
                $(".thumbnailStream div.3").css('display', 'none');
                $(".thumbnailStream div.4").css('display', 'block');
          })
          var delay=1000;
          $( "#bttn1" ).click();
          $(".thumbnailStream div.1 img#1").click();
          /*$(".thumbnailStream div.1 img").each(function(){
            $(this).click(delay);
          });*/
          });
/*
      .propertyId{
        width: 100%;
        hieght: 75 px;
        background-color: #0474BF;
      }
*/
//Displays All Menus
// Need to show only menu hovered over....
/*
jQuery(document).ready(  function() {
  jQuery('.photo').click(function(){
    (jQuery('.largePhoto').css('display', 'none'));
     (jQuery('.largePhoto').removeClass('clicked'));
 });
})
/*
        jQuery(document).ready(function() {
          jQuery('.dropdown-content').css('display', 'block');
    })

myFunction = document.onclick = function (event) {
  document.getElementById("myDropdown").classList.toggle("show")
}
*/
/*
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event){
  if(event.target.matches('dropdown')){
    var dropdowns  = document.getElementsByClassName('dropdown-content');
    var i;
    for (i=0; i<dropdowns.length; i++){
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
