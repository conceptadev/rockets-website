(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31600],{71074:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-logger/classes/LoggerRequestInterceptor",function(){return s(37137)}])},37137:function(e,r,s){"use strict";s.r(r),s.d(r,{__toc:function(){return c}});var n=s(85893),d=s(92673),t=s(82643);let c=[{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new LoggerRequestInterceptor()",id:"new-loggerrequestinterceptor"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Defined in",id:"defined-in"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"intercept()",id:"intercept"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Defined in",id:"defined-in-1"},{depth:3,value:"responseError()",id:"responseerror"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Defined in",id:"defined-in-2"},{depth:3,value:"responseSuccess()",id:"responsesuccess"},{depth:4,value:"Parameters",id:"parameters-3"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Defined in",id:"defined-in-3"}];function i(e){let r=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",blockquote:"blockquote",strong:"strong",a:"a",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr"},(0,t.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:"Class: LoggerRequestInterceptor"}),"\n",(0,n.jsx)(r.p,{children:"The Interceptor to log message for all requests and response errors."}),"\n",(0,n.jsx)(r.h2,{id:"implements",children:"Implements"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"NestInterceptor"}),"<",(0,n.jsx)(r.code,{children:"Response"}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"new-loggerrequestinterceptor",children:"new LoggerRequestInterceptor()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"new LoggerRequestInterceptor"}),"(",(0,n.jsx)(r.code,{children:"loggerService"}),"): ",(0,n.jsx)(r.a,{href:"LoggerRequestInterceptor",children:(0,n.jsx)(r.code,{children:"LoggerRequestInterceptor"})})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Constructor"}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"loggerService"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"LoggerService",children:(0,n.jsx)(r.code,{children:"LoggerService"})})}),(0,n.jsx)(r.td,{children:"The logger service that implements ConsoleLogger"})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"LoggerRequestInterceptor",children:(0,n.jsx)(r.code,{children:"LoggerRequestInterceptor"})})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-logger/src/logger-request.interceptor.ts#L29",children:"packages/nestjs-logger/src/logger-request.interceptor.ts:29"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"intercept",children:"intercept()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"intercept"}),"(",(0,n.jsx)(r.code,{children:"context"}),", ",(0,n.jsx)(r.code,{children:"next"}),"): ",(0,n.jsx)(r.code,{children:"Observable"}),"<",(0,n.jsx)(r.code,{children:"Response"}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Method to implement a custom intercept"}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"context"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ExecutionContext"})}),(0,n.jsx)(r.td,{children:"Execution context"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"next"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"CallHandler"}),"<",(0,n.jsx)(r.code,{children:"any"}),">"]}),(0,n.jsx)(r.td,{children:"Call handler"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Observable"}),"<",(0,n.jsx)(r.code,{children:"Response"}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"NestInterceptor.intercept"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-logger/src/logger-request.interceptor.ts#L37",children:"packages/nestjs-logger/src/logger-request.interceptor.ts:37"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"responseerror",children:"responseError()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"responseError"}),"(",(0,n.jsx)(r.code,{children:"req"}),", ",(0,n.jsx)(r.code,{children:"res"}),", ",(0,n.jsx)(r.code,{children:"startDate"}),", ",(0,n.jsx)(r.code,{children:"error"}),"): ",(0,n.jsx)(r.code,{children:"Observable"}),"<",(0,n.jsx)(r.code,{children:"never"}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Format exception error"}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"req"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"FastifyRequest"}),"<",(0,n.jsx)(r.code,{children:"RouteGenericInterface"}),", ",(0,n.jsx)(r.code,{children:"Server"}),", ",(0,n.jsx)(r.code,{children:"IncomingMessage"}),", ",(0,n.jsx)(r.code,{children:"unknown"}),", ",(0,n.jsx)(r.code,{children:"FastifyLoggerInstance"}),">"]}),(0,n.jsx)(r.td,{children:"Request"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"res"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Response"})}),(0,n.jsx)(r.td,{children:"Response"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"startDate"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Date"})}),(0,n.jsx)(r.td,{children:"Start date"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Error"})}),(0,n.jsx)(r.td,{children:"Error instance"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Observable"}),"<",(0,n.jsx)(r.code,{children:"never"}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-logger/src/logger-request.interceptor.ts#L86",children:"packages/nestjs-logger/src/logger-request.interceptor.ts:86"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"responsesuccess",children:"responseSuccess()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"responseSuccess"}),"(",(0,n.jsx)(r.code,{children:"req"}),", ",(0,n.jsx)(r.code,{children:"res"}),", ",(0,n.jsx)(r.code,{children:"startDate"}),"): ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Method to log response success"}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"req"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"FastifyRequest"}),"<",(0,n.jsx)(r.code,{children:"RouteGenericInterface"}),", ",(0,n.jsx)(r.code,{children:"Server"}),", ",(0,n.jsx)(r.code,{children:"IncomingMessage"}),", ",(0,n.jsx)(r.code,{children:"unknown"}),", ",(0,n.jsx)(r.code,{children:"FastifyLoggerInstance"}),">"]}),(0,n.jsx)(r.td,{children:"Request"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"res"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Response"})}),(0,n.jsx)(r.td,{children:"Response"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"startDate"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Date"})}),(0,n.jsx)(r.td,{children:"the date for the message"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-logger/src/logger-request.interceptor.ts#L66",children:"packages/nestjs-logger/src/logger-request.interceptor.ts:66"})})]})}r.default=(0,d.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.a)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-logger/classes/LoggerRequestInterceptor.mdx",route:"/reference/rockets/nestjs-logger/classes/LoggerRequestInterceptor",title:"Class: LoggerRequestInterceptor",headings:c},pageNextRoute:"/reference/rockets/nestjs-logger/classes/LoggerRequestInterceptor"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=71074)}),_N_E=e.O()}]);