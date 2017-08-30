function onNavClick (ev) {
  let { type } = ev.target.dataset
  switch (type) {
    case 'about':
      displays[0].innerHTML = `
      <div>About</div>
      `
  }
}
