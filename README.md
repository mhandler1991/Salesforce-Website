# Saleforce SLDS Website

### Overview

>This project utilizes the Salesforce SLDS package to mirror standard Salesforce LEX UI/UX.  The page will display information similar to that of any object within the salesforce echo system.  SLDS is tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel. The page fetatures a single-page design with a main tabbed section with tabs.

### Table of Contents

- [Saleforce SLDS Website](#saleforce-slds-website)
    + [Overview](#overview)
    + [Design](#design)
    + [Prerequisites](#prerequisites)
    + [Contents](#contents)
    + [Installing / Forking](#installing---forking)
    + [How To](#how-to)
    + [Contributing](#contributing)
    + [License](#license)
    + [Contact](#contact)



### Design

Main Page
![Image of Home](https://github.com/mhandler1991/Salesforce-Website/blob/master/assets/images/readme/Homepage.jpg?raw=true)



### Prerequisites

Below you will find requirements to replicate this project:

* Salesforce - SLDS (Salesforce Lightning Design System)
    - This project is using the Spring '20 (SLDS 2.11.9) as its primary CSS to replicate standard Salesforce UI/UX
        - [Release Notes](https://www.lightningdesignsystem.com/release-notes/)
        - [Download] (https://www.lightningdesignsystem.com/downloads/) - Provided Package may not be most up to date, please see website. 
        - [Salesforce Lightning Design System](https://www.lightningdesignsystem.com)
        - Distributed by: [Salesforce UX](https://twitter.com/salesforceux)
        - More information can be found within the project by going to assets/external packages/salesforce-lightning-design-system-static-resource-2.11.9

* Chart.js



### Contents
    * Salesforce-Website
        - assets/ - All required packages and files
            - css/
            - external packages/ - SLDS Package
                - salesforce-lightning-design-system-static-resource-2.11.9/
            - fonts/
            - html/
            - icons/
            - images/ 
            - js/
        - index.html - Home Page
        - LICENSE
        - README



### Installing / Forking

1. Go to the [Github Repo](https://github.com/mhandler1991/Salesforce-Website)
2. Then click __Clone or download__
3. Clone using the HTTPS or SSH Key
4. Open Git Bash
5. Change to your working directory
6. Type `git clone https://github.com/mhandler1991/Salesforce-Website.git'
7. Press __Enter__

*For more information see this [Article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)*



### How To

This project is built on the SLDS Package. Salesforce releases 3 regular updates each year, the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/downloads/) should be checked regularly to determine if there is a new version. In order to update the project to the most recent version, download the new version and place the file in the assets/external projects folder. The external projects folder allows for versioning of SLDS. Update the stylesheet of the index file to the new verion's css. Assets within the file will need to be updated as well.  

Current Version: *_2.11.9_*

### Contributing
- Maxwell Handler - MaxwellHandler.com


### License

Distributed under the MIT License. See `LICENSE` for more information.



### Contact

Maxwell Handler - mhandler1991@gmail.com

Project Link: [https://github.com/mhandler1991/Salesforce-Website](https://github.com/mhandler1991/Salesforce-Website)