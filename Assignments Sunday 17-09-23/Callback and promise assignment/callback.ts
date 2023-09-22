type fn=(a:string)=>void;
type text=string;

console.log("\n+++ START +++")

function ordermaid(cb:fn):void{
    console.log("\nOrder to maid : Clean the room");
    setTimeout(() => {
        console.log("\nCleaning room");
    }, 2000);
    setTimeout(() => {
        cb("Room cleaned!")
        preparelunch(maidresponse2);
    }, 4000);
};
function maidresponse(message:text):void{
    console.log("\nResponse from maid : ",message);
};

function preparelunch(cb:fn):void{
setTimeout(() => {
    console.log("\nOrder to maid : Prepare lunch");
}, 2000);
    setTimeout(() => {
        console.log("\nPreparing lunch");
    }, 2000);
    setTimeout(() => {
        console.log("\nServing the lunch");
        cb("Lunch served!");
        dolaundry(maidresponse3);
    }, 4000);
};
function maidresponse2(message:text):void{
    console.log("\nMaid response : ",message);
};

function dolaundry(cb:fn):void{
    setTimeout(() => {
        console.log("\nOrder to maid : Do laundry");
    }, 2000);
    setTimeout(() => {
        console.log("\nWashing clothes");
    }, 2000);
    setTimeout(() => {
        cb("Laundry done");
    }, 4000);
}
function maidresponse3(message:text):void{
    console.log("\nResponse from maid : ",message);
    setTimeout(() => {
        console.log("\n+++ END +++\n")
    }, 2000);
};

ordermaid(maidresponse);