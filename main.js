(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../minimal/minimal.component */ "./src/app/minimal/minimal.component.ts");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terminal/terminal.component */ "./src/app/terminal/terminal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'minimal', pathMatch: 'full', component: _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"] },
    { path: 'terminal', pathMatch: 'full', component: _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__["TerminalComponent"] },
    { path: '', pathMatch: 'full', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Live Portfolio';
        this.data = {
            intro: 'Eytan is a full-stack developer in the Seattle area, interested in taking on new challenges in web design and programming challenges. Algorithm practice has been the most fun, though watching a project start coming together is a great feeling too.',
            experience: [
                {
                    title: 'Travel gear blogger',
                    organization: 'Self-employed',
                    dates: '2013 to present',
                    description: 'Produced content for my own site, focusing on travel gear and related advice for budget backpackers, running it all myself and working with various brands on product development and prototype testing.',
                    skills: [
                        'Wordpress',
                        'Keyword research',
                        'Search engine optimization',
                        'Social media marketing',
                        'Affiliate marketing',
                        'Brand partnership',
                        'Product testing and development'
                    ]
                },
                {
                    title: 'Affiliate Marketer',
                    organization: 'Self-employed',
                    dates: '2010 to 2013',
                    description: 'Performed search engine keyword research to identify high-traffic search terms, analyzed competition to identify underserved topics, then wrote and self-published content using a variety of digital publication tools, managing it for search engine optimization, and monetizing through affiliate product marketing or advertising revenue.',
                    skills: [
                        'Keyword research',
                        'Search engine optimization',
                        'Affiliate marketing'
                    ]
                },
                {
                    title: 'Private Tutor',
                    organization: 'Self-employed',
                    dates: '2013 to 2015',
                    description: 'Taught students of various ages, in subjects ranging from liberal arts to physics.',
                    skills: [
                        'Essay reviews',
                        'Math practice',
                        'Multi-lingual conversation'
                    ]
                },
                {
                    title: 'Field Manager',
                    organization: 'Grassroots Campaigns',
                    dates: '2008 to 2010',
                    description: 'Door to door and street fundraising for a variety of non-profit organizations, including the DNC, ACLU, LCV, Save the Children, ASPCA, and NRDC, spanning the topics of political campaigns, civil rights, environmental protection, third world development, and animal welfare. Managed and coached small teams of new and experienced staff, scouted and mapped fundraising locations, and worked through rain, shine, snow, hail, heat waves, and unpleasant canines.',
                    skills: [
                        'Fundraising',
                        'Team management',
                        'Contribution accounting'
                    ]
                },
                {
                    title: 'English Teacher',
                    organization: 'TOP English Camp',
                    dates: '2008',
                    description: 'Conducted English language lessons and other activities with students of various ages, from elementary through high school students, in various cities throughout Taiwan.',
                    skills: [
                        'Keeping the attention of a classroom of 30 high school kids with too much energy to keep still'
                    ]
                },
                {
                    title: 'Office Temp',
                    organization: 'OfficeTeam/Accountemps',
                    dates: '2006 to 2007',
                    description: 'Worked various office jobs, from medical billing to quality control for a logistics operation.',
                    skills: [
                        'Client communication',
                        'Error handling',
                        'Data entry',
                    ]
                },
                {
                    title: 'Miscellaneous',
                    description: 'Held a variety of character-building jobs at the entry level, in everything from warehouse stockrooms to law firms.'
                }
            ],
            education: [
                {
                    school: 'Coding Dojo',
                    dates: '2018',
                    degree: "Triple Black Belt, the highest honor!"
                },
                {
                    school: 'University of Washington',
                    dates: '2005 to 2006',
                    degree: "Bachelor's Degree in English"
                },
                {
                    school: 'Bellevue Community College',
                    dates: '2004',
                    degree: "Associate's Degree"
                },
                {
                    school: 'University of Granada, Spain',
                    dates: '2001 to 2002'
                },
                {
                    school: 'University of California, San Diego',
                    dates: '2000 to 2001'
                }
            ],
            skills: {
                design: [
                    'HTML',
                    'CSS',
                    'JQuery',
                    'Bootstrap',
                    'Materialize',
                ],
                languages: [
                    'JavaScript',
                    'Python',
                    'C#',
                ],
                frameworks: [
                    'Flask',
                    'Django',
                    'Angular',
                    'ASP.NET Core',
                ],
                databases: [
                    'SQL',
                    'SQLite',
                    'MongoDB',
                ]
            },
            interests: [
                'Learning languages (Spanish, French, and Russian so far!)',
                'Traveling',
                'Reading',
                'Rock climbing',
                'Martial arts',
                'High school debate team',
                'Outward Bound',
            ],
            contact: [
                {
                    site: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/eytan-levy-21a885162/'
                },
                {
                    site: 'GitHub',
                    url: 'https://github.com/eslevy17'
                },
            ],
            email: 'eslevy17@gmail.com',
        };
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minimal/minimal.component */ "./src/app/minimal/minimal.component.ts");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terminal/terminal.component */ "./src/app/terminal/terminal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_6__["MinimalComponent"],
                _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_7__["TerminalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/minimal/minimal.component.css":
/*!***********************************************!*\
  !*** ./src/app/minimal/minimal.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'open sans', sans-serif;\n}\n\np {\n    line-height: 1.5;\n}\n\n.navbar {\n    background-color: #4b4b4b;\n    width: 100%;\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 1;\n    color: #e8e8e8;\n    margin: 0px;\n    padding: 1px;\n}\n\n.backbutton {\n    font-size: 16px;\n    background-color: #4b4b4b;\n    color: #e8e8e8;\n    border: none;\n    border-radius: 1px;\n    cursor: pointer;\n    padding: 12px 36px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 8px;\n    left: 8px;\n    float: left;\n    z-index: 2;\n    opacity: 0.9;\n}\n\n.backbutton:hover {\n    opacity: 0.7;\n}\n\n.parallaxdiv1 {\n    background: url('shoe-hang.jpg');\n    min-height: 640px;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    position: relative;\n}\n\n.parallaxdiv2 {\n    background: url('montenegro-climb.jpg');\n    min-height: 640px;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: bottom;\n    background-attachment: fixed;\n    position: relative;\n}\n\n.parallaxdiv3 {\n    background: url('pamukkale-climb.jpg');\n    min-height: 640px;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    position: relative;\n}\n\n.parallaxdiv4 {\n    background: url('croatia-walls.jpg');\n    min-height: 640px;\n    width: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    position: relative;\n}\n\n.textblockright {\n    font-size: 16px;\n    max-width: 300px;\n    position: absolute;\n    top: 30%;\n    right: 10%;\n    background-color: #4b4b4b;\n    padding: 0 24px;\n    color: #e8e8e8;\n    box-shadow: 2px 2px 8px 2px #474747;\n    opacity: 0.9;\n}\n\n.textblockleft {\n    font-size: 16px;\n    max-width: 300px;\n    position: absolute;\n    top: 25%;\n    left: 10%;\n    background-color: #4b4b4b;\n    padding: 0 24px;\n    color: #e8e8e8;\n    box-shadow: 2px 2px 8px 2px #474747;\n    opacity: 0.9;\n}\n\n.textblockleft li, .textblockright li {\n    line-height: 2;\n}\n\n.textblockleft a {\n    color: #899efb;\n}\n\n.textblockleft a:visited {\n    color: #9672c4;\n}\n\n.contentblock {\n    padding: 12px 18px;\n    background-color: #fcfcfc;\n}\n\n.contentblock li {\n    font-size: 14px;\n}\n\n.contentblock p, .contentblock h1, .contentblock h2, .contentblock h3, .contentblockh4, .contentblock h5, .contentblock h6, .contentblock li {\n    color: #353535;\n}\n\n.jobblock {\n    width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    box-sizing: border-box;\n    padding: 16px;\n}\n\n.skillblock {\n    width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    box-sizing: border-box;\n    padding: 12px;\n}\n\n.skillblock li {\n    line-height: 2;\n}\n\n.schoolblock {\n    width: 100%;\n    display: inline-block;\n    vertical-align: top;\n    box-sizing: border-box;\n    padding: 12px;\n    text-align: center;\n}\n\n@media only screen and (min-width: 480px) {\n    /* .jobblock {width: 33%} */\n    .skillblock {width: 50%}\n    /* .schoolblock {width: 50%} */\n}\n\n@media only screen and (min-width: 768px) {\n    .jobblock {width: 50%}\n    .skillblock {width: 25%}\n    .schoolblock {width: 50%}\n}\n\n@media only screen and (min-width: 1024px) {\n    .jobblock {width: 33%}\n    /* .skillblock {width: 25%} */\n    /* .schoolblock {width: 50%} */\n}\n"

