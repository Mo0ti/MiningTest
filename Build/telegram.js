    let tg      = window.Telegram;
  
    if(tg != undefined){
      if (tg.WebApp != undefined && tg.WebApp.initData != undefined){
       
      let safe    = tg.WebApp.initData;
      
      tg.WebApp.backgroundColor = '#3d3d3d';
      tg.WebApp.headerColor = '#212121';
      tg.WebApp.expand(); 
  
      }    
    }
