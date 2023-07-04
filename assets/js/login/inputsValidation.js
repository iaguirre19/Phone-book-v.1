(function(){
    const form = document.querySelector("#form")

    form.addEventListener("submit", validateClient);


    function validateClient(e) {
        e.preventDefault();
        const user = document.querySelector("#userLogin").value;
        const password = document.querySelector("#passwordLogin").value;
        const client = {
            user,
            password
        };

        
        
        console.log(client.user)
        if( validate(client)){

            console.log("todos los campos necesitas ser llenos");
        }else{
            console.log("todos los campos estan llenos");        
        };


    }


    function validate(obj){
        return !Object.values(obj).every(input => input !== "");
    }
})()
