
function randoString() {
  return '' + Math.random()
}

function createPlainObject() {
  return {
    foo: randoString(),
    bar: randoString(),
    baz: randoString(),
    quux: randoString(),
    toto: randoString(),
    haha: randoString(),
    yolo: randoString()
  }
}

function MyFunc (foo, bar, baz, quux, toto, haha, yolo) {
  this.foo = foo
  this.bar = bar
  this.baz = baz
  this.quux = quux
  this.toto = toto
  this.haha = haha
  this.yolo = yolo
}

function createFuncBasedObject() {
  return new MyFunc(randoString(), randoString(), randoString(),
    randoString(), randoString(), randoString(), randoString())
}

class MyClass {
  constructor (foo, bar, baz, quux, toto, haha, yolo) {
    this.foo = foo
    this.bar = bar
    this.baz = baz
    this.quux = quux
    this.toto = toto
    this.haha = haha
    this.yolo = yolo
  }
}

function createClassBasedObject() {
  return new MyClass(randoString(), randoString(), randoString(),
    randoString(), randoString(), randoString(), randoString())
}

async function main() {
  var objects = []
  var plain = process.argv.includes('--use-object')
  var clazz = process.argv.includes('--use-class')

  console.log(plain ? 'using plain object' : clazz ? 'using class' : 'using func')

  for (var i = 0; i < 10000; i++) {
    if (plain) {
      objects.push(createPlainObject())
    } else if (clazz) {
      objects.push(createClassBasedObject())
    } else {
      objects.push(createFuncBasedObject())
    }
  }

  await new Promise(resolve => setTimeout(resolve, 10000))

  global.gc()

  await new Promise(resolve => setTimeout(resolve, 10000))

  console.log(process.memoryUsage())
}

main()