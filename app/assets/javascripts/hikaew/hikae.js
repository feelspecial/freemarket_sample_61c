// 完成品っぽいもの


// $(function(){
//   $('.select-brand-box').attr('autocomplete', 'off'); //入力履歴非表示

// // $(document).on('turbolinks:load', function(){

//   // window.onload = function () {
//   //   var target_reset0 = $("preview-image-box");
//   //   var target_reset1 = $(".image1");
//   //   var target_reset2 = $(".image2");
//   //   var target_reset3 = $(".image3");
//   //   var target_reset4 = $(".image4");
//   //   var test = $("preview-image-box");


   
  
//   //   target_reset0.val('');
//   //   target_reset1.val('');
//   //   target_reset2.val('');
//   //   target_reset3.val('');
//   //   target_reset4.val('');


//   //   target_reset1.remove();
//   //   target_reset2.remove();
//   //   target_reset3.remove();
//   //   target_reset4.remove();

  
//   //   console.log(test)
//   //   console.log(target_reset1)
//   //   console.log(target_reset2)
//   //   console.log(target_reset3)
//   //   console.log(target_reset4)
  
//   // };

//   // $("form")[0].reset();
//   var dropzone = $('.dropzone-area');
//   var images = [];
//   var inputs  =[];
//   var preview = $('preview-image-box');


//   $(function(){

//   // 画像プレビュー画面用HTML
//   function buildImage(loadedImageUri){
//     var html =
//     `
//     <div class="images-preview-box image${images.length}">
//       <div class="img-box image${images.length}">
//         <img src=${loadedImageUri} >
//       </div>  
//       <div class="preview-box-btn image${images.length}">
//         <div class="preview__box__edit image${images.length}">編集</div>
//         <div class="preview__box__delete image${images.length}">削除</a></div>
//       </div>
//     </div>
//     `
//     return html
//   };


//   // 商品画像の選択後イベント
//   // $(document).off('change')
//     $(document).on('change','input[type= "file"].preview-image', function () {

//       var file = $(this).prop('files')[0];
//       // file = $(this)[0].files;
//       // var file = $(this).prop('files')[0];
//       var reader = new FileReader();
//       inputs.unshift($(this));

//       reader.onload = function (e) {
//       var loadedImageUri = e.target.result;

      
      
//       // HTML形成
//       $(buildImage(loadedImageUri)).prependTo("#preview-image-box");
//       };

//       var img_box = $(`<div class= "img-box"><img></div>`);
//       reader.readAsDataURL(file);
//       // images.unshift(img_box);


//       var index_num = $(".preview__box__delete").index(this);
//       console.log(images.length)
//       console.log(inputs.length)
//       console.log(images)
//       console.log(index_num)
//       console.log(".preview-image")


//       // 画像枚数による表示変更条件分岐
//       if(images.length <= 4){
//         $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview.prepend(image);
//         dropzone.css({
//           'width': `calc(100% - (120px * ${images.length - 5}))`
//         })
//         dropzone.css({
//           'display': `block`
//         })
//       })
//       }
//       else {
//         $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         dropzone.css({
//           'display': `none`
//         })
//       })


//       return;
//       }
    
//       var new_image = $(`<input multiple= "multiple" name="images[image_url][]" class="preview-image image${images.length}" data-image= ${images.length} type="file" id="preview-image" style="display:none;">`);
//       $('.file_input_area').prepend(new_image);

//     })
//   });






// // 控え
// // -----------------削除--------------------------


// // $(document).on('click', '.preview__box__delete', function() {

// //   var target_image = $(this).parent().parent();

// //   console.log(target_image.data('image'))

// //   $.each(inputs, function(index, input){
// //     if ($(this).data('image') == target_image.data('image')){
// //       $(this).remove();
// //       target_image.remove();
// //       var num = $(this).data('image');
// //       images.splice(num, 1);
// //       inputs.splice(num, 1);



// //       console.log(num)


