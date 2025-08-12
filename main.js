let taskList = document.getElementById("taskList");
    let counter = document.getElementById("counter");


    document.getElementById("qushish").addEventListener("click", () => {
        let vazifa = prompt("Vazifani kiriting:");
        if (!vazifa) return;

        let li = document.createElement("li");
        li.className = "bg-white p-3 flex justify-between items-center rounded shadow cursor-pointer hover:bg-gray-50 transition";
        li.textContent = vazifa;

        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;
            li.classList.toggle("line-through");
            li.classList.toggle("bg-green-100");
            updateCounter();
        });


        let delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.className = "text-red-500 hover:text-red-700";
        delBtn.addEventListener("click", () => {
            li.remove();
            updateCounter();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);

        updateCounter();
    });

    document.getElementById("Hammasi").addEventListener("click", () => {
        document.querySelectorAll("#taskList li").forEach(li => li.classList.remove("hidden"));
    });

    document.getElementById("Bajarilganlar").addEventListener("click", () => {
        document.querySelectorAll("#taskList li").forEach(li => {
            if (li.classList.contains("line-through")) li.classList.remove("hidden");
            else li.classList.add("hidden");
        });
    });

    document.getElementById("Bajarilmaganlar").addEventListener("click", () => {
        document.querySelectorAll("#taskList li").forEach(li => {
            if (!li.classList.contains("line-through")) li.classList.remove("hidden");
            else li.classList.add("hidden");
        });
    });

    function updateCounter() {
        let doneCount = document.querySelectorAll("#taskList li.line-through").length;
        let notDoneCount = document.querySelectorAll("#taskList li:not(.line-through)").length;
        counter.textContent = `Bajarilgan: ${doneCount} / Bajarilmagan: ${notDoneCount}`;
    }





    