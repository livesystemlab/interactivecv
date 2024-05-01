
document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('typewriter-text');
    const typewriter = new Typewriter(target, {
      strings: ['Welcome Terminal CV 1.0 ', 'Instructions for usage press help command below ' , 'author: ing. luis favela', ' With collaboration of The Pentester Diaries',
    'remember use command initialize first for boot the system'],
      autoStart: true,
      loop: true,
    });
  });