// //       if(inputs.length == 0) {
// //         $('input[type= "file"].preview-image').attr({'data-image': 0})
// //       }
// //     }
// //   })



  

  
//   // $('input[type= "file"].preview-image:first').attr({
//   //   'data-image': inputs.length
//   // })
//   // $.each(inputs, function(index, input) {
//   //   var input = $(this)
//   //   input.attr({
//   //     'data-image': index
//   //   })
//   //   $('input[type= "file"].preview-image:first').after(input)
//   // })





// //     dropzone.css({
// //       'display': 'block'
// //     })
// //     $.each(images, function(index, image) {
// //       image.attr('data-image', index);
// //       preview.append(image);
// //     })
// //     dropzone.css({
// //       'width': `calc(100% - (126px * ${images.length}))`
// //     })

// //   if(images.length == 4) {

// //   }
// //   if(images.length == 3) {
// //     dropzone.find('i').replaceWith('<p>ドラッグ&ドロップまたはクリックしてファイルをアップロード</p>')
// //   }
// // })

// // $(".preview__box__delete").on("click", function() {
// //   var target_image = $(this).parent().parent();
// //   var img_id = target_image.data('id')
// //   target_image.remove();
// //   hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //   $('.dropzone-container2').append(hidden_form)


// // });
// // });










//   //出品時の画像数を取得

//   var savedtotal = 0
//   if ( $(".block-image").data("savedtotal") ){
//     savedtotal = $(".block-image").data("savedtotal");
//   }
//   var delete_request_index = [];


//   console.log(images.length)
//   console.log(inputs.length)
//   console.log(images)
//   console.log($(".preview__box__delete").index(this))
//   console.log(".preview-image")
//   console.log(".img-box")

  
//   // $(document).on("click",".delete_btn_box2", function(){

//     // var index = $(".delete_btn_box2").index(this);
//     // // クリックされたaタグの順番から、削除すべき画像を特定し、配列から削除する。
//     // // files_array.splice(index - 1, 1);
//     // delete_request_index.push($(this).parent().parent().data("alreadysaved"));
//     // $(this).parent().parent().remove();

//   // });



// //  // クリックされた画像を削除する。
// //  $(document).on('click','.preview__box__delete', function(){
  
// //   var index = $(".preview__box__delete").index(this);
// //   // クリックされたaタグの順番から、削除すべき画像を特定し、配列から削除する。
// //   images.splice(index - 1, 1);
// //   inputs.splice(index - 1, 1);
//   // delete_request_index.push($(this).parent().parent().data("saved"));
//   // $(this).parent().parent().remove();

// //   console.log(index)
// //   console.log(images)
// //   console.log(inputs)
// //   console.log(delete_request_index)
// //   console.log(savedtotal)
// //   console.log(delete_request_index)

  
// // });  
// // });  









//    // クリックされた画像を削除する。

//   $(document).on('click','.preview__box__delete', function(){

  
  
//   var index_num = $(".preview__box__delete").index(this);
//   var del_num = index_num + 1
//   var preview_delete = $(".preview-image").eq(del_num);

//   images.splice(index_num , 1);
//   inputs.splice(index_num , 1);
  

//   delete_request_index.push($(this).parent().parent().data("image"));
//   $(this).parent().parent().remove();
//   preview_delete.val('');
//   preview_delete.remove();


//   // $(".preview-image").splice(del_num , 1);
//   // 画像枚数による表示変更条件分岐
//   if(images.length <= 4){
//     dropzone.css({
//       'display': `block`
//     })
//   }
//   else {
//     dropzone.css({
//       'display': `none`
//     })

//   }  
//   // 商品編集用です
//   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
//   // $('.dropzone-container3').append(hidden_form)

  

//   console.log(images.length)
//   console.log(inputs.length)
//   console.log(images)
//   console.log(index_num)
//   console.log(del_num)
//   console.log(".img-box")


 


// })

// });  





















































//   途中から控え

//   var target_image = $(this).parent().parent();
//   var target_image_box = $(this).parent().closest().find("img-box");
//   var target_image_img = $(this).parent().closest().find("img");
//   var del_num = index_num + 1
//   var preview_delete = $(".preview-image").eq(- del_num);
//   // var del_num = index + 1
//   // var preview_delete = $(".preview-image").eq(- del_num);
//   var del_img = index_num



//   $.each(inputs, function(index, input){

