export default (to, from, next) => {
  let isAdmin = false
  try {
    const userObject = localStorage.getItem('userObject')
    if (userObject) {
      isAdmin = JSON.parse(userObject)
    }
  } catch (e) {
    console.warn('No local storage')
  }
  if (isAdmin) {
    next()
  } else {
    next({
      name: 'home'
    })
  }
}
