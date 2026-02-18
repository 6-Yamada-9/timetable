fetch("schedule.json")
  .then(response => response.json())
  .then(data => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayString = `${yyyy}-${mm}-${dd}`;

    const scheduleDiv = document.getElementById("schedule");

    if (!data[todayString]) {
      scheduleDiv.textContent = "今日は時間割が登録されていません";
      return;
    }

    scheduleDiv.innerHTML = data[todayString]
      .map(subject => `<p>${subject}</p>`)
      .join("");
  })
  .catch(error => {
    document.getElementById("schedule").textContent = "読み込み失敗";
    console.error(error);
  });
