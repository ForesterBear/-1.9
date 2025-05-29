
function showDayOfWeek() {
    
    let lang = '';
    while (lang !== 'ua' && lang !== 'en') {
        lang = prompt('Оберіть мову (ua/en):').trim().toLowerCase();
        if (lang !== 'ua' && lang !== 'en') {
            alert('Помилка! Введіть ua або en.');
        }
    }

   
    let num = 0;
    while (isNaN(num) || num < 1 || num > 7) {
        let msg = lang === 'ua' ? 'Введіть номер дня тижня (1-7):' : 'Enter day number (1-7):';
        num = parseInt(prompt(msg), 10);
        if (isNaN(num) || num < 1 || num > 7) {
            alert(lang === 'ua' ? 'Число від 1 до 7!' : 'Number from 1 to 7!');
        }
    }

    
    const week = {
        ua: ['Понеділок','Вівторок','Середа','Четвер','Пʼятниця','Субота','Неділя'],
        en: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    };

    alert(week[lang][num-1]);
}

showDayOfWeek();