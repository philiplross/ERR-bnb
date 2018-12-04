$(document).ready(() => {
    $(".questionContainer").on("click", (event) => {
      event.preventDefault();
      const $formQuestions = $(".questions")
      console.log($formQuestions);
      $.each($formQuestions, (index, element) => {
        console.log("this is hte index", index);
        console.log("this is the element", element);
        const $selectedValue = $(element).find("option:selected").val();
        console.log("this is the selected value", $selectedValue)
      })
  
      $.ajax({ url: "./api/results", method: "POST" })
        .then((data) => {
          console.log(data)
        })
        .catch(err => console.log("ERROR", err))
    })
  });