var mainCentralBlockList = document.querySelector('div.main_central-block_list');
var mainCentralBlockListPartMenu = document.querySelector('div.main_central-block_list_part-menu');
var mainCentralBlockListPartImg = document.createElement('div');
mainCentralBlockListPartImg.className = "main_central-block_list_part-img";

      
      
      var aplications = [{image: "assets/img-1.png", 
                        title:'СТАНДАРТНЫЙ ПАКЕТ', 
                        date:'08 апреля 2012' },
                        
                        {image: "assets/img-2.png", 
                        title:'НОВЫЙ ЦФТ-БАНК', 
                        date:'09 сентября 2016'},
                       
                        {image: "assets/img-3.png", 
                        title:'КАТАЛОГ РАЗРАБОТОК', 
                        date:'03 марта 2015'},
                       ];
      function apps () {
 for (i=0;i<aplications.length;i++){

 //   let j = Math.floor(Math.random() * aplications.length);

    var mainCentralBlockListPartImgWrapper1 = document.createElement('div');
    mainCentralBlockListPartImgWrapper1.className = "main_central-block_list_part-img_wrapper1";  
    var mainCentralBlockListPartImg1 = document.createElement('figure');
    mainCentralBlockListPartImg1.className = "main_central-block_list_part-img-1";
    var img1 = document.createElement('img');
    img1.src = aplications[i].image;
    img1.className = "main_central-block_list_part-image";
   

    var captionBig1 = document.createElement('figcaption');
    captionBig1.className = "caption-big1";
    var textBig1 = document.createTextNode(aplications[i].title);
   

    var captionLittle1 = document.createElement('figcaption');
    captionLittle1.className = "caption-little1";
    var textLittle1 = document.createTextNode(aplications[i].date);
   

    
    mainCentralBlockList.insertBefore(mainCentralBlockListPartImg, mainCentralBlockListPartMenu);
  
    mainCentralBlockListPartImg.appendChild(mainCentralBlockListPartImgWrapper1);
   
    
    mainCentralBlockListPartImgWrapper1.appendChild(mainCentralBlockListPartImg1);
    mainCentralBlockListPartImg1.appendChild(img1);    
    mainCentralBlockListPartImgWrapper1.appendChild(captionBig1);
    captionBig1.appendChild(textBig1);    
    mainCentralBlockListPartImgWrapper1.appendChild(captionLittle1);
    captionLittle1.appendChild(textLittle1);

  
   
 }
};
 apps();
//let k = 1;
//  function shiftRight()
// {
//     for(var j = 0; j < k; j ++)
//     {
//         var tmp = aplications[aplications.length - 1];
 
//         for (var i = aplications.length - 1; i > 0; i --)
//         {
//          aplications[i] = aplications[i - 1];
//         }
 
//         aplications[0] = tmp;
//     }
// }
function shiftArrayToRight() {
   let blocks = document.querySelectorAll(".main_central-block_list_part-img_wrapper1");
   arrayBlock = Array.from(blocks);
   arrayBlockPoppedItem = arrayBlock.pop();
   arrayBlock.unshift(arrayBlockPoppedItem);
   let wrappers = document.querySelectorAll(".main_central-block_list_part-img_wrapper1");
   wrappers.forEach(function(it){
      it.parentNode.removeChild(it);
   })
   let block = document.querySelector(".main_central-block_list_part-img");
   arrayBlock.forEach(function(it){
      block.appendChild(it);
   })
   
}


 var mainCentralBlockListPartImgPost = document.querySelector('div.main_central-block_list_part-img_post');
 mainCentralBlockListPartImgPost.addEventListener("click",shiftArrayToRight);
 

 