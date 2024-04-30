/*  ✪ https://zam.usite.pro/publ/
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zMenu = {//Меню
  id:'.zMenu',//<nav class меню
  //zMenu.$();//★ Меню
  $:q => {//Запуск
    let O=zMenu;
    
    $(O.id).on('click', () => O.X(O));
    
    if(O.f.w()){//Меню не помещается! Делаем мобильную версию
      $(O.id).addClass('zMenuX');
    }
  },
  f:{
    //zMenu.f.w();//Меню не помещается горизонтально
    //return 1
    w:()=>{//width: nav div (Когда меню не помещается)
      let O=zMenu;
      
      //console.debug('if('+$(O.id + '>div').width()+' >= '+$(O.id).width()+') >= '+($(O.id + '>div').width() >= $(O.id).width()));
      if($(O.id + '>div').width() >= $(O.id).width()){
        return 1
      }
    }
  },
  X: O => {//Открыть/Закрыть
  let d = $(O.id + '>div'),
    b=$(O.id + ' button'),
    x=d.css('right')=='0px';//1 = Закрываем
    console.debug('right: '+d.css('right'), d.css('right')=='0px'?'Закроем':'Откроем');

    b.removeClass('B-I'+(x?'x-X':'x-M'))
      .addClass('B-I'+(x?'x-M':'x-X'));
    
    d.css('right', 
      x
        ? '-16em'//Закроем
        : 0//Откроем
    );
  }
};

/*
  ★    Название функции
  *     Описание
  •     Описание2
  ◈ ✂ ✓ ✪
  
  localStorage.setItem(key, value)
  localStorage.getItem(key)
*/

//#region       //✦ Уровень 1 ----

//#endregion    //✦ Уровень 1 ----

//#region           //✦✦ Уровень 2 ----

//#endregion        //✦✦ --------------