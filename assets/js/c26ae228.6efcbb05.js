"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[17750],{6092:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),n=r(13904),i=["components"],s={title:"Moodle Mobile 2.0 release notes",sidebar_label:"Moodle Mobile 2.0",tags:["Moodle App","Release notes"]},p=void 0,m={unversionedId:"app_releases/v2/v2.0",id:"app_releases/v2/v2.0",title:"Moodle Mobile 2.0 release notes",description:"Release date: 31th July 2015",source:"@site/general/app_releases/v2/v2.0.md",sourceDirName:"app_releases/v2",slug:"/app_releases/v2/v2.0",permalink:"/devdocs/general/app_releases/v2/v2.0",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v2/v2.0.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655444614,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Moodle Mobile 2.0 release notes",sidebar_label:"Moodle Mobile 2.0",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle App 3.9.5",permalink:"/devdocs/general/app_releases/v3/v3.9.5"},next:{title:"Moodle Mobile 2.1",permalink:"/devdocs/general/app_releases/v2/v2.1"}},k={},d=[{value:"UI/UX changes and improvements",id:"uiux-changes-and-improvements",level:2},{value:"General improvements",id:"general-improvements",level:2},{value:"New functionalities",id:"new-functionalities",level:2},{value:"New supported plugins and Moodle features",id:"new-supported-plugins-and-moodle-features",level:2},{value:"Development",id:"development",level:2},{value:"Platforms and Requirements",id:"platforms-and-requirements",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"Improvement",id:"improvement",level:3},{value:"New Feature",id:"new-feature",level:3},{value:"Task",id:"task",level:3},{value:"Sub-task",id:"sub-task",level:3}],h={toc:d};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,a.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 31th July 2015"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/jira/secure/ReleaseNote.jspa?projectId=10070&version=14454"},"Complete list of issues for Moodle Mobile 2.0")),(0,l.kt)("h2",{id:"uiux-changes-and-improvements"},"UI/UX changes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improved User Interface"),(0,l.kt)("li",{parentName:"ul"},"Application faster and smoother"),(0,l.kt)("li",{parentName:"ul"},"Courses can be filtered"),(0,l.kt)("li",{parentName:"ul"},"Application now supports pull to refresh in most screens"),(0,l.kt)("li",{parentName:"ul"},"Splash screen now available for different resolutions and orientations"),(0,l.kt)("li",{parentName:"ul"},"Infinite scrolling available in Participants, Calendar events, Forum discussions, Notifications (instead of pagination or show more buttons)")),(0,l.kt)("h2",{id:"general-improvements"},"General improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"App storage no longer limited to 5MB - depending on your device it can be between 50MB and your SD card capacity"),(0,l.kt)("li",{parentName:"ul"},"Calendar events can be seen offline"),(0,l.kt)("li",{parentName:"ul"},"Complete user profile information is displayed"),(0,l.kt)("li",{parentName:"ul"},"The complete user profile can be accessed from every page (participants, forum, messages)"),(0,l.kt)("li",{parentName:"ul"},"Settings and preferences are simplified"),(0,l.kt)("li",{parentName:"ul"},"Improved multi-site push notifications")),(0,l.kt)("h2",{id:"new-functionalities"},"New functionalities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Local notifications multi-site support (open the site referred to in the notification)"),(0,l.kt)("li",{parentName:"ul"},"If the token expires during your session, you are asked to re-enter your password to continue working (instead of having to close the session)"),(0,l.kt)("li",{parentName:"ul"},"Resources downloading status is preserved even when the user changes section or pages")),(0,l.kt)("h2",{id:"new-supported-plugins-and-moodle-features"},"New supported plugins and Moodle features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activity completion: Activity completion status is displayed and can be updated for courses"),(0,l.kt)("li",{parentName:"ul"},"New add-on: Choices - Users can make a choice and view responses"),(0,l.kt)("li",{parentName:"ul"},"New add-on: Notes - Teachers can view site, course and personal notes"),(0,l.kt)("li",{parentName:"ul"},"New add-on: Book - Users can view books"),(0,l.kt)("li",{parentName:"ul"},"New add-on: IMS CP - Users can view IMS content packages"),(0,l.kt)("li",{parentName:"ul"},"New add-on: Chat - Users can participate in the live chat via the app (only for sites using simple or Ajax chats; daemon chat not supported)")),(0,l.kt)("h2",{id:"development"},"Development"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New full stack framework (Ionic)"),(0,l.kt)("li",{parentName:"ul"},"Add-ons support local CSS and language files")),(0,l.kt)("h2",{id:"platforms-and-requirements"},"Platforms and Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Android 4.1"),(0,l.kt)("li",{parentName:"ul"},"iOS 7")),(0,l.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,l.kt)("h3",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-813"},"MOBILE-813")," - Email-based Self-registration authentication will not allow users to log into Mobile App"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-849"},"MOBILE-849")," - A Label showing unpredictable height or length of text on default collapsed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-994"},"MOBILE-994")," - Content not showing up in Android 4.4.2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1084"},"MOBILE-1084")," - JavaScript is Shows in the course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1161"},"MOBILE-1161")," - Credentials are not stored in some devices (Galaxy S4 Mini)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1162"},"MOBILE-1162")," - Side menu addons not seen when adding a new account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1163"},"MOBILE-1163")," - Course List: invalid response value error with certain characters in course description"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1164"},"MOBILE-1164")," - Minor errors detected while implementing unit testing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1166"},"MOBILE-1166")," - Clicking on a link in course description collapses the description")),(0,l.kt)("h3",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-811"},"MOBILE-811")," - Display larger text for labels in tablet mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1125"},"MOBILE-1125")," - If 1 file fails to download, IMSCP and mini site resources aren't loaded"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1132"},"MOBILE-1132")," - Translation for Moodle Mobile")),(0,l.kt)("h3",{id:"new-feature"},"New Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1093"},"MOBILE-1093")," - Notes support at course level"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1094"},"MOBILE-1094")," - Book module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1118"},"MOBILE-1118")," - Backport chat WS to the local_mobile plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1120"},"MOBILE-1120")," - Add support to mod_choice in the Mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1121"},"MOBILE-1121")," - Add support to mod_chat in the Mobile app")),(0,l.kt)("h3",{id:"task"},"Task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-665"},"MOBILE-665")," - Evaluate migrate to Ionic framework"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-778"},"MOBILE-778")," - META: Migrate to Ionic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1115"},"MOBILE-1115")," - Backport book and IMSCP external services (",(0,l.kt)("strong",{parentName:"li"},"view"),") to the local_mobile plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1119"},"MOBILE-1119")," - Backport choice WS to the local_mobile plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1129"},"MOBILE-1129")," - Release version 2.0")),(0,l.kt)("h3",{id:"sub-task"},"Sub-task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-814"},"MOBILE-814")," - Review and move the Moodle Mobile 2.0 rationale doc to the developers wiki"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-815"},"MOBILE-815")," - Create a prototype with static data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-816"},"MOBILE-816"),' - Remove or replace the "report a bug" option'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-818"},"MOBILE-818")," - Decide the development process, coding guidelines for the new team"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-819"},"MOBILE-819")," - Decide the new plugin architecture"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-820"},"MOBILE-820")," - Decide what to do with the app storage (data)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-821"},"MOBILE-821")," - Replace the current moodleWSCall / cache systems with an Angular module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-822"},"MOBILE-822")," - Move the current libraries to Angular modules, services, etc.."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-823"},"MOBILE-823"),' - Migrate: "Add site/log-in" functionality'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-824"},"MOBILE-824")," - Migrate: Manage accounts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-825"},"MOBILE-825")," - Migrate: SSO via Moodle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-826"},"MOBILE-826")," - Migrate: Remote layout/style customization feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-827"},"MOBILE-827")," - Migrate: Push notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-828"},"MOBILE-828")," - Migrate: Notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-829"},"MOBILE-829")," - Migrate: Messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-830"},"MOBILE-830")," - Migrate: Upload plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-831"},"MOBILE-831")," - Migrate: Calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-832"},"MOBILE-832")," - Migrate: My files plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-833"},"MOBILE-833")," - Migrate: Participants plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-834"},"MOBILE-834")," - Migrate: Grades plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-835"},"MOBILE-835")," - Migrate: Course contents"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-836"},"MOBILE-836")," - Migrate: Forum plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-837"},"MOBILE-837")," - Migrate: Settings option"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-842"},"MOBILE-842")," - Evaluate the use of ng-cordova"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-852"},"MOBILE-852")," - UI Prototype for Ionic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-853"},"MOBILE-853")," - Create an orange theme for the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-856"},"MOBILE-856")," - Replace the logging system with Angular Logging service"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-857"},"MOBILE-857")," - App translation, i18n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-862"},"MOBILE-862")," - Add support for activity completion display"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-863"},"MOBILE-863")," - Completion viewed is not set when a user opens a forum in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-864"},"MOBILE-864")," - Add support for logging (launching events) in the app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-875"},"MOBILE-875")," - Decide with settings/preferences are for specific sites or for the whole app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-876"},"MOBILE-876")," - Investigate, discuss and decide how to handle split views (tablet vs. phone)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-894"},"MOBILE-894")," - Define routing/state rules"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-914"},"MOBILE-914")," - Create a new splashscreen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-922"},"MOBILE-922")," - Migrate: app storage"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-929"},"MOBILE-929")," - Migrate config: config.json and MM.config"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-935"},"MOBILE-935")," - Migrate MM.fs (FileSystem wrapper)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-937"},"MOBILE-937"),' - Migrate "My Courses"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-944"},"MOBILE-944")," - Dev branch review"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-945"},"MOBILE-945")," - Integrate orange theme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-955"},"MOBILE-955")," - Make $mmSite WS functions work seamless with local_mobile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-956"},"MOBILE-956")," - $mmFS.calculateFreeSpace not working in iOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-957"},"MOBILE-957"),' - $mmWS.call invalidtoken: send an "event" to logout the user'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-958"},"MOBILE-958")," - MM2: Front page in course list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-959"},"MOBILE-959")," - Side menu's header (user info) doesn't display well in iOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-960"},"MOBILE-960")," - Language prefixes change: Use mm.core and mm.component"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-961"},"MOBILE-961")," - Splashscreen while session is being restored and other stuff"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-963"},"MOBILE-963")," - Decide what to do with text filtered"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-964"},"MOBILE-964")," - Cannot login in moodle.org"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-970"},"MOBILE-970")," - Migrate: Folder plugin (extract it from the contents plugin)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-971"},"MOBILE-971"),' - Style the "init" screen'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-972"},"MOBILE-972")," - Remove the ugly $stateProvider hack in core/main.js in favor of $provide.decorator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-973"},"MOBILE-973")," - Migrate: contents/sections to a sections components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-974"},"MOBILE-974")," - Create $mmCourseDelegate that handles support for content plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-978"},"MOBILE-978")," - Improve the loading popup mechanism"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-979"},"MOBILE-979")," - Incorrect language string used for error modal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-980"},"MOBILE-980")," - Migrate: labels on course content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-981"},"MOBILE-981")," - mm-format-text breaks updating data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-982"},"MOBILE-982")," - Missing methods in the list of deprecated methods"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-983"},"MOBILE-983")," - Create a directive for module description"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-985"},"MOBILE-985")," - Scroll broken on participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-986"},"MOBILE-986")," - Migrate the profile from mmaParticipants to a component"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-987"},"MOBILE-987")," - Migrate: URL to an addon"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-989"},"MOBILE-989")," - getMoodleFilePath: using .toInternalURL on a promise (error)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-990"},"MOBILE-990")," - Allow SCSS in addons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-992"},"MOBILE-992")," - Create directive to open external links in external browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-993"},"MOBILE-993")," - Participants page pull to refresh is not a real refresh"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-995"},"MOBILE-995")," - Implement pull to refresh on sections and section content (and display loading modal)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-996"},"MOBILE-996")," - Handle offline module icons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-998"},"MOBILE-998")," - Add support to logging in the new participants addon"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-999"},"MOBILE-999")," - Create a directive to download (cache) pluginfiles"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1001"},"MOBILE-1001")," - Move styles to core and components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1003"},"MOBILE-1003")," - Review (and fix) grades table styles (MM1 vs prototype)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1004"},"MOBILE-1004")," - Handle links present in external content using mmFormatText"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1005"},"MOBILE-1005")," - Provide SVG icons of the course modules"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1006"},"MOBILE-1006")," - Migrate: mod_page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1007"},"MOBILE-1007")," - Implement logging support in course component"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1008"},"MOBILE-1008")," - Force moodlewssettingfilter in ",(0,l.kt)("inlineCode",{parentName:"li"},"moodleWSCAlll")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1010"},"MOBILE-1010")," - Migrate: Upload any type of file in iOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1011"},"MOBILE-1011")," - Cached responses are not retrieved if WS call fails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1012"},"MOBILE-1012")," - Upgrade to Ionic 1.0.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1014"},"MOBILE-1014")," - Create a filepool system"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1018"},"MOBILE-1018")," - iOS swipe to go back doesn't work in some views"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1021"},"MOBILE-1021")," - Consider making $mmFilepool automatically handle plugin files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1022"},"MOBILE-1022")," - Delete the site folder upon site deletion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1023"},"MOBILE-1023")," - Grades addon: Use course modules SVG icons instead of images"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1024"},"MOBILE-1024")," - Do we need gulp install and git-check tasks?"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1026"},"MOBILE-1026")," - Error net::ERR_FILE_NOT_FOUND appears in console"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1027"},"MOBILE-1027")," - Webservices fail in a browser window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1028"},"MOBILE-1028")," - Remove www/build folder contents and add it to .gitignore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1029"},"MOBILE-1029")," - Integrate new splash screens"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1030"},"MOBILE-1030")," - Create app icons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1032"},"MOBILE-1032")," - Apply $mmFilepool to My Files and remove getMoodleFilePath"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1033"},"MOBILE-1033")," - Migrate: mod_resource"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1034"},"MOBILE-1034")," - Handle config 'downloadfiles' in Addons and $mmFilepool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1036"},"MOBILE-1036")," - Decide if we should use native scrolling"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1037"},"MOBILE-1037")," - Allow default value in $mmConfig.get"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1038"},"MOBILE-1038")," - Add in .gitignore dependencies downloaded by bower"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1042"},"MOBILE-1042")," - Create Phonegap Build config.xml file (and include the splash screens and icons inside www/img)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1044"},"MOBILE-1044")," - Review the www/config.json for deleting unused settings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1045"},"MOBILE-1045")," - Steps for building and releasing new versions (for Moodle Mobile 2 and onwards)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1046"},"MOBILE-1046")," - Language variations are not loaded automatically"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1049"},"MOBILE-1049")," - Call to core_user_get_users_by_field has wrong parameters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1051"},"MOBILE-1051")," - Make mm-format-text work with filters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1052"},"MOBILE-1052"),' - Implement "Mock site": be able to use any stored site'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1053"},"MOBILE-1053")," - Links in the add new site help text don't open in a new browser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1054"},"MOBILE-1054")," - Add pull down to refresh in the courses view and grades view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1055"},"MOBILE-1055")," - Migrate: View user grades"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1056"},"MOBILE-1056")," - Upgrade and create new documentation for Moodle Mobile 2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1060"},"MOBILE-1060")," - The course fullname is not formatted in the courses list view and the course contents page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1061"},"MOBILE-1061")," - Apply changes from ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-959"},"MOBILE-959")," again"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1062"},"MOBILE-1062")," - Android's back button can't close the app after login"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1063"},"MOBILE-1063")," - Display Moodle icon on local notifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1064"},"MOBILE-1064")," - Hide messages buttons in the profile page when messaging is disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1065"},"MOBILE-1065")," - Store basic user information as a fallback of the current WS for retrieving the user profile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1066"},"MOBILE-1066")," - Improve mm-format-text (performance)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1067"},"MOBILE-1067"),' - Migrate "Add note"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1068"},"MOBILE-1068"),' - Migrate "Assign" addon'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1071"},"MOBILE-1071")," - UI very slow on Android 4.1 when many courses are listed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1072"},"MOBILE-1072")," - UI of a course with a lot of content (size M) is very slow"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1073"},"MOBILE-1073")," - Errors with add/remove local_mobile and delegates not updated when changing site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1077"},"MOBILE-1077"),' - "Add contact" button empty if isContact fail'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1078"},"MOBILE-1078")," - $mmWS.downloadFile returns the temporary file entry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1080"},"MOBILE-1080")," - Forum discussion/posts created by deleted users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1081"},"MOBILE-1081")," - Remove the preferences option"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1082"},"MOBILE-1082")," - Change plugins order"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1083"},"MOBILE-1083")," - Migrate sites data from MM1 to MM2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1085"},"MOBILE-1085")," - Create translation files for all the components and add-ons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1086"},"MOBILE-1086")," - Rename some of the current string identifiers to match MM1 and Moodle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1087"},"MOBILE-1087")," - Some errors on app translation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1088"},"MOBILE-1088")," - Rename localized language packs to use - instead ","_"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1089"},"MOBILE-1089")," - Service or utility to check addons availability/dependencies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1090"},"MOBILE-1090")," - Files in iOs are not opened using the QuickView framework"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1091"},"MOBILE-1091")," - Fix iframe and icons for files in mod_resource"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1092"},"MOBILE-1092")," - Login username text field needs to disable capitals and autocorrect for iOs and Android"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1095"},"MOBILE-1095")," - Fix regression in remote styles and revision in mod_page/mod_resource"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1096"},"MOBILE-1096")," - Course contents: Failed download is not notified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1097"},"MOBILE-1097")," - CourseDelegateProvider not treating isEnabled right"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1098"},"MOBILE-1098")," - Allow mm-files and filepool to check outdated using timemodified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1099"},"MOBILE-1099")," - Files are not copied to the iframe in iOs (mod_imscp, mod_resource doesn't work)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1102"},"MOBILE-1102")," - Module icon not updated when the user accesses it and then goes back to list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1103"},"MOBILE-1103")," - Delegates refactoring"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1105"},"MOBILE-1105")," - Support Cordova Android 4.0.2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1106"},"MOBILE-1106")," - Synchronize a site (update site info, update remote styles, invalidate cache)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1108"},"MOBILE-1108")," - Rename local_moodlemobileapp strings to match the new english ones"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1109"},"MOBILE-1109")," - External links in inline resources not working"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1110"},"MOBILE-1110")," - Back button not shown on credentials page if no accounts stored"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1111"},"MOBILE-1111")," - Review: Some errors found while testing in offline"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1112"},"MOBILE-1112")," - In tablet view, subview's '$ionicView.enter' events and so are not triggered"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1114"},"MOBILE-1114")," - CSP changes made ionic serve to stop working"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1116"},"MOBILE-1116")," - Fix logging for mod_book"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1117"},"MOBILE-1117")," - User profile button not shown in message discussion in tablet view"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1126"},"MOBILE-1126"),' - Last message in a discussion is shown behind the "Send message" bar'),(0,l.kt)("li",{parentName:"ul"},"[MOBILE-1127} - Rename auto-translated strings to use {{$a}]","(",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1127%7D"},"https://tracker.moodle.org/browse/MOBILE-1127}")," - Rename auto-translated strings to use {{$a}) placeholders"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1128"},"MOBILE-1128")," - Calendar events offline: infinite loading keeps showing the same events (from cache)")))}c.isMDXComponent=!0}}]);