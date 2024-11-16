// Vérifie si les View Transitions sont supportées
if (document.startViewTransition) {
    document.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.href;
  
        // Lance la transition
        document.startViewTransition(() => {
          window.location.href = url;
        });
      })
    );
  }
  