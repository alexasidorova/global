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
                        date:'03 марта 2015'}];
      function apps () {
 for (i=0;i<aplications.length;i++){

    let j = Math.floor(Math.random() * aplications.length);

    var mainCentralBlockListPartImgWrapper1 = document.createElement('div');
    mainCentralBlockListPartImgWrapper1.className = "main_central-block_list_part-img_wrapper1";  
    var mainCentralBlockListPartImg1 = document.createElement('figure');
    mainCentralBlockListPartImg1.className = "main_central-block_list_part-img-1";
    var img1 = document.createElement('img');
    img1.src = aplications[j].image;
    img1.className = "main_central-block_list_part-image";
   

    var captionBig1 = document.createElement('figcaption');
    captionBig1.className = "caption-big1";
    var textBig1 = document.createTextNode(aplications[j].title);
   

    var captionLittle1 = document.createElement('figcaption');
    captionLittle1.className = "caption-little1";
    var textLittle1 = document.createTextNode(aplications[j].date);
   

    
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