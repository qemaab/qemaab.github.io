 $(function() {
      // Initialize datepicker
      $("#datepicker").datepicker({
        minDate: 0,
        dateFormat: "MM dd, yy"
      });

      // Navbar tabs click handler
      $("#navbarTabs .nav-link").click(function(e) {
        e.preventDefault();

        // Remove active class from all nav links
        $("#navbarTabs .nav-link").removeClass("active");

        // Add active class to clicked nav link
        $(this).addClass("active");

        // Get the tab to show from data-tab attribute
        var tabToShow = $(this).data("tab");

        // Hide all tab content sections
        $(".tab-content-section").removeClass("active");

        // Show the selected tab content
        $("#" + tabToShow).addClass("active");
      });
    });