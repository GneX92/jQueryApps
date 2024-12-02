
$(`#btnAdd`).on("click", () => {

    var radioValue = $("input[name='radioappendselection']:checked").val();
    let val = $("#input").val();

    if (radioValue === "append") {                
        $('#lbEntries').append($('<option>').val(val).text(val));
    }

    if (radioValue === "prepend") {
        $('#lbEntries').prepend($('<option>').val(val).text(val));
    }
});

$("#btnRemove").on("click", () => {

    var radioValue = $("input[name='radioappendselection']:checked").val();
    let hasSelection = false;
    

    if (!$("#lbEntries").val() == "") {
        hasSelection = true;
    }

    if (hasSelection) {  
        $('#lbEntries option:selected').remove();
    }
    else if (radioValue === "append") {
        $("#lbEntries option:last-child").remove();
    }
    else if (radioValue === "prepend") {
        $("#lbEntries option:first-child").remove();
    }
})

$("input[name='radioselection']").on("change", () => {
    var radioValue2 = $("input[name='radioselection']:checked").val();

    if (radioValue2 === "single") {
        $("#lbEntries").removeAttr('multiple')
    }

    if (radioValue2 === "multiple") {
        $("#lbEntries").attr('multiple', 'multiple')
    }
})