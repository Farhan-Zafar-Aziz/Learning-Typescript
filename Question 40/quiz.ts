//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
   
function manufacture(type:string, model:string, year:number, madeIn:string){
    console.log(type,model,year,madeIn)
   }
   
   manufacture("Honda","Civic 1.8",2023,"Japan")
   console.log("2000cc engine");
   console.log("Color,Black");