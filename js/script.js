var selectedIndex = null;
var array1 = new Array();
array1.push({"fullName":"Juan-Manuel Fangio","csapat":"Officine Alfieri Maserati","city":"argentín"});
array1.push({"fullName":"Sam Posey","csapat":"Yeoman Credit Racing Team","city":"amerika"});
printArray();
function printArray(){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var newRow;
    for (i = 0; i < array1.length; i++) {
        newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = array1[i].fullName;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = array1[i].csapat;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = array1[i].city;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = '<a onClick="onEdit('+i+')">Edit</a>' + '<a onClick="onDelete('+i+')">Delete</a>';
    }
}
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedIndex==null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["csapat"] = document.getElementById("csapat").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    array1.push({"fullName":data.fullName,"csapat":data.csapat,"city":data.city});
    printArray();
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("csapat").value = "";
    document.getElementById("city").value = "";
    selectedIndex=null;
}
function onEdit(index) {
    document.getElementById("fullName").value = array1[index].fullName;
    document.getElementById("csapat").value = array1[index].csapat;
    document.getElementById("city").value = array1[index].city;
    selectedIndex=index;
}
function updateRecord(formData) {
    array1[selectedIndex].fullName=formData.fullName;
    array1[selectedIndex].csapat=formData.csapat;
    array1[selectedIndex].city=formData.city;
    printArray();
}
function onDelete(index) {
    if (confirm('Are you sure to delete this record ?')) {
        array1.splice(index, 1); // Deleting the entry with the specified index
        resetForm();
        printArray();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}