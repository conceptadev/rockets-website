(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26811],{91149:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-exception/README",function(){return n(27229)}])},27229:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return t}});var o=n(85893),l=n(92673),r=n(82643);let t=[{depth:2,value:"Project",id:"project"},{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Binding The Filer",id:"binding-the-filer"},{depth:3,value:"Class Decorator",id:"class-decorator"},{depth:3,value:"Method Decorator",id:"method-decorator"},{depth:3,value:"Global Filter",id:"global-filter"},{depth:2,value:"TODO",id:"todo"}];function i(e){let s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",img:"img",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li"},(0,r.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"Rockets NestJS Exception"}),"\n",(0,o.jsx)(s.p,{children:"Provide exception handling/normalization and error code mapping."}),"\n",(0,o.jsxs)(s.p,{children:["For more details on the exception filters pattern, please refer to the official\nNestJS ",(0,o.jsx)(s.a,{href:"https://docs.nestjs.com/exception-filters",children:"Exception Filters"})," documentation."]}),"\n",(0,o.jsx)(s.h2,{id:"project",children:"Project"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/@concepta/nestjs-exception",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/npm/v/@concepta/nestjs-exception",alt:"NPM Latest"})}),"\n",(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/@concepta/nestjs-exception",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/npm/dw/@conceptadev/nestjs-exception",alt:"NPM Downloads"})}),"\n",(0,o.jsx)(s.a,{href:"https://github.com/conceptadev/rockets",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/github/last-commit/conceptadev/rockets?logo=github",alt:"GH Last Commit"})}),"\n",(0,o.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/graphs/contributors",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/github/contributors/conceptadev/rockets?logo=github",alt:"GH Contrib"})}),"\n",(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/@nestjs/common",children:(0,o.jsx)(s.img,{src:"https://img.shields.io/github/package-json/dependency-version/conceptadev/rockets/@nestjs/common?label=NestJS&logo=nestjs&filename=packages%2Fnestjs-core%2Fpackage.json",alt:"NestJS Dep"})})]}),"\n",(0,o.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"yarn add @concepta/nestjs-exception"})}),"\n",(0,o.jsx)(s.h2,{id:"binding-the-filer",children:"Binding The Filer"}),"\n",(0,o.jsx)(s.p,{children:"You can bind the filter to classes, methods and globally."}),"\n",(0,o.jsx)(s.h3,{id:"class-decorator",children:"Class Decorator"}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ExceptionsFilter } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-exception'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"UseFilters"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExceptionsFilter"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PhotoController"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(s.h3,{id:"method-decorator",children:"Method Decorator"}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ExceptionsFilter } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-exception'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Post"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"UseFilters"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExceptionsFilter"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"async "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"create"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(@"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Body"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() createPhotoDto: CreatePhotoDto) {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"throw"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ForbiddenException"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(s.h3,{id:"global-filter",children:"Global Filter"}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { ExceptionsFilter } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/nestjs-exception'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NestFactory"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".create"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(AppModule);"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".useGlobalFilters"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ExceptionsFilter"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"());"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"app"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".listen"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3000"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]})]})}),"\n",(0,o.jsx)(s.h2,{id:"todo",children:"TODO"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Define interface for exception filter response payload."}),"\n"]})]})}s.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.a)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-exception/README.mdx",route:"/reference/rockets/nestjs-exception/README",title:"Rockets NestJS Exception",headings:t},pageNextRoute:"/reference/rockets/nestjs-exception/README"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=91149)}),_N_E=e.O()}]);