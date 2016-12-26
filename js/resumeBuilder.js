var data= "%data%";
/* Bio */
var bio = {
    "name": "Kinjal Parmar",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "1234567890",
        "email": "kinjalparmar1992@gmail.com",
        "github": "kinjalparmar",
        "twitter": "@kinjal100",
        "location": "Gujarat,India"
    },
    "welcomeMessage": "Hi I am Kinjal. Hope you like my resume.",
    "skills": ["HTML", "CSS", "JS"],
    "biopic": "images/kinjal.jpg"
};
/* Display Bio function */
bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    var formattedHTMLmobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace(data, bio.contacts.email);
    var formattedHTMLtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedHTMLgithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedHTMLlocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLtwitter, formattedHTMLgithub, formattedHTMLlocation);
	// adding contact details to footer
	$("#footerContacts").append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLtwitter, formattedHTMLgithub, formattedHTMLlocation);
    if (bio.skills.length > 0) {
        var formattedSkills;
        var skill;
        $("#header").append(HTMLskillsStart);
        for (skill = 0; skill < bio.skills.length; skill++) {
            formattedSkills = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();
/* internationalize Name
 function inName () {
  var name= bio.name.split(" ");
  var firstName= name[0];
  var lastName= name[1].toUpperCase();
  name= firstName+" " +lastName;
  return name;
 }
$("#main").append(internationalizeButton);
*/
/* work */
var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "System Engineer",
        "location": "Mysore, India",
        "dates": "2016 - now",
        "description": "Currently selected as a System Engineer at Infosys, India. Will join Infosys in 2017."
    }, {
        "employer": "InfoBizzs",
        "title": "Web Developer",
        "location": "Vidhyanagar, India",
        "dates": "2014 - 2016",
        "description": "Worked as a Web Developer at Infobizzs situated at Vidhyanagar, India."
    }]
};
/* Displaywork function */
work.display = function() {
    var job;
    var formattedEmployer;
    var formattedTitle;
    var formattedEmployerTitle;
    var formattedworkDates;
    var formattedworkDescription;
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        //$("#workExperience").append(formateEmployer);
        formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        //$("#workExperience").append(formateTitle);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
		formattedworkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);
        formattedworkDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedworkDates);
        formattedworkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedworkDescription);
    }
};
work.display();
/* to get the x and ylocation on clicking on the screen*/
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
/* Projects */
var projects = {
    "projects": [{
        "title": "Responsive Portfolio",
        "dates": "October- November 2016",
        "description": "This is the first project under Udacity Front-End Nanodegree course. Given a design mockup, one have to recreate the portfolio with CSS and HTML.Use the Udacity Lesson's and other resources like MDN to turn a basic design mockup into a responsive portfolio website.",
        "images": ["images/proj_2.png"]
    }, {
        "title": "Resume",
        "dates": "November- December 2016",
        "description": "This is the second project under Udacity Front-End Nanodegree course. Given a design mockup, I have recreate the resume with CSS and HTML and Javascript. Use the Udacity Lesson's and other resources to turn a basic design mockup into a responsive Resume.",
        "images": ["images/proj_3.png"]
    }, {
        "title": "HTML5 Canvas Game",
        "dates": "December- January 2016",
        "description": "This is the third project under Udacity Front-End Nanodegree course. Using the provided tools and Object Oriented concept I add entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
        "images": ["images/proj_4.png"]
    }]
};
/* Display projects function */
projects.display = function() {
    var i;
    var formattedprojectTitle;
    var formattedprojectDates;
    var formattedprojectDescription;
    var formattedProjectImage;
    var image;
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedprojectTitle);
        formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedprojectDates);
        formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedprojectDescription);
        if (projects.projects[i].images.length > 0) {
            for (image = 0; image < projects.projects[i].images.length; image++) {
                formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};
projects.display();
/*education*/
var education = {
    "schools": [{
        "name": "KJ Institute of Engineering and Technology",
        "location": "Vadodara,Gujarat,India",
        "degree": "Bacholars of Engineering",
        "majors": ["Information Technology"],
        "dates": "2010-2014",
        "url": "http://www.kjit.org/"
    }, {
        "name": "G H Patel College of Engineering and Technology",
        "location": "Anand,Gujarat,India",
        "degree": "Masters of Engineering",
        "majors": ["Information Technology"],
        "dates": "2014-2016",
        "url": "http://www.gcet.ac.in/"
    }],
    "onlineCourses": [{
        "title": "Udacity Front-End Developer Nanodegree",
        "school": "Udacity Inc.",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]

};
/* Display education function */
education.display = function() {
    var i, j;
    var formattedSchoolName;
    var formattedNameLink;
    var formattedDegree;
    var formattedSchoolDates;
    var formattedSchoolLocation;
    var formattedSchoolMajor;
    var educationSchools;
    var formattedTitle;
    var formattedTitleLink;
    var formattedSchool;
    var formattedDatesOnline;
    var educationOnline;
	var major;
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        formattedNameLink = formattedSchoolName.replace("#", education.schools[i].url);
		$(".education-entry:last").append(formattedNameLink);
        formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);
        formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);
        formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
		if (education.schools[i].majors.length > 0) {
            for (major = 0; major < education.schools[i].majors.length; major++) {
                formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (j = 0; j < education.onlineCourses.length; j++) {
        formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
        formattedTitleLink = formattedTitle.replace("#", education.onlineCourses[j].url);
        formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
        formattedDatesOnline = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
        //var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[j].url);
        // var formattedURLLink = formattedURL.replace("#", education.onlineCourses[j].url);
        educationOnline = formattedTitleLink + formattedSchool + formattedDatesOnline;
        $(".education-entry:last").append(educationOnline);
    }
};
education.display();
/* Map */
$("#mapDiv").append(googleMap);