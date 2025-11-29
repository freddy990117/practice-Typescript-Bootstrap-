// 定義名為 Person 的物件的形狀
// interface Person {
//   Phone: number;
//   Name: string;
//   Job: string;
//   Email: string;
//   Message: string;
// }

const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click btn");

  const chechBoxes =
    document.querySelectorAll<HTMLInputElement>(".form-check-input");
  chechBoxes.forEach((box) => {
    if (box.checked) {
      console.log(box.name);
    }
    const personMessage = document.getElementById(
      "message"
    ) as HTMLInputElement;
    console.log(personMessage.value);
  });
});
// 透過 id 取得 HTML 中的值
// const personPhone = document.getElementById(".phone") as HTMLInputElement;
// const personName = document.getElementById("name") as HTMLInputElement;
// const personJob = document.getElementById("job") as HTMLInputElement;
// const personEmail = document.getElementById("email") as HTMLInputElement;

// const Person1: Person = {
//   Phone: Number(personPhone),
//   Name: personName.value,
//   Job: personJob.value,
//   Email: personEmail.value,
// };

// console.log(Person1.Phone);
