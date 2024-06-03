console.log("helooo");
console.log("java script ");

var q1 =[100,200];
      var q2=[...q1];  // copy by value
      var q3 =[60,...q1,78,90];
      console.log(q3);

      var t1 = [400,500];
      var t2 = [90,80];
      var t3 = [...t2,...t1];
      console.log(t3);


//more control
      const marks = [80,90,100];
    for(let i = 0; i<marks.length;i++)
    console.log("Index",i,"marks",marks[i]);
//readable and simple | in----index
    for (let idx in marks){
        console.log("Index:",idx,"marks",marks[idx]);
    }
//clean and readable
    for (let mark of marks){
        console.log("mark:",mark);
    }
/// array of objs eg 1 

const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];
  
  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];

  //   Ex 1.1: Combine cart + newItems
  var fruits = [...cart,...newItems];
  console.log(fruits);
  
   // Ex 1.2: Find total of cart
  //let total=0;
  // for(let idx in allitems){
  // let cost = allitems[idx].price *allitems[idx].quantity}
  //totall=total+cost

  let result = 0;
  for (let item of fruits){
    result += item.price * item.quantity;
  }
console.log(result);

// let r = 0;  /////////// for in 
// for (let item in fruits){
//     console.log("item",item);
//   result += item.price * item.quantity;
// }
////ex 2
// Ex 2: Rating 4.7 and above | Recommendations List
const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
 const ar = [];//array create
  for (let movie of books ){
    if (movie.rating >= 4.7)
        
    ar.push(movie.title) //data into the array
  }
console.log(ar);
  // Output
  // ['A Brief History of Time', 'Clean Code', 'Sapiens' ]

  // Ex 3: If employee's grades 80 or above promote them
  const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  const arr=[];
  for(mem of employes){
   if(mem.grade>80){
    arr.push( {id: mem.id, status: 'promoted'});// we can even use spread in objects 
   }
  }
  console.log(arr);
// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]


// Ex4: Top 1 movie titles

const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
   function avg(ratings){
    let sum = 0;
    for (let i = 0; i < rating.length; i++) {
        sum += rating[i];
    }
    return sum / rating.length;

   }
 
  // Expected Output:  The Dark Knight and Inception
