// *****************
// Developed By: Maxwell Handler
// Website: MaxwellHandler.com
// *****************

// Log Image on Load
function log() {
    console.log('%c ', 'font-size:1000px; background:url(https://media.makeameme.org/created/who-the-hell-31edeu.jpg) no-repeat;');
    console.log('MaxwellHandler.com');
}

// *******************************
// Javascript Tab Handling
// *******************************

function tabUpdate() {

    console.log('Handeling those pesky tabs');

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
    const listId = "li"+id;
    const tabContentId = id+"content";

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
function myskill(){
    var skillsChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}



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
//                 data: [99, 90, 75, 50, 75, 50, 25, 50, 60, ],
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