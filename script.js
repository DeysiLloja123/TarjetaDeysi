document.getElementById('shareButton').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'Presentación Deysi',
      text: 'Mira mi tarjeta de presentación',
      url: window.location.href
    }).then(() => {
      console.log('Compartido exitosamente');
    }).catch((error) => {
      console.error('Error al compartir:', error);
    });
  } else {
    alert('La API de Web Share no está soportada en este navegador.');
  }
});

