const inputValue = document.getElementById("calc-display");
    function append(value) {
      inputValue.value += value;
    }
    function clearDisplay() {
      inputValue.value = "";
    }
    function calculate() {
      try {
        inputValue.value = eval(inputValue.value);
      } catch (error) {
        inputValue.value = "Error";
      }
    }