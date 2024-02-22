const sentence = " I Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos nesciunt fuga tempora iste numquam doloremque atque illum veritatis optio natus dolor et quam ex voluptate esse, deleniti distinctio autem fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sit labore, aliquam vero enim cumque sunt repellat fugiat molestiae nesciunt, atque, veniam suscipit architecto ipsa? At modi officia magni ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sit labore, aliquam vero enim cumque sunt repellat fugiat molestiae nesciunt, atque, veniam suscipit architecto ipsa? At modi officia magni ratione." 


const matches = sentence.match(/lorem/gi);
//console.log(matches);
const occurances =matches ? matches.length: 0;
//console.log(occurances);
const position = sentence.search(/Loremm/i);
//console.log(position);
positions = position >= 0 ? position:"not found";
console.log(positions);