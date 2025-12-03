// 定義名為 Person 的物件的形狀
interface Person {
  Phone: number;
  Name: string;
  Job: string;
  Email: string;
  Message: string;
  Service: Array<string>;
}
// 透過 id 取得 HTML 中的值
const personPhone = document.getElementById("phone") as HTMLInputElement;
const personName = document.getElementById("name") as HTMLInputElement;
const personJob = document.getElementById("job") as HTMLInputElement;
const personEmail = document.getElementById("email") as HTMLInputElement;
// 取得 Textarea 輸入框
const personMessage = document.getElementById("message") as HTMLTextAreaElement;
// 取得所有的 checkbox (是一組的 Nodelist 節點)
const chechBoxes =
  document.querySelectorAll<HTMLInputElement>(".form-check-input");
// 需要重新賦值所以使用 let
let messageValue: string = ""; // 這個是放留言的變數
let personId: number = 0; // 這個是放每一個表單的 id
let collapseId: number = 0; // 這個是表單內部的 div id
// 取得按鈕
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
// 按下送出表單會發生的行為
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 每次點擊送出表單，建立一個 person 變數，person 變數內部的資訊由 newPerson 提供
  const person = newPerson();
  // 隨後會帶入到表單的建立
  newAccording(person);
});

// 建立一個 Person fn 要符合 Person Interface
const newPerson = function (): Person {
  // 設定參數 (原本全域變數更改為區域變數)
  const checkboxArr: Array<string> = [];

  // 跑迴圈確認是否有被點選
  chechBoxes.forEach((box) => {
    // 是否有 check
    if (box?.checked) {
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

// 建立一個 fn 用於「新增」According Item (參數 person 會是使用者輸入的資訊)
const newAccording = function (person: Person) {
  // 新增 id 的順序
  personId++;
  collapseId++;

  // 取得 according 的主幹
  const accrordingContatiner = document.getElementById(
    "accordionExample"
  ) as HTMLDivElement;

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

// //TODO 按下 submit-form 後，一個行為是將資料放入表單中（已完成，但是後續結構需要更改為每個使用者為新的 According Item），一個行為是 依照 id 新增 According Item，而這樣我需要：
// 1.建立一個 fn 用於存放新的 Person 資訊（要符合 Person 的 interface 結構）
// 2.建立一個 fn 用於「新增」 According Item （According Item 的 id 從 0 開始 ）
// 3.更改 submit btn 的行為，按下之後先：「設定一個變數放置 1 的資訊（變數會是一個 fn」 「在到 2 中帶入參數 1 的參數」
// 4.設定哪些 input 需要 required 5.設定無 item 時的顯示畫面 6.新增完成後，右下角跳出新增完成
