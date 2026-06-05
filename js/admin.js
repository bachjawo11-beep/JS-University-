function loadApplications() {

    let applications =
        JSON.parse(localStorage.getItem("jsu_applications")) || [];

    const tableBody =
        document.querySelector("#applicationsTable tbody");

    tableBody.innerHTML = "";

    applications.forEach((app, index) => {

        let row = `
        <tr>
            <td>${app.name}</td>
            <td>${app.email}</td>
            <td>${app.phone}</td>
            <td>${app.program}</td>
            <td>${app.date}</td>
            <td>
                <button class="btn btn-small"
                    onclick="approve(${index})">
                    Approve
                </button>

                <button class="btn btn-small"
                    style="background:red;color:white;"
                    onclick="removeApp(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });

}

function removeApp(index) {

    let applications =
        JSON.parse(localStorage.getItem("jsu_applications")) || [];

    applications.splice(index, 1);

    localStorage.setItem(
        "jsu_applications",
        JSON.stringify(applications)
    );

    loadApplications();
}

function approve(index) {

    let applications =
        JSON.parse(localStorage.getItem("jsu_applications")) || [];

    let students =
        JSON.parse(localStorage.getItem("jsu_students")) || [];

    let app = applications[index];

    if (!app) {
        alert("Application not found!");
        return;
    }

    let exists = students.find(s => s.email === app.email);
    if (exists) {
        alert("Student already exists!");
        return;
    }

    let newStudent = {
        studentId: "JSU" + Date.now(),
        username: (app.name || "user")
            .toLowerCase()
            .replace(/\s+/g, ""),
        password: "1234",
        name: app.name || "N/A",
        email: app.email || "N/A",
        phone: app.phone || "N/A",
        nationality: app.nationality || "N/A",
        program: app.program || "N/A",
        admissionStatus: "Approved",
        applicationDate: app.date || app.time || "Unknown",
        approvalDate: new Date().toLocaleDateString(),
        gpa: "4.0",
        level: "Year 1",
        status: "Active"
    };

    students.push(newStudent);

    localStorage.setItem("jsu_students", JSON.stringify(students));

    applications.splice(index, 1);

    localStorage.setItem("jsu_applications", JSON.stringify(applications));

    loadApplications();

    alert("Student approved and added to portal!");
}

loadApplications();

// =========================
// Messages Center
// =========================

function loadMessages(){

    let messages =
        JSON.parse(localStorage.getItem("jsu_messages")) || [];

    const tableBody =
        document.querySelector("#messagesTable tbody");

    if(!tableBody) return;

    tableBody.innerHTML = "";

    messages.forEach((msg,index)=>{

        tableBody.innerHTML += `
        <tr>
            <td>${msg.name}</td>
            <td>${msg.email}</td>
            <td>${msg.message}</td>
            <td>${msg.date}</td>

            <td>
                <button
                    class="btn btn-small"
                    style="background:red;color:white;"
                    onclick="deleteMessage(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

if (applications.length === 0) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center;">
                No applications found
            </td>
        </tr>
    `;
    return;
}

function deleteMessage(index){

    let messages =
        JSON.parse(localStorage.getItem("jsu_messages")) || [];

    messages.splice(index,1);

    localStorage.setItem(
        "jsu_messages",
        JSON.stringify(messages)
    );

    loadMessages();

}

loadMessages();
