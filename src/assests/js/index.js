
$("#add_student").submit(function(event) {
    alert("Insert data successfully....");
})

$("#student_data_update").submit(function(event) {
    event.preventDefault();

    var unindexedArray = $(this).serializeArray();
    console.log(unindexedArray);
    let data = {};
    $.map(unindexedArray, function(n, i) {
        data[n['name']] = n['value'];
    })

    var request = {
        'url' : `http://localhost:3000/api/students/${data.id}`,
        'method' : 'PUT',
        'data' : data
    }

    $.ajax(request).done(function(response) {
        alert("Data updated Successfully");
    })
})