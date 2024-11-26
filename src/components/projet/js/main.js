document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.cd-projects-container');
    const navigation = document.querySelector('.cd-primary-nav');
    const triggerNav = document.querySelector('.cd-nav-trigger');
    const logo = document.querySelector('.cd-logo');

    if (!projectsContainer || !navigation || !triggerNav || !logo) {
      console.error('Required elements are missing from the DOM');
      return;
    }
  
    triggerNav.addEventListener('click', () => {
      if (triggerNav.classList.contains('project-open')) {
        // Fermer le projet
        const selected = projectsContainer.querySelector('.selected');
        if (selected) {
          selected.classList.remove('selected');
          selected.addEventListener(
            'transitionend',
            () => {
              const projectInfo = selected.querySelector('.cd-project-info');
              if (projectInfo) {
                projectInfo.scrollTop = 0;
                projectInfo.classList.remove('has-boxshadow');
              }
            },
            { once: true }
          );
        }
        projectsContainer.classList.remove('project-open');
        triggerNav.classList.remove('project-open');
        logo.classList.remove('project-open');
      } else {
        // Afficher/masquer la navigation
        triggerNav.classList.toggle('nav-open');
        projectsContainer.classList.toggle('nav-open');
        navigation.classList.toggle('nav-open');
      }
    });
  
    projectsContainer.addEventListener('click', (event) => {
      const target = event.target.closest('.single-project');
      if (!target) return;
  
      if (projectsContainer.classList.contains('nav-open')) {
        // Fermer la navigation
        triggerNav.classList.remove('nav-open');
        projectsContainer.classList.remove('nav-open');
        navigation.classList.remove('nav-open');
      } else {
        // Ouvrir le projet
        target.classList.add('selected');
        projectsContainer.classList.add('project-open');
        triggerNav.classList.add('project-open');
        logo.classList.add('project-open');
      }
    });
  
    projectsContainer.addEventListener('click', (event) => {
      if (!event.target.classList.contains('cd-scroll')) return;
  
      // Faire défiler vers le bas en cliquant sur la flèche
      const selectedProject = projectsContainer.querySelector('.selected');
      if (selectedProject) {
        const visibleProjectContent = selectedProject.querySelector('.cd-project-info');
        if (visibleProjectContent) {
          const windowHeight = window.innerHeight;
          visibleProjectContent.scrollTo({
            top: windowHeight,
            behavior: 'smooth',
          });
        }
      }
    });
  
    // Ajouter/retirer la classe `has-boxshadow` lors du défilement du contenu du projet
    projectsContainer.querySelectorAll('.cd-project-info').forEach((projectInfo) => {
      projectInfo.addEventListener('scroll', () => {
        if (!projectInfo) return;
  
        const scrollTop = projectInfo.scrollTop;
        if (scrollTop > 0) {
          projectInfo.classList.add('has-boxshadow');
        } else {
          projectInfo.classList.remove('has-boxshadow');
        }
      });
    });
  });
  