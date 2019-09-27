
//Given the object with nested objects in it, print:

let student = {
    firstName: "Ana",
    lastName: "Blair",
    course: {
      name: "Web Development",
      type: "part-time"
    },
    attendedIn: "Madrid",
    address: {
      street: "Happy Street",
      number: 123,
      city: "Barcelona",
      zip: 08015,
      country: "Spain"
    }
  };
  
  //my answer:
  console.log(student.course.name); // => Web Development
  console.log(student.address.street); // => Happy Street
  console.log(`${student.firstName} moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course.`);
  // => Ana moved from Barcelona to Madrid to take part-time Web Development course.
  




//Given a 2D array, print the following:

const ironCampuses = [
    ["Mexico City", "Miami", "Sao Paulo"],
    ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
  ];
  
  //my answer:
  console.log(ironCampuses[0][1]); // => Miami
  console.log(ironCampuses[1][0]); // => Amsterdam
  console.log(ironCampuses[1][5]); // => Paris
  
  