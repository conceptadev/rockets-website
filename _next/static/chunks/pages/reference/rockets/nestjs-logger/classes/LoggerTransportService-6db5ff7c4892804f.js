(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46948],{22477:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-logger/classes/LoggerTransportService",function(){return r(82704)}])},82704:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return l}});var n=r(85893),o=r(92673),t=r(82643);let l=[{depth:2,value:"Example",id:"example"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new LoggerTransportService()",id:"new-loggertransportservice"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"logLevels",id:"loglevels"},{depth:4,value:"Source",id:"source-1"},{depth:3,value:"loggerTransports",id:"loggertransports"},{depth:4,value:"Source",id:"source-2"},{depth:3,value:"settings",id:"settings"},{depth:4,value:"Source",id:"source-3"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"addTransport()",id:"addtransport"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Source",id:"source-4"},{depth:3,value:"log()",id:"log"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Source",id:"source-5"}];function c(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3",blockquote:"blockquote",h4:"h4"},(0,t.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../READMEmdx",children:(0,n.jsx)(s.strong,{children:"@concepta/nestjs-logger"})})," • ",(0,n.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../packages",children:"Rockets"})," / ",(0,n.jsx)(s.a,{href:"../READMEmdx",children:"@concepta/nestjs-logger"})," / LoggerTransportService"]}),"\n",(0,n.jsx)(s.h1,{children:"Class: LoggerTransportService"}),"\n",(0,n.jsx)(s.p,{children:"A transport service that will load all third party transport\nthat will be used to log messages to external"}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TestTransport"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"implements"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"LoggerTransportInterface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// forward message to transport"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NestFactory"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".create"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(AppModule"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  logger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"loggerConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"().logLevel"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"customLoggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(LoggerService);"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"testTransport"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TestTransport"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"customLoggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".addTransport"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(testTransport);"})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-loggertransportservice",children:"new LoggerTransportService()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"new LoggerTransportService"}),"(",(0,n.jsx)(s.code,{children:"settings"}),"): ",(0,n.jsx)(s.a,{href:"LoggerTransportService",children:(0,n.jsx)(s.code,{children:"LoggerTransportService"})})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Constructor"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"settings"}),": ",(0,n.jsx)(s.a,{href:"../interfaces/LoggerSettingsInterface",children:(0,n.jsx)(s.code,{children:"LoggerSettingsInterface"})})]}),"\n",(0,n.jsx)(s.p,{children:"logger settings"}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"LoggerTransportService",children:(0,n.jsx)(s.code,{children:"LoggerTransportService"})})}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/375ae9ddd3ba0ddc9f74ebdf94ddba600e612865/packages/nestjs-logger/src/logger-transport.service.ts#L47",children:"packages/nestjs-logger/src/logger-transport.service.ts:47"})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"loglevels",children:"logLevels"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"private"})," ",(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"logLevels"}),": ",(0,n.jsx)(s.code,{children:"LogLevel"}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Log level definitions"}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/375ae9ddd3ba0ddc9f74ebdf94ddba600e612865/packages/nestjs-logger/src/logger-transport.service.ts#L35",children:"packages/nestjs-logger/src/logger-transport.service.ts:35"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"loggertransports",children:"loggerTransports"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"private"})," ",(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"loggerTransports"}),": ",(0,n.jsx)(s.code,{children:"LoggerTransportInterface"}),"[] = ",(0,n.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"External Logger transports"}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/375ae9ddd3ba0ddc9f74ebdf94ddba600e612865/packages/nestjs-logger/src/logger-transport.service.ts#L40",children:"packages/nestjs-logger/src/logger-transport.service.ts:40"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"settings",children:"settings"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"protected"})," ",(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"settings"}),": ",(0,n.jsx)(s.a,{href:"../interfaces/LoggerSettingsInterface",children:(0,n.jsx)(s.code,{children:"LoggerSettingsInterface"})})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"logger settings"}),"\n",(0,n.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/375ae9ddd3ba0ddc9f74ebdf94ddba600e612865/packages/nestjs-logger/src/logger-transport.service.ts#L49",children:"packages/nestjs-logger/src/logger-transport.service.ts:49"})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"addtransport",children:"addTransport()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"addTransport"}),"(",(0,n.jsx)(s.code,{children:"transport"}),"): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Method to add the transport that will be used"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"transport"}),": ",(0,n.jsx)(s.code,{children:"LoggerTransportInterface"})]}),"\n",(0,n.jsx)(s.p,{children:"Instance of a logger transport"}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/375ae9ddd3ba0ddc9f74ebdf94ddba600e612865/packages/nestjs-logger/src/logger-transport.service.ts#L61",children:"packages/nestjs-logger/src/logger-transport.service.ts:61"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"log",children:"log()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"log"}),"(",(0,n.jsx)(s.code,{children:"message"}),", ",(0,n.jsx)(s.code,{children:"logLevel"}),", ",(0,n.jsx)(s.code,{children:"error"}),"?): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Method to log message to the transport based on the log level"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"message"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"message"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"logLevel"}),": ",(0,n.jsx)(s.code,{children:"LogLevel"})]}),"\n",(0,n.jsx)(s.p,{children:"log level"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"error?"}),": ",(0,n.jsx)(s.code,{children:"Error"})]}),"\n",(0,n.jsx)(s.p,{children:"error"}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/375ae9ddd3ba0ddc9f74ebdf94ddba600e612865/packages/nestjs-logger/src/logger-transport.service.ts#L72",children:"packages/nestjs-logger/src/logger-transport.service.ts:72"})})]})}s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-logger/classes/LoggerTransportService.mdx",route:"/reference/rockets/nestjs-logger/classes/LoggerTransportService",title:"Class: LoggerTransportService",headings:l},pageNextRoute:"/reference/rockets/nestjs-logger/classes/LoggerTransportService"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=22477)}),_N_E=e.O()}]);