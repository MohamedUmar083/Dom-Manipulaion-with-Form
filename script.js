document.getElementById("form").addEventListener("submit", function (event) {
  let checkbox = document.querySelectorAll('input[name="foods"]:checked');
  event.preventDefault();
  if (checkbox.length === 0 || checkbox.length < 3) {
    alert("Please select atleast three Foods....!");
  } else {
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let foods = Array.from(checkbox).map((checkboxs) => checkboxs.value);
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let ntable = document.getElementById("table");
    var newRow = ntable.insertRow(ntable.rows.length);
    var cells = [];
    for (var i = 0; i < 8; i++) {
      cells.push(newRow.insertCell(i));
    }

    cells[0].innerText = fname;
    cells[1].innerText = lname;
    cells[2].innerText = address;
    cells[3].innerText = pincode;
    cells[4].innerText = gender;
    cells[5].innerText = foods.join(", ");
    cells[6].innerText = state;
    cells[7].innerText = country;

    document.getElementById("form").reset();
  }
});
