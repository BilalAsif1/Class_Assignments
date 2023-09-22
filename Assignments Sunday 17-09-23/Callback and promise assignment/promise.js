// Edit order to trigger rejection and show error
console.log("\n+++ START +++");
function ordermaid(order = "Clean the room") {
    new Promise((resolve, reject) => {
        if (order === "Clean the room") {
            console.log("\nOrder to maid : ", order);
            setTimeout(() => {
                console.log("\nCleaning room");
            }, 2000);
            setTimeout(() => {
                resolve("Room is cleaned!");
            }, 4000);
        }
        else
            (reject("Room is not cleaned!"));
    }).then((res1) => {
        console.log(`\nMaid response : ${res1}`);
        preparelunch();
    }).catch((err1) => { console.log("\nError : ", err1); });
}
;
function preparelunch(order = "Prepare lunch") {
    new Promise((resolve, reject) => {
        if (order === "Prepare lunch") {
            setTimeout(() => {
                console.log("\nOrder to maid : ", order);
            }, 2000);
            setTimeout(() => {
                console.log("\nPreparing lunch");
            }, 2000);
            setTimeout(() => {
                resolve("Lunch is served!");
            }, 4000);
        }
        else
            (reject("Lunch is not prepared!"));
    }).then((res2) => {
        console.log(`\nMaid response : ${res2}`);
        dolaundry();
    }).catch((err2) => { console.log("\nError : ", err2); });
}
;
function dolaundry(order = "Do laundry") {
    new Promise((resolve, reject) => {
        if (order === "Do laundry") {
            setTimeout(() => {
                console.log("\nOrder to maid : ", order);
            }, 2000);
            setTimeout(() => {
                console.log("\nWashing clothes");
            }, 2000);
            setTimeout(() => {
                resolve("Laundry is done!");
            }, 4000);
        }
        else
            (reject("Laundry is not done!"));
    }).then((res3) => {
        console.log(`\nMaid response : ${res3}`);
        setTimeout(() => {
            console.log("\n+++ END +++\n");
        }, 2000);
    }).catch((err3) => { console.log("\nError : ", err3); });
}
;
ordermaid();
export {};
