var projects = {
  "sams-new": [
    "Converting the UI stack of live <a href='http://www.samsclub.com' target='_blank'>Sam's Club </a>into React/Redux and Hapi/Node.",
    "Developed reusable components in React/Redux for different tracks like Account and Checkout.",
    "Developed proxies to work as orchestrated layer between UI and backend APIs.",
    "Implemented end to end functional testing in Enzymes and NightwatchJS."
  ],
  "sams-old": [
    "Worked on <a href='http://www.samsclub.com' target='_blank'>Sam's Club </a> including homepage (header, POV carousel, item trending carousel and footer)",
    "Redesigned the homepage, cartpage and product display page.",
    "Converted the homepage from angular.js to jquery.",
    "Implemented end to end functional testing in Enzymes and NightwatchJS.",
    "Did a POC in React.js and Redux on product display page."
  ],
  "apple": [
    "Developed a UI from scratch for SAP business objects (reporting tool).",
    "Created HTML pages from the PDF’s, Omnigraffle and photoshops.",
    "Implemented AJAX driven UI Element and Search Algorithm using Ajax.",
    "Extensively used ReactJS and Bootstrap to render the data in the UI.",
    "Wrote Mocha test cases for the application and reported the total time taken to run all the tests in the application for quality purposes.",
    "Did POC for the real time data for different trends and thresholds.",
    "Used AngularJS for POCs.",
    "Responsible for managing the OFFSHORE UI team in Delhi, India.",
    "Designed multiple wireframes for POCs and gave presentation for intended users(product)."
  ]
}

$(document).ready(function() {

  $("figure").click(function(e) {
    var ele = $(e.target).parent().attr('class');
    var duration, company, icon;
    if(ele === "apple") {
      duration = "Feb, 2014 - Aug, 2015";
      icon = "<span class='ion-ios-calendar-outline'> > 1 year</span>"
      company = "Apple Inc"
    } else if (ele === "sams-old"){
      duration = "Sept, 2015 - June, 2016";
      icon = "<span class='ion-ios-calendar-outline'> < 1 year</span>"
      company = "Sams Club"
    } else if (ele === "sams-new") {
      duration = "July, 2016 - Present";
      icon = "<span class='ion-ios-calendar-outline'> > 1 year</span>"
      company = "Sams Club"
    }

    $('.modal .modal-content ul').empty();

    $('.modal .modal-content .company-name').text(company);
    $('.modal .modal-content .duration').text(duration).append(icon);

    projects[ele].map(function(accomplishment) {
      $('.modal .modal-content ul').
        append("<li>" + accomplishment + "</li>");
    });

    $('.modal').modal('show')
  });

})