/***/ }),

/***/ "./src/app/minimal/minimal.component.html":
/*!************************************************!*\
  !*** ./src/app/minimal/minimal.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div @fade>\n\n    <!-- <div class=\"navbar\"> -->\n        <button class=\"backbutton\" [routerLink]=\"['/']\"><b>BACK</b></button>\n        <!-- <h3 class=\"titletext\">Eytan Levy's time-traveling portfolio: Minimal</h3> -->\n    <!-- </div> -->\n\n    <div class=\"parallaxdiv1\">\n        <div class=\"textblockright\">\n            <h3 style=\"text-align: center;\">Intro:</h3>\n            <p>{{data.intro}}</p>\n        </div>\n    </div>\n\n    <div class=\"contentblock\">\n        <h2 style=\"text-align: center;\">- Professional Experience -</h2>\n        <div class=\"jobblock\" *ngFor=\"let job of data.experience\">\n            <div *ngIf=\"job.title != 'Miscellaneous'\">\n                <p style=\"text-align: center;\"><b>{{job.title}}</b> ({{job.dates}})</p>\n                <p>{{job.description}}</p>\n                <ul *ngFor=\"let skill of job.skills\">\n                    <li>{{skill}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"parallaxdiv2\">\n        <div class=\"textblockleft\">\n            <h3 style=\"text-align: center;\">Interests and extracurriculars:</h3>\n            <ul>\n                <li *ngFor=\"let interest of data.interests\">{{interest}}</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"contentblock\">\n        <h2 style=\"text-align: center;\">- Educational History -</h2>\n        <div class=\"schoolblock \"*ngFor=\"let school of data.education\">\n            <p><b>{{school.school}}</b> ({{school.dates}})</p>\n            <p>{{school.degree}}</p>\n        </div>\n    </div>\n\n    <div class=\"parallaxdiv3\">\n        <div class=\"textblockright\">\n            <h3 style=\"text-align: center;\">References</h3>\n            <p>(coming soon!)</p>\n        </div>\n    </div>\n\n    <div class=\"contentblock\">\n        <h2 style=\"text-align: center;\">- Coding Skills -</h2>\n        <div class=\"skillblock\">\n            <p style=\"text-align: center;\"><b>Front-end design:</b></p>\n            <ul>\n                <li *ngFor=\"let skill of data.skills.design\">{{skill}}</li>\n            </ul>\n        </div>\n        <div class=\"skillblock\">\n            <p style=\"text-align: center;\"><b>Languages:</b></p>\n            <ul>\n                <li *ngFor=\"let skill of data.skills.languages\">{{skill}}</li>\n            </ul>\n        </div>\n        <div class=\"skillblock\">\n            <p style=\"text-align: center;\"><b>Frameworks:</b></p>\n            <ul>\n                <li *ngFor=\"let skill of data.skills.frameworks\">{{skill}}</li>\n            </ul>\n        </div>\n        <div class=\"skillblock\">\n            <p style=\"text-align: center;\"><b>Databases:</b></p>\n            <ul>\n                <li *ngFor=\"let skill of data.skills.databases\">{{skill}}</li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"parallaxdiv4\">\n        <div class=\"textblockleft\">\n            <h3 style=\"text-align: center;\">Contact info:</h3>\n            <div *ngFor=\"let site of data.contact\">\n                <p><a href=\"{{site.url}}\" target=\"_blank\">{{site.site}}</a>   </p>\n            </div>\n            <p><a href=\"mailto:{{data.email}}\">Email</a></p>\n\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/minimal/minimal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/minimal/minimal.component.ts ***!
  \**********************************************/