//   images.splice(del_img , 1);
//   inputs.splice(del_img , 1);



//   var target_image_box_c = $(target_image_box).prev().clone();
//   target_image_box_c.val('');
//   $(target_image_box).prev().replaceWith(target_image_box_c);




//   target_image_img.val('');
//   target_image_box.val('');
//   target_image.val('');
//   target_image_img.remove();
//   target_image_box.remove();
//   target_image.remove();
//   if(inputs.length == 0) {
//     $('input[type= "file"].preview-image').attr({'data-image': 0})
//   }



//   $(this).parent().remove();


//   $(this).parent().remove();


//   // img_box_delete.val('');
//   preview_delete.val('');
//   preview_delete.remove();





//   delete_request_index.push($(this).parent().parent().data("saved"));
//   $(this).parent().parent().remove();


  // $(this).remove();
  // // $(".preview-image").splice(del_num , 1);
  // // 画像枚数による表示変更条件分岐
  // if(images.length <= 4){
  //   dropzone.css({
  //     'display': `block`
  //   })
  // }
  // else {
  //   dropzone.css({
  //     'display': `none`
  //   })

  // }  
  // // 商品編集用です
  // // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
  // // $('.dropzone-container3').append(hidden_form)


// })

// });

// });  
















// 控え
// $(".preview__box__delete").on("click", function() {
//   var target_image = $(this).parent().parent();
//   var img_id = target_image.data('id')
//   target_image.remove();
//   hidden_form = `<input type="hidden", name="[delete_ids][]", value="${del_img}">`
//   $('.dropzone-container3').append(hidden_form)


//   console.log(img_id)

// });
// })








// 控え
// $(document).on('submit','.form__submit', function () {
//   var target_reset1 = $(".image1");
//   var target_reset2 = $(".image2");
//   var target_reset3 = $(".image3");
//   var target_reset4 = $(".image4");
//   var test

//   target_reset1.remove();
//   target_reset2.remove();
//   target_reset3.remove();
//   target_reset4.remove();
//   images.remove();
//   inputs.remove();

//   console.log(test)




//   var index = $(".preview__box__delete").index(this);
//   var del_num = index + 1
//   var preview_delete = $(".preview-image").eq(- del_num);
//   var del_img = index
//   images.splice(del_img , 1);
//   inputs.splice(del_img , 1);

//   target_image.remove();
//   // $(this).parent().remove();


//   // $(this).parent().remove();
//   console.log(preview_delete)
//   console.log(target_image)
//   console.log(images)
//   console.log(del_num)
//   console.log(index)
//   console.log(images.length)
//   console.log(del_img)

//   // img_box_delete.val('');
//   preview_delete.val('');
//   preview_delete.remove();
//   $(this).remove();
//   // $(".preview-image").splice(del_num , 1);
//   // 画像枚数による表示変更条件分岐
//   if(images.length <= 4){
//     dropzone.css({
//       'display': `block`
//     })
//   }
//   else {
//     dropzone.css({
//       'display': `none`
//     })

//   return;
//   }  
//   // 商品編集用です
//   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
//   // $('.dropzone-container3').append(hidden_form)





// });  














//  // クリックされた画像を削除する。
//  $(document).on('click','.preview__box__delete','turbolinks:load', function(){
//   var index = $(".preview__box__delete").index(this);
//   var target_image = $(this).parent().parent();
//   var del_num = index + 1
//   var preview_delete = $(".preview-image").eq(- del_num);
//   var del_img = index
//   images.splice(del_img , 1);
//   inputs.splice(del_img , 1);
//   target_image.remove();
//   // $(this).parent().remove();


//   // $(this).parent().remove();
//   console.log(preview_delete)
//   console.log(target_image)
//   console.log(images)
//   console.log(del_num)
//   console.log(index)
//   console.log(images.length)
//   console.log(del_img)

//   // img_box_delete.val('');
//   preview_delete.val('');
//   preview_delete.remove();
//   $(this).remove();
//   // $(".preview-image").splice(del_num , 1);
//   // 画像枚数による表示変更条件分岐
//   if(images.length <= 4){
//     dropzone.css({
//       'display': `block`
//     })
//   }
//   else {
//     dropzone.css({
//       'display': `none`
//     })

