function CalendarApp(date) {

    if (!(date instanceof Date)) {
        date = new Date();
    }

    this.days = ['Domingos', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    this.months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    this.quotes = ['O que quer que a mente do homem possa conceber e acreditar, ela pode alcançar. –Napoleon Hill ', ' Esforce-se para não ser um sucesso, mas sim ser valioso. - Albert Einstein ', ' Duas estradas divergiam em uma floresta, e eu - eu peguei a menos percorrida, e isso fez toda a diferença. –Robert Frost ', ' Atribuo meu sucesso a isso: nunca dei ou aceitei nenhuma desculpa. –Florence Nightingale ', ' Você perde 100% das fotos que não tira. –Wayne Gretzky ', ' A coisa mais difícil é a decisão de agir, o resto é apenas tenacidade. –Amelia Earhart ', ' Cada greve me aproxima do próximo home run. –Babe Ruth ', ' Definitividade de propósito é o ponto de partida de toda conquista. -W. Clement Stone ', ' A vida não é sobre obter e ter, é sobre dar e ser. –Kevin Kruse ', ' A vida é o que acontece com você enquanto você está ocupado fazendo outros planos. –John Lennon ', ' Nós nos tornamos o que pensamos. –Earl Nightingale ', ' A vida é 10% do que acontece comigo e 90% de como eu reajo a ela. –Charles Swindoll ', ' A maneira mais comum de as pessoas desistirem de seu poder é pensar que não têm nenhum. –Alice Walker ', ' A mente é tudo. O que você pensa que se torna. –Buda', 'Ganhar não é tudo, mas querer vencer é. –Vince Lombardi ', ' Toda criança é um artista. O problema é como permanecer um artista quando crescer. - Pablo Picasso ', ' Você nunca pode atravessar o oceano até ter coragem de perder de vista a costa. - Christopher Columbus ', ' aprendi que as pessoas esquecerão o que você disse, as pessoas esquecerão o que você fez, mas as pessoas nunca esquecerão como você as fez se sentir. –Maya Angelou ', ' Ou você corre o dia ou o dia corre você. –Jim Rohn ', ' Se você acha que pode ou não, está certo. - Henry Ford ', ' Os dois dias mais importantes da sua vida são o dia em que você nasceu e o dia em que descobre o porquê. - Mark Twain ', ' Tudo o que você pode fazer, ou sonhar, pode começar. Ousadia tem genialidade, poder e magia. –Johann Wolfgang von Goethe ', ' A melhor vingança é um enorme sucesso. –Frank Sinatra ', ' As pessoas costumam dizer que a motivação não dura. Bem, nem tomar banho. É por isso que recomendamos diariamente. –Zig Ziglar ', ' A vida diminui ou se expande proporcionalmente à coragem de alguém. –Anais Nin ', ' Se você ouvir uma voz dentro de você dizer "você não pode pintar", então, por todos os meios, pinte e essa voz será silenciada. –Vincent Van Gogh ', ' Existe apenas uma maneira de evitar críticas: não faça nada, não diga nada e não seja nada. –Aristotle ', ' Peça e isso será dado a você; Procure e você irá encontrar; bata e a porta será aberta para você. –Jesus ', ' A única pessoa que você está destinado a se tornar é a pessoa que você decide ser. –Ralph Waldo Emerson ', ' Vá com confiança na direção dos seus sonhos. Viva a Vida que você imaginou. –Henry David Thoreau ', ' Poucas coisas podem ajudar um indivíduo mais do que colocar responsabilidade nele e fazer com que ele saiba que você confia nele. - Booker T. Washington '];
    this.apts = [
      {
          name: '',
          endTime: new Date(2019, 4, 30, 23),
          startTime: new Date(2019, 4, 30, 21),
          day: new Date(2016, 4, 30).toString()
      },
       {
           name: 'Meu Aniversário',
           endTime: new Date(2019, 4, 1, 23, 59),
           startTime: new Date(2019, 4, 1, 0),
           day: new Date(2019, 4, 1).toString()
       },

    ];

    this.aptDates = [new Date(2019, 4, 30).toString(), new Date(2019, 4, 1).toString()];
    this.eles = {
    };
  this.calDaySelected = null;
  
  this.calendar = document.getElementById("calendar-app");
  
  this.calendarView = document.getElementById("dates");
  
  this.calendarMonthDiv = document.getElementById("calendar-month");
  this.calendarMonthLastDiv = document.getElementById("calendar-month-last");
  this.calendarMonthNextDiv = document.getElementById("calendar-month-next");
  
  this.dayInspirationalQuote = document.getElementById("inspirational-quote");
   
  this.HojeIsSpan = document.getElementById("footer-date");
  // this.eventosCountSpan = document.getElementById("footer-eventos");
  this.dayViewEle = document.getElementById("day-view");
  this.dayViewExitEle = document.getElementById("day-view-exit");
  this.dayViewDateEle = document.getElementById("day-view-date");
  this.addDayEventEle = document.getElementById("add-event");
  this.dayeventosEle = document.getElementById("day-eventos");
  
  this.dayEventAddForm = {
    cancelBtn: document.getElementById("add-event-cancel"),
    addBtn: document.getElementById("add-event-save"),
    nameEvent:  document.getElementById("input-add-event-name"),
    startTime:  document.getElementById("input-add-event-start-time"),
    endTime:  document.getElementById("input-add-event-end-time"),
    startAMPM:  document.getElementById("input-add-event-start-ampm"),
    endAMPM:  document.getElementById("input-add-event-end-ampm")
  };
  this.dayeventosList = document.getElementById("day-eventos-list");
  this.dayEventBoxEle = document.getElementById("add-day-event-box");
  
  /* Start the app */
  this.showView(date);
  this.addEventListeners();
  this.HojeIsSpan.textContent = "Hoje e " + this.months[date.getMonth()] + " " + date.getDate();  
}

CalendarApp.prototype.addEventListeners = function(){
  
  this.calendar.addEventListener("click", this.mainCalendarClickClose.bind(this));
  this.HojeIsSpan.addEventListener("click", this.showView.bind(this));
  this.calendarMonthLastDiv.addEventListener("click", this.showNewMonth.bind(this));
  this.calendarMonthNextDiv.addEventListener("click", this.showNewMonth.bind(this));
  this.dayViewExitEle.addEventListener("click", this.closeDayWindow.bind(this));
  this.dayViewDateEle.addEventListener("click", this.showNewMonth.bind(this));
  this.addDayEventEle.addEventListener("click", this.addNewEventBox.bind(this));
  this.dayEventAddForm.cancelBtn.addEventListener("click", this.closeNewEventBox.bind(this));
  this.dayEventAddForm.cancelBtn.addEventListener("keyup", this.closeNewEventBox.bind(this));
  
  this.dayEventAddForm.startTime.addEventListener("keyup",this.inputChangeLimiter.bind(this));
  this.dayEventAddForm.startAMPM.addEventListener("keyup",this.inputChangeLimiter.bind(this));
  this.dayEventAddForm.endTime.addEventListener("keyup",this.inputChangeLimiter.bind(this));
  this.dayEventAddForm.endAMPM.addEventListener("keyup",this.inputChangeLimiter.bind(this));
  this.dayEventAddForm.addBtn.addEventListener("click",this.saveAddNewEvent.bind(this));

};
CalendarApp.prototype.showView = function(date){
  if ( !date || (!(date instanceof Date)) ) date = new Date();
  var now = new Date(date),
      y = now.getFullYear(),
      m = now.getMonth();
  var Hoje = new Date();
  
  var lastDayOfM = new Date(y, m + 1, 0).getDate();
  var startingD = new Date(y, m, 1).getDay();
  var lastM = new Date(y, now.getMonth()-1, 1);
  var nextM = new Date(y, now.getMonth()+1, 1);
 
  this.calendarMonthDiv.classList.remove("cview__month-activate");
  this.calendarMonthDiv.classList.add("cview__month-reset");
  
  while(this.calendarView.firstChild) {
    this.calendarView.removeChild(this.calendarView.firstChild);
  }
  
  // build up spacers
  for ( var x = 0; x < startingD; x++ ) {
    var spacer = document.createElement("div");
    spacer.className = "cview--spacer";
    this.calendarView.appendChild(spacer);
  }
  
  for ( var z = 1; z <= lastDayOfM; z++ ) {
   
    var _date = new Date(y, m ,z);
    var day = document.createElement("div");
    day.className = "cview--date";
    day.textContent = z;
    day.setAttribute("data-date", _date);
    day.onclick = this.showDay.bind(this);
    
    // check if Hojes date
    if ( z == Hoje.getDate() && y == Hoje.getFullYear() && m == Hoje.getMonth() ) {
      day.classList.add("Hoje");
    }
    
     // check if tem eventos to show
    if ( this.aptDates.indexOf(_date.toString()) !== -1 ) {
      day.classList.add("tem-eventos");
    }
    
    this.calendarView.appendChild(day);
  }
  
  var _that = this;
  setTimeout(function(){
    _that.calendarMonthDiv.classList.add("cview__month-activate");
  }, 50);
  
  this.calendarMonthDiv.textContent = this.months[now.getMonth()] + " " + now.getFullYear();
  this.calendarMonthDiv.setAttribute("data-date", now);

  
  this.calendarMonthLastDiv.textContent = "← " + this.months[lastM.getMonth()];
  this.calendarMonthLastDiv.setAttribute("data-date", lastM);
  
  this.calendarMonthNextDiv.textContent = this.months[nextM.getMonth()] + " →";
  this.calendarMonthNextDiv.setAttribute("data-date", nextM);
  
}
CalendarApp.prototype.showDay = function(e, dayEle) {
  e.stopPropagation();
  if ( !dayEle ) {
    dayEle = e.currentTarget;
  }
  var dayDate = new Date(dayEle.getAttribute('data-date'));
  
  this.calDaySelected = dayEle;
  
  this.openDayWindow(dayDate);
  

  
};
CalendarApp.prototype.openDayWindow = function(date){
  
  var now = new Date();
  var day = new Date(date);
  this.dayViewDateEle.textContent = this.days[day.getDay()] + ", " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
  this.dayViewDateEle.setAttribute('data-date', day);
  this.dayViewEle.classList.add("calendar--day-view-active");
  
  /* Contextual lang changes based on tense. Also show btn for scheduling future eventos */
  var _dayTopbarText = '';
  if ( day < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
    _dayTopbarText = "";
    this.addDayEventEle.style.display = "none";
  } else {
     _dayTopbarText = "não-";
     this.addDayEventEle.style.display = "inline";
  }
  this.addDayEventEle.setAttribute("data-date", day);
  
  var eventosHoje = this.showeventosByDay(day);
  if ( !eventosHoje ) {
    _dayTopbarText += "tem-";
    var _rand = Math.round(Math.random() * ((this.quotes.length - 1 ) - 0) + 0);
    this.dayInspirationalQuote.textContent = this.quotes[_rand];
  } else {
    _dayTopbarText += eventosHoje.length + " ";
    this.dayInspirationalQuote.textContent = null;
  }
  //this.dayeventosList.innerHTML = this.showeventosCreateHTMLView(eventosHoje);
  while(this.dayeventosList.firstChild) {
    this.dayeventosList.removeChild(this.dayeventosList.firstChild);
  }
  
  this.dayeventosList.appendChild(this.showeventosCreateElesView(eventosHoje));
  
  
  this.dayeventosEle.textContent = _dayTopbarText + "eventos " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
  
  
};

CalendarApp.prototype.showeventosCreateElesView = function(eventos) {
  var ul = document.createElement("ul");
  ul.className = 'day-event-list-ul';
  eventos = this.sorteventosByTime(eventos);
  var _this = this;
  eventos.forEach(function(event){
    var _start = new Date(event.startTime);
    var _end = new Date(event.endTime);
    var idx = event.index;
    var li = document.createElement("li");
    li.className = "event-dates";
    // li.innerHtml
    var html = "<span class='start-time'>" + _start.toLocaleTimeString(navigator.language,{hora: '2-digit', minuto:'2-digit'}) + "</span> <small>até às</small> ";
    html += "<span class='end-time'>" + _end.toLocaleTimeString(navigator.language,{hora: '2-digit', minuto:'2-digit'}) + ( (_end.getDate() != _start.getDate()) ? ' <small>on ' + _end.toLocaleDateString() + "</small>" : '') +"</span>";
    

    html += "<span class='event-name'>" + event.name + "</span>";
    
    var div = document.createElement("div");
    div.className = "event-dates";
    div.innerHTML = html;
    
    var deleteBtn = document.createElement("span");
    var deleteText = document.createTextNode("delete");
    deleteBtn.className = "event-delete";
    deleteBtn.setAttribute("data-idx", idx);
    deleteBtn.appendChild(deleteText);
    deleteBtn.onclick = _this.deleteEvent.bind(_this);
    
    div.appendChild(deleteBtn);
    
    li.appendChild(div);
    ul.appendChild(li);
  });
  return ul;
};
CalendarApp.prototype.deleteEvent = function(e) {
  var deleted = this.apts.splice(e.currentTarget.getAttribute("data-idx"),1);
  var deletedDate = new Date(deleted[0].day);
  var anyDatesLeft = this.showeventosByDay(deletedDate);
  if ( anyDatesLeft === false ) {
    // safe to remove from array
    var idx = this.aptDates.indexOf(deletedDate.toString());
    if (idx >= 0) {
       this.aptDates.splice(idx,1);
      // remove dot from calendar view
      var ele = document.querySelector('.cview--date[data-date="'+ deletedDate.toString() +'"]');
      if ( ele ) {
        ele.classList.remove("tem-eventos");
      }
    }
  }
  this.openDayWindow(deletedDate);;
};
CalendarApp.prototype.sorteventosByTime = function(eventos) {
  if (!eventos) return [];
  return eventos.sort(function compare(a, b) {
    if (new Date(a.startTime) < new Date(b.startTime)) {
      return -1;
    }
    if (new Date(a.startTime) > new Date(b.startTime)) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
};
CalendarApp.prototype.showeventosByDay = function(day) {
  var _eventos = [];
  this.apts.forEach(function(apt, idx){
    if ( day.toString() == apt.day.toString() ) {
      apt.index = idx;
      _eventos.push(apt);
    }
  });
  return (_eventos.length) ? _eventos : false;
};
CalendarApp.prototype.closeDayWindow = function(){
  this.dayViewEle.classList.remove("calendar--day-view-active");
  this.closeNewEventBox();
};
CalendarApp.prototype.mainCalendarClickClose = function(e){
  if ( e.currentTarget != e.target ) {
    return;
  }
  
  this.dayViewEle.classList.remove("calendar--day-view-active");
  this.closeNewEventBox();
};
CalendarApp.prototype.addNewEventBox = function(e){
  var target = e.currentTarget;
  this.dayEventBoxEle.setAttribute("data-active", "true"); 
  this.dayEventBoxEle.setAttribute("data-date", target.getAttribute("data-date"));
  
};
CalendarApp.prototype.closeNewEventBox = function(e){
  
  if (e && e.keyCode && e.keyCode != 13) return false;
  
  this.dayEventBoxEle.setAttribute("data-active", "false");
  // reset values
  this.resetAddEventBox();
  
};
CalendarApp.prototype.saveAddNewEvent = function() {
  var saveErrors = this.validateAddEventInput();
  if ( !saveErrors ) {
    this.addEvent();
  }
};

CalendarApp.prototype.addEvent = function() {
  
  var name = this.dayEventAddForm.nameEvent.value.trim();
  var dayOfDate = this.dayEventBoxEle.getAttribute("data-date");
  var dateObjectDay =  new Date(dayOfDate);
  var cleanDates = this.cleanEventTimeStampDates();
  
  this.apts.push({
    name: name,
    day: dateObjectDay,
    startTime: cleanDates[0],
    endTime: cleanDates[1]
  });
  this.closeNewEventBox();
  this.openDayWindow(dayOfDate);
  this.calDaySelected.classList.add("tem-eventos");
  // add to dates
  if ( this.aptDates.indexOf(dateObjectDay.toString()) === -1 ) {
    this.aptDates.push(dateObjectDay.toString());
  }
  
};
CalendarApp.prototype.convertTo23horaTime = function(stringOfTime, AMPM) {
  // convert to 0 - 23 hora time
  var mins = stringOfTime.split(":");
  var horas = stringOfTime.trim();
  if ( mins[1] && mins[1].trim() ) {
    horas = parseInt(mins[0].trim());
    mins = parseInt(mins[1].trim());
  } else {
    horas = parseInt(horas);
    mins = 0;
  }
  horas = ( AMPM == 'am' ) ? ( (horas == 12) ? 0 : horas ) : (horas <= 11) ? parseInt(horas) + 12 : horas;
  return [horas, mins];
};
CalendarApp.prototype.cleanEventTimeStampDates = function() {
  
  var startTime = this.dayEventAddForm.startTime.value.trim() || this.dayEventAddForm.startTime.getAttribute("placeholder") || '8';
  var startAMPM = this.dayEventAddForm.startAMPM.value.trim() || this.dayEventAddForm.startAMPM.getAttribute("placeholder") || 'am';
  startAMPM = (startAMPM == 'a') ? startAMPM + 'm' : startAMPM;
  var endTime = this.dayEventAddForm.endTime.value.trim() || this.dayEventAddForm.endTime.getAttribute("placeholder") || '9';
  var endAMPM = this.dayEventAddForm.endAMPM.value.trim() || this.dayEventAddForm.endAMPM.getAttribute("placeholder") || 'pm';
  endAMPM = (endAMPM == 'p') ? endAMPM + 'm' : endAMPM;
  var date = this.dayEventBoxEle.getAttribute("data-date");
  
  var startingTimeStamps = this.convertTo23horaTime(startTime, startAMPM);
  var endingTimeStamps = this.convertTo23horaTime(endTime, endAMPM);
  
  var dateOfEvent = new Date(date);
  var startDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), startingTimeStamps[0], startingTimeStamps[1]);
  var endDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), endingTimeStamps[0], endingTimeStamps[1]);
  
  // if end date is less than start date - set end date back another day
  if ( startDate > endDate ) endDate.setDate(endDate.getDate() + 1);
  
  return [startDate, endDate];
  
};
CalendarApp.prototype.validateAddEventInput = function() {

  var _errors = false;
  var name = this.dayEventAddForm.nameEvent.value.trim();
  var startTime = this.dayEventAddForm.startTime.value.trim();
  var startAMPM = this.dayEventAddForm.startAMPM.value.trim();
  var endTime = this.dayEventAddForm.endTime.value.trim();
  var endAMPM = this.dayEventAddForm.endAMPM.value.trim();
  
  if (!name || name == null) {
    _errors = true;
    this.dayEventAddForm.nameEvent.classList.add("add-event-edit--error");
    this.dayEventAddForm.nameEvent.focus();
  } else {
     this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
  }
  
//   if (!startTime || startTime == null) {
//     _errors = true;
//     this.dayEventAddForm.startTime.classList.add("add-event-edit--error");
//   } else {
//      this.dayEventAddForm.startTime.classList.remove("add-event-edit--error");
//   }
  
  return _errors;
  
  
};
var timeOut = null;
var activeEle = null;
CalendarApp.prototype.inputChangeLimiter = function(ele) {
  
  if ( ele.currentTarget ) {
    ele = ele.currentTarget;
  }
  if (timeOut && ele == activeEle){
    clearTimeout(timeOut);
  }
  
  var limiter = CalendarApp.prototype.textOptionLimiter;

  var _options = ele.getAttribute("data-options").split(",");
  var _format = ele.getAttribute("data-format") || 'text';
  timeOut = setTimeout(function(){
    ele.value = limiter(_options, ele.value, _format);
  }, 600);
  activeEle = ele;
  
};
CalendarApp.prototype.textOptionLimiter = function(options, input, format){
  if ( !input ) return '';
  
  if ( input.indexOf(":") !== -1 && format == 'datetime' ) {
 
    var _splitTime = input.split(':', 2);
    if (_splitTime.length == 2 && !_splitTime[1].trim()) return input;
    var _trailingTime = parseInt(_splitTime[1]);
    /* Probably could be coded better -- a block to clean up trailing data */
    if (options.indexOf(_splitTime[0]) === -1) {
      return options[0];
    }
    else if (_splitTime[1] == "0" ) {
      return input;
    }
    else if (_splitTime[1] == "00" ) {
      return _splitTime[0] +  ":00";
    }
    else if (_trailingTime < 10 ) {
      return _splitTime[0] + ":" + "0" + _trailingTime;
    }
    else if ( !Number.isInteger(_trailingTime) || _trailingTime < 0 || _trailingTime > 59 )  {
      return _splitTime[0];
    } 
    return _splitTime[0] + ":" + _trailingTime;
  }
  if ((input.toString().length >= 3) ) {
    var pad = (input.toString().length - 4) * -1;
    var _hora, _min;
    if (pad == 1) {
      _hora = input[0];
      _min = input[1] + input[2];
    } else {
      _hora = input[0] + input[1];
      _min = input[2] + input[3];
    }
    
    _hora = Math.max(1,Math.min(12,(_hora)));
    _min = Math.min(59,(_min));
    if ( _min < 10 ) { 
      _min = "0" + _min;
    }
    _min = (isNaN(_min)) ? '00' : _min;
    _hora = (isNaN(_hora)) ? '9' : _hora ;

    return _hora + ":" + _min;
    
  }

  if (options.indexOf(input) === -1) {
    return options[0];
  }
  
  return input;
};
CalendarApp.prototype.resetAddEventBox = function(){
  this.dayEventAddForm.nameEvent.value = '';
  this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
  this.dayEventAddForm.endTime.value = '';
  this.dayEventAddForm.startTime.value = '';
  this.dayEventAddForm.endAMPM.value = '';
  this.dayEventAddForm.startAMPM.value = '';
};
CalendarApp.prototype.showNewMonth = function(e){
  var date = e.currentTarget.dataset.date;
  var newMonthDate = new Date(date);
  this.showView(newMonthDate);
  this.closeDayWindow();
  return true;
};

var calendar = new CalendarApp();
console.log(calendar);