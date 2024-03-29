// *****************
// Developed By: Maxwell Handler
// Website: MaxwellHandler.com
// *****************

// *******************************
// DATA
// *******************************    

const contactData = {
    fName: "Maxwell",
    lName: "Handler",
    title: "Technical Product Manager",
    email: "",
    website: "MaxwellHandler.com"
}

const detailData = {
    company: "National Funding",
    description: "Motivated and strategically-minded Salesforce expert capable of working independently and part of a diverse team to build stable and customized Salesforce environments. Amicable professional with a wide array of experience in multiple instances of Salesforce. Experience assisting and training users with a wide-array of knowledge within Salesforce. Eager and persistent employee constantly striving to expand personal knowledge and experience."
}

//  Load Data - Contact Card
document.getElementById("fName").innerHTML = contactData['fName'];
document.getElementById("lName").innerHTML = contactData['lName'];
document.getElementById("title").innerHTML = contactData['title'];
document.getElementById("email").innerHTML = contactData['email'];
document.getElementById("website").innerHTML = contactData['website'];

// Load Data - Details Tab
document.getElementById("company").innerHTML = detailData['company'];
document.getElementById("description").innerHTML = detailData['description'];


// Define JSON Variable
// var getJSON = function (url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function () {
//         var status = xhr.status;
//         if (status === 200) {
//             callback(null, xhr.response);
//         } else {
//             callback(status, xhr.response);
//         }
//     };
//     xhr.send();
// };

// *******************************
// Javascript Tab Handling
// *******************************

function tabUpdate() {

    console.log('Handling those pesky tabs');

    // Get all Li Tabs
    let liArray = document.getElementsByClassName('slds-tabs_default__item');
    console.log('liList Array: ', liArray);
    console.log('liList Length: ', liArray.length);

    // Get all a Tabs
    let aArray = document.getElementsByClassName('slds-tabs_default__link');
    console.log('aList Array: ', aArray);
    console.log('aList Length: ', aArray.length);

    // Get  Tab Values
    const id = event.target.id;
    const listId = "li" + id;
    const tabContentId = id + "content";

    // Log  TabValues
    console.log('Id: ', id);
    console.log('li Id: ', listId);
    console.log('Tab Content Id: ', tabContentId);

    // Hide & Show Attribute for Tab Header
    // 

    // Get Current Active Tab
    const activeTab = document.getElementsByClassName('slds-is-active');
    console.log('Active Tab: ', activeTab[0]);
    console.log('Active Tab Attr: ', activeTab[0].attributes);

    // Get Current Active Tab Id
    const activeTabId = activeTab[0].id;
    console.log('Active Tab Id: ', activeTabId);

    // Remove Class
    console.log('Removing Active Class...');
    document.getElementById(activeTabId).classList.remove('slds-is-active');
    console.log('Active Class Removed');

    // Add Class
    console.log('Updating Class...');
    document.getElementById(listId).classList.add('slds-is-active');
    console.log('Class Added');

    // Hide & Show Content
    // 

    // Get Active Tab Content
    const activeTabContent = document.getElementsByClassName('slds-show');
    console.log('Active Tab Content: ', activeTabContent[0]);
    console.log('Active Tab Content Attr: ', activeTabContent[0].attributes);

    // Get Current Active Tab Content Id
    const activeTabContentId = activeTabContent[0].id;
    console.log('Active Tab Id: ', activeTabContentId);

    // Remove Class
    console.log('Removing Active Class...');
    document.getElementById(activeTabContentId).classList.remove('slds-show');
    console.log('Active Class Removed');

    // Add Class
    console.log('Adding Active Class...');
    document.getElementById(activeTabContentId).classList.add('slds-hide');
    console.log('Active Class Added');

    // Remove Class
    console.log('Removing Content Active Class...');
    document.getElementById(tabContentId).classList.remove('slds-hide');
    console.log('Active Class Removed');

    // Add slds-show
    console.log('Adding Content Active Class...');
    document.getElementById(tabContentId).classList.add('slds-show');
    console.log('Active Class Removed');

    console.log("Oh Yay, thats done. Please don't do that again");

}

// *******************************
// CHART JS - SKILLS CHART
// *******************************

// function myskill() {
//     let skillsChart = document.getElementById('skillsChart').getContext('2d');

//     let chart = new Chart(skillsChart, {
//         type: 'horizontalBar', // Chart Type...
//         data: {
//             labels: [
//                 'HTML',
//                 'CSS',
//                 'Javascript',
//                 'Node.js',
//                 'SQL',
//                 'Mongo DB',
//                 'React',
//                 'Visualforce',
//                 'Lightning Components',
//             ],
//             datasets: [{
//                 label: 'Title',
//                 data: [
//                     99, 
//                     80, 
//                     75, 
//                     50, 
//                     75, 
//                     50, 
//                     25, 
//                     50, 
//                     60 ],
//                 backgroundColor: '#0C8EFF',
//                 borderWidth: 1,
//                 hoverBackgroundColor: '#00396B',
//             }]
//         },
//         options: {
//             title: {
//                 display: true,
//                 text: 'Dev Skills',
//                 fontSize: 25
//             },
//             legend: {
//                 display: false
//             },
//             layout: {
//                 padding: {
//                     right: 50
//                 }
//             },
//             tooltips: {
//                 enabled: false
//             },
//             scales: {
//                 xAxes: [{
//                     display: false,
//                     gridLines: {
//                         drawOnChartArea: false
//                     }
//                 }],
//                 yAxes: [{
//                     gridLines: {
//                         drawOnChartArea: false
//                     }
//                 }]
//             }
//         },
//     })
// }