//   return;
//   }  
//   // 商品編集用です
//   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
//   // $('.dropzone-container3').append(hidden_form)

// });
// });  

















//   // クリックされた画像を削除する。
//   $(document).on('click','.preview__box__delete','turbolinks:load', function(){
//     var index = $(".preview__box__delete").index(this);
//     var inp_num = images.length - index - 1
//     var target_image = $(this).parent().parent();
//     var preview_delete = $(".preview-image").eq(inp_num);
//     var del_num = inp_num
//     images.splice(index , 1);
//     // target_image.val('');
//     // $(this).parent().val('');
//     target_image.remove();
//     // $(this).parent().remove();
//     console.log(preview_delete)
//     console.log(target_image)
//     console.log(images)
//     console.log(del_num)
//     console.log(inp_num)
//     console.log(index)
//     console.log(images.length)


//     preview_delete.val('');
//     preview_delete.remove();
//     $(".preview-image").splice(del_num - 1 , 1);
//     // 画像枚数による表示変更条件分岐
//     if(images.length <= 4){
//       dropzone.css({
//         'display': `block`
//       })
//     }
//     else {
//       dropzone.css({
//         'display': `none`
//       })

//     return;
//     }  
//     // 商品編集用です
//     // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
//     // $('.dropzone-container3').append(hidden_form)

//   });
// });  





















//    // クリックされた画像を削除する。
//  $(document).on('click','.preview__box__delete', function(){
//   var target_image = $(this).parent().parent();
//   $.each(inputs, function(index, input){
//     // if ($(this).data('image') == target_image.data('image')){
//       $(this).remove();
//       target_image.remove();
//       var num = $(this).data('image');
//       images.splice(num, 1);
//       inputs.splice(num, 1);
//       if(inputs.length == 0) {
//         $('input[type= "file"].preview-image').attr({'data-image': 0})
//       }
//     // }
//   })
//   $('input[type= "file"].preview-image:first').attr({
//     'data-image': inputs.length
//   })
//   $.each(inputs, function(index, input) {
//     var input = $(this)
//     input.attr({
//       'data-image': index
//     })
//     $('input[type= "file"].preview-image:first').after(input)
//   })
//   if(images.length <= 4){
//     dropzone.css({
//       'display': `block`
//     })
//   }
//   else {
//     dropzone.css({
//       'display': `none`
//     })

//   }  
// })
























// $(document).on('turbolinks:load', function(){
  
//   window.onload = function () {
    
//     var target_reset0 = $("preview-image-box");
//     var target_reset1 = $(".image1");
//     var target_reset2 = $(".image2");
//     var target_reset3 = $(".image3");
//     var target_reset4 = $(".image4");
//     var test = $("preview-image-box");
  
//     target_reset0.val('');
//     target_reset1.val('');
//     target_reset2.val('');
//     target_reset3.val('');
//     target_reset4.val('');


//     target_reset1.remove();
//     target_reset2.remove();
//     target_reset3.remove();
//     target_reset4.remove();

  
//     console.log(test)
//     console.log(target_reset1)
//     console.log(target_reset2)
//     console.log(target_reset3)
//     console.log(target_reset4)
  
//   };

//   // $("form")[0].reset();
//   var dropzone = $('.dropzone-area');
//   var images = [];
//   var inputs  =[];
//   var preview = $('preview-image-box');
//   // 画像プレビュー画面用HTML
//   function buildImage(loadedImageUri){
//     var html =
//     `
//     <div class="images-preview-box image${images.length}">
//       <div class="img-box image${images.length}">
//         <img src=${loadedImageUri} >
//       </div>  
//       <div class="preview-box-btn image${images.length}">
//         <div class="preview__box__edit image${images.length}">編集</div>
//         <div class="preview__box__delete image${images.length}">削除</a></div>
//       </div>
//     </div>
//     `
//     return html
//   };


//   // 商品画像の選択後イベント
//     $(document).off('change')
//     $(document).on('change','input[type= "file"].preview-image', function (event) {

//      var test = $('.dropzone-area');


//       console.log(test)


//       file = $(this)[0].files;

//       console.log(file)

