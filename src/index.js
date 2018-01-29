import '💅/index.scss'

function resolveAfter2Seconds () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}

async function asyncCall () {
  console.log('calling')
  console.log(await resolveAfter2Seconds())
}

asyncCall()
