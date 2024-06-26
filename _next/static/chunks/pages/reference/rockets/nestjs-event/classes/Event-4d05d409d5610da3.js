(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7405],{12358:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-event/classes/Event",function(){return n(89144)}])},89144:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return l}});var r=n(85893),t=n(92673),c=n(82643);let l=[{depth:3,value:"Example",id:"example"},{depth:2,value:"Extended by",id:"extended-by"},{depth:2,value:"Type parameters",id:"type-parameters"},{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new Event()",id:"new-event"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"_payload",id:"_payload"},{depth:4,value:"Source",id:"source-1"},{depth:3,value:"expectsReturnOf",id:"expectsreturnof"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Source",id:"source-2"},{depth:2,value:"Accessors",id:"accessors"},{depth:3,value:"key",id:"key"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Source",id:"source-3"},{depth:3,value:"payload",id:"payload"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Source",id:"source-4"},{depth:3,value:"key",id:"key-1"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Source",id:"source-5"}];function i(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",code:"code",h3:"h3",pre:"pre",span:"span",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",h4:"h4"},(0,c.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../READMEmdx",children:(0,r.jsx)(s.strong,{children:"@concepta/nestjs-event"})})," • ",(0,r.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../../packages",children:"Packages Example"})," / ",(0,r.jsx)(s.a,{href:"../READMEmdx",children:"@concepta/nestjs-event"})," / Event"]}),"\n",(0,r.jsxs)(s.h1,{children:["Class: ",(0,r.jsx)(s.code,{children:"abstract"})," Event<P, R>"]}),"\n",(0,r.jsx)(s.p,{children:"Abstract event class."}),"\n",(0,r.jsxs)(s.p,{children:["To create a custom event, extend the ",(0,r.jsx)(s.a,{href:"Event",children:"Event"})," class."]}),"\n",(0,r.jsxs)(s.p,{children:["You must implement one of the ",(0,r.jsx)(s.a,{href:"../interfaces/EventSyncInterface",children:"EventSyncInterface"})," or ",(0,r.jsx)(s.a,{href:"../interfaces/EventAsyncInterface",children:"EventAsyncInterface"}),"\ninterfaces."]}),"\n",(0,r.jsxs)(s.p,{children:["There are additional abstract classes available which have implemented the\nsync and async event types for your convenience. They are ",(0,r.jsx)(s.a,{href:"EventSync",children:"EventSync"}),"\nand ",(0,r.jsx)(s.a,{href:"EventAsync",children:"EventAsync"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// event payload type"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {id"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// event class"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Event"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"implements"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"EventSyncInterface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyPayloadType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// create an event"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"myEvent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"MyEvent"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({id"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1234"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" active"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})]})]})}),"\n",(0,r.jsx)(s.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"EventSync",children:(0,r.jsx)(s.code,{children:"EventSync"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"EventAsync",children:(0,r.jsx)(s.code,{children:"EventAsync"})})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,r.jsxs)(s.p,{children:["• ",(0,r.jsx)(s.strong,{children:"P"})," = ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n",(0,r.jsx)(s.p,{children:"Event Payload"}),"\n",(0,r.jsxs)(s.p,{children:["• ",(0,r.jsx)(s.strong,{children:"R"})," = ",(0,r.jsx)(s.code,{children:"P"})]}),"\n",(0,r.jsx)(s.p,{children:"Event return payload, defaults to Event Payload"}),"\n",(0,r.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../interfaces/EventInterface",children:(0,r.jsx)(s.code,{children:"EventInterface"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-event",children:"new Event()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new Event"}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">(",(0,r.jsx)(s.code,{children:"payload"}),"?): ",(0,r.jsx)(s.a,{href:"Event",children:(0,r.jsx)(s.code,{children:"Event"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Constructor"}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.p,{children:["• ",(0,r.jsx)(s.strong,{children:"payload?"}),": ",(0,r.jsx)(s.code,{children:"P"})]}),"\n",(0,r.jsx)(s.p,{children:"Payload to emit when the event is dispatched."}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"Event",children:(0,r.jsx)(s.code,{children:"Event"})}),"<",(0,r.jsx)(s.code,{children:"P"}),", ",(0,r.jsx)(s.code,{children:"R"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L73",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:73"})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"_payload",children:"_payload"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"_payload"}),": ",(0,r.jsx)(s.code,{children:"P"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The payload that was passed to the constructor."}),"\n",(0,r.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L66",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:66"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"expectsreturnof",children:"expectsReturnOf"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"expectsReturnOf"}),": ",(0,r.jsx)(s.code,{children:"R"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Expects return of payload"}),"\n",(0,r.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../interfaces/EventInterface",children:(0,r.jsx)(s.code,{children:"EventInterface"})}),".",(0,r.jsx)(s.a,{href:"../interfaces/EventInterface#expectsreturnof",children:(0,r.jsx)(s.code,{children:"expectsReturnOf"})})]}),"\n",(0,r.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L43",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:43"})}),"\n",(0,r.jsx)(s.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(s.h3,{id:"key",children:"key"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"get"})," ",(0,r.jsx)(s.strong,{children:"key"}),"(): ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Event key."}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The event key string."}),"\n",(0,r.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L59",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:59"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"payload",children:"payload"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"get"})," ",(0,r.jsx)(s.strong,{children:"payload"}),"(): ",(0,r.jsx)(s.code,{children:"P"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Returns payload that was passed to the Event constructor."}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"P"})}),"\n",(0,r.jsx)(s.p,{children:"The payload."}),"\n",(0,r.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L89",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:89"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"key-1",children:"key"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"get"})," ",(0,r.jsx)(s.code,{children:"static"})," ",(0,r.jsx)(s.strong,{children:"key"}),"(): ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Event key."}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The event key string."}),"\n",(0,r.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-event/src/events/event.ts#L50",children:".tmp/repos/rockets/packages/nestjs-event/src/events/event.ts:50"})})]})}s.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-event/classes/Event.mdx",route:"/reference/rockets/nestjs-event/classes/Event",title:"Class: abstract Event<P, R>",headings:l},pageNextRoute:"/reference/rockets/nestjs-event/classes/Event"})}},function(e){e.O(0,[2673,2888,9774,179],function(){return e(e.s=12358)}),_N_E=e.O()}]);