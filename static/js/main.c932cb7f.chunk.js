(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,c){e.exports={text:"Notification_text__2E73O"}},18:function(e,t,c){},2:function(e,t,c){e.exports={list:"Statistics_list__1j6DN"}},20:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),o=(c(17),c(18),c(7)),r=c(8),l=c(9),b=c(12),j=c(11),d=c(2),u=c.n(d),h=c(0),O=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positivePercentage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{className:u.a.list,children:["Good: ",t]}),Object(h.jsxs)("li",{className:u.a.list,children:["Neutral: ",c]}),Object(h.jsxs)("li",{className:u.a.list,children:["Bad: ",n]}),Object(h.jsx)("br",{}),Object(h.jsxs)("li",{className:u.a.list,children:["Total: ",a]}),Object(h.jsx)("br",{}),Object(h.jsxs)("li",{className:u.a.list,children:["Positive feedback:\xa0",t>0?s:" 0","%"]})]})})},x=c(3),f=c.n(x),m=function(e){var t=e.options,c=e.onLeaveFeedback;return t=Object.keys(t),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:f.a.list,children:t.map((function(e,t){return Object(h.jsx)("li",{className:f.a.item,children:Object(h.jsx)("button",{className:f.a.button,type:"button",onClick:c,children:"".concat(e[0].toUpperCase()).concat(e.slice(1))})},t)}))})})},p=c(5),k=c.n(p),_=function(e){var t=e.title,c=e.children;return Object(h.jsxs)("section",{className:k.a.section,children:[Object(h.jsx)("h2",{className:k.a.title,children:t}),c]})},v=c(10),g=c.n(v),N=function(e){var t=e.message;return Object(h.jsx)("p",{className:g.a.text,children:t})},F=function(e){Object(b.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.feedbackIncrement=function(t){var c=t.target.textContent.toLowerCase();e.setState((function(e){return Object(o.a)({},c,e[c]+1)}))},e.countTotalFeedback=function(e,t,c){return e+t+c},e.countPositiveFeedbackPercentage=function(t,c,n){return Math.round(100*t/e.countTotalFeedback(t,c,n))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,n=e.bad,a=this.countTotalFeedback(t,c,n),s=this.countPositiveFeedbackPercentage(t,c,n);return Object(h.jsxs)("main",{children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:this.state,onLeaveFeedback:this.feedbackIncrement})}),Object(h.jsx)(_,{title:"Statistics",children:a>0?Object(h.jsx)(O,{good:t,neutral:c,bad:n,total:a,positivePercentage:s}):Object(h.jsx)(N,{message:"No feedback given"})})]})}}]),c}(n.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},3:function(e,t,c){e.exports={list:"FeedbackOptions_list__1K55r",item:"FeedbackOptions_item__1aLf7",button:"FeedbackOptions_button__2Yd_Y"}},5:function(e,t,c){e.exports={section:"Section_section__2UVFW",title:"Section_title__1HX7c"}}},[[20,1,2]]]);
//# sourceMappingURL=main.c932cb7f.chunk.js.map