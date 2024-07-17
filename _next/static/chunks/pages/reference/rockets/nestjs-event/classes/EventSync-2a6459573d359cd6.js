(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20876],{23876:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-event/classes/EventSync",function(){return s(64465)}])},64465:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return i}});var r=s(85893),t=s(92673),c=s(82643);let i=[{depth:2,value:"Example",id:"example"},{depth:2,value:"Extends",id:"extends"},{depth:2,value:"Type Parameters",id:"type-parameters"},{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new EventSync()",id:"new-eventsync"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Inherited from",id:"inherited-from"},{depth:4,value:"Defined in",id:"defined-in"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"expectsReturnOf",id:"expectsreturnof"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Inherited from",id:"inherited-from-1"},{depth:4,value:"Defined in",id:"defined-in-1"},{depth:2,value:"Accessors",id:"accessors"},{depth:3,value:"key",id:"key"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Implementation of",id:"implementation-of-1"},{depth:4,value:"Inherited from",id:"inherited-from-2"},{depth:4,value:"Defined in",id:"defined-in-2"},{depth:3,value:"payload",id:"payload"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Implementation of",id:"implementation-of-2"},{depth:4,value:"Inherited from",id:"inherited-from-3"},{depth:4,value:"Defined in",id:"defined-in-3"},{depth:3,value:"key",id:"key-1"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Inherited from",id:"inherited-from-4"},{depth:4,value:"Defined in",id:"defined-in-4"}];function d(e){let n=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",code:"code",h2:"h2",pre:"pre",span:"span",ul:"ul",li:"li",h3:"h3",blockquote:"blockquote",h4:"h4"},(0,c.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../README",children:(0,r.jsx)(n.strong,{children:"@concepta/nestjs-event"})})," • ",(0,r.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../../packages",children:"Rockets"})," / ",(0,r.jsx)(n.a,{href:"../README",children:"@concepta/nestjs-event"})," / EventSync"]}),"\n",(0,r.jsxs)(n.h1,{children:["Class: ",(0,r.jsx)(n.code,{children:"abstract"})," EventSync<P>"]}),"\n",(0,r.jsx)(n.p,{children:"Abstract synchronous event class."}),"\n",(0,r.jsxs)(n.p,{children:["To create a custom event, extend the\n",(0,r.jsx)(n.a,{href:"EventSync",children:"EventSync"})," class."]}),"\n",(0,r.jsxs)(n.p,{children:["You can override and customize the [payload]",(0,r.jsx)(n.a,{href:"Event#payload",children:"Event#payload"})," getter\nif desired. Please read the documentation for the abstract ",(0,r.jsx)(n.a,{href:"Event",children:"Event"})," class\nfor the complete documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["For asynchronous events, see the ",(0,r.jsx)(n.a,{href:"EventAsync",children:"EventAsync"})," abstract class."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// event payload type"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {id"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// event class"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Event"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"> {}"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// create an event"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"myEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({id"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1234"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"P"}),", ",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["• ",(0,r.jsx)(n.strong,{children:"P"})," = ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface",children:(0,r.jsx)(n.code,{children:"EventSyncInterface"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-eventsync",children:"new EventSync()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"new EventSync"}),"<",(0,r.jsx)(n.code,{children:"P"}),">(",(0,r.jsx)(n.code,{children:"payload"}),"?): ",(0,r.jsx)(n.a,{href:"EventSync",children:(0,r.jsx)(n.code,{children:"EventSync"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Constructor"}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["• ",(0,r.jsx)(n.strong,{children:"payload?"}),": ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Payload to emit when the event is dispatched."}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"EventSync",children:(0,r.jsx)(n.code,{children:"EventSync"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"Event",children:(0,r.jsx)(n.code,{children:"Event"})}),".",(0,r.jsx)(n.a,{href:"Event#constructors",children:(0,r.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/dfec8b2135987a95ef0e40211089ab9178c0d4cf/packages/nestjs-event/src/events/event.ts#L69",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:69"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"expectsreturnof",children:"expectsReturnOf"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"expectsReturnOf"}),": ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Internal"})})}),"\n",(0,r.jsx)(n.p,{children:"Expects return of payload"}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface",children:(0,r.jsx)(n.code,{children:"EventSyncInterface"})}),".",(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface#expectsreturnof",children:(0,r.jsx)(n.code,{children:"expectsReturnOf"})})]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"Event",children:(0,r.jsx)(n.code,{children:"Event"})}),".",(0,r.jsx)(n.a,{href:"Event#expectsreturnof",children:(0,r.jsx)(n.code,{children:"expectsReturnOf"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/dfec8b2135987a95ef0e40211089ab9178c0d4cf/packages/nestjs-event/src/events/event.ts#L39",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:39"})}),"\n",(0,r.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(n.h3,{id:"key",children:"key"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"key"}),"(): ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Event key."}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"The event key string."}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface",children:(0,r.jsx)(n.code,{children:"EventSyncInterface"})}),".",(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface#key",children:(0,r.jsx)(n.code,{children:"key"})})]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"Event",children:(0,r.jsx)(n.code,{children:"Event"})}),".",(0,r.jsx)(n.a,{href:"Event#key",children:(0,r.jsx)(n.code,{children:"key"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/dfec8b2135987a95ef0e40211089ab9178c0d4cf/packages/nestjs-event/src/events/event.ts#L55",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:55"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"payload",children:"payload"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"payload"}),"(): ",(0,r.jsx)(n.code,{children:"P"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns payload that was passed to the Event constructor."}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"P"})}),"\n",(0,r.jsx)(n.p,{children:"The event payload."}),"\n",(0,r.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface",children:(0,r.jsx)(n.code,{children:"EventSyncInterface"})}),".",(0,r.jsx)(n.a,{href:"../interfaces/EventSyncInterface#payload",children:(0,r.jsx)(n.code,{children:"payload"})})]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"Event",children:(0,r.jsx)(n.code,{children:"Event"})}),".",(0,r.jsx)(n.a,{href:"Event#payload",children:(0,r.jsx)(n.code,{children:"payload"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/dfec8b2135987a95ef0e40211089ab9178c0d4cf/packages/nestjs-event/src/events/event.ts#L85",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:85"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"key-1",children:"key"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.code,{children:"static"})," ",(0,r.jsx)(n.strong,{children:"key"}),"(): ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Event key."}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"The event key string."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"Event",children:(0,r.jsx)(n.code,{children:"Event"})}),".",(0,r.jsx)(n.a,{href:"Event#key-1",children:(0,r.jsx)(n.code,{children:"key"})})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/conceptadev/rockets/blob/dfec8b2135987a95ef0e40211089ab9178c0d4cf/packages/nestjs-event/src/events/event.ts#L46",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:46"})})]})}n.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-event/classes/EventSync.mdx",route:"/reference/rockets/nestjs-event/classes/EventSync",title:"Class: abstract EventSync<P>",headings:i},pageNextRoute:"/reference/rockets/nestjs-event/classes/EventSync"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=23876)}),_N_E=e.O()}]);