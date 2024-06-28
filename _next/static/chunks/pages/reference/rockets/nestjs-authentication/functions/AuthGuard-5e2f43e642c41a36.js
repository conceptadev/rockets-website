(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7917],{40281:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-authentication/functions/AuthGuard",function(){return n(22387)}])},22387:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return i}});var r=n(85893),t=n(92673),c=n(82643);let i=[{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Returns",id:"returns"},{depth:2,value:"Source",id:"source"}];function o(s){let e=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",blockquote:"blockquote",code:"code",em:"em",pre:"pre",span:"span",h2:"h2"},(0,c.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"../READMEmdx",children:(0,r.jsx)(e.strong,{children:"@concepta/nestjs-authentication"})})," • ",(0,r.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"../../packages",children:"Rockets"})," / ",(0,r.jsx)(e.a,{href:"../READMEmdx",children:"@concepta/nestjs-authentication"})," / AuthGuard"]}),"\n",(0,r.jsx)(e.h1,{children:"Function: AuthGuard()"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"AuthGuard"}),"(",(0,r.jsx)(e.code,{children:"strategyName"}),", ",(0,r.jsx)(e.code,{children:"options"}),"): ",(0,r.jsx)(e.em,{children:"typeof"})," ",(0,r.jsx)(e.a,{href:"AuthGuard",children:(0,r.jsx)(e.code,{children:"AuthGuard"})})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"A Guard to use passport for express or fastify"}),"\n",(0,r.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"UseGuards"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"AuthGuard"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'local'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"))"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Post"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'login'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"async "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"authenticateWithGuard"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  @"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"AuthUser"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() user: CredentialLookupInterface"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"): "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"AuthenticationResponseInterface"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  const token "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"this"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"issueTokenService"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".issueAccessToken"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"user"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".username);"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  return {"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"user"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"token"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(e.p,{children:["• ",(0,r.jsx)(e.strong,{children:"strategyName"}),": ",(0,r.jsx)(e.code,{children:"string"})]}),"\n",(0,r.jsxs)(e.p,{children:["• ",(0,r.jsx)(e.strong,{children:"options"}),": ",(0,r.jsx)(e.a,{href:"../interfaces/AuthGuardOptions",children:(0,r.jsx)(e.code,{children:"AuthGuardOptions"})}),"= ",(0,r.jsx)(e.code,{children:"undefined"})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"typeof"})," ",(0,r.jsx)(e.a,{href:"AuthGuard",children:(0,r.jsx)(e.code,{children:"AuthGuard"})})]}),"\n",(0,r.jsx)(e.h2,{id:"source",children:"Source"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-authentication/src/guards/auth.guard.ts#L36",children:"packages/nestjs-authentication/src/guards/auth.guard.ts:36"})})]})}e.default=(0,t.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(o,{...s})}):o(s)},pageOpts:{filePath:"pages/reference/rockets/nestjs-authentication/functions/AuthGuard.mdx",route:"/reference/rockets/nestjs-authentication/functions/AuthGuard",title:"Function: AuthGuard()",headings:i},pageNextRoute:"/reference/rockets/nestjs-authentication/functions/AuthGuard"})}},function(s){s.O(0,[92673,92888,49774,40179],function(){return s(s.s=40281)}),_N_E=s.O()}]);