//       // file = $(this)[0].files;
//       // var file = $(this).prop('files')[0];
//       var reader = new FileReader();
//       inputs.unshift($(this));

//       reader.onload = function (e) {
//       var loadedImageUri = e.target.result;

      
      
//       // HTML形成
//       $(buildImage(loadedImageUri,)).appendTo("#preview-image-box");
//       };

//       var img_box = $(`<div class= "img-box"><img></div>`);
//       reader.readAsDataURL(file[0]);
//       images.unshift(img_box);
//       // 画像枚数による表示変更条件分岐
//       if(images.length <= 4){
//         $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview.append(image);
//         dropzone.css({
//           'width': `calc(100% - (120px * ${images.length - 5}))`
//         })
//         dropzone.css({
//           'display': `block`
//         })
//       })
//       }
//       else {
//         dropzone.css({
//           'display': `none`
//         })

//       return;
//       }

//       var new_image = $(`<input multiple= "multiple" name="images[image_url][]" class="preview-image image${images.length}" data-image= ${images.length} type="file" id="preview-image" style="display:none;">`);
//       $('.file_input_area').prepend(new_image);

//     // })
//   });




//  // クリックされた画像を削除する。
//  $(document).on('click','.preview__box__delete','turbolinks:load', function(){
//   var index_num = $(".preview__box__delete").index(this);
//   var target_image = $(this).parent().parent();
//   var target_image_box = $(this).parent().closest().find("img-box");
//   var target_image_img = $(this).parent().closest().find("img");
//   var inp_num = images.length - index_num - 1
//   var del_num = index_num + 1
//   var preview_delete = $(".preview-image").eq(- del_num);
//   // var del_num = index + 1
//   // var preview_delete = $(".preview-image").eq(- del_num);
//   var del_img = inp_num
//   del_count = 0
//   del_total = del_img - del_count

//   target_image_img.remove();
//   target_image_box.remove();
//   target_image.remove();



//   preview_delete.val('');
//   preview_delete.remove();
//   $(this).remove();
//   // $(".preview-image").splice(del_num , 1);
//   // 画像枚数による表示変更条件分岐
//   if(images.length <= 4){
//     dropzone.css({
//       'display': `block`
//     })
//   }
//   else {
//     dropzone.css({
//       'display': `none`
//     })

//   }  

//   del_count += 1

//   // 商品編集用です
//   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
//   // $('.dropzone-container3').append(hidden_form)

//   $(document).on('change')


// });





// // $(".preview__box__delete").on("click", function() {
// //   var index_num = $(".preview__box__delete").index(this);
// //   var target_image = $(this).parent().parent();
// //   var target_image_box = $(this).parent().closest().find("img-box");
// //   var target_image_img = $(this).parent().closest().find("img");
// //   var del_num = index_num + 1
// //   var preview_delete = $(".preview-image").eq(- del_num);
// //   var del_img = index_num

// //   var img_id = target_image.data('id')

// //   target_image.remove();




// //   hidden_form = `<input type="hidden", name="[delete_ids][]", value="${del_img}">`
// //   $('.dropzone-container2').append(hidden_form)


// //   console.log(img_id)

// //   $(document).on('change')





// //   if(images.length <= 4){
// //     dropzone.css({
// //       'display': `block`
// //     })
// //   }
// //   else {
// //     dropzone.css({
// //       'display': `none`
// //     })

// //   }  


// });
// // })








// $(document).off('submit')
// $(document).on('submit','.form__submit', function () {
//   var target_reset1 = $(".image1");
//   var target_reset2 = $(".image2");
//   var target_reset3 = $(".image3");
//   var target_reset4 = $(".image4");

//   var file_area = $(".preview-image");


//   file_area.val('');
//   target_reset1.val('');
  
 

//   target_reset1.remove();
//   target_reset2.remove();
//   target_reset3.remove();
//   target_reset4.remove();
//   images.remove();
//   inputs.remove();


//   console.log(target_reset1)
//   console.log(target_reset2)

  

// });








//   // var num = $(this).data('image');
//   // $.each(inputs, function(index, input){



  

//   // if (inp_num == 0)  {
//   //   images.splice(inp_num , -1);
//   //   inputs.splice(inp_num , -1);
//   // }
//   // else{

