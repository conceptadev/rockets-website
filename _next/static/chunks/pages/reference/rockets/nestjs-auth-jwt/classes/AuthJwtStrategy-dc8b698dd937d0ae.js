(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{48525:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-auth-jwt/classes/AuthJwtStrategy",function(){return r(49920)}])},49920:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return d}});var n=r(85893),t=r(92673),i=r(82643);let d=[{depth:2,value:"Extends",id:"extends"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new AuthJwtStrategy()",id:"new-authjwtstrategy"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Overrides",id:"overrides"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"userLookupService",id:"userlookupservice"},{depth:4,value:"Source",id:"source-1"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"authenticate()",id:"authenticate"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Inherited from",id:"inherited-from"},{depth:4,value:"Source",id:"source-2"},{depth:3,value:"error()",id:"error"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Inherited from",id:"inherited-from-1"},{depth:4,value:"Api",id:"api"},{depth:4,value:"Source",id:"source-3"},{depth:3,value:"fail()",id:"fail"},{depth:4,value:"fail(challenge, status)",id:"failchallenge-status"},{depth:5,value:"Parameters",id:"parameters-3"},{depth:5,value:"Returns",id:"returns-3"},{depth:5,value:"Inherited from",id:"inherited-from-2"},{depth:5,value:"Api",id:"api-1"},{depth:5,value:"Source",id:"source-4"},{depth:4,value:"fail(status)",id:"failstatus"},{depth:5,value:"Parameters",id:"parameters-4"},{depth:5,value:"Returns",id:"returns-4"},{depth:5,value:"Inherited from",id:"inherited-from-3"},{depth:5,value:"Source",id:"source-5"},{depth:3,value:"pass()",id:"pass"},{depth:4,value:"Returns",id:"returns-5"},{depth:4,value:"Inherited from",id:"inherited-from-4"},{depth:4,value:"Api",id:"api-2"},{depth:4,value:"Source",id:"source-6"},{depth:3,value:"redirect()",id:"redirect"},{depth:4,value:"Parameters",id:"parameters-5"},{depth:4,value:"Returns",id:"returns-6"},{depth:4,value:"Inherited from",id:"inherited-from-5"},{depth:4,value:"Api",id:"api-3"},{depth:4,value:"Source",id:"source-7"},{depth:3,value:"success()",id:"success"},{depth:4,value:"Parameters",id:"parameters-6"},{depth:4,value:"Returns",id:"returns-7"},{depth:4,value:"Inherited from",id:"inherited-from-6"},{depth:4,value:"Api",id:"api-4"},{depth:4,value:"Source",id:"source-8"},{depth:3,value:"validate()",id:"validate"},{depth:4,value:"Parameters",id:"parameters-7"},{depth:4,value:"Returns",id:"returns-8"},{depth:4,value:"Source",id:"source-9"}];function c(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",blockquote:"blockquote",h4:"h4",h5:"h5"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../READMEmdx",children:(0,n.jsx)(s.strong,{children:"@concepta/nestjs-auth-jwt"})})," • ",(0,n.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../packages",children:"Packages Example"})," / ",(0,n.jsx)(s.a,{href:"../READMEmdx",children:"@concepta/nestjs-auth-jwt"})," / AuthJwtStrategy"]}),"\n",(0,n.jsx)(s.h1,{children:"Class: AuthJwtStrategy"}),"\n",(0,n.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),"<",(0,n.jsx)(s.code,{children:"this"}),">"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-authjwtstrategy",children:"new AuthJwtStrategy()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"new AuthJwtStrategy"}),"(",(0,n.jsx)(s.code,{children:"settings"}),", ",(0,n.jsx)(s.code,{children:"verifyTokenService"}),", ",(0,n.jsx)(s.code,{children:"userLookupService"}),"): ",(0,n.jsx)(s.a,{href:"AuthJwtStrategy",children:(0,n.jsx)(s.code,{children:"AuthJwtStrategy"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"settings"}),": ",(0,n.jsx)(s.code,{children:"Partial"}),"<",(0,n.jsx)(s.code,{children:"AuthJwtSettingsInterface"}),">"]}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"verifyTokenService"}),": ",(0,n.jsx)(s.a,{href:"../../nestjs-authentication/interfaces/VerifyTokenServiceInterface",children:(0,n.jsx)(s.code,{children:"VerifyTokenServiceInterface"})})]}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"userLookupService"}),": ",(0,n.jsx)(s.code,{children:"AuthJwtUserLookupServiceInterface"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"AuthJwtStrategy",children:(0,n.jsx)(s.code,{children:"AuthJwtStrategy"})})}),"\n",(0,n.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#constructors",children:(0,n.jsx)(s.code,{children:"constructor"})})]}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-auth-jwt/src/auth-jwt.strategy.ts#L30",children:"packages/nestjs-auth-jwt/src/auth-jwt.strategy.ts:30"})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"userlookupservice",children:"userLookupService"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"private"})," ",(0,n.jsx)(s.strong,{children:"userLookupService"}),": ",(0,n.jsx)(s.code,{children:"AuthJwtUserLookupServiceInterface"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-auth-jwt/src/auth-jwt.strategy.ts#L36",children:"packages/nestjs-auth-jwt/src/auth-jwt.strategy.ts:36"})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"authenticate",children:"authenticate()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"authenticate"}),"(...",(0,n.jsx)(s.code,{children:"args"}),"): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ...",(0,n.jsx)(s.strong,{children:"args"}),": [",(0,n.jsx)(s.code,{children:"Request"}),"<",(0,n.jsx)(s.code,{children:"ParamsDictionary"}),", ",(0,n.jsx)(s.code,{children:"any"}),", ",(0,n.jsx)(s.code,{children:"any"}),", ",(0,n.jsx)(s.code,{children:"ParsedQs"}),", ",(0,n.jsx)(s.code,{children:"Record"}),"<",(0,n.jsx)(s.code,{children:"string"}),", ",(0,n.jsx)(s.code,{children:"any"}),">>, ",(0,n.jsx)(s.code,{children:"any"}),"]"]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#authenticate",children:(0,n.jsx)(s.code,{children:"authenticate"})})]}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"packages/nestjs-jwt/dist/jwt.strategy.d.ts:8"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"error",children:"error()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"error"}),"(",(0,n.jsx)(s.code,{children:"err"}),"): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Internal error while performing authentication."}),"\n",(0,n.jsx)(s.p,{children:"Strategies should call this function when an internal error occurs\nduring the process of performing authentication; for example, if the\nuser directory is not available."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"err"}),": ",(0,n.jsx)(s.code,{children:"Error"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#error",children:(0,n.jsx)(s.code,{children:"error"})})]}),"\n",(0,n.jsx)(s.h4,{id:"api",children:"Api"}),"\n",(0,n.jsx)(s.p,{children:"public"}),"\n",(0,n.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@types/passport-strategy/index.d.ts:96"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"fail",children:"fail()"}),"\n",(0,n.jsx)(s.h4,{id:"failchallenge-status",children:"fail(challenge, status)"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"fail"}),"(",(0,n.jsx)(s.code,{children:"challenge"}),", ",(0,n.jsx)(s.code,{children:"status"}),"): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Fail authentication, with optional ",(0,n.jsx)(s.code,{children:"challenge"})," and ",(0,n.jsx)(s.code,{children:"status"}),", defaulting\nto 401."]}),"\n",(0,n.jsx)(s.p,{children:"Strategies should call this function to fail an authentication attempt."}),"\n",(0,n.jsx)(s.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"challenge"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsx)(s.p,{children:"(Can also be an object with 'message' and 'type' fields)."}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"status"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n",(0,n.jsx)(s.h5,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h5,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#fail",children:(0,n.jsx)(s.code,{children:"fail"})})]}),"\n",(0,n.jsx)(s.h5,{id:"api-1",children:"Api"}),"\n",(0,n.jsx)(s.p,{children:"public"}),"\n",(0,n.jsx)(s.h5,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@types/passport-strategy/index.d.ts:60"}),"\n",(0,n.jsx)(s.h4,{id:"failstatus",children:"fail(status)"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"fail"}),"(",(0,n.jsx)(s.code,{children:"status"}),"): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(s.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"status"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n",(0,n.jsx)(s.h5,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h5,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#fail",children:(0,n.jsx)(s.code,{children:"fail"})})]}),"\n",(0,n.jsx)(s.h5,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@types/passport-strategy/index.d.ts:61"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"pass",children:"pass()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"pass"}),"(): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Pass without making a success or fail decision."}),"\n",(0,n.jsx)(s.p,{children:"Under most circumstances, Strategies should not need to call this\nfunction.  It exists primarily to allow previous authentication state\nto be restored, for example from an HTTP session."}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#pass",children:(0,n.jsx)(s.code,{children:"pass"})})]}),"\n",(0,n.jsx)(s.h4,{id:"api-2",children:"Api"}),"\n",(0,n.jsx)(s.p,{children:"public"}),"\n",(0,n.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@types/passport-strategy/index.d.ts:84"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"redirect",children:"redirect()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"redirect"}),"(",(0,n.jsx)(s.code,{children:"url"}),", ",(0,n.jsx)(s.code,{children:"status"}),"?): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Redirect to ",(0,n.jsx)(s.code,{children:"url"})," with optional ",(0,n.jsx)(s.code,{children:"status"}),", defaulting to 302."]}),"\n",(0,n.jsx)(s.p,{children:"Strategies should call this function to redirect the user (via their\nuser agent) to a third-party website for authentication."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"url"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"status?"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#redirect",children:(0,n.jsx)(s.code,{children:"redirect"})})]}),"\n",(0,n.jsx)(s.h4,{id:"api-3",children:"Api"}),"\n",(0,n.jsx)(s.p,{children:"public"}),"\n",(0,n.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@types/passport-strategy/index.d.ts:73"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"success",children:"success()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"success"}),"(",(0,n.jsx)(s.code,{children:"user"}),", ",(0,n.jsx)(s.code,{children:"info"}),"?): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Authenticate ",(0,n.jsx)(s.code,{children:"user"}),", with optional ",(0,n.jsx)(s.code,{children:"info"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Strategies should call this function to successfully authenticate a\nuser.  ",(0,n.jsx)(s.code,{children:"user"})," should be an object supplied by the application after it\nhas been given an opportunity to verify credentials.  ",(0,n.jsx)(s.code,{children:"info"})," is an\noptional argument containing additional user information.  This is\nuseful for third-party authentication strategies to pass profile\ndetails."]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"user"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"info?"}),": ",(0,n.jsx)(s.code,{children:"any"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy",children:(0,n.jsx)(s.code,{children:"JwtStrategy"})}),".",(0,n.jsx)(s.a,{href:"../../nestjs-jwt/classes/JwtStrategy#success",children:(0,n.jsx)(s.code,{children:"success"})})]}),"\n",(0,n.jsx)(s.h4,{id:"api-4",children:"Api"}),"\n",(0,n.jsx)(s.p,{children:"public"}),"\n",(0,n.jsx)(s.h4,{id:"source-8",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"node_modules/@types/passport-strategy/index.d.ts:48"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"validate",children:"validate()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"validate"}),"(",(0,n.jsx)(s.code,{children:"payload"}),", ",(0,n.jsx)(s.code,{children:"queryOptions"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,n.jsx)(s.code,{children:"ReferenceIdInterface"})}),"<",(0,n.jsx)(s.code,{children:"string"}),">>"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Validate the user based on payload sub"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"payload"}),": ",(0,n.jsx)(s.a,{href:"../../ts-common/interfaces/AuthorizationPayloadInterface",children:(0,n.jsx)(s.code,{children:"AuthorizationPayloadInterface"})})]}),"\n",(0,n.jsx)(s.p,{children:"The payload to validate"}),"\n",(0,n.jsxs)(s.p,{children:["• ",(0,n.jsx)(s.strong,{children:"queryOptions?"}),": ",(0,n.jsx)(s.a,{href:"../../typeorm-common/interfaces/QueryOptionsInterface",children:(0,n.jsx)(s.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,n.jsx)(s.code,{children:"ReferenceIdInterface"})}),"<",(0,n.jsx)(s.code,{children:"string"}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"source-9",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-auth-jwt/src/auth-jwt.strategy.ts#L51",children:"packages/nestjs-auth-jwt/src/auth-jwt.strategy.ts:51"})})]})}s.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-auth-jwt/classes/AuthJwtStrategy.mdx",route:"/reference/rockets/nestjs-auth-jwt/classes/AuthJwtStrategy",title:"Class: AuthJwtStrategy",headings:d},pageNextRoute:"/reference/rockets/nestjs-auth-jwt/classes/AuthJwtStrategy"})}},function(e){e.O(0,[2673,2888,9774,179],function(){return e(e.s=48525)}),_N_E=e.O()}]);