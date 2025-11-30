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
// 取得按鈕
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
// 設定參數
const checkboxArr: Array<string> = [];
// 需要重新賦值所以使用 let
let messageValue: string = "";

// 按下送出表單會發生的行為
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // 取得 Textarea 輸入框
  const personMessage = document.getElementById(
    "message"
  ) as HTMLTextAreaElement;
  // 取得所有的 checkbox (是一組的 Nodelist 節點)
  const chechBoxes =
    document.querySelectorAll<HTMLInputElement>(".form-check-input");
  //  跑迴圈遍布 checkbox
  chechBoxes.forEach((box) => {
    // 是否有 check
    if (box?.checked) {
      // 將有勾選的選項 push 到 array 當中
      checkboxArr.push(box.name);
    }
  });
  // 賦值給 messageValue
  messageValue = personMessage.value;

  // 先放置在裡面印出，後續會再變更
  const Person1: Person = {
    Phone: Number(personPhone.value),
    Name: personName.value,
    Job: personJob.value,
    Email: personEmail.value,
    Message: messageValue,
    Service: checkboxArr,
  };

  console.log(Person1);
});
