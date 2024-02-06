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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.position = 0
  }
  next() {
    if(this.position >= this.group.set.length)
      return {done: true} 
    else {
      let result = {value: this.group.set[this.position], done: false}
      this.position++
      return result
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}