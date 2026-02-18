fetch("schedule.json")
  .then(response => response.json())
  .then(data => {
    const today = new Date().getDay();
    const todaySchedule = data[today];

    const scheduleDiv = document.getElementById("schedule");

    if (!todaySchedule) {
      scheduleDiv.textContent = "時間割がありません";
      return;
    }

    scheduleDiv.innerHTML = todaySchedule
      .map(subject => `<p>${subject}</p>`)
      .join("");
  })
  .catch(error => {
    document.getElementById("schedule").textContent = "読み込み失敗";
    console.error(error);
  });
