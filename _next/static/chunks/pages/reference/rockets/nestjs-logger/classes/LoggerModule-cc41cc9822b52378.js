(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3844],{8591:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-logger/classes/LoggerModule",function(){return r(29065)}])},29065:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return c}});var n=r(85893),o=r(92673),l=r(82643);let c=[{depth:3,value:"Example",id:"example"},{depth:2,value:"Extends",id:"extends"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new LoggerModule()",id:"new-loggermodule"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Inherited from",id:"inherited-from"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"forFeature()",id:"forfeature"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Source",id:"source-1"},{depth:3,value:"forRoot()",id:"forroot"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Source",id:"source-2"},{depth:3,value:"forRootAsync()",id:"forrootasync"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Source",id:"source-3"},{depth:3,value:"register()",id:"register"},{depth:4,value:"Parameters",id:"parameters-3"},{depth:4,value:"Returns",id:"returns-4"},{depth:4,value:"Overrides",id:"overrides"},{depth:4,value:"Source",id:"source-4"},{depth:3,value:"registerAsync()",id:"registerasync"},{depth:4,value:"Parameters",id:"parameters-4"},{depth:4,value:"Returns",id:"returns-5"},{depth:4,value:"Overrides",id:"overrides-1"},{depth:4,value:"Source",id:"source-5"}];function i(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h3:"h3",pre:"pre",code:"code",span:"span",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",h4:"h4"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../READMEmdx",children:(0,n.jsx)(s.strong,{children:"@concepta/nestjs-logger"})})," • ",(0,n.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../packages",children:"Packages Example"})," / ",(0,n.jsx)(s.a,{href:"../READMEmdx",children:"@concepta/nestjs-logger"})," / LoggerModule"]}),"\n",(0,n.jsx)(s.h1,{children:"Class: LoggerModule"}),"\n",(0,n.jsx)(s.p,{children:"Logger Module imports all configuration needed for logger and sentry\nWith classes for request interceptor and Exceptions filters\nwhere will automatically log for any request or unhandled exceptions."}),"\n",(0,n.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// app.module.ts"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LoggerModule"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".forRoot"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({logLevel"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'log'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'error'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]})"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AppModule"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// main.ts"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// create the app"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NestFactory"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".create"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(AppModule);"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// custom logger"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"customLoggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(LoggerService);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"customLoggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".addTransport"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(LoggerSentryTransport));"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// inform app of the custom logger"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".useLogger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(customLoggerService);"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// test.class.ts"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Injectable"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"TestClass"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Inject Logger Service"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"constructor"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(@"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Inject"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(LoggerService) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"private"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" loggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"LoggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {}"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"doSomething"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"loggerService"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Did something'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// my.util.ts"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"myHelper"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"logger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Logger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// <-- using the global logger"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"logger"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'My helper ran'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"); "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// <-- LoggerService.log will be called"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"LoggerModuleClass"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-loggermodule",children:"new LoggerModule()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"new LoggerModule"}),"(): ",(0,n.jsx)(s.a,{href:"LoggerModule",children:(0,n.jsx)(s.code,{children:"LoggerModule"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"LoggerModule",children:(0,n.jsx)(s.code,{children:"LoggerModule"})})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"LoggerModuleClass.constructor"})}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@nestjs/common/module-utils/interfaces/configurable-module-cls.interface.d.ts:12"}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"forfeature",children:"forFeature()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"forFeature"}),"(",(0,n.jsx)(s.code,{children:"options"}),"): ",(0,n.jsx)(s.code,{children:"DynamicModule"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"options"}),": ",(0,n.jsx)(s.code,{children:"LoggerOptions"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DynamicModule"})}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-logger/src/logger.module.ts#L76",children:"packages/nestjs-logger/src/logger.module.ts:76"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"forroot",children:"forRoot()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"forRoot"}),"(",(0,n.jsx)(s.code,{children:"options"}),"): ",(0,n.jsx)(s.code,{children:"DynamicModule"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"options"}),": ",(0,n.jsx)(s.code,{children:"LoggerOptions"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DynamicModule"})}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-logger/src/logger.module.ts#L68",children:"packages/nestjs-logger/src/logger.module.ts:68"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"forrootasync",children:"forRootAsync()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"forRootAsync"}),"(",(0,n.jsx)(s.code,{children:"options"}),"): ",(0,n.jsx)(s.code,{children:"DynamicModule"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"options"}),": ",(0,n.jsx)(s.code,{children:"LoggerAsyncOptions"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DynamicModule"})}),"\n",(0,n.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-logger/src/logger.module.ts#L72",children:"packages/nestjs-logger/src/logger.module.ts:72"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"register",children:"register()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"register"}),"(",(0,n.jsx)(s.code,{children:"options"}),"): ",(0,n.jsx)(s.code,{children:"DynamicModule"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"options"}),": ",(0,n.jsx)(s.code,{children:"LoggerOptions"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DynamicModule"})}),"\n",(0,n.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"LoggerModuleClass.register"})}),"\n",(0,n.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-logger/src/logger.module.ts#L60",children:"packages/nestjs-logger/src/logger.module.ts:60"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"registerasync",children:"registerAsync()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"static"})," ",(0,n.jsx)(s.strong,{children:"registerAsync"}),"(",(0,n.jsx)(s.code,{children:"options"}),"): ",(0,n.jsx)(s.code,{children:"DynamicModule"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"options"}),": ",(0,n.jsx)(s.code,{children:"LoggerAsyncOptions"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DynamicModule"})}),"\n",(0,n.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"LoggerModuleClass.registerAsync"})}),"\n",(0,n.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-logger/src/logger.module.ts#L64",children:"packages/nestjs-logger/src/logger.module.ts:64"})})]})}s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-logger/classes/LoggerModule.mdx",route:"/reference/rockets/nestjs-logger/classes/LoggerModule",title:"Class: LoggerModule",headings:c},pageNextRoute:"/reference/rockets/nestjs-logger/classes/LoggerModule"})}},function(e){e.O(0,[2673,2888,9774,179],function(){return e(e.s=8591)}),_N_E=e.O()}]);