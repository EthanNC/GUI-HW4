$(document).on('change','.qty', function(){
    $('.qty').val($(this).val());
});
$(document).on('change','.add-to-cart .qty', function(){
    $('.add-to-cart .qty').val($(this).val());
 });
function createTable(){
            mytable = $('<table>Price/Fuel Consumption</table>').attr({ id: "basicTable" });
            var rows = new Number($("#rowcount").val());
            var cols = new Number($("#columncount").val());
            var tr = [];

            for (var i = 0; i < rows; i++) {
                var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
                var col = $('<td></td>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
                //$(col).append("<h4>Price "+i+" </h4>");
                $(row).append("<b>MPG "+(i+1)+":</b>");
                $(mytable).append("<h4>Price " +(i+1)+"</h4>");
                for (var j = 0; j < rows; j++) {
                    $('<td></td>').text("$").appendTo(row);
                    var string = "yourPrice";
                    $('<td></td>').append("<input placeholder="+string+"/>").appendTo(row)
                }
            }
            console.log("TTTTT:"+mytable.html());
            mytable.appendTo("#box");
    
}

function deleteTable(){
    location.reload();
}