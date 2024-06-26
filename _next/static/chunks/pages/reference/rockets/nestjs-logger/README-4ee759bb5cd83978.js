(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2360],{86860:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-logger/README",function(){return n(20101)}])},20101:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return i}});var r=n(85893),o=n(92673),l=n(82643);let i=[{depth:2,value:"Project",id:"project"},{depth:2,value:"Overview",id:"overview"},{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Registering",id:"registering"},{depth:3,value:"Defaults (.env)",id:"defaults-env"},{depth:3,value:"Synchronous Registration",id:"synchronous-registration"},{depth:3,value:"Aynchronous Registration",id:"aynchronous-registration"},{depth:3,value:"Transports",id:"transports"},{depth:2,value:"Using LoggerService",id:"using-loggerservice"},{depth:3,value:"Setup Globally",id:"setup-globally"},{depth:3,value:"Injection",id:"injection"},{depth:3,value:"Manual Instantiation",id:"manual-instantiation"}];function t(s){let e=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h2:"h2",img:"img",code:"code",blockquote:"blockquote",h3:"h3",pre:"pre",span:"span"},(0,l.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"READMEmdx",children:(0,r.jsx)(e.strong,{children:"@concepta/nestjs-logger"})})," • ",(0,r.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"../packages",children:"Packages Example"})," / @concepta/nestjs-logger"]}),"\n",(0,r.jsx)(e.h1,{children:"Rockets NestJS Logger"}),"\n",(0,r.jsx)(e.p,{children:"This module is a drop-in replacement for the core NestJS logger that provides additonal support for pushing log data\nto one or multiple external log consumption providers."}),"\n",(0,r.jsx)(e.h2,{id:"project",children:"Project"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@concepta/nestjs-logger",children:(0,r.jsx)(e.img,{src:"https://img.shields.io/npm/v/@concepta/nestjs-logger",alt:"NPM Latest"})}),"\n",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@concepta/nestjs-logger",children:(0,r.jsx)(e.img,{src:"https://img.shields.io/npm/dw/@conceptadev/nestjs-logger",alt:"NPM Downloads"})}),"\n",(0,r.jsx)(e.a,{href:"https://github.com/conceptadev/rockets",children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/last-commit/conceptadev/rockets?logo=github",alt:"GH Last Commit"})}),"\n",(0,r.jsx)(e.a,{href:"https://github.com/conceptadev/rockets/graphs/contributors",children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/contributors/conceptadev/rockets?logo=github",alt:"GH Contrib"})}),"\n",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@nestjs/common",children:(0,r.jsx)(e.img,{src:"https://img.shields.io/github/package-json/dependency-version/conceptadev/rockets/@nestjs/common?label=NestJS&logo=nestjs&filename=packages%2Fnestjs-core%2Fpackage.json",alt:"NestJS Dep"})})]}),"\n",(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(e.p,{children:["This module wraps/extends the core NestJS ",(0,r.jsx)(e.code,{children:"Logger"})," and adds a powerful external transports plugin interface."]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["See the NestJS ",(0,r.jsx)(e.a,{href:"https://docs.nestjs.com/techniques/logger",children:"Logger"})," documentation\nfor more details on how logging is implemented in NestJS."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"yarn add @concepta/nestjs-logger"})}),"\n",(0,r.jsx)(e.h2,{id:"registering",children:"Registering"}),"\n",(0,r.jsx)(e.p,{children:"To start using the Logger Module, import the LoggerModule into your app."}),"\n",(0,r.jsx)(e.h3,{id:"defaults-env",children:"Defaults (.env)"}),"\n",(0,r.jsx)(e.p,{children:"To register using the default configuration:"}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LoggerModule"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]})]})}),"\n",(0,r.jsxs)(e.p,{children:["To use the default configuration, you need todefine the environments variables.\nOne of the ways you can do that is using ",(0,r.jsx)(e.code,{children:".env"})," file"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"zsh","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"zsh","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"//"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:".env"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"file"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"LOG_LEVEL"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"log,error"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"TRANSPORT_LOG_LEVEL"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"error,warn"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"SENTRY_DSN"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"{your_sentry_dsn}"'})]})]})}),"\n",(0,r.jsx)(e.h3,{id:"synchronous-registration",children:"Synchronous Registration"}),"\n",(0,r.jsx)(e.p,{children:"To register by direct configuration:"}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { LoggerModule } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-logger'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LoggerModule"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]})]})}),"\n",(0,r.jsx)(e.h3,{id:"aynchronous-registration",children:"Aynchronous Registration"}),"\n",(0,r.jsx)(e.p,{children:"To register by direct configuration:"}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { LoggerModule } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-logger'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LoggerModule"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".registerAsync"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      imports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"ConfigModule"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".forFeature"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(myConfig)]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      inject"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"myConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"KEY"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useFactory"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        appConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MyAppOptionsInterface"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      )"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"LoggerOptionsInterface"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"appConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".logger"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"export "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]})]})}),"\n",(0,r.jsx)(e.h3,{id:"transports",children:"Transports"}),"\n",(0,r.jsxs)(e.p,{children:["If you define the transport to be used, it means that any method that you call from ",(0,r.jsx)(e.code,{children:"LoggerService"}),"\nwill also send the details of the log to the transport defined\n(at the moment we are only working with Sentry as external transport)."]}),"\n",(0,r.jsx)(e.p,{children:"You can easily create your own custom transports by developing a class that meets the interface."}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { LoggerModule"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" LoggerSentryTransport } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-logger'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LoggerModule"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".register"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      transports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [LoggerSentryTransport]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"using-loggerservice",children:"Using LoggerService"}),"\n",(0,r.jsxs)(e.p,{children:["After importing the module with the proper configurations, you are all set to start using the ",(0,r.jsx)(e.code,{children:"LoggerService"})," as an injected service."]}),"\n",(0,r.jsx)(e.h3,{id:"setup-globally",children:"Setup Globally"}),"\n",(0,r.jsx)(e.p,{children:"It is a good practice to also inform nest to use the new Logger internally overwrite the default Logger in your bootstrap."}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { LoggerService } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-logger'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NestFactory"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".create"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(AppModule);"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// get reference of LoggerService From LoggerModule"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"customLoggerService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(LoggerService);"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// this is to inform that this logger will be used globally"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// and it will be used once you create a new Logger()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".useLogger"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(customLoggerService);"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".listen"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3000"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]})]})}),"\n",(0,r.jsxs)(e.p,{children:["Now any time you call a method from ",(0,r.jsx)(e.code,{children:"Logger"})," class from ",(0,r.jsx)(e.code,{children:"@nestjs/common"})," will be calling the same\nmethod from ",(0,r.jsx)(e.code,{children:"LoggerService"})," from ",(0,r.jsx)(e.code,{children:"@concepta/nestjs-logger"})]}),"\n",(0,r.jsx)(e.h3,{id:"injection",children:"Injection"}),"\n",(0,r.jsxs)(e.p,{children:["You should be able to use the ",(0,r.jsx)(e.code,{children:"LoggerService"})," by injecting the class, or creating a new instance of Logger."]}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Logger"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Injectable"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Inject } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@nestjs/common'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { LoggerService } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-logger'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Injectable"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MyService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"constructor"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Inject"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(LoggerService) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"private"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" loggerService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"LoggerService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {}"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"doSomething"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"loggerService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Doing something...'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.h3,{id:"manual-instantiation",children:"Manual Instantiation"}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Logger"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Injectable } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@nestjs/common'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Injectable"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MyService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"private"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"readonly"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" logger "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Logger"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MyService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name);"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"doSomething"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"logger"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Doing something...'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/reference/rockets/nestjs-logger/README.mdx",route:"/reference/rockets/nestjs-logger/README",title:"Rockets NestJS Logger",headings:i},pageNextRoute:"/reference/rockets/nestjs-logger/README"})}},function(s){s.O(0,[2673,2888,9774,179],function(){return s(s.s=86860)}),_N_E=s.O()}]);