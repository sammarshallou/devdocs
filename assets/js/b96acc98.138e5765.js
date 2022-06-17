"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[69252],{34523:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.10.7",tags:["Release notes","Moodle 3.10"],sidebar_position:7,moodleVersion:"3.10.7"},p=void 0,m={unversionedId:"releases/3.10/3.10.7",id:"releases/3.10/3.10.7",title:"Moodle 3.10.7",description:"Release date: 13 September 2021",source:"@site/general/releases/3.10/3.10.7.md",sourceDirName:"releases/3.10",slug:"/releases/3.10/3.10.7",permalink:"/devdocs/general/releases/3.10/3.10.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.10/3.10.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.10",permalink:"/devdocs/general/tags/moodle-3-10"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655444614,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:7,frontMatter:{title:"Moodle 3.10.7",tags:["Release notes","Moodle 3.10"],sidebar_position:7,moodleVersion:"3.10.7"},sidebar:"releaseNotes",previous:{title:"Moodle 3.10.6",permalink:"/devdocs/general/releases/3.10/3.10.6"},next:{title:"Moodle 3.10.8",permalink:"/devdocs/general/releases/3.10/3.10.8"}},d={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 13 September 2021"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.10.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.10.7"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70176"},"MDL-70176")," - Forum Grading Does Not Respect Separate Groups Filter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71121"},"MDL-71121")," - Default settings async course backup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49202"},"MDL-49202"),' - Checking "Hidden" in grade item settings does not hide the item from student, at the same time selecting "Hide" from dropdown on the setup page does'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72242"},"MDL-72242")," - Missing SVG files in forum posts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70376"},"MDL-70376")," - Assignment - Annotated PDF Download issues when page is turned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72312"},"MDL-72312")," - PHP 7.2 tests failing in 3.10 & 3.9, caused by buggy php-igbinary extension"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71500"},"MDL-71500")," - Cannot select a date on the right hand side 3 month mini calendar, after previously selecting one"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69451"},"MDL-69451")," - moodle_read_slave_trait: restore temptables object when creating rw and ro handles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72033"},"MDL-72033")," - User tours: step placement issues if screen too narrow"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71973"},"MDL-71973")," - Exception thrown when evaluating disabled models from the CLI"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70006"},"MDL-70006")," - Suspended enrolment will get analytics messages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70165"},"MDL-70165")," - Unable to change user role in a new course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70433"},"MDL-70433")," - In gradebook titles, ampersand '&' is being displayed as & amp;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71050"},"MDL-71050")," - H5P does not use the correct language"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72265"},"MDL-72265")," - Backup code added in ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56310"},"MDL-56310")," incorrectly checks moodle/role:safeoverride for users who already have moodle/role:override"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67833"},"MDL-67833")," - Text run over on Lang customization screen"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72035"},"MDL-72035")," - Course completion report Excel download should include BOM to ensure correct character encoding"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71945"},"MDL-71945")," - Bulk releasing grades for anonymous submissions pushes them to gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71844"},"MDL-71844")," - Navigation breadcrumbs lost when running single task"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71487"},"MDL-71487")," - Setting filesize settings to huge values breaks settings pages/search"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72207"},"MDL-72207"),' - Webservice mod_assign_get_submission_status doesn\'t support "All participants"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71029"},"MDL-71029")," - Forum summary report multiplies counts by number of enrollments a user has"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72271"},"MDL-72271"),' - Clicking "Finish Review" after a quiz set to Full screen popup with JavaScript security results in a 404 to /mod/quiz/0 if not in a popup window'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72325"},"MDL-72325")," - sitepolicynotagreed popup appears when trying to start a user tour"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72153"},"MDL-72153")," - Privacy export of user data doesn't export description files correctly/triggers debugging"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72106"},"MDL-72106")," - Error being displayed after deleting calendar subscription")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68639"},"MDL-68639")," - Atto produces invalid nested unordered (UL) lists"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72286"},"MDL-72286")," - Atto plugin steals default submit action so enter key in other fields no longer submits the form"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71674"},"MDL-71674")," - Atto editor's insert image dialog boxes do not show all error messages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71656"},"MDL-71656")," - Add meaningful label to colour items in colour chooser elements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72206"},"MDL-72206")," - Insufficient colour contrast in warning messages in environment check"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71814"},"MDL-71814")," - Atto: File picker \u2013 file info panel focus issue")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72014"},"MDL-72014")," - Update grunt and some components to avoid some security reports"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72187"},"MDL-72187")," - Log visibility change of log stores")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427103"},"MSA-21-0032")," Session Hijack risk when Shibboleth authentication is enabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427104"},"MSA-21-0033")," Course participants download did not restrict which users could be exported"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427105"},"MSA-21-0034")," Authentication bypass risk when using external database authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427106"},"MSA-21-0035")," Arbitrary file read by site administrators via LaTeX preamble"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427107"},"MSA-21-0036")," Quiz unreleased grade disclosure via web service")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.10.7"},"Notes de mise \xe0 jour de Moodle 3.10.7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.10.7"},"Notas de Moodle 3.10.7"))))}k.isMDXComponent=!0}}]);