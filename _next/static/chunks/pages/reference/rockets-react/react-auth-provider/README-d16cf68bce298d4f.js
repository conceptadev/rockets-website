(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15992],{74570:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets-react/react-auth-provider/README",function(){return n(10206)}])},10206:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return l}});var r=n(85893),o=n(92673),i=n(82643);let l=[{depth:2,value:"Introduction",id:"introduction"},{depth:3,value:"Overview of the Package",id:"overview-of-the-package"},{depth:3,value:"Features",id:"features"},{depth:2,value:"Getting Started",id:"getting-started"},{depth:3,value:"Installation",id:"installation"},{depth:2,value:"Components",id:"components"},{depth:3,value:"AuthProvider",id:"authprovider"},{depth:4,value:"Props",id:"props"},{depth:4,value:"How to use it",id:"how-to-use-it"},{depth:3,value:"Success / Error Handling",id:"success--error-handling"},{depth:4,value:"Methods",id:"methods"},{depth:5,value:"doLogin",id:"dologin"},{depth:5,value:"doLogout",id:"dologout"},{depth:4,value:"State",id:"state"},{depth:5,value:"user",id:"user"},{depth:5,value:"setUser",id:"setuser"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",span:"span",blockquote:"blockquote",h4:"h4",strong:"strong",h5:"h5"},(0,i.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"@concepta/react-auth-provider"}),"\n",(0,r.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(e.h3,{id:"overview-of-the-package",children:"Overview of the Package"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@concepta/react-auth-provider"})," is a React library designed to simplify the authentication process, used together with ",(0,r.jsx)(e.code,{children:"@concepta/react-data-provider"}),". It provides an ",(0,r.jsx)(e.code,{children:"AuthProvider"})," component and related hooks to manage user authentication, including login, logout, and token management."]}),"\n",(0,r.jsx)(e.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Easy integration with existing React applications"}),"\n",(0,r.jsx)(e.li,{children:"Customizable authentication paths"}),"\n",(0,r.jsx)(e.li,{children:"Token management (access and refresh tokens)"}),"\n",(0,r.jsx)(e.li,{children:"Hooks for accessing authentication context"}),"\n",(0,r.jsx)(e.li,{children:"Support for custom success and error handlers"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(e.p,{children:["To install ",(0,r.jsx)(e.code,{children:"@concepta/react-auth-provider"}),", run the following command:"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@concepta/react-auth-provider"})]})})}),"\n",(0,r.jsx)(e.p,{children:"or with yarn:"}),"\n",(0,r.jsx)(e.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@concepta/react-auth-provider"})]})})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Ensure that @concepta/react-data-provider is properly configured before using the auth provider."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(e.h3,{id:"authprovider",children:"AuthProvider"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"AuthProvider"})," component is the core of the ",(0,r.jsx)(e.code,{children:"@concepta/react-auth-provider"})," package. It wraps your application and provides authentication context to its children."]}),"\n",(0,r.jsx)(e.h4,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"children"}),": The components that will have access to the authentication context."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"onSuccess"}),": (Optional) A callback function executed upon successful login. Receives the access token as an argument."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"onError"}),": (Optional) A callback function executed if an error occurs during login."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,r.jsx)(e.p,{children:"Wrap your app with the AuthProvider component"}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AuthProvider"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AuthProvider"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,r.jsx)(e.h3,{id:"success--error-handling",children:"Success / Error Handling"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Use the ",(0,r.jsx)(e.code,{children:"onSuccess"})," prop to handle successful login events:"]}),"\n",(0,r.jsxs)(e.li,{children:["Use the ",(0,r.jsx)(e.code,{children:"onError"})," prop to handle errors during the login process:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AuthProvider"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onSuccess"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{(data) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Logged in with accessToken and refreshToken:'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" data)"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onError"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{(error) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".error"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Login Error:'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" error)}"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AuthProvider"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,r.jsx)(e.h4,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(e.h5,{id:"dologin",children:(0,r.jsx)(e.code,{children:"doLogin"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Description"}),": Initiates the login process using the provided login data. The ",(0,r.jsx)(e.code,{children:"loginData"})," can be a ",(0,r.jsx)(e.code,{children:"LoginParams"})," object or any custom object."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"loginData"}),": An object containing optionals ",(0,r.jsx)(e.code,{children:"username"}),", ",(0,r.jsx)(e.code,{children:"password"}),", ",(0,r.jsx)(e.code,{children:"loginPath"}),", and any other custom key-value pairs."]}),"\n",(0,r.jsxs)(e.li,{children:["The ",(0,r.jsx)(e.code,{children:"loginPath"})," will be used to fire the request to this path instead of the default ",(0,r.jsx)(e.code,{children:"/auth/signin"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Example Usage"}),":"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"loginData"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { username"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'user'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" password"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pass'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" };"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"doLogin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(loginData);"})]})]})}),"\n",(0,r.jsx)(e.p,{children:"With custom parameters"}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CustomLogin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    secret"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    rememberMe"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"customLoginData"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'user@provider.com'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" secret"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pass'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" rememberMe"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" };"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"doLogin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(customLoginData);"})]})]})}),"\n",(0,r.jsxs)(e.p,{children:["You can specify a custom login path in the ",(0,r.jsx)(e.code,{children:"loginData"})," when calling ",(0,r.jsx)(e.code,{children:"doLogin"}),":"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"loginData"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  username"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'user'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  password"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pass'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  loginPath"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/custom-login'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"doLogin"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(loginData);"})]})]})}),"\n",(0,r.jsx)(e.h5,{id:"dologout",children:(0,r.jsx)(e.code,{children:"doLogout"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Description"}),": Clears the authentication tokens from local storage and performs logout actions."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"state",children:"State"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"isPending"})," (boolean): Status of the auth request."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"user"})," (object): Holds the user information."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"setUser"})," (object) => void: Function to update the user information."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"accessToken"})," (string): Stores the access token."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"refreshToken"})," (string): Stores the refresh token."]}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"user",children:(0,r.jsx)(e.code,{children:"user"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Description"}),": Holds the current user information. Initially, it may be ",(0,r.jsx)(e.code,{children:"undefined"})," until the user logs in."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Usage"}),": This state is used to store information about the authenticated user. It can be used in various parts of your application to display user-specific data or to conditionally render components based on the user's authentication status."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Accessing User Information:"})}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"user"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useAuth"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">{user "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">Welcome, {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"user"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".username}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"> "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">Please log in</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,r.jsx)(e.h5,{id:"setuser",children:(0,r.jsx)(e.code,{children:"setUser"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Description"}),": Function to update the ",(0,r.jsx)(e.code,{children:"user"})," state."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Usage"}),": This function is used to update the ",(0,r.jsx)(e.code,{children:"user"})," state with new information, typically after a successful login or when fetching user details from a backend service."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Setting User Information After Login:"})}),"\n",(0,r.jsxs)(e.p,{children:["In the ",(0,r.jsx)(e.code,{children:"onSuccess"})," callback, you can set the user information:"]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onSuccess"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (accessToken) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Fetch user information from the backend using the access token"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fetchUserDetails"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(accessToken)"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((userDetails) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setUser"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(userDetails);"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Usage in AuthProvider"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AuthProvider"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onSuccess"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{onSuccess}>"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"AuthProvider"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]})]})})]})}e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/reference/rockets-react/react-auth-provider/README.mdx",route:"/reference/rockets-react/react-auth-provider/README",title:"@concepta/react-auth-provider",headings:l},pageNextRoute:"/reference/rockets-react/react-auth-provider/README"})}},function(s){s.O(0,[92673,92888,49774,40179],function(){return s(s.s=74570)}),_N_E=s.O()}]);