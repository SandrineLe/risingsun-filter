// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = itemElem.querySelector('.weight').textContent;
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // bind sort button click
  var sortByGroup = document.querySelector('.sort-by-button-group');
  sortByGroup.addEventListener( 'click', function( event ) {
    // only button clicks
    if ( !matchesSelector( event.target, '.button' ) ) {
      return;
    }
    var sortValue = event.target.getAttribute('data-sort-value');
    iso.arrange({ sortBy: sortValue });
  });
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0; i < buttonGroups.length; i++ ) {
    buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
  }
  
  function onButtonGroupClick( event ) {
    // only button clicks
    if ( !matchesSelector( event.target, '.button' ) ) {
      return;
    }
    var button = event.target;
    button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
    button.classList.add('is-checked');
  }

  
// dropdown

  function toggleElement(obj)
  {
      var selectedItem = obj.options[obj.selectedIndex].value;
      if(selectedItem == 'major'){
          var tenants = document.getElementsByClassName('major');
          for(var i = 0, length = tenants.length; i < length; i++) {
             if( tenants[i].style.display == 'none'){
                tenants[i].style.display = '';
             }
          }
          var minor = document.getElementsByClassName('minor');
          for(var i = 0, length = minor.length; i < length; i++) {
             if( minor[i].style.display == ''){
                minor[i].style.display = 'none';
             } 
          }
      } else if(selectedItem == 'minor'){
          var minor = document.getElementsByClassName('minor');
          for(var i = 0, length = minor.length; i < length; i++) {
             if( minor[i].style.display == 'none'){
                minor[i].style.display = '';
             } 
          }
          var tenants = document.getElementsByClassName('major');
          for(var i = 0, length = tenants.length; i < length; i++) {
             if( tenants[i].style.display == ''){
                tenants[i].style.display = 'none';
             }
          }
      } else{
          var minor = document.getElementsByClassName('minor');
          for(var i = 0, length = minor.length; i < length; i++) {
                minor[i].style.display = '';
          }
          var tenants = document.getElementsByClassName('major');
          for(var i = 0, length = tenants.length; i < length; i++) {
                tenants[i].style.display = '';
          }
      }
  }
  
  