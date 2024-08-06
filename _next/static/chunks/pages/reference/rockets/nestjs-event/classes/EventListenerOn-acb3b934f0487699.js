(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99242],{43779:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-event/classes/EventListenerOn",function(){return s(9533)}])},9533:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var r=s(85893),t=s(92673),i=s(82643);let l=[{depth:2,value:"Example",id:"example"},{depth:2,value:"Extends",id:"extends"},{depth:2,value:"Type Parameters",id:"type-parameters"},{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new EventListenerOn()",id:"new-eventlisteneron"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Overrides",id:"overrides"},{depth:4,value:"Defined in",id:"defined-in"},{depth:2,value:"Accessors",id:"accessors"},{depth:3,value:"options",id:"options"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Defined in",id:"defined-in-1"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"listen()",id:"listen"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Implementation of",id:"implementation-of-1"},{depth:4,value:"Inherited from",id:"inherited-from"},{depth:4,value:"Defined in",id:"defined-in-2"},{depth:3,value:"remove()",id:"remove"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Implementation of",id:"implementation-of-2"},{depth:4,value:"Inherited from",id:"inherited-from-1"},{depth:4,value:"Defined in",id:"defined-in-3"},{depth:3,value:"subscription()",id:"subscription"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-4"},{depth:4,value:"Implementation of",id:"implementation-of-3"},{depth:4,value:"Inherited from",id:"inherited-from-2"},{depth:4,value:"Defined in",id:"defined-in-4"}];function c(e){let n=Object.assign({h1:"h1",code:"code",p:"p",a:"a",h2:"h2",pre:"pre",span:"span",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",blockquote:"blockquote",strong:"strong",h4:"h4",hr:"hr"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{children:["Class: ",(0,r.jsx)(n.code,{children:"abstract"})," EventListenerOn<E>"]}),"\n",(0,r.jsx)(n.p,{children:"Abstract event listen on class."}),"\n",(0,r.jsxs)(n.p,{children:["To create a custom event listener, extend the ",(0,r.jsx)(n.a,{href:"EventListenerOn",children:"EventListenerOn"})," class and implement the\n[listen]",(0,r.jsx)(n.a,{href:"EventListenerOn#listen",children:"EventListenerOn#listen"})," method. The [listen]",(0,r.jsx)(n.a,{href:"EventListenerOn#listen",children:"EventListenerOn#listen"}),"\nmethod will receive the payload dispatched by ",(0,r.jsx)(n.a,{href:"EventDispatchService",children:"EventDispatchService"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// event payload type"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {id"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// example event class"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"EventSync"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"> {}"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// example listener class"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyListenOn"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"EventListenerOn"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"> {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// custom handler"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"listen"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(event"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"event"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".payload);"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// new listener"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"myListener"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyListenOn"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// subscribe to the event"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"EventListenService"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".on"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(MyEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" myListener);"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// and you can remove the listener easily"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"listener"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".remove"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EventListener",children:(0,r.jsx)(n.code,{children:"EventListener"})}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type Parameter"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"E"})})})})]}),"\n",(0,r.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnInterface"})}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-eventlisteneron",children:"new EventListenerOn()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"new EventListenerOn"}),"<",(0,r.jsx)(n.code,{children:"E"}),">(",(0,r.jsx)(n.code,{children:"_options"}),"): ",(0,r.jsx)(n.a,{href:"EventListenerOn",children:(0,r.jsx)(n.code,{children:"EventListenerOn"})}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Constructor"}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"_options"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnOptionsInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnOptionsInterface"})})}),(0,r.jsx)(n.td,{children:"Listener options"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"EventListenerOn",children:(0,r.jsx)(n.code,{children:"EventListenerOn"})}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"EventListener",children:(0,r.jsx)(n.code,{children:"EventListener"})}),".",(0,r.jsx)(n.a,{href:"EventListener#constructors",children:(0,r.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/223d0173639fea59411a97d10ff8d8dbf292fbbd/packages/nestjs-event/src/listeners/event-listener-on.ts#L47",children:".tmp/repos/rockets/packages/nestjs-event/src/listeners/event-listener-on.ts:47"})}),"\n",(0,r.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"options"}),"(): ",(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnOptionsInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnOptionsInterface"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Default listener options."}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnOptionsInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnOptionsInterface"})})}),"\n",(0,r.jsx)(n.p,{children:"The default listener options."}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnInterface"})}),".",(0,r.jsx)(n.code,{children:"options"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/223d0173639fea59411a97d10ff8d8dbf292fbbd/packages/nestjs-event/src/listeners/event-listener-on.ts#L56",children:".tmp/repos/rockets/packages/nestjs-event/src/listeners/event-listener-on.ts:56"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"listen",children:"listen()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"abstract"})," ",(0,r.jsx)(n.strong,{children:"listen"}),"(",(0,r.jsx)(n.code,{children:"event"}),"): ",(0,r.jsx)(n.code,{children:"EventReturnType"}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Listen to an event."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"event"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"EventInstance"}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"EventReturnType"}),"<",(0,r.jsx)(n.code,{children:"E"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnInterface"})}),".",(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface#listen",children:(0,r.jsx)(n.code,{children:"listen"})})]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"EventListener",children:(0,r.jsx)(n.code,{children:"EventListener"})}),".",(0,r.jsx)(n.a,{href:"EventListener#listen",children:(0,r.jsx)(n.code,{children:"listen"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/223d0173639fea59411a97d10ff8d8dbf292fbbd/packages/nestjs-event/src/listeners/event-listener.ts#L60",children:".tmp/repos/rockets/packages/nestjs-event/src/listeners/event-listener.ts:60"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"remove",children:"remove()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"remove"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Remove the subscription."}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnInterface"})}),".",(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface#remove",children:(0,r.jsx)(n.code,{children:"remove"})})]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"EventListener",children:(0,r.jsx)(n.code,{children:"EventListener"})}),".",(0,r.jsx)(n.a,{href:"EventListener#remove",children:(0,r.jsx)(n.code,{children:"remove"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/223d0173639fea59411a97d10ff8d8dbf292fbbd/packages/nestjs-event/src/listeners/event-listener.ts#L85",children:".tmp/repos/rockets/packages/nestjs-event/src/listeners/event-listener.ts:85"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"subscription",children:"subscription()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"subscription"}),"(",(0,r.jsx)(n.code,{children:"emitterListener"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Internal"})})}),"\n",(0,r.jsx)(n.p,{children:"Called after successful subscription."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"emitterListener"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Listener"})}),(0,r.jsx)(n.td,{children:"The Listener object returned by EventEmitter2"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface",children:(0,r.jsx)(n.code,{children:"EventListenOnInterface"})}),".",(0,r.jsx)(n.a,{href:"../interfaces/EventListenOnInterface#subscription",children:(0,r.jsx)(n.code,{children:"subscription"})})]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"EventListener",children:(0,r.jsx)(n.code,{children:"EventListener"})}),".",(0,r.jsx)(n.a,{href:"EventListener#subscription",children:(0,r.jsx)(n.code,{children:"subscription"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/223d0173639fea59411a97d10ff8d8dbf292fbbd/packages/nestjs-event/src/listeners/event-listener.ts#L68",children:".tmp/repos/rockets/packages/nestjs-event/src/listeners/event-listener.ts:68"})})]})}n.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-event/classes/EventListenerOn.mdx",route:"/reference/rockets/nestjs-event/classes/EventListenerOn",title:"Class: abstract EventListenerOn<E>",headings:l},pageNextRoute:"/reference/rockets/nestjs-event/classes/EventListenerOn"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=43779)}),_N_E=e.O()}]);