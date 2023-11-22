function calculateAgeOnLoad() {
  calculateAge() // 在網頁載入時自動計算年齡
}

function calculateAge() {
  // 預設生日日期
  var defaultBirthDate = new Date("2000-11-29")

  // 獲取當前日期
  var currentDate = new Date()

  // 計算年齡
  var age = currentDate.getFullYear() - defaultBirthDate.getFullYear()

  // 如果生日還未到，年齡減一
  if (
    currentDate.getMonth() < defaultBirthDate.getMonth() ||
    (currentDate.getMonth() === defaultBirthDate.getMonth() &&
      currentDate.getDate() < defaultBirthDate.getDate())
  ) {
    age--
  }

  // 顯示結果
  document.getElementById("age_Result").innerText = age + " Years"
}
