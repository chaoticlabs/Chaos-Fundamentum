(function(document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(event) {
    var collapses = document.querySelectorAll('[data-action="collapse"]');
    for (var i = collapses.length - 1; i >= 0; i--) {
      var target = document.querySelector(collapses[i].dataset.target);
      console.log(target);
      if (target.classList.contains('collapsed') === target.classList.contains('expanded')) {
        target.classList.toggle('collapsed');
      }

      collapses[i].addEventListener('click', function(event) {
        var targets = document.querySelectorAll(this.dataset.target);
        for (var j = targets.length - 1; j >= 0; j--) {
          targets[j].classList.toggle('collapsed');
          targets[j].classList.toggle('expanded');
        }
      });
    }

    document.body.classList.add('c-collapse');
  }, false);
})(document);
