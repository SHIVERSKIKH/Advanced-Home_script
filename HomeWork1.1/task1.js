const scheduleData = [
    {
    "id": 1,
    "name": "Йога",
    "time": "10:00 - 11:00",
    "maxParticipants": 15,
    "currentParticipants": 8
    },
    {
    "id": 2,
    "name": "Пилатес",
    "time": "11:30 - 12:30",
    "maxParticipants": 10,
    "currentParticipants": 5
    },
    {
    "id": 3,
    "name": "Кроссфит",
    "time": "13:00 - 14:00",
    "maxParticipants": 20,
    "currentParticipants": 15
    },
    {
    "id": 4,
    "name": "Танцы",
    "time": "14:30 - 15:30",
    "maxParticipants": 12,
    "currentParticipants": 10
    },
    {
    "id": 5,
    "name": "Бокс",
    "time": "16:00 - 17:00",
    "maxParticipants": 8,
    "currentParticipants": 6
    }
    ];

    function createTableRow(data) {
        const table = document.getElementById('scheduleTable');
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = data.name;
        row.insertCell(1).textContent = data.time;
        row.insertCell(2).textContent = data.maxParticipants;
        const currentCell = row.insertCell(3);
        currentCell.textContent = data.currentParticipants;
    
        const actionCell = row.insertCell(4);
        
        const btnSignUp = document.createElement('button');
        const btnCancel = document.createElement('button');
        
        if (data.maxParticipants > data.currentParticipants) {
          btnSignUp.textContent = 'Записаться';
          btnSignUp.addEventListener('click', function() {
            data.currentParticipants++;
            currentCell.textContent = data.currentParticipants;
            updateLocalStorage();
            updateButtons();
          });
          actionCell.appendChild(btnSignUp);
        } else {
          btnSignUp.textContent = 'Мест нет';
          btnSignUp.disabled = true;
          actionCell.appendChild(btnSignUp);
        }
        
        btnCancel.textContent = 'Отменить запись';
        btnCancel.addEventListener('click', function() {
          if (data.currentParticipants > 0) {
            data.currentParticipants--;
            currentCell.textContent = data.currentParticipants;
            updateLocalStorage();
            updateButtons();
          }
        });
        btnCancel.disabled = true; 
        actionCell.appendChild(btnCancel);
        
        function updateButtons() {
          if (data.maxParticipants > data.currentParticipants) {
            btnSignUp.disabled = false;
          } else {
            btnSignUp.disabled = true;
          }
          if (data.currentParticipants > 0) {
            btnCancel.disabled = false;
          } else {
            btnCancel.disabled = true;
          }
        }
        
        updateButtons();
      }
    
      function updateLocalStorage() {
        localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
      }
    
      function populateScheduleTable() {
        scheduleData.forEach(function(data) {
          createTableRow(data);
        });
      }
    
      populateScheduleTable();