"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[15180],{95001:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=o(83117),r=o(80102),l=(o(67294),o(3905)),s=o(13904),n=["components"],i={title:"Moodle 1.9.8",tags:["Release notes","Moodle 1.9"],sidebar_position:8,moodleVersion:"1.9.8"},d=void 0,p={unversionedId:"releases/1.9/1.9.8",id:"releases/1.9/1.9.8",title:"Moodle 1.9.8",description:"Release date: 25th March 2010",source:"@site/general/releases/1.9/1.9.8.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.8",permalink:"/devdocs/general/releases/1.9/1.9.8",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.8.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655444614,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:8,frontMatter:{title:"Moodle 1.9.8",tags:["Release notes","Moodle 1.9"],sidebar_position:8,moodleVersion:"1.9.8"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.7",permalink:"/devdocs/general/releases/1.9/1.9.7"},next:{title:"Moodle 1.9.9",permalink:"/devdocs/general/releases/1.9/1.9.9"}},m={},u=[{value:"Special notes",id:"special-notes",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language packs",id:"new-language-packs",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,o=(0,r.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 25th March 2010"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10400"},"the full list of fixed issues in 1.9.8"),"."),(0,l.kt)("h2",{id:"special-notes"},"Special notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you are using an unusual authentication mechanism then you may experience problems with sessions, and be unable to log in.  If this happens to you, add the following to your config.php to make login work:\n$CFG->regenloginsession = false;")),(0,l.kt)("h2",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16658"},"MDL-16658")," - New capability ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/restore/createuser"},"moodle/restore:createuser")," to control whether a user can create users when restoring a course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21174"},"MDL-21174")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Upload_user_pictures"},"Bulk upload of user profile pictures")," now excludes deleted users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20125"},"MDL-20125")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Section_Links_block_settings"},"Section Links block settings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21868"},"MDL-21868")," - Fix for bug affecting upgrade to 1.9.7+ on MS SQL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21606"},"MDL-21606")," - Fix for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Chameleon_theme"},"Chameleon theme")," not working with Firefox 3.6 bug"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21343"},"MDL-21343")," - Fix for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/LDAP_authentication"},"LDAP authentication")," settings not being shown"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19392"},"MDL-19392")," and ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21332"},"MDL-21332")," - Fixes for AICC objects"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21045"},"MDL-21045")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Grade_letters"},"Grade letters"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Outcomes"},"outcomes"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Grade_categories"},"grade categories")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Grade_items"},"grade items")," are now restored regardless of whether users are included in the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_backup"},"course backup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20122"},"MDL-20122")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/SCORM_module"},"SCORM module")," restore now retains maxgrade, updatefreq, maxattempt, grademethod and options (popup window option checkboxes)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20819"},"MDL-20819")," - Fix for statistics generation problem"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21029"},"MDL-21029")," - Global ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Glossary_module"},"glossary")," auto linking fix"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20810"},"MDL-20810")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Hotpot_module"},"Hotpot module")," import questions fix")),(0,l.kt)("h2",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147093"},"MSA-10-0001")," Vulnerability in KSES text cleaning"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147095"},"MSA-10-0002")," XSS vulnerabilty in the phpcas module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147096"},"MSA-10-0003")," Disclosure of full user names"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147097"},"MSA-10-0004")," Improved access control in course restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147099"},"MSA-10-0005")," Incorrect validation of forms data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147102"},"MSA-10-0006")," SQL injection in Wiki module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147103"},"MSA-10-0007")," Reflective Cross Site Scripting (XSS) in the Moodle Global Search Engine"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147106"},"MSA-10-0008")," Persistent XSS when using Login-as feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=147107"},"MSA-10-0009")," Session fixation prevention now turned on by default")),(0,l.kt)("h2",{id:"new-language-packs"},"New language packs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Asturian - Xos\xe9 Nel Caldevilla Vega"),(0,l.kt)("li",{parentName:"ul"},"Zulu - iCyber E-Learning Solutions")),(0,l.kt)("p",null,"(See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Translation_credits"},"Translation credits")," for additional details.)"),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.8"},"French version of this page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.9.8_Versionsinformationen"},"Moodle 1.9.8 Versionsinformationen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.9.8"},"Notas de Moodle 1.9.8"))))}c.isMDXComponent=!0}}]);