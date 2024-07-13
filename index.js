window.addEventListener('DOMContentLoaded', (event) => {
    function checkWindowSize() {
      const warning = document.getElementById('warning');
      const content = document.querySelector('.cont');
  
      if (window.innerWidth <= 500) {
        warning.style.display = 'none';
        content.style.display = 'block';
      } else {
        warning.style.display = 'block';
        content.style.display = 'none';
      }
    }
  
    // Verifica o tamanho da janela ao carregar a página
    checkWindowSize();
  
    // Verifica o tamanho da janela ao redimensionar
    window.addEventListener('resize', checkWindowSize);
  });
  