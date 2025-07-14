function showModule(id) {
  const modules = document.querySelectorAll('.module');
  modules.forEach(mod => mod.style.display = 'none');

  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
}
