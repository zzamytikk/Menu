/*  ✪ https://zam.usite.pro/publ/
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zMenu = {//Меню
  id:'.zMenu',//<nav class меню
  //zMenu.$();//★ Меню
  $:q => {//Запуск
    let O=zMenu;
    
    $(O.id+' button').on('click', () => O.X(O));
    
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
    },
    /*  zMenu.f.bg({//✫ Добавим задний фон
        id: 'string/event',     //* $() куда добавим. (.append(..);)
        i: 'string',            //* id Для удаления zMenu.f.bg('string');
        f: 'function',          //* ()=>{} Сработает при нажатие на задний фон

        c:{                     //* css Заднего фона
          'z-index': 7, //undefined = 9
          top: 40,
          background: ''//Свой задний фон. //Стандартный: #0006
        }
      });

      zMenu.f.bg('string');//† Закрыть задний фон
    */
    bg: q => {
      if (q.id) {
        let i = 'bg-' + q.i;

        $(q.id).append($('<div id="' + i + '" class="Obg">').css(q.c || {}));
        $('#'+i).click(q.f);
      } else {//† Закрыть задний фон
        $('#bg-' + q).css({ height: 0, opacity: 0 });//Анимация закрытия

        setTimeout(() => {
          $('#bg-' + q).remove();//Удаляем задний фон
        }, 300);
      }
    }
  },
  X: O => {//Открыть/Закрыть
  let d = $(O.id + '>div'),
    b=$(O.id + ' button'),
    x=d.css('right')=='0px';//1 = Закрываем

    console.debug('right: '+d.css('right'), d.css('right')=='0px'?'Закроем':'Откроем');
    
    O.f.bg(
      x
        ? 'zMenu'//† Закрыть задний фон
        : {//✫ Добавим задний фон
          id: 'body', //* $() куда добавим. (.append(..);)
          i: 'zMenu', //* id Для удаления zMenu.f.bg('string');
          f: () => {  //* ()=>{} Сработает при нажатие на задний фон
            O.X(zMenu);//† Закрыть
            console.debug('bg'); 
          }
    });

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