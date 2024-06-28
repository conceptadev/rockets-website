(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15992],{74570:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets-react/react-auth-provider/README",function(){return r(10206)}])},10206:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return l}});var o=r(85893),n=r(92673),i=r(82643);let l=[{depth:2,value:"IMPORTANT",id:"important"},{depth:2,value:"Here is how it works",id:"here-is-how-it-works"},{depth:3,value:"This package will expose the following",id:"this-package-will-expose-the-following"},{depth:3,value:"Make sure you configured correctly the DataProvider before using the auth provider",id:"make-sure-you-configured-correctly-the-dataprovider-before-using-the-auth-provider"},{depth:2,value:"Examples",id:"examples"},{depth:3,value:"Simple User Login",id:"simple-user-login"}];function t(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h2:"h2",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"READMEmdx",children:(0,o.jsx)(s.strong,{children:"@concepta/react-auth-provider"})})," • ",(0,o.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"../packages",children:"Rockets React"})," / @concepta/react-auth-provider"]}),"\n",(0,o.jsx)(s.h1,{children:"@concepta/react-auth-provider"}),"\n",(0,o.jsx)(s.p,{children:"Rockets Auth package to handle all authentication needs of your application."}),"\n",(0,o.jsx)(s.h2,{id:"important",children:"IMPORTANT"}),"\n",(0,o.jsx)(s.p,{children:"When building your Auth system, you need to remember these!"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"This module only helps you to handle auth on your application. There is no magic, you are still responsible for\nhaving a SignIn/Signup screen and maitaing the state and routes of your application."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"here-is-how-it-works",children:"Here is how it works"}),"\n",(0,o.jsx)(s.h3,{id:"this-package-will-expose-the-following",children:"This package will expose the following"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"A provider and a hook to access auth information like user data, tokens"}),"\n",(0,o.jsx)(s.li,{children:"Methods to make the Login and Logout funcionalities"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"make-sure-you-configured-correctly-the-dataprovider-before-using-the-auth-provider",children:"Make sure you configured correctly the DataProvider before using the auth provider"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Add your baseUrl with the <ClientProvider> or via ENV file with a variable named NEXT_PUBLIC_API_URL."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(s.p,{children:"These are very rough examples. We intend to improve them ASAP."}),"\n",(0,o.jsx)(s.h3,{id:"simple-user-login",children:"Simple User Login"}),"\n",(0,o.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { AuthProvider"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" useAuth } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@concepta/auth-provider'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AppWrapper"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"doLogin"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"user"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useAuth"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClickSignIn"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (user"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" password"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"doLogin"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ email"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" user"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" password });"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AuthProvider"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      {user ? ("})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <div>LOGGED IN!</div>"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ) : ("})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <SimpleLoginForm onClickSignIn"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{onClickSignIn} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/>"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      )}"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"</"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"AuthProvider"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})})]})}s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/reference/rockets-react/react-auth-provider/README.mdx",route:"/reference/rockets-react/react-auth-provider/README",title:"@concepta/react-auth-provider",headings:l},pageNextRoute:"/reference/rockets-react/react-auth-provider/README"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=74570)}),_N_E=e.O()}]);