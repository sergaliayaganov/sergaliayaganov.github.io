# Серғалидың 63 жас мерейтойына арналған шақыру сайты

## Қолдану
1. `index.html` және `фон2.jpg` бір папкада болуы керек.
2. Сайтты телефонға бейімделген түрде ашуға болады.
3. Музыка үшін `music.mp3` файлын осы папкаға салып, `index.html` ішіндегі `<audio>` бөліміне:
   `<source src="music.mp3" type="audio/mpeg">`
   жолын қосыңыз.

## Google кестеге жауап жинау
1. Google Sheets ашыңыз.
2. Extensions → Apps Script таңдаңыз.
3. Мына кодты қойыңыз:

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.attendance, data.date]);
  return ContentService.createTextOutput("OK");
}

4. Deploy → New deployment → Web app.
5. Execute as: Me.
6. Who has access: Anyone.
7. Web App URL-ін `index.html` ішіндегі `GOOGLE_SCRIPT_URL = "";` орнына қойыңыз.

## Карта
Карта батырмасы Google Maps іздеуін ашады. Егер нақты тойхананың Google Maps сілтемесі болса, `href` ішіндегі сілтемені соған ауыстырған дұрыс.
