"use strict";
// 透過 id 取得 HTML 中的值
const personPhone = document.getElementById("phone");
const personName = document.getElementById("name");
const personJob = document.getElementById("job");
const personEmail = document.getElementById("email");
// 取得 Textarea 輸入框
const personMessage = document.getElementById("message");
// 取得所有的 checkbox (是一組的 Nodelist 節點)
const chechBoxes = document.querySelectorAll(".form-check-input");
// 需要重新賦值所以使用 let
let messageValue = ""; // 這個是放留言的變數
let personId = 0; // 這個是放每一個表單的 id
let collapseId = 0; // 這個是表單內部的 div id
// 取得按鈕
const submitBtn = document.getElementById("submit-btn");
// 按下送出表單會發生的行為
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // 確認需要的資訊是否有輸入（ Message 與 Email )
  if (!checkTrim()) {
    // 如果 checkTrim 不是 true，就中斷送出表單的行為
    return;
  }
  // 每次點擊送出表單，建立一個 person 變數，person 變數內部的資訊由 newPerson 提供
  const person = newPerson();
  // 隨後會帶入到表單的建立
  newAccording(person);
  // 清除表單中的內容
  clearInput();
});
// 建立一個 Person fn 要符合 Person Interface
const newPerson = function () {
  // 設定參數 (原本全域變數更改為區域變數)
  const checkboxArr = [];
  // 跑迴圈確認是否有被點選
  chechBoxes.forEach((box) => {
    // 是否有 check
    if (box === null || box === void 0 ? void 0 : box.checked) {
      // 將有勾選的選項 push 到 array 當中
      checkboxArr.push(box.name);
    }
  });
  return {
    Phone: Number(personPhone.value),
    Name: personName.value,
    Job: personJob.value,
    Email: personEmail.value,
    Message: personMessage.value,
    Service: checkboxArr,
  };
};
const noData = document.getElementById("no-data");
// 建立一個 fn 用於「新增」According Item (參數 person 會是使用者輸入的資訊)
const newAccording = function (person) {
  if (noData) noData.style.display = "none";
  // 新增 id 的順序
  personId++;
  collapseId++;
  // 取得 according 的主幹
  const accrordingContatiner = document.getElementById("accordionExample");
  accrordingContatiner.innerHTML += `
  <div class="accordion-item">
              <h2 class="accordion-header" id="accordion-${personId}"> 
                <button
                  id="collapse-button"
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-${collapseId}"
                  aria-expanded="true"
                  aria-controls="collapse-${collapseId}"
                >
                  Request from : ${person.Name}
                </button>
              </h2>
              <div
                id="collapse-${collapseId}"
                class="accordion-collapse collapse"
                aria-labelledby="accordion-${personId}"s
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body" id="collapse-content">
                  Phone: ${personPhone.value},
                  <br/>
                  Email: ${personEmail.value},
                  <br/>
                  Job: ${personJob.value},
                  <br/>
                  Service: ${person.Service},
                  <br/>
                  User want to say : ${person.Message}
                </div>
              </div>
            </div>
  `;
};
// 清空表單中輸入的資訊 （因為他是行為，不需要符合 Person Interface)
const clearInput = function () {
  personPhone.value = "";
  personName.value = "";
  personJob.value = "";
  personEmail.value = "";
  personMessage.value = "";
  // 跑一次迴圈讓勾選重置
  chechBoxes.forEach((box) => {
    box.checked = false;
  });
};
// 確認是否有輸入資訊
const checkTrim = function () {
  if (!personEmail.value.trim()) {
    alert("We need your Email to contact you");
    // 如果沒有輸入，就回傳 false，讓判斷式中斷
    return false;
  }
  if (!personMessage.value.trim()) {
    alert("Please leave message to us");
    // 如果沒有輸入，就回傳 false，讓判斷式中斷
    return false;
  }
  // 都有輸入回傳 true
  return true;
};
// //TODO 按下 submit-form 後，一個行為是將資料放入表單中（已完成，但是後續結構需要更改為每個使用者為新的 According Item），一個行為是 依照 id 新增 According Item，而這樣我需要：
// 1.建立一個 fn 用於存放新的 Person 資訊（要符合 Person 的 interface 結構）✅
// 2.建立一個 fn 用於「新增」 According Item （According Item 的 id 從 0 開始 ）✅
// 3.更改 submit btn 的行為，按下之後先：「設定一個變數放置 1 的資訊（變數會是一個 fn」 「在到 2 中帶入參數 1 的參數」✅
// 4.設定哪些 input 需要 required 5.設定無 item 時的顯示畫面 6.新增完成後，右下角跳出新增完成
// 7.清除表單上的內容 ✅
