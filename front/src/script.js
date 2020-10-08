  const BACKEND_URL = "http://localhost:3000";

  class Script { 
    addSubToList(sub) {
      const list = document.getElementById("subs-list");
      const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subName.name}</td>
            <td>${sub.type}</td>
            <td>${sub.Url}</td>
            <td>${sub.price}</td>
            <td>${subberName.name}</td>
            <td>${subberEmail.email}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            <td><a href="#" class="btn btn-info btn-sm edit">O</a></td> 
            `;
          list.appendChild(row)

        fetch(`${BACKEND_URL}/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": `application/json`,
        },
        body: JSON.stringify({"name": name, "type": type, "link": link, "price": price, "subscriber": subberName, "email": subberEmail}),
      })
      .then(response => response.json())
      .then(json => {
        console.log("Added:", sub);
      })
      .catch((error) => {
        console.error("Error:", error);
    });
  }
    // Delete entire table element 

    deleteSub(el) {
      if(el.classList.contains("delete")) {
          el.parentElement.parentElement.remove();
      }
      fetch (`${BACKEND_URL}/subscriptions`, {
        method: "DELETE",
      })
      .then(response => response.json())
      .then(json => {
        console.log("Deleted Subscription", sub);
      });
  }   

  clearFields() {
      document.getElementById("subname").value = "";
      document.getElementById("type").value = "";
      document.getElementById("link").value = "";
      document.getElementById("price").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
  };
    
    // Save Subscriber
      saveSubber() {
      const submit = document.querySelector(".subber").addEventListener("submit", (e) => {
      
      // Prevent Default
      e.preventDefault();
      const subberName = e.target.name.value;
      const subberEmail = e.target.email.value;

      // Input Validations

      const subber = new Subscriber(subberName, subberEmail);

      if(subberName === "" || subberEmail === "") {
        alert("Name and email is required", "danger");
      } else {
        fetch(`${BACKEND_URL}/subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify({"name": subberName, "email": subberEmail}),
        })
        .then(response => response.json())
        .then(json => {
          alert("Saved Subscriber");{
          }
        })
        .catch((error) => {
          alert("Error!/nCouldn't save subscriber.");
        });
      }

      // Render Subscription

      document.addEventListener("DOMContentLoaded", this.displaySubs);

      // Add Subscription

      document.querySelector(".sub-form").addEventListener("submit", (e) => {
    
      // Prevent Refresh
      e.preventDefault();

      // Sub Form consts
      const subName = document.getElementById("subname").value;
      const subCategory = document.getElementById("type").value;
      const subUrl = document.getElementById("link").value;
      const subPrice = document.getElementById("price").value;
        
      // Validate
      if(subName === "" || subCategory === "" || subUrl === "" || subPrice === "") {
          alert("Fill in all fields", "danger");
      } else { 
          const sub = new Subscription(subName, subCategory, subUrl, subPrice);

        // Add sub to script
        debugger
        Script.addSubToList(sub);

        }
      })
    });
  }
}