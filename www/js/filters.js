$( function() {
    $( "#cost-range" ).slider({
      range: true,
      min: 40000,
      max: 500000,
      values: [ 40000, 500000 ],
      slide: function( event, ui ) {
        $( "#cost" ).val(" " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#cost" ).val(" " + $( "#cost-range" ).slider( "values", 0 ) +
      " - " + $( "#cost-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#financed-places-range" ).slider({
      range: true,
      min: 1000,
      max: 5000,
      values: [ 1000, 5000 ],
      step: 1000,
      slide: function( event, ui ) {
        $( "#financed-places" ).val(" " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#financed-places" ).val(" " + $( "#financed-places-range" ).slider( "values", 0 ) +
      " - " + $( "#financed-places-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#regular-places-range" ).slider({
      range: true,
      min: 1000,
      max: 5000,
      values: [ 1000, 5000 ],
      step: 1000,
      slide: function( event, ui ) {
        $( "#regular-places" ).val(" " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#regular-places" ).val(" " + $( "#regular-places-range" ).slider( "values", 0 ) +
      " - " + $( "#regular-places-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $( "#rating-range" ).slider({
      range: true,
      min: 1,
      max: 5,
      values: [ 1, 5 ],
      step: 1,
      slide: function( event, ui ) {
        $( "#rating" ).val(" " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#rating" ).val(" " + $( "#rating-range" ).slider( "values", 0 ) +
      " - " + $( "#rating-range" ).slider( "values", 1 ) );
  } );

  const openFiltersButton = document.getElementById("filters-button");
  const filtersSection = document.getElementById("filters");
  const filtersClose = document.getElementById("filtersClose");
  const searchResultsSection = document.getElementById("searchResults");
  const footer = document.getElementById("selectUniversityFooter");
  const header = document.getElementById("selectUniversityHeader");

  openFiltersButton.addEventListener("click", () => {
    filtersSection.style.display = "flex";
    searchResultsSection.style.display = "none";
    footer.style.display = "none";
    header.style.display = "none";
  })

  filtersClose.addEventListener("click", () => {
    header.style.display = "block";
    searchResultsSection.style.display = "block";
    footer.style.display = "block";
    filtersSection.style.display = "none";
  })

  // let selectYears = document.getElementById('esteblishment')
  // let years = [];
  // for(let i = 1850; i <= 2000; i++) {
  //   years.push(i)
  // }

  

  $( function() {
    // $( "#speed" ).selectmenu();

    $( "#major").selectmenu();

    $( "#city" ).selectmenu();

    $( "#esteblishment" ).selectmenu();
  } );