(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),l=(n(10),n(1)),i=(n(11),{name:"Error Find",heading:"This game teaches you to find mistakes in written text.",activities:[{activity_name:"Activity One",order:1,questions:[{is_correct:!1,stimulus:"I really enjoy *to play football* with friends.",order:1,user_answers:[],feedback:"I really enjoy *playing football* with friends."},{is_correct:!0,stimulus:"I think that *starting* a school science magazine is an excellent idea!",order:2,user_answers:[],feedback:"I think that *starting* a school science magazine is an excellent idea!"},{is_correct:!1,stimulus:"Watching films at home is *more cheaper* than at the cinema.",order:3,user_answers:[],feedback:"Watching films at home is *cheaper* than at the cinema."},{is_correct:!1,stimulus:"On the one hand, small cameras are comfortable. *In the other hand*, larger ones take better photos.",order:4,user_answers:[],feedback:"On the one hand, small cameras are comfortable. *On the other hand*, larger ones take better photos."},{is_correct:!1,stimulus:"My friend *like listening* to songs in English",order:5,user_answers:[],feedback:"My friend *likes listening* to songs in English"}]},{activity_name:"Activity Two",order:2,questions:[{round_title:"Round 1",order:1,questions:[{is_correct:!1,stimulus:"Watching films at home is *more cheaper* than at the cinema.",order:1,user_answers:[],feedback:"Watching films at home is *cheaper* than at the cinema."},{is_correct:!1,stimulus:"On the one hand, small cameras are comfortable. *In the other hand*, larger ones take better photos.",order:2,user_answers:[],feedback:"On the one hand, small cameras are comfortable. *On the other hand*, larger ones take better photos."}]},{round_title:"Round 2",order:2,questions:[{is_correct:!0,stimulus:"I can't go out because I *haven't finished* my homework yet.",order:1,user_answers:[],feedback:"I can't go out because I *haven't finished* my homework yet."},{is_correct:!1,stimulus:"My friend *like listening* to songs in English",order:2,user_answers:[],feedback:"My friend *likes listening* to songs in English"}]}]}]});var o=function(e){var t=e.results.reduce((function(e,t,n){return e.push(r.a.createElement("div",{className:"resultDiv",key:n},r.a.createElement("span",null,"Q",n+1),r.a.createElement("span",null,t))),e}),[]);return r.a.createElement("div",{className:"centerContent homeScreen",style:{padding:0}},r.a.createElement("h5",null,"ACTIVITY ONE"),r.a.createElement("h1",null,"Results"),t,r.a.createElement("button",{onClick:e.showHomeScreen}," Home "))},u=[];var m=function(e){var t,n=e.questions,s=Object(a.useState)(1),c=Object(l.a)(s,2),i=c[0],m=c[1];function h(e){e===n[i-1].is_correct?u.push("CORRECT"):u.push("FALSE"),m(i+1)}return n[i-1]&&(t=n[i-1].stimulus.split("*")),r.a.createElement("div",null,t?r.a.createElement("div",{className:"centerContent"},r.a.createElement("h4",{className:"extraMargin"},"ACTIVITY ONE"),r.a.createElement("h1",{className:"extraMargin"},"Q",i,"."),r.a.createElement("div",{className:"greyBackground"},t[0],r.a.createElement("strong",null,t[1]),t[2]),r.a.createElement("div",null,r.a.createElement("button",{className:"centerButton",onClick:function(){return h(!0)}},"CORRECT"),r.a.createElement("button",{className:"centerButton",onClick:function(){return h(!1)}},"INCORRECT"))):r.a.createElement(o,{results:u,showHomeScreen:function(){u=[],e.showHomeScreen()}}))},h=n(2),d=n.n(h);var E=function(e){var t=e.results.reduce((function(e,t,n){return e.push(r.a.createElement("div",{className:"resultDiv",key:n},r.a.createElement("span",null,"ROUND ",n+1))),t.result.forEach((function(t,a){e.push(r.a.createElement("div",{className:"resultDiv",key:"r"+n+"q"+a},r.a.createElement("span",null,"Q",a+1),r.a.createElement("span",null,t)))})),e}),[]);return r.a.createElement("div",{className:"centerContent homeScreen",style:{padding:0}},r.a.createElement("h5",null,"ACTIVITY TWO"),r.a.createElement("h1",null,"Results"),t,r.a.createElement("button",{onClick:e.showHomeScreen}," Home "))},f=[],v=!0;function g(e){return new Promise((function(t){return setTimeout(t,e)}))}var b=function(e){var t,n,s=Object(a.useState)(1),c=Object(l.a)(s,2),i=c[0],o=c[1],u=Object(a.useState)(1),m=Object(l.a)(u,2),h=m[0],b=m[1],p=Object(a.useState)(!1),k=Object(l.a)(p,2),C=k[0],O=k[1];function y(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,d.a.awrap(g(1e3));case 3:O(!1);case 4:case"end":return e.stop()}}))}function w(t){var a=(n=e.questions[i-1].questions)[h-1].is_correct;f[i-1]||(f[i-1]={round:i,result:[]}),t===a?f[i-1].result.push("CORRECT"):f[i-1].result.push("FALSE"),n[h]?b(h+1):(e.questions[i]&&y(),o(i+1),b(1))}return e.questions[i-1]&&(n=e.questions[i-1].questions),v&&(v=!1,y()),n&&(t=n[h-1].stimulus.split("*")),r.a.createElement("div",null,C&&r.a.createElement("div",{className:"centerContent"},r.a.createElement("h4",{className:"extraMargin"},"ACTIVITY TWO"),r.a.createElement("h2",{className:"extraMargin"},"ROUND ",i)),!C&&t?r.a.createElement("div",{className:"centerContent"},r.a.createElement("h4",{className:"extraMargin"},"ACTIVITY TWO / Round ",i),r.a.createElement("h1",{className:"extraMargin"},"Q",h,"."),r.a.createElement("div",{className:"greyBackground"},t[0],r.a.createElement("strong",null,t[1]),t[2]),r.a.createElement("div",null,r.a.createElement("button",{className:"centerButton",onClick:function(){return w(!0)}},"CORRECT"),r.a.createElement("button",{className:"centerButton",onClick:function(){return w(!1)}},"INCORRECT"))):!C&&r.a.createElement(E,{results:f,showHomeScreen:function(){f=[],v=!0,e.showHomeScreen()}}))};var p=function(e){var t=e.allActivity;return r.a.createElement("div",null,1===e.activityNum&&r.a.createElement(m,{questions:t[0].questions,showHomeScreen:e.showHomeScreen}),2===e.activityNum&&r.a.createElement(b,{questions:t[1].questions,showHomeScreen:e.showHomeScreen}))};var k=function(){var e=i.activities,t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),m=u[0],h=u[1];return r.a.createElement("div",null,r.a.createElement("div",null,!s&&r.a.createElement("div",{className:"centerContent homeScreen"},r.a.createElement("header",null,r.a.createElement("h3",null,"CAE"),r.a.createElement("h1",null,"Error Find")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){h(1),c(!0)}},"ACTIVITY ONE")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){h(2),c(!0)}},"ACTIVITY TWO"))),s&&r.a.createElement(p,{allActivity:e,activityNum:m,showHomeScreen:function(){c(!1)}})))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.798e522c.chunk.js.map