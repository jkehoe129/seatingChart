document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    location.reload();
  }, 5 * 60 * 1000);
  
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => {
        if (a.Section === b.Section) {
          return a.Name.localeCompare(b.Name);
        }
        return a.Section.localeCompare(b.Section);
      });

      const table = document.getElementById('seatingChart');
      const headerRow = document.createElement('tr');

      ['Name', 'Seat'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });

      table.appendChild(headerRow);

      data.forEach((person, index) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = person.Name;
        row.appendChild(nameCell);

        const seatCell = document.createElement('td');
        seatCell.textContent = person.Seat;
        seatCell.style.backgroundColor = person.Section;
        row.appendChild(seatCell);

        table.appendChild(row);
      });
    });
});
