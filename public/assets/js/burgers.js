$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newState = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            location.reload();
        });
    });  

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var name = $("[name=burger-name]").val().trim();
        if(name !== "") {
            var newBurger = {
                name: name
            };
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                location.reload();
            });
        }
        else {
            $("[name=burger-name]").val("");
        }
    });

    $(".delete-sleep").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        });
    });  
     
});