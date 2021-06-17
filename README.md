# Saleforce SLDS Website

### Overview

>This project utilizes the Salesforce SLDS package to mirror standard Salesforce LEX UI/UX.  The page will display information similar to that of any object within the salesforce echo system.  SLDS is tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel. The page fetatures a single-page design with a main tabbed section with tabs.

>View the page at https://mhandler1991.github.io/Salesforce-Website/ 

### Table of Contents

- [Saleforce SLDS Website](#saleforce-slds-website)
    + [Overview](#overview)
    + [Design](#design)
    + [Prerequisites](#prerequisites)
    + [Contents](#contents)
    + [Installing / Forking](#installing---forking)
    + [How To](#how-to)
    + [Notes](#Contributing)
    + [Contributing](#contributing)
    + [License](#license)
    + [Contact](#contact)



### Design

Site
<!-- ![Alt Text](https://github.com/mhandler1991/Salesforce-Website/blob/master/assets/images/readme/recording_v1.mp4?raw=true) -->


Main Page
![Image of Home](https://github.com/mhandler1991/Salesforce-Website/blob/master/assets/images/readme/Homepage_v2.png?raw=true)



### Prerequisites

Below you will find requirements to replicate this project:

##### Salesforce - SLDS (Salesforce Lightning Design System)
- This project is using the Spring '20 (SLDS 2.11.9) as its primary CSS to replicate standard Salesforce UI/UX
    - [Release Notes](https://www.lightningdesignsystem.com/release-notes/)
    - [Download](https://www.lightningdesignsystem.com/downloads/) - Provided Package may not be most up to date, please see website. 
    - [Salesforce Lightning Design System](https://www.lightningdesignsystem.com)
    - Distributed by: [Salesforce UX](https://twitter.com/salesforceux)
    - More information can be found within the project by going to assets/external packages/salesforce-lightning-design-system-static-resource-2.11.9

##### Chart.js
- Skills Tab uses Chart Js to simulate Salesforce Dashboard Elements
    - [Chart.js](https://www.chartjs.org/)
    - [SLDS Chart Guidelines](https://www.lightningdesignsystem.com/guidelines/charts/)

##### Salesforce Web to Case
- Contact Form utilizes Salesforce Standard Web-to-Case functionality, for full documentation pertaining to implementation see the following:
    - [Web-to-Case](https://help.salesforce.com/articleView?id=customize_casecapture.htm&type=5)
    - [Trailhead](https://trailhead.salesforce.com/en/content/learn/modules/service_lex/service_lex_channels)

##### Google reCAPTCHA
- Salesforce Web to Case uses Google reCAPTCHA. Please refer to the following for additional information on implementation
    - [How-To](https://medium.com/@terrystidbits2019/using-recaptcha-on-salesforce-web-to-lead-forms-81f1fd22dd06)
    - [How-To 2.0](https://www.salesforcebolt.com/2020/03/how-to-add-captcha-in-web-to-lead.html)
    - [How-To 3.0](https://www.terrystidbits.com/2017/09/27/using-recaptcha-salesforce-web-lead-forms/)
    - [Salesforce Documentation](https://help.salesforce.com/articleView?id=sf.customizesupport_web_to_case_enable_recaptcha.htm&type=5)


### Contents

    - Salesforce-Website
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
        - CNAME*


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

This project is built on the SLDS Package. Salesforce releases 3 regular updates each year, the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/downloads/) should be checked regularly to determine if there is a new version. In order to update the project to the most recent version, download the new version and place the file in the `assets/external` projects folder. The external projects folder allows for versioning of SLDS. Update the stylesheet of the index file to the new verion's css. Assets within the file will need to be updated as well.  

Current SLDS Version: *_2.11.9_*



### SLDS Notes

Here is a list of ah-ha moments on my journey to build this site, hopefully they help


- Displaying SLDS SVG's:
```js
<span class="slds-icon_container slds-icon-standard-contact">
    <svg class="slds-icon slds-page-header__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <use xlink:href="./assets/external packages/salesforce-lightning-design-system-static-resource-2.11.9/icons/standard-sprite/svg/symbols.svg#opportunity">
        </use>
    </svg>
</span>
```

You will have to add ```xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"``` to the SVG as well as update the ```xlink:href``` in the ```<use>```. 

- Functioning SLDS Tabs:

see: ``` function tabUpdate() ```

Full documentation [HERE](https://www.lightningdesignsystem.com/components/tabs/#site-main-content)

### Contributing

- Maxwell Handler - MaxwellHandler.com


### License

Distributed under the MIT License. See `LICENSE` for more information.

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



### Contact

Maxwell Handler - mhandler1991@gmail.com

Project Link: [https://github.com/mhandler1991/Salesforce-Website](https://github.com/mhandler1991/Salesforce-Website)



### Setup to link Github page to custom domain

 - [https://richpauloo.github.io/2019-11-17-Linking-a-Custom-Domain-to-Github-Pages/](Setup)
 - [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#about-custom-domain-configuration](Github Documentation)