//   //   images.splice(inp_num , 1);
//   //   inputs.splice(inp_num , 1);

//   // }




//   // var target_image_box_c = $(target_image_box).prev().clone();
//   // target_image_box_c.val('');
//   // $(target_image_box).prev().replaceWith(target_image_box_c);

//   // target_image_img.val('');
//   // target_image_box.val('');
//   // target_image.val('');

//   // if(inputs.length == 0) {
//   //   $('input[type= "file"].preview-image').attr({'data-image': 0})
//   // }


// // })
//   // $(this).parent().remove();


//   // var dataimg = $(this).data('image')
//   // $(this).parent().remove();
//   // console.log(preview_delete)
//   // console.log(target_image)
//   // console.log(target_image_box)
//   // console.log(target_image_img)
//   // console.log(images)
//   // console.log(inputs)
//   // console.log(del_num)
//   // console.log(index_num)
//   // console.log(images.length)
//   // console.log(del_img)
//   // console.log(num)
//   // console.log(dataimg)

//   // img_box_delete.val('');









// //  // クリックされた画像を削除する。
// //  $(document).on('click','.preview__box__delete','turbolinks:load', function(){
// //   var index = $(".preview__box__delete").index(this);
// //   var target_image = $(this).parent().parent();
// //   var del_num = index + 1
// //   var preview_delete = $(".preview-image").eq(- del_num);
// //   var del_img = index
// //   images.splice(del_img , 1);
// //   inputs.splice(del_img , 1);
// //   target_image.remove();
// //   // $(this).parent().remove();


// //   // $(this).parent().remove();
// //   console.log(preview_delete)
// //   console.log(target_image)
// //   console.log(images)
// //   console.log(del_num)
// //   console.log(index)
// //   console.log(images.length)
// //   console.log(del_img)

// //   // img_box_delete.val('');
// //   preview_delete.val('');
// //   preview_delete.remove();
// //   $(this).remove();
// //   // $(".preview-image").splice(del_num , 1);
// //   // 画像枚数による表示変更条件分岐
// //   if(images.length <= 4){
// //     dropzone.css({
// //       'display': `block`
// //     })
// //   }
// //   else {
// //     dropzone.css({
// //       'display': `none`
// //     })

// //   return;
// //   }  
// //   // 商品編集用です
// //   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //   // $('.dropzone-container3').append(hidden_form)


// // });  













// //  // クリックされた画像を削除する。
// //  $(document).on('click','.preview__box__delete','turbolinks:load', function(){
// //   var index_num = $(".preview__box__delete").index(this);
// //   var target_image = $(this).parent().parent();
// //   var target_image_box = $(this).parent().closest().find("img-box");
// //   var target_image_img = $(this).parent().closest().find("img");
// //   var inp_num = images.length - index_num - 1
// //   var del_num = index_num + 1
// //   var preview_delete = $(".preview-image").eq(- del_num);
// //   // var del_num = index + 1
// //   // var preview_delete = $(".preview-image").eq(- del_num);
// //   var del_img = inp_num
// //   del_count = 0
// //   del_total = del_img - del_count

// //   // var num = $(this).data('image');


// //   // $.each(inputs, function(index, input){



  

// //   // if (inp_num == 0)  {
// //   //   images.splice(inp_num , -1);
// //   //   inputs.splice(inp_num , -1);
// //   // }
// //   // else{

// //   //   images.splice(inp_num , 1);
// //   //   inputs.splice(inp_num , 1);

// //   // }




// //   // var target_image_box_c = $(target_image_box).prev().clone();
// //   // target_image_box_c.val('');
// //   // $(target_image_box).prev().replaceWith(target_image_box_c);

// //   // target_image_img.val('');
// //   // target_image_box.val('');
// //   // target_image.val('');
// //   target_image_img.remove();
// //   target_image_box.remove();
// //   target_image.remove();
// //   // if(inputs.length == 0) {
// //   //   $('input[type= "file"].preview-image').attr({'data-image': 0})
// //   // }


// // // })
// //   // $(this).parent().remove();


