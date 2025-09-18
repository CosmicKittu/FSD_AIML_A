function resister(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log("resitered succes fully")
            resolve()
            
        }, 4000)
    })
}
function email(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log("email succes fully")
            resolve()
            
        }, 3000)
    })
}
// function login(){
//     console.log("login succes fully")
// }
// function getdata(){
//     console.log("getdata succes fully")
// }
// function displaydat(){
//     console.log("displaydata succes fully")
// }

// resister();
// email();
// login();
// getdata();
// displaydat();

resister().then(
    email
)