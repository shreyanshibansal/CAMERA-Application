let openRequest = indexedDB.open("myDatabase");
let db;
openRequest.addEventListener("success", () => {
    // console.log("connection successfull");
    db=openRequest.result;
})

openRequest.addEventListener("upgradeneeded" , ()=> {
  // triggers if the client had no database
  // ...perform initialization...
    // console.log("db upgraded OR initalisation in db ");
    db = openRequest.result;

    db.createObjectStore("video", { keyPath:"id" });
    db.createObjectStore("image", { keyPath:"id" });

});

openRequest.addEventListener("error", ()=>{
  console.error("Error", openRequest.error);
});
