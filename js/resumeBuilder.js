var bio = {
    "name": "Tejas Devaraj",
    "role": "Front-End Developer",
    "welcomeMessage": "Hi...!!! Welcome....",
    "biopic": "images/tejas.jpg",
    "contacts": {
        "mobile": "7411674831",
        "email": "tejasdevraj65@gmail.com",
        "github": "tejasdev",
        "twitter": "tejasdev",
        "location": "Bangalore"

    },
    "skills": ["c", "c++", "html", "css"]
};

var work = {
    "jobs": [{
        "employer": " Cameron",
        "title": "Front-End Developer ",
        "location": " California",
        "dates": " 2015-present",
        "description": " Being a Front-End developer, its a awesome feeling while working."
    }, {
        "employer": "Tejas",
        "title": "Front-End Developer ",
        "location": " India",
        "dates": " 2015-present",
        "description": " Being a Front-End developer, its a awesome feeling while working."

    }]
};



var projects = {
    "projects": [{
        "title": " My Portfolio",
        "dates": "sept 2016",
        "description": "This is my first project. The project is regarding designing a portfolio webpage of an individual. Portfolio webpage provides other users to navigate to the projects that has been developed.",
        "images": ["images/portfolio.jpg"],
        "url": "https://tejasdev.github.io/portfolio"
    }, {

        "title": "My Resume",
        "dates": "oct 2016",
        "description": "This is my second project. The project is basically about building a resume. Resume provides Person Bio details, his Work-Experience, Projects he developed, his Education.",
        "images": ["images/resume.jpg"],
        "url": "https://tejasdev.github.io/Online-resume"
    }]
};



var education = {

    "schools": [{
            "name": "Saraswathi School",
            "location": "Doddaballapur, Bangalore ",
            "dates": "2000-2010",
            "degree": "KSEEB",
            "url": " ",
            "majors": "SSLC"
        },

        {
            "name": "Alva's PU College",
            "location": "Moodabidri, Mangalore ",
            "dates": "2010-2012",
            "degree": "KBPUC",
            "url": "http://alvas.org/institutions/alvas-pre-university-college/",
            "majors": "2nd PUC"
        },

        {

            "name": "Dayananda Sagar College of Engineering",
            "location": "Kumaraswamy Layout, Bangalore ",
            "dates": "2012-2016",
            "degree": "B.E",
            "url": "http://dayanandasagar.edu/",
            "majors": "Computer Science and Engineering"
        }


    ],

    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree Course",
        "school": " Udacity",
        "dates": "sept 2016 - Present",
        "url": "https://www.udacity.com/"
    }]
};




bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedbioPic);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    var formattedMobile = HTMLcontactGeneric.replace("%contact%", "mobile").replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLcontactGeneric.replace("%contact%", "location").replace("%data%", bio.contacts.location);
    var HTMLcontacts = formattedMobile + formattedEmail + formattedGitHub + formattedLocation;

    $('#header').append(HTMLcontacts);
    $('#footerContacts').append(HTMLcontacts);



    $("#header").append(HTMLskillsStart);
    for (var b = 0; b < bio.skills.length; b++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[b]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);


        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);




        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        //$("#workExperience").append(HTMLworkLocation);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

/*
function inName(name) {

	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
*/

projects.display = function() {

    for (var pro = 0; pro < projects.projects.length; pro++) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
        $(".project-entry:last").append(formattedprojecttitle);

        var formattedprojectdates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
        $(".project-entry:last").append(formattedprojectdates);

        var formattedprojectdescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
        $(".project-entry:last").append(formattedprojectdescription);

        var formattedprojectimage = HTMLprojectImage.replace("%data%", projects.projects[pro].images);
        $(".project-entry:last").append(formattedprojectimage);

        var formattedprojecturl = HTMLprojectUrl.replace("%data%", projects.projects[pro].url);
        $(".project-entry:last").append(formattedprojecturl);
    }

};

projects.display();

education.display = function() {

    for (var edu = 0; edu < education.schools.length; edu++) {

        $("#education").append(HTMLschoolStart);

        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(formattedschoolname);

        var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formattedschooldegree);

        var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedschooldates);

        var formattedschoollocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedschoollocation);

        var formattedschoolmajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedschoolmajor);

        var formattedschoolurl = HTMLschoolUrl.replace("%data%", education.schools[edu].url);
        $(".education-entry:last").append(formattedschoolurl);

    }

    $("#education").append(HTMLonlineClasses);
    for (var oc = 0; oc < education.onlineCourses.length; oc++) {


        var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
        $(".online-entry:last").append(formattedonlinetitle);

        var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
        $(".online-entry:last").append(formattedonlineschool);

        var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].dates);
        $(".online-entry:last").append(formattedonlinedates);

        var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url);
        $(".online-entry:last").append(formattedonlineurl);

    }

};

education.display();

$("#mapDiv").append(googleMap);