// //   // var dataimg = $(this).data('image')
// //   // $(this).parent().remove();
// //   // console.log(preview_delete)
// //   // console.log(target_image)
// //   // console.log(target_image_box)
// //   // console.log(target_image_img)
// //   // console.log(images)
// //   // console.log(inputs)
// //   // console.log(del_num)
// //   // console.log(index_num)
// //   // console.log(images.length)
// //   // console.log(del_img)
// //   // console.log(num)
// //   // console.log(dataimg)

// //   // img_box_delete.val('');
// //   preview_delete.val('');
// //   preview_delete.remove();
// //   $(this).remove();
// //   // $(".preview-image").splice(del_num , 1);
// //   // 画像枚数による表示変更条件分岐
// //   if(images.length <= 4){
// //     dropzone.css({
// //       'display': `block`
// //     })
// //   }
// //   else {
// //     dropzone.css({
// //       'display': `none`
// //     })

// //   }  

// //   del_count += 1

// //   // 商品編集用です
// //   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //   // $('.dropzone-container3').append(hidden_form)

// //   $(document).on('change')






// // });





// //   var index = $(".preview__box__delete").index(this);
// //   var del_num = index + 1
// //   var preview_delete = $(".preview-image").eq(- del_num);
// //   var del_img = index
// //   images.splice(del_img , 1);
// //   inputs.splice(del_img , 1);

// //   target_image.remove();
// //   // $(this).parent().remove();


// //   // $(this).parent().remove();
// //   console.log(preview_delete)
// //   console.log(target_image)
// //   console.log(images)
// //   console.log(del_num)
// //   console.log(index)
// //   console.log(images.length)
// //   console.log(del_img)

// //   // img_box_delete.val('');
// //   preview_delete.val('');
// //   preview_delete.remove();
// //   $(this).remove();
// //   // $(".preview-image").splice(del_num , 1);
// //   // 画像枚数による表示変更条件分岐
// //   if(images.length <= 4){
// //     dropzone.css({
// //       'display': `block`
// //     })
// //   }
// //   else {
// //     dropzone.css({
// //       'display': `none`
// //     })

// //   return;
// //   }  
// //   // 商品編集用です
// //   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //   // $('.dropzone-container3').append(hidden_form)





// // });  














// //  // クリックされた画像を削除する。
// //  $(document).on('click','.preview__box__delete','turbolinks:load', function(){
// //   var index = $(".preview__box__delete").index(this);
// //   var target_image = $(this).parent().parent();
// //   var del_num = index + 1
// //   var preview_delete = $(".preview-image").eq(- del_num);
// //   var del_img = index
// //   images.splice(del_img , 1);
// //   inputs.splice(del_img , 1);
// //   target_image.remove();
// //   // $(this).parent().remove();


// //   // $(this).parent().remove();
// //   console.log(preview_delete)
// //   console.log(target_image)
// //   console.log(images)
// //   console.log(del_num)
// //   console.log(index)
// //   console.log(images.length)
// //   console.log(del_img)

// //   // img_box_delete.val('');
// //   preview_delete.val('');
// //   preview_delete.remove();
// //   $(this).remove();
// //   // $(".preview-image").splice(del_num , 1);
// //   // 画像枚数による表示変更条件分岐
// //   if(images.length <= 4){
// //     dropzone.css({
// //       'display': `block`
// //     })
// //   }
// //   else {
// //     dropzone.css({
// //       'display': `none`
// //     })

// //   return;
// //   }  
// //   // 商品編集用です
// //   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //   // $('.dropzone-container3').append(hidden_form)


// // });  

















// //   // クリックされた画像を削除する。
// //   $(document).on('click','.preview__box__delete','turbolinks:load', function(){
// //     var index = $(".preview__box__delete").index(this);
// //     var inp_num = images.length - index - 1
// //     var target_image = $(this).parent().parent();
// //     var preview_delete = $(".preview-image").eq(inp_num);
// //     var del_num = inp_num
// //     images.splice(index , 1);
// //     // target_image.val('');
// //     // $(this).parent().val('');
// //     target_image.remove();
// //     // $(this).parent().remove();
// //     console.log(preview_delete)
// //     console.log(target_image)
// //     console.log(images)
// //     console.log(del_num)
// //     console.log(inp_num)
// //     console.log(index)
// //     console.log(images.length)


