//Use the example from the lesson with frameworks to retrieve the following:


let basic = {
    language: "JavaScript",
    frameworks: [
      {
        end: "back",
        list: [
          {
            name: "ExpressJS",
            released: 2010
          },
          {
            name: "MeteorJS",
            released: 2012
          }
        ]
      },
      {
        end: "front",
        list: [
          {
            name: "ReactJS",
            released: 2013
          },
          {
            name: "VueJS",
            released: 2014
          }
        ]
      }
    ]
  };
 

//my answer:

console.log(basic.frameworks[0].list[0].name); // => ExpressJS
console.log(`In Ironhack, I'll learn ${basic.frameworks[0].list[0].name} and ${basic.frameworks[1].list[0].name}.`); 
// => In Ironhack, I'll learn ExpressJS and ReactJS.