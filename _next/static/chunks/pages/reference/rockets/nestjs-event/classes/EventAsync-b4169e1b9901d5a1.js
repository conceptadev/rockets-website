(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6489],{71565:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-event/classes/EventAsync",function(){return n(31006)}])},31006:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return i}});var r=n(85893),c=n(92673),t=n(82643);let i=[{depth:3,value:"Example",id:"example"},{depth:2,value:"Extends",id:"extends"},{depth:2,value:"Extended by",id:"extended-by"},{depth:2,value:"Type parameters",id:"type-parameters"},{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new EventAsync()",id:"new-eventasync"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Inherited from",id:"inherited-from"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"expectsReturnOf",id:"expectsreturnof"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Inherited from",id:"inherited-from-1"},{depth:4,value:"Source",id:"source-1"},{depth:2,value:"Accessors",id:"accessors"},{depth:3,value:"key",id:"key"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Source",id:"source-2"},{depth:3,value:"payload",id:"payload"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Source",id:"source-3"},{depth:3,value:"key",id:"key-1"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Source",id:"source-4"}];function l(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",code:"code",h3:"h3",pre:"pre",span:"span",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",h4:"h4"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../READMEmdx",children:(0,r.jsx)(s.strong,{children:"@concepta/nestjs-event"})})," • ",(0,r.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../../packages",children:"Packages Example"})," / ",(0,r.jsx)(s.a,{href:"../READMEmdx",children:"@concepta/nestjs-event"})," / EventAsync"]}),"\n",(0,r.jsxs)(s.h1,{children:["Class: ",(0,r.jsx)(s.code,{children:"abstract"})," EventAsync<P, R>"]}),"\n",(0,r.jsx)(s.p,{children:"Abstract async event class."}),"\n",(0,r.jsxs)(s.p,{children:["To create a custom ",(0,r.jsx)(s.strong,{children:"async"})," event, extend the\n",(0,r.jsx)(s.a,{href:"EventAsync",children:"EventAsync"})," class."]}),"\n",(0,r.jsxs)(s.p,{children:["You can override and customize the [payload]",(0,r.jsx)(s.a,{href:"Event#payload",children:"Event#payload"})," getter\nif desired. Please read the documentation for the abstract ",(0,r.jsx)(s.a,{href:"Event",children:"Event"})," class\nfor the complete documentation."]}),"\n",(0,r.jsxs)(s.p,{children:["For synchronous events, see the ",(0,r.jsx)(s.a,{href:"EventSync",children:"EventSync"})," abstract class."]}),"\n",(0,r.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// event payload type"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {id"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// event class"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"EventAsync"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"> {}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// create an event"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"myEvent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({id"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1234"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})]})]})}),"\n",(0,r.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"Event",children:(0,r.jsx)(s.code,{children:"Event"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"R"}),">>"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,r.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,r.jsxs)(s.p,{children:["• ",(0,r.jsx)(s.strong,{children:"P"})," = ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(s.p,{children:["• ",(0,r.jsx)(s.strong,{children:"R"})," = ",(0,r.jsx)(s.code,{children:"P"})]}),"\n",(0,r.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../interfaces/EventAsyncInterface",children:(0,r.jsx)(s.code,{children:"EventAsyncInterface"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-eventasync",children:"new EventAsync()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new EventAsync"}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">(",(0,r.jsx)(s.code,{children:"payload"}),"?): ",(0,r.jsx)(s.a,{href:"EventAsync",children:(0,r.jsx)(s.code,{children:"EventAsync"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Constructor"}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.p,{children:["• ",(0,r.jsx)(s.strong,{children:"payload?"}),": ",(0,r.jsx)(s.code,{children:"P"})]}),"\n",(0,r.jsx)(s.p,{children:"Payload to emit when the event is dispatched."}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"EventAsync",children:(0,r.jsx)(s.code,{children:"EventAsync"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"Event",children:(0,r.jsx)(s.code,{children:"Event"})}),".",(0,r.jsx)(s.a,{href:"Event#constructors",children:(0,r.jsx)(s.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L73",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:73"})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"expectsreturnof",children:"expectsReturnOf"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"expectsReturnOf"}),": ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Expects return of payload"}),"\n",(0,r.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../interfaces/EventAsyncInterface",children:(0,r.jsx)(s.code,{children:"EventAsyncInterface"})}),".",(0,r.jsx)(s.a,{href:"../interfaces/EventAsyncInterface#expectsreturnof",children:(0,r.jsx)(s.code,{children:"expectsReturnOf"})})]}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"Event",children:(0,r.jsx)(s.code,{children:"Event"})}),".",(0,r.jsx)(s.a,{href:"Event#expectsreturnof",children:(0,r.jsx)(s.code,{children:"expectsReturnOf"})})]}),"\n",(0,r.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L43",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:43"})}),"\n",(0,r.jsx)(s.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(s.h3,{id:"key",children:"key"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"get"})," ",(0,r.jsx)(s.strong,{children:"key"}),"(): ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Event key."}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The event key string."}),"\n",(0,r.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L59",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:59"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"payload",children:"payload"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"get"})," ",(0,r.jsx)(s.strong,{children:"payload"}),"(): ",(0,r.jsx)(s.code,{children:"P"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Returns payload that was passed to the Event constructor."}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"P"})}),"\n",(0,r.jsx)(s.p,{children:"The payload."}),"\n",(0,r.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L89",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:89"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"key-1",children:"key"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"get"})," ",(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"key"}),"(): ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Event key."}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The event key string."}),"\n",(0,r.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L50",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:50"})})]})}s.default=(0,c.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-event/classes/EventAsync.mdx",route:"/reference/rockets/nestjs-event/classes/EventAsync",title:"Class: abstract EventAsync<P, R>",headings:i},pageNextRoute:"/reference/rockets/nestjs-event/classes/EventAsync"})}},function(e){e.O(0,[2673,2888,9774,179],function(){return e(e.s=71565)}),_N_E=e.O()}]);