// //     preview_delete.val('');
// //     preview_delete.remove();
// //     $(".preview-image").splice(del_num - 1 , 1);
// //     // 画像枚数による表示変更条件分岐
// //     if(images.length <= 4){
// //       dropzone.css({
// //         'display': `block`
// //       })
// //     }
// //     else {
// //       dropzone.css({
// //         'display': `none`
// //       })

// //     return;
// //     }  
// //     // 商品編集用です
// //     // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //     // $('.dropzone-container3').append(hidden_form)

// //   });
// // });  






// // あとで編集用

// //  // クリックされた画像を削除する。
// //  $(document).on('click','.preview__box__delete','turbolinks:load', function(){
// //   var index_num = $(".preview__box__delete").index(this);
// //   var target_image = $(this).parent().parent();
// //   var target_image_box = $(this).parent().closest().find("img-box");
// //   var target_image_img = $(this).parent().closest().find("img");
// //   var file_num = images.length - index_num - 1

// //    var del_num = images.length - index_num - 2

// //   // var del_num = index_num + 1
  
// //   var preview_delete = $(".preview-image").eq(- del_num);
// //   // var del_num = index + 1
// //   // var preview_delete = $(".preview-image").eq(- del_num);
// //   // var del_img = file_num
// //   del_count = 0
// //   del_total = file_num - del_count

// //   // var num = $(this).data('image');


// //   // $.each(inputs, function(index, input){





// //   if (del_total == 0)  {
// //     images.splice(del_total  , -1);
// //     inputs.splice(del_total  , -1);
// //   }
// //   else{

// //     images.splice(del_total , 1);
// //     inputs.splice(del_total , 1);

// //   }




// //   // var target_image_box_c = $(target_image_box).prev().clone();
// //   // target_image_box_c.val('');
// //   // $(target_image_box).prev().replaceWith(target_image_box_c);

// //   // target_image_img.val('');
// //   // target_image_box.val('');
// //   // target_image.val('');



// //   // target_image_img.remove();
// //   // target_image_box.remove();
// //   target_image.remove();



// //   // if(inputs.length == 0) {
// //   //   $('input[type= "file"].preview-image').attr({'data-image': 0})
// //   // }


// // // })


// //   preview_delete.val('');
// //   preview_delete.remove();

// //   // $(this).remove();
// //   // $(".preview-image").splice(del_num , 1);

// //   // 画像枚数による表示変更条件分岐
// //   if(images.length <= 4){
// //     dropzone.css({
// //       'display': `block`
// //     })
// //   }
// //   else {
// //     dropzone.css({
// //       'display': `none`
// //     })

// //   }  

// //   del_count += 1

// //   // 商品編集用です
// //   // hidden_form = `<input type="hidden", name="[delete_ids][]", value="${img_id}">`
// //   // $('.dropzone-container3').append(hidden_form)

// //   $(document).on('change')






// // });







// // いじったやつ



    









// //    // クリックされた画像を削除する。
// //  $(document).on('click','.preview__box__delete', function(){
// //   var target_image = $(this).parent().parent();
// //   $.each(inputs, function(index, input){
// //     // if ($(this).data('image') == target_image.data('image')){
// //       $(this).remove();
// //       target_image.remove();
// //       var num = $(this).data('image');
// //       images.splice(num, 1);
// //       inputs.splice(num, 1);
// //       if(inputs.length == 0) {
// //         $('input[type= "file"].preview-image').attr({'data-image': 0})
// //       }
// //     // }
// //   })
// //   $('input[type= "file"].preview-image:first').attr({
// //     'data-image': inputs.length
// //   })
// //   $.each(inputs, function(index, input) {
// //     var input = $(this)
// //     input.attr({
// //       'data-image': index
// //     })
// //     $('input[type= "file"].preview-image:first').after(input)
// //   })
//   // if(images.length <= 4){
//   //   dropzone.css({
//   //     'display': `block`
//   //   })
//   // }
//   // else {
//   //   dropzone.css({
//   //     'display': `none`
//   //   })

//   // }  
// // })




