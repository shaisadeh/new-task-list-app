// קבועים עבור שדה הקלט ואזור המשימות
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

// מאזין לאירוע Enter בשדה הקלט
taskInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        createTask();
    }
});

// אירוע לחיצה על כפתור "הוסף"
document.querySelector('#push').onclick = function() {
    createTask();
};

// פונקציה ליצירת משימה חדשה
function createTask() {
    // בדיקה אם שדה הקלט ריק
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // יצירת מזהה ייחודי למשימה
        let taskId = 'task-' + Date.now();
        
        // הוספת HTML למשימה חדשה
        taskSection.innerHTML +=
        `<div class="task">
            <input onclick="updateTask(this)" type="checkbox" id="${taskId}">
            <label class="task-label" for="${taskId}">${taskInput.value}</label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>`;
        
        // הוספת פונקציונליות מחיקה לכל כפתורי המחיקה
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            };
        }
        
        // בדיקה אם צריך להוסיף גלילה
        taskSection.offsetHeight >= 300
            ? taskSection.classList.add("overflow")
            : taskSection.classList.remove("overflow");
        
        // איפוס שדה הקלט
        taskInput.value = "";
    }
}

// פונקציה לעדכון סטטוס משימה (סימון כמושלם)
function updateTask(checkbox) {
    // מציאת תווית המשימה הצמודה לצ'קבוקס
    let taskLabel = checkbox.nextElementSibling;
    
    // הוספה או הסרה של מחלקת checked בהתאם למצב הצ'קבוקס
    if (checkbox.checked) {
        taskLabel.classList.add("checked");
    } else {
        taskLabel.classList.remove("checked");
    }
}

// יצירת משימה לדוגמה בטעינה
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded and ready!");
    // אפשר להוסיף משימה לדוגמה כאן אם תרצה
});
