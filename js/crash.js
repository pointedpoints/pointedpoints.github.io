<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = 'Free Porn Videos & Sex Movies|Porno,XXX,Porn Tube|PornHub';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title =  'rua!rua!!rua!!!';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });