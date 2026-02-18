let weekOffset = 0;

function loadSchedule() {
  fetch("schedule.json")
    .then(response => response.json())
    .then(data => {

      const scheduleDiv = document.getElementById("schedule");
      scheduleDiv.innerHTML = "";

      const today = new Date();
      const day = today.getDay();

      const monday = new Date(today);
      const diff = day === 0 ? -6 : 1 - day;
      monday.setDate(today.getDate() + diff + weekOffset * 7);

      for (let i = 0; i < 7; i++) {

        const current = new Date(monday);
        current.setDate(monday.getDate() + i);

        const yyyy = current.getFullYear();
        const mm = String(current.getMonth() + 1).padStart(2, "0");
        const dd = String(current.getDate()).padStart(2, "0");
        const dateString = `${yyyy}-${mm}-${dd}`;

        const dayBox = document.createElement("div");
        dayBox.innerHTML = `<h3>${dateString}</h3>`;

        if (data[dateString]) {
          dayBox.innerHTML += data[dateString]
            .map(subject => `<p>${subject}</p>`)
            .join("");
        } else {
          dayBox.innerHTML += "<p>登録なし</p>";
        }

        scheduleDiv.appendChild(dayBox);
      }
    });
}

function changeWeek(offset) {
  weekOffset += offset;
  loadSchedule();
}

loadSchedule();
