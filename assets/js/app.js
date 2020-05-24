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
    document.getElementById(activeTabContentId).classList.remove('slds-hide');
    console.log('Active Class Added');

    // Remove Class
    console.log('Removing Content Active Class...');
    document.getElementById(tabContentId).classList.remove('slds-hide');
    console.log('Active Class Removed');

    // Add slds-show
    console.log('Adding Content Active Class...');
    document.getElementById(tabContentId).classList.remove('slds-show');
    console.log('Active Class Removed');

    console.log("Oh Yay, thats done. Please don't do that again");

}

// *******************************
// CHART JS - SKILLS CHART
// *******************************
function myskill() {
    let skillsChart = document.getElementById('skillsChart').getContext('2d');

    let chart = new Chart(skillsChart, {
        type: 'horizontalBar', // Chart Type...
        data: {
            labels: [
                'HTML',
                'CSS',
                'Javascript',
                'Node.js',
                'SQL',
                'Mongo DB',
                'React',
                'Visualforce',
                'Lightning Components',
            ],
            datasets: [{
                label: 'Title',
                data: [99, 90, 75, 50, 75, 50, 25, 50, 60, ],
                backgroundColor: '#0C8EFF',
                borderWidth: 1,
                hoverBackgroundColor: '#00396B',
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Dev Skills',
                fontSize: 25
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    right: 50
                }
            },
            tooltips: {
                enabled: false
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        },
    })
}

// Old Tabbing Functionality...
// function tabUpdate(id) {

//     // Log the function as run & Id of Tab
//     console.log("Tab Clicked!");
//     console.log(id);

//     removeClass = [];
//     addClass = "";
//     removeContentShow = [];
//     addRemoveContent = "";
//     addContentHide = [];

//     function tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide) {

//         console.log('Tab Handeler Called...');

//         var i;
//         // Remove SLDS Active
//         for (i = 0; i < removeClass.length; i++) {
//             document.getElementById(removeClass[i]).classList.remove('slds-is-active');
//         };
//         // Add SLDS Active
//         document.getElementById(addClass).classList.add('slds-is-active');
//         // Remove SLDS Show
//         for (i = 0; i < removeContentShow.length; i++) {
//             document.getElementById(removeContentShow[i]).classList.remove('slds-show');
//         };
//         // Remove SLDS Hide
//         document.getElementById(addRemoveContent).classList.remove('slds-hide');
//         // Add SLDS Show
//         document.getElementById(addRemoveContent).classList.add('slds-show');
//         // Add SLDS Hide
//         for (i = 0; i < addContentHide.length; i++) {
//             document.getElementById(addContentHide[i]).classList.add('slds-hide');
//         };

//         //Do some Logging...
//         console.log('Boy, I am I glad we handeled that Tab...');

//     }

//     switch (id) {
//         case 'tab1':
//             // About Me

//             // Define Variables
//             removeClass = ['tab2', 'tab3', 'tab4', 'tab5'];
//             addClass = 'tab1';
//             removeContentShow = ['tab2content', 'tab3content', 'tab4content', 'tab5content'];
//             addRemoveContent = 'tab1content';
//             addContentHide = ['tab2content', 'tab3content', 'tab4content', 'tab5content'];
//             // Call Tab Handeler
//             tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

//             break;
//         case 'tab2':
//             // Education

//             // Define Variables
//             removeClass = ['tab1', 'tab3', 'tab4', 'tab5'];
//             addClass = 'tab2';
//             removeContentShow = ['tab1content', 'tab3content', 'tab4content', 'tab5content'];
//             addRemoveContent = 'tab2content';
//             addContentHide = ['tab1content', 'tab3content', 'tab4content', 'tab5content'];
//             // Call Tab Handeler
//             tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

//             break;
//         case 'tab3':
//             // Work Experience

//             // Define Variables
//             removeClass = ['tab1', 'tab2', 'tab4', 'tab5'];
//             addClass = 'tab3';
//             removeContentShow = ['tab1content', 'tab2content', 'tab4content', 'tab5content'];
//             addRemoveContent = 'tab3content';
//             addContentHide = ['tab1content', 'tab2content', 'tab4content', 'tab5content'];
//             // Call Tab Handeler
//             tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

//             break;
//         case 'tab4':
//             // Portfolio

//             // Define Variables
//             removeClass = ['tab1', 'tab2', 'tab3', 'tab5'];
//             addClass = 'tab4';
//             removeContentShow = ['tab1content', 'tab2content', 'tab3content', 'tab5content'];
//             addRemoveContent = 'tab4content';
//             addContentHide = ['tab1content', 'tab2content', 'tab3content', 'tab5content'];
//             // Call Tab Handeler
//             tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

//             break;
//         case 'tab5':
//             // SKILLS

//             myskill();

//             // Define Variables
//             removeClass = ['tab1', 'tab2', 'tab3', 'tab4'];
//             addClass = 'tab5';
//             removeContentShow = ['tab1content', 'tab2content', 'tab3content', 'tab4content'];
//             addRemoveContent = 'tab5content';
//             addContentHide = ['tab1content', 'tab2content', 'tab3content', 'tab4content'];
//             // Call Tab Handeler
//             tabHandeler(removeClass, addClass, removeContentShow, addRemoveContent, addContentHide);

//             break;
//         default:

//             // Log Unknown Tab Action
//             console.log('Oh No!.. Something went wrong with all this Tabbing - Opps');
//             break;
//     }
// }