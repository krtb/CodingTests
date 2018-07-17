function outer () {
  var secret = "something"
  function innner () {
    console.log(secret)
  }
  inner()
}
outer()

/// Shadowing

function ciaWorld() {
  console.log('Hello World')
}

let name = 'Brad'
console.log(name)
 {
   let name = 'Not Brad'
   console.log(name);
 }
 console.log(name);
