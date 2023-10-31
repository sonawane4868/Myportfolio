const banner = document.getElementsByClassName('banner')[0];
  const block = document.getElementsByClassName('blocks');
  for (var i = 1; i < 400; i++) {
    banner.innerHTML += "<div className='blocks'></div>";
    const duration = Math.random() * 5;
    block[i].style.animationDuration = 2 + duration + 's';
    block[i].style.animationDelay = duration + 's';
  }