// *******************************
// OPEN CLOSE CONTACT ME
// *******************************

function openEmail(){
    console.log('Opening Email Utility...');
    document.getElementById('emailpopout').classList.add('slds-is-open');
    console.log('Email Utility Open');
    document.getElementById('emailli').classList.add('slds-utility-bar__item_pop-out');
    document.getElementById('emailbttn').classList.add('slds-is-active');    
    console.log('Updated utility css');
};

function closeEmail(){
    console.log('Closing Email Utility...');
    document.getElementById('emailpopout').classList.remove('slds-is-open');
    console.log('Email Utility is Closed');
    document.getElementById('emailli').classList.remove('slds-utility-bar__item_pop-out');
    document.getElementById('emailbttn').classList.remove('slds-is-active');    
    console.log('Updated utility css');
};

// *******************************
// ACTIVITY
// *******************************

function activityFunction(e){

    console.log('Managing Activity...');
    console.log(e);
    console.log('Activity with Id: ', e.id, ' was clicked!');
    
    const elm = document.getElementById(e.id);
    const elmDetailid = e.id + 'detail';
    const elmDetail = document.getElementById(elmDetailid);

    console.log('Elm: ', elm);
    console.log('ElmDetailId: ', elmDetailid);
    console.log('ElmDetail: ', elmDetail);

    console.log('Element Aria-Expanded State currently: ', elm.getAttribute('aria-expanded'));

    if(elm.getAttribute('aria-expanded') == 'true'){

        // if expanded, close...
        console.log('Closing...');
        console.log(1);
        // Update Elm
        elm.setAttribute("aria-expanded", "false");

        console.log('Test');
        // Update Elm Detail
        elmDetail.setAttribute("aria-hidden", "true");

        console.log('Closed');


    } else if(elm.getAttribute('aria-expanded') == 'false'){

        // if closed, expand...
        console.log('Expanding...');
        console.log(1);
        // Update Elm
        elm.setAttribute("aria-expanded", "true");

        console.log('Test');
        // Update Elm Detail
        elmDetail.setAttribute("aria-hidden", "false");

        console.log('Opened');

    } else {

        console.log('Shit... I dont know...');

    }


// *******************************
// ON LOAD
// *******************************

    // On Page Load
    //function onload() {
    //console.log('%c ', 'font-size:1000px; background:url(https://media.makeameme.org/created/who-the-hell-31edeu.jpg) no-repeat;');
    //console.log('Originally Created by Maxwell Handler for MaxwellHandler.com');

    // Get JSON
    // getJSON('https://api.github.com/users/mhandler1991/repos',
    //     function (error, data) {
    //         if (error) {
    //             console.error('Mhandler Github Repo Result');
    //             console.error(error);
    //         } else if (data){
    //             console.log('Mhandler Github Repo Result');
    //             console.log(data);
    //         } else {
    //             console.log('Unknown Result from Github Repo Request');
    //         }
    //     });
    //};

}








// Out Dated/Test Code

// document.getElementById("body").addEventListener("load", log);

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Loaded...');
// }, false);

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('test...');
// });

// document.getElementById("tab1").addEventListener("click", tabUpdate);
// document.getElementById("tab1").onclick = test;

// function test(){
//     console.log('test');
// }



// function createTimeline(){

//     let timeline = document.createElement('li');
//     timeline.innerHTML = "CLICK ME";

//     let timelineDiv = document.createElement('div');
//     let att = document.createAttribute('class');
//     att.value = 'slds-timeline__item_expandable slds-timeline__item_task slds-is-open';
//     timelineDiv.setAttribute(att);
//     timelineDiv.appendChild(timeline);

//     let span = document.createElement('span');
//     att.value = 'slds-assistive-text';
//     span.setAttribute(att);
//     timelineDiv.appendChild(timeline);

//     let mediaDiv = document.createElement('div');
//     att.value = 'slds-media';
//     mediaDiv.setAttribute(att);
//     mediaDiv.appendChild(timeline);

//     let mediaFigureDiv = document.createElement('div');
//     att.value = 'slds-media__figure';
//     mediaFigureDiv.setAttribute(att);
//     mediaFigureDiv.appendChild(mediaDiv);


//     // let text = document.createTextNode('text');
//     // timeline.appendChild(text);



//     document.getElementById("timeline").appendChild(timeline);

// }