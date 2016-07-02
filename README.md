# frontend-nanodegree-p4
P4: Website Optimization

To view the index.html page and run PageSpeed on it please visit http://yhippa.github.io/frontend-nanodegree-p4/index-min.html.  To view the pizzeria site either click the last link on that page or visit http://yhippa.github.io/frontend-nanodegree-p4/views/pizza-min.html.

Overview of optimizations:
  * Minified views/js/main.js to views/js/main.min.js
  * Replaced switch cases with array lookups
  * Moved computation of values that are static from within loops to before
  * Precompute the objects that will be used in for loops