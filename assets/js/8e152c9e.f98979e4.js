"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[91537],{1188:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return m}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 2.4.6",tags:["Release notes","Moodle 2.4"],sidebar_position:6,moodleVersion:"2.4.6"},d=void 0,u={unversionedId:"releases/2.4/2.4.6",id:"releases/2.4/2.4.6",title:"Moodle 2.4.6",description:"Release date: 9 September 2013",source:"@site/general/releases/2.4/2.4.6.md",sourceDirName:"releases/2.4",slug:"/releases/2.4/2.4.6",permalink:"/devdocs/general/releases/2.4/2.4.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.4/2.4.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.4",permalink:"/devdocs/general/tags/moodle-2-4"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655444614,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 2.4.6",tags:["Release notes","Moodle 2.4"],sidebar_position:6,moodleVersion:"2.4.6"},sidebar:"releaseNotes",previous:{title:"Moodle 2.4.5",permalink:"/devdocs/general/releases/2.4/2.4.5"},next:{title:"Moodle 2.4.7",permalink:"/devdocs/general/releases/2.4/2.4.7"}},p={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 September 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.4.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.4.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30839"},"MDL-30839")," - Form validation and error recovery draws the user to where focus is needed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27953"},"MDL-27953")," - Uploaded users can be added with authentication options other than Manual account or No login.")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40854"},"MDL-40854")," - Links to course activities/resources do not appear to users without appropriate view capabilities."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35981"},"MDL-35981")," - Confirmation is no longer needed after deleting a comment."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41036"},"MDL-41036")," - Question category info is now edited using the HTML editor.")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40176"},"MDL-40176")," - Mock form submission introduced for testing.")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=238393"},"MSA-13-0032")," Host verification failure in Amazon S3 repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=238396"},"MSA-13-0033")," Potential SQL injection in Moodle's SQL Server driver"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=238399"},"MSA-13-0035")," Inadequate filtering in Blog")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37333"},"MDL-37333"),' - Clicking "Clear theme caches" in Default theme selector redirects page to "Select theme for tablet device".'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41106"},"MDL-41106")," - MUC session cache fixes were made."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36803"},"MDL-36803")," - TinyMCE editor now works better with iOS."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40891"},"MDL-40891")," - MUC cache purge works consistently when creating directories."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31487"},"MDL-31487")," - Grade items remain hidden if explicitly hidden via Gradebook (regardless of activity state)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40633"},"MDL-40633")," - Auto-linking filter behaving as expected.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.4.6"},"Notas de Moodle 2.4.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.4.6"},"Notes de mise \xe0 jour de Moodle 2.4.6"))))}h.isMDXComponent=!0}}]);