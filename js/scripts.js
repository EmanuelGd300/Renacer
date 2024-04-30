function expandContainer() {
    var container = document.querySelector('.custom-container');
    var content = container.querySelector('.custom-content');
  
    container.classList.toggle('expanded');
    content.classList.toggle('show');
  }
  