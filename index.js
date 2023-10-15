
     const titleInput = document.getElementById("title-input");
     const descriptionInput = document.getElementById("des-input");
     const addButton = document.getElementById("btn-add");
     const issueTable = document.querySelector("table > tbody");

     addButton.addEventListener("click", function () {
          const title = titleInput.value;
          const description = descriptionInput.value;
          
          const selectAuthor = document.querySelector('#select-author');
          const author = selectAuthor.options[selectAuthor.selectedIndex].text;

          const selectSeverity = document.querySelector('#select-severity');
          const severity = selectSeverity.options[selectSeverity.selectedIndex].text;

          const row = document.createElement("tr");
          row.innerHTML = `
               <td>${title}</td>
               <td>${description}</td>
               <td>${author}</td>
               <td>${severity}</td>
          `;

          if (!title || !description) {
               alert("Vui lòng điền đầy đủ thông tin ạ!");
               return;
          }

          const deleteButton = document.createElement("button");
          deleteButton.innerText = "Xóa";
          deleteButton.classList.add("btn", "btn-danger");

          deleteButton.addEventListener("click", function () {
               issueTable.removeChild(row);
          });

          row.appendChild(deleteButton);
          issueTable.appendChild(row);

          // Đặt lại giá trị của các ô input về rỗng sau khi thêm mục
          titleInput.value = "";
          descriptionInput.value = "";
          selectAuthor.selectedIndex = 0; 
          selectSeverity.selectedIndex = 0; 
     });