/*! exports provided: MinimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalComponent", function() { return MinimalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MinimalComponent = /** @class */ (function () {
    function MinimalComponent(_parent) {
        this._parent = _parent;
    }
    MinimalComponent.prototype.ngOnInit = function () {
        this.data = this._parent.data;
    };
    MinimalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-minimal',
            template: __webpack_require__(/*! ./minimal.component.html */ "./src/app/minimal/minimal.component.html"),
            styles: [__webpack_require__(/*! ./minimal.component.css */ "./src/app/minimal/minimal.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], MinimalComponent);
    return MinimalComponent;
}());



/***/ }),

/***/ "./src/app/terminal/terminal.component.css":
/*!*************************************************!*\
  !*** ./src/app/terminal/terminal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    /* background-color: black; */\n    margin: 0px;\n    font-family: courier;\n    font-weight: 700;\n    color: green;\n}\n\n.backdrop {\n    background-color: black;\n    width: 100%;\n    min-height: 100%;\n    padding: 12px;\n    box-sizing: border-box;\n}\n\n.menu {\n    border: 6px solid green;\n    border-style: double;\n    margin: 12px auto;\n    max-width: 600px;\n    padding: 12px;\n    box-sizing: border-box;\n}\n\n.menucommands {\n    min-width: 140px;\n    width: 50%;\n}\n\n.antiquewhite {\n    color: antiquewhite;\n}\n\n.darkcyan {\n    color: darkcyan;\n}\n\n.tan {\n    color: tan;\n}\n\n.lightgreen {\n    color: lightgreen;\n}\n\n.subtitle {\n    text-align: center;\n    margin: 12px;\n}\n\n.titlediv {\n    border: 6px solid darkcyan;\n    border-style: double;\n}\n\np {\n    margin: 4px;\n}\n\n#cursor {\n    margin: 4px 0 0 4px;\n    width: 14px;\n    height: 18px;\n    background-color: green;\n    display: inline-block;\n    vertical-align: top;\n}\n\n#loadingchamber {\n    width: 200px;\n    border: 2px solid green;\n    padding: 2px;\n    box-sizing: border-box;\n}\n\n#loadingbar {\n    height: 20px;\n    width: 1%;\n    background-color: green;\n}\n\n#content {\n    display: none;\n}\n\n.inline-block {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.backdrop {\n    background-color: black;\n}\n\n.subtitle {\n    text-align: center;\n}\n\n.lightgreen {\n    color: lightgreen;\n}\n\n.darkcyan {\n    color: darkcyan;\n}\n\n.tan {\n    color: tan;\n}\n\n.indent {\n    margin-left: 10px;\n}\n\n.subsection {\n    display: none;\n}"

