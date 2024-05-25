/*  ✪ https://zam.usite.pro/publ/
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var zMenu = {//Меню
  id:'.zMenu',//<header меню
  //zMenu.$();//★ Меню
  $:() => {//Запуск
    let O=zMenu;

    $(O.id+'B .B-Ix-M').on('click', () => O.X(O));

    O.pro(O, 1);//Стандарт/Мобильное проверка
    O.f.url();//Подсветим <a
  },
  /* zMenu.pro(//Проверка Стандарт/Мобильное
       zMenu,//Сократим путь
       1     //Первый запуск (Загрузка страницы)
     );
  */
  //T:0,//setTimeout
  //W:0,//размер Браузер окна width
  pro: (O, x) => {
    clearTimeout(this.T);

    let H=$(O.id),//header
      N=H.find('nav'),//nav
      D=N.children('div'),//div Окно
      B=$('.zMenuB').find('.B-Ix-M, .B-Ix-X');//button
    
    if(x){//Первый запуск
      //console.debug('pro();','Первый запуск!');
      O.f.oko(m => { //Отслеживаем изменения размера браузер окна
        let w = m.contentRect.width;
      
        //Браузер oкно != Последняя запись проверки
        if(w != O.W) {//Изменили размер Браузер окна width
          O.W = w;//Обновим
          O.pro(O);//Проверка Стандарт/Мобильное
        }
      });
    }else{//Изменили размер экрана (Браузер)
      //console.debug('pro();','Изменили размер экрана (Браузер)');

      N.removeAttr('style');  //Спрячим список меню opacity: 0, pointer-events: none
      B.removeAttr('style')   //button Вернём кнопку меню как загрузку
        .addClass('B-L').attr('disabled','');

      if (O.x) { //Мобильное меню открыто
        //console.debug('pro();', O.x, 'Мобильное меню открыто, Закроем!');
        O.X(O);  //Закроем мобильное меню
      }
    }

    this.T=setTimeout(() => {
      //D.removeAttr('style');  //div Уберём окно
      H.removeClass('zMenuX');//header Вернём нормальное меню(когда мобил) Для начала проверки!
      
      this.T=setTimeout(() => {//console.debug('pro();','Запуск! setTimeout');
        D.removeAttr('style');  //div Уберём окно
         
        if (O.f.w(O)) {//Меню не помещается! Делаем мобильную версию
          //console.debug('pro();','Меню не помещается! Делаем мобильную версию');
          H.addClass('zMenuX');//header меню мобил
          B.removeClass('B-L').removeAttr('disabled');//button уберём загрузку
        } else {//Меню горизонтально
          //console.debug('pro();','Меню горизонтально! Вернём right: 0');
          D.css('right', 0);//div Вернём окно
          B.css({'padding-left':0, margin:0});//Убераем button
        }
  
        N.css({ opacity: 1, 'pointer-events': 'auto' });//div Показываем список
      }, 350);//Всё вместе! Не меньше .6s для закрытия окна, когда открыто
    }, 350);//Не меньше .3s (opacity)
  },
  f:{
    //zMenu.f.w(zMenu);//Меню не помещается горизонтально
    //return 1
    w:O=>{//width: nav div 'Когда меню не помещается'
      //console.debug('if('+$(O.id + ' nav > div').eq(0).width()+' >= '+$(O.id+' nav').eq(0).width()+') >= '+($(O.id + ' nav > div').eq(0).width() >= $(O.id+' nav').eq(0).width()));
      
      if($(O.id + ' nav > div').eq(0).width() >= $(O.id+' nav').eq(0).width()){
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
    },
    /* zMenu.f.oko(m=>{//Отслеживаем изменения размера браузер окна
        console.debug(
          'Отслеживаем изменения размера браузер окна!',
          ' width:', m.contentRect.width,      //width
          '. height:', m.contentRect.height,   //height
          m
        );
    }); */
    oko: f => {
      let M = window.ResizeObserver;//Отслеживаем изменения размера окна

      if (typeof M !== 'undefined') {
        new M(m => {//1~> Сработало! Наблюдение за обьектом
          f(m[0]);
          //m[0]//even
          //console.debug(m[0]);
        })
        .observe($('html')[0], {});//Передаем элемент и настройки в наблюдатель
      }
    },
    /* 
       <a href="/publ/"  По url www.ok.rr/publ/
       <a href="?r=publ" По url www.ok.rr?r=publ
    */
    url: () => {//Подсветим <a
      let u = top.location,
        U=decodeURI(u.pathname + u.search);//Полный путь (Без домена) /elda.html?r=1&x=5 || ''
      /* 
        p: decodeURI(a.pathname + a.search + a.hash),  //• Полный путь (Без домена) /elda.html?r=1&x=5#truljalja || ''

        H: decodeURI(a.pathname),                      //• Путь к странице /elda.html || ''
        s: decodeURI(a.search),                        //• Переменные ?r=1&x=5 || ''
        h: decodeURI(a.hash)                           //• #truljalja || ''
      */
      
      $('.zMenu nav>div a').each((i, e) => {//Перебераем <a
        i = $(e).attr('href');

        //console.debug('"'+ U+'".indexOf('+i+') => ['+U.indexOf(i)+']' +'> -1');
        if (i && U.indexOf(i) > -1) {//Не пусто && Совпало
          $(e).addClass('nM1');
          return false//Остановим
        }
      });
    }
  },
  //x:0,//Мобильное меню 0=Закрыто, 1=Открыто
  X: O => {//Открыть/Закрыть
    let x=O.x;//0=Закрыто, 1=Открыто
    
    //console.debug('pro();', 'Мобильное меню: '+(x?'Откроем':'Закроем')+'! right: '+$(O.id + ' nav>div').css('right'));
    
    $(O.id + ' nav>div').css('right', //.6s Закрытие окна
      x
        ? '-16em'//Закроем
        : 0//Откроем
    );
    
    $('.zMenuB').find('.B-Ix-M, .B-Ix-X')
      .removeClass('B-Ix-' + (x ? 'X' : 'M'))
      .addClass('B-Ix-' + (x ? 'M' : 'X'));
    
    O.f.bg(
      x
        ? 'zMenu'//† Закрыть задний фон
        : {//✫ Добавим задний фон
          id: 'body', //* $() куда добавим. (.append(..);)
          i: 'zMenu', //* id Для удаления zMenu.f.bg('string');
          f: () => {  //* ()=>{} Сработает при нажатие на задний фон
            O.X(zMenu);//† Закрыть
            //console.debug('bg'); 
          }
    });
    
    O.x=x?0:1;
  }
};