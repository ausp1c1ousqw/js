function loop(value, testFunc, updateFunc, bodyFunc) {
  if(!testFunc(value))
    return console.log('that is all')
  bodyFunc(value)
  loop(updateFunc(value), testFunc, updateFunc, bodyFunc)
}

loop(5, n => n > 0, n => n - 1, console.log)