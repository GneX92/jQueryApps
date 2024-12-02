
$("#btnAdd").on("click", () => {
    if ($("#radioappendselection").val() === "append") {
        let val = $("#input").val();
        let option = '<option value="' + val + '">' + val + '</option>';
        $("#lbEntries").append(option);
    }

    if ($("#radioappendselection").val() === "prepend") {
        let val = $("#input").val();
        let option = '<option value="' + val + '">' + val + '</option>';
        $("#lbEntries").prepend(option);
    }
})

$("#btnRemove").on("click", () => {
    if ($("#radioappendselection").val() === "append") {
        $("#lbEntries").last().remove();
    }

    if ($("#radioappendselection").val() === "prepend") {
        $("#lbEntries").first().remove();
    }
})