/***/ }),

/***/ "./src/app/terminal/terminal.component.html":
/*!**************************************************!*\
  !*** ./src/app/terminal/terminal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" @fade>\n\n    <div id=\"loadingbay\">\n        <p class=\"lightgreen\">Loading...</p>\n        <div id=\"loadingchamber\">\n            <div id=\"loadingbar\">\n            </div>\n        </div>\n    </div>\n\n    <div id=\"content\">\n\n        <div class=\"menu\">\n            <div class=\"titlediv\">\n                <p class=\"subtitle darkcyan\">**** <span class=\"lightgreen\">Eytan Levy's Time-Traveling Portfolio</span> ****</p>\n            </div>\n            <p class=\"subtitle\">Menu commands: Press <span class=\"antiquewhite\">[<span class=\"darkcyan\">KEY</span>]</span></p>\n            <div class=\"inline-block menucommands\">\n                <p><span class=\"antiquewhite\">[<span class=\"darkcyan\">I</span>]</span>ntro</p>\n                <p>E<span class=\"antiquewhite\">[<span class=\"darkcyan\">X</span>]</span>perience</p>\n                <p><span class=\"antiquewhite\">[<span class=\"darkcyan\">E</span>]</span>ducation</p>\n                <p><span class=\"antiquewhite\">[<span class=\"darkcyan\">S</span>]</span>kills</p>\n                <p>I<span class=\"antiquewhite\">[<span class=\"darkcyan\">N</span>]</span>terests</p>\n                <p><span class=\"antiquewhite\">[<span class=\"darkcyan\">C</span>]</span>ontact</p>\n            </div>\n            <div class=\"inline-block menucommands\">\n                <p><span class=\"antiquewhite\">[<span class=\"darkcyan\">Esc</span>]</span>ape back to homepage</p>\n            </div>\n        </div>\n\n\n        <div class=\"subsection\" id=\"intro\">\n            <p class=\"subtitle darkcyan\">*******************</p>\n            <p class=\"subtitle darkcyan\">****** <span class=\"lightgreen\">INTRO</span> ******</p>\n            <p class=\"subtitle darkcyan\">*******************</p>\n            <p>{{data.intro}}</p>\n        </div>\n\n\n        <div class=\"subsection\" id=\"experience\">\n            <p class=\"subtitle darkcyan\">************************</p>\n            <p class=\"subtitle darkcyan\">****** <span class=\"lightgreen\">EXPERIENCE</span> ******</p>\n            <p class=\"subtitle darkcyan\">************************</p>\n\n            <div *ngFor=\"let job of data.experience\">\n                <p><span class=\"tan\">{{job.title}}</span><span *ngIf=\"job.organization\"> <span class=\"darkcyan\"> ({{job.organization}})</span> - {{job.dates}}</span></p>\n                <p>{{job.description}}</p>\n                <p *ngIf=\"job.skills\">Skills used:</p>\n                <p *ngFor=\"let skill of job.skills\" class=\"indent\">- {{skill}}</p>\n                <p class=\"darkcyan\">****************************************************</p>\n            </div>\n        </div>\n\n\n        <div class=\"subsection\" id=\"education\">\n            <p class=\"subtitle darkcyan\">***********************</p>\n            <p class=\"subtitle darkcyan\">****** <span class=\"lightgreen\">EDUCATION</span> ******</p>\n            <p class=\"subtitle darkcyan\">***********************</p>\n\n            <div *ngFor='let school of data.education'>\n                <p><span class=\"tan\">{{school.school}}</span> - {{school.dates}}</p>\n                <p>{{school.degree}}</p>\n                <p class=\"darkcyan\">****************************************************</p>\n            </div>\n        </div>\n\n\n        <div class=\"subsection\" id=\"skills\">\n            <p class=\"subtitle darkcyan\">********************</p>\n            <p class=\"subtitle darkcyan\">****** <span class=\"lightgreen\">SKILLS</span> ******</p>\n            <p class=\"subtitle darkcyan\">********************</p>\n            \n            <p class=\"tan\">Front-end design:</p>\n            <p *ngFor=\"let designskill of data.skills.design\" class=\"indent\">- {{designskill}}</p>\n            <p class=\"darkcyan\">******************************************</p>\n            \n            <p class=\"tan\">Programming languages:</p>\n            <p *ngFor=\"let language of data.skills.languages\" class=\"indent\">- {{language}}</p>\n            <p class=\"darkcyan\">******************************************</p>\n            \n            <p class=\"tan\">Frameworks:</p>\n            <p *ngFor=\"let framework of data.skills.frameworks\" class=\"indent\">- {{framework}}</p>\n            <p class=\"darkcyan\">******************************************</p>\n            \n            <p class=\"tan\">Databases:</p>\n            <p *ngFor=\"let database of data.skills.databases\" class=\"indent\">- {{database}}</p>\n            <p class=\"darkcyan\">******************************************</p>\n        </div>\n\n\n        <div class=\"subsection\" id=\"interests\">\n            <p class=\"subtitle darkcyan\">***********************</p>\n            <p class=\"subtitle darkcyan\">****** <span class=\"lightgreen\">INTERESTS</span> ******</p>\n            <p class=\"subtitle darkcyan\">***********************</p>\n            \n            <p *ngFor=\"let interest of data.interests\">- {{interest}}</p>\n        </div>\n\n        \n        <div class=\"subsection\" id=\"contact\">\n            <p class=\"subtitle darkcyan\">**************************</p>\n            <p class=\"subtitle darkcyan\">****** <span class=\"lightgreen\">CONTACT INFO</span> ******</p>\n            <p class=\"subtitle darkcyan\">**************************</p>\n            <div *ngFor=\"let contact of data.contact\">\n                <p><span class=\"tan\">{{contact.site}}:</span> {{contact.url}}</p>\n            </div>\n            <p><span class=\"tan\">Email:</span> {{data.email}}</p>\n        </div>\n\n        <p class=\"darkcyan inline-block\">COMMAND <span class=\"antiquewhite\"> > </span></p><div id=\"cursor\"></div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/terminal/terminal.component.ts":
/*!************************************************!*\
  !*** ./src/app/terminal/terminal.component.ts ***!
  \************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminalComponent = /** @class */ (function () {
    function TerminalComponent(_router, _parent) {
        this._router = _router;
        this._parent = _parent;
        this.subsections = document.getElementsByClassName('subsection');
    }
    TerminalComponent.prototype.keyEvent = function (event) {
        if (event.keyCode == 67) {
            this.hideSubsections();
            document.getElementById('contact').style.display = 'block';
        }
        if (event.keyCode == 88) {
            this.hideSubsections();
            document.getElementById('experience').style.display = 'block';
        }
        if (event.keyCode == 69) {
            this.hideSubsections();
            document.getElementById('education').style.display = 'block';
        }
        if (event.keyCode == 78) {
            this.hideSubsections();
            document.getElementById('interests').style.display = 'block';
        }
        if (event.keyCode == 83) {
            this.hideSubsections();
            document.getElementById('skills').style.display = 'block';
        }
        if (event.keyCode == 73) {
            this.hideSubsections();
            document.getElementById('intro').style.display = 'block';
        }
        if (event.keyCode == 27) {
            this.stopCursor();
            this._router.navigate(['/']);
        }
    };
    TerminalComponent.prototype.ngOnInit = function () {
        this.data = this._parent.data;
        this.blinkinterval = setInterval(this.cursorBlink, 500);
        this.load();
    };
    TerminalComponent.prototype.load = function () {
        var loadingbay = document.getElementById('loadingbay');
        var loadingbar = document.getElementById('loadingbar');
        var content = document.getElementById('content');
        var width = 1;
        var interval = setInterval(progress, 100);
        function progress() {
            if (width >= 100) {
                loadingbar.style.width = width + '%';
                loadingbay.style.display = 'none';
                content.style.display = 'block';
                clearInterval(interval);
            }
            else {
                var increment = Math.floor((Math.random() * 5));
                if (width < 96) {
                    width += increment;
                }
                else {
                    width++;
                }
                loadingbar.style.width = width + '%';
            }
        }
    };
    TerminalComponent.prototype.cursorBlink = function () {
        var cursor = document.getElementById('cursor');
        cursor.style.backgroundColor = cursor.style.backgroundColor == 'black' ? 'green' : 'black';
    };
    TerminalComponent.prototype.stopCursor = function () {
        clearInterval(this.blinkinterval);
    };
    TerminalComponent.prototype.hideSubsections = function () {
        var i;
        for (i = 0; i < this.subsections.length; i++) {
            this.subsections[i].style.display = 'none';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], TerminalComponent.prototype, "keyEvent", null);
    TerminalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terminal',
            template: __webpack_require__(/*! ./terminal.component.html */ "./src/app/terminal/terminal.component.html"),
            styles: [__webpack_require__(/*! ./terminal.component.css */ "./src/app/terminal/terminal.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter, :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(500)
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], TerminalComponent);
    return TerminalComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0px;\n}\n\n.backdrop {\n    background-image: url('corfu-beach.jpg');;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-align: center;\n    padding-top: 12%;\n}\n\n.titleblock {\n    padding: 24px;\n    margin: 0 auto;\n    background-color: hsla(0, 0%, 25%, 0.7);\n    width: 50%;\n    color: #e8e8e8;\n    box-shadow: 0 0 10px 8px hsla(0, 0%, 25%, 0.7);\n}\n\np, h1,h2,h3,h4,h5,h6 {\n    font-family: 'open sans', sans-serif;\n    text-align: center;\n}\n\n.buttondiv {\n    text-align: center;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n#terminal {\n    background-color: #d1cbbc;\n    border: 6px solid #a8a497;\n    border-radius: 6px;\n    border-style: outset;\n    font-family: courier;\n    font-size: 18px;\n    padding: 10px;\n    margin: 12px;\n}\n\n#minimal {\n    background-color: #313131;\n    border: none;\n    color: #e8e8e8;\n    font-family: 'open sans';\n    padding: 14px;\n    margin: 12px;\n    box-shadow: 1px 1px 12px 2px #313131;\n    opacity: 0.7;\n    font-size: 16px;\n    font-weight: 700;\n}\n\n#minimal:hover {\n    opacity: 0.6;\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" @fade>\n    <div class=\"titleblock\">\n        <h1>Eytan Levy's</h1>\n        <h2>time-traveling portfolio!</h2>\n        <br />\n        <p>Pick a theme:</p>\n        <br />\n        <div class=\"buttondiv\">\n            <button id=\"terminal\" [routerLink]=\"['terminal']\">Old-school</button>\n            <button id=\"minimal\" [routerLink]=\"['minimal']\">MINIMAL</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ESL/Desktop/eslevy17.github.io/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map