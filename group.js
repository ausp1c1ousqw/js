class Group {
  constructor() {
    this.set = []
  }

  has(value) {
    return this.set.includes(value)
  }

  add(value) {
    if(this.has(value))
      console.log('that value is already there')
    else
      this.set.push(value)
  }

  delete(value) {
    if(this.has(value)) 
      this.set.splice(this.set.indexOf(value), 1)
    else
     console.log('there is no such value')
  }
  
  static from(array) {
    let newGroup = new Group
    for(let el of array) {
      newGroup.add(el)
    }
    return newGroup
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
