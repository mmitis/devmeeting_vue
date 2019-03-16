export default (to, from, next) => {
  let isAdmin = false;
  try {
    const userObject = localStorage.getItem('userObject');
    if (userObject) {
      isAdmin = JSON.parse(userObject);
    }
  } catch (e) {
    console.warn('No local storage/userobject');
  }
  if (isAdmin) {
    return next();
  } else {
    return next({
      name: 'home'
    });
  }
};
