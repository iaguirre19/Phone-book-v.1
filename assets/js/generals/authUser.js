window.addEventListener("DOMContentLoaded", function() {    
    checkUserRol()
});

const checkUserRol = () => {
    const storedUser = localStorage.getItem("user");
    const userObj = JSON.parse(storedUser); 
    const {_id, name, email, roles } = userObj
    console.log(roles)
    if(hasRole(userObj, "admin")){
        console.log(true)
        const userProfile = {
            name,
            email,
            roles
        }
        return userProfile
    }
} 


const hasRole = (user, role) => user.roles.includes(role)

