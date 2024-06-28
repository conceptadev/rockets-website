(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41544],{27150:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-password/classes/PasswordCreationService",function(){return r(97265)}])},97265:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return d}});var c=r(85893),n=r(92673),t=r(82643);let d=[{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new PasswordCreationService()",id:"new-passwordcreationservice"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"passwordStorageService",id:"passwordstorageservice"},{depth:4,value:"Source",id:"source-1"},{depth:3,value:"passwordStrengthService",id:"passwordstrengthservice"},{depth:4,value:"Source",id:"source-2"},{depth:3,value:"passwordValidationService",id:"passwordvalidationservice"},{depth:4,value:"Source",id:"source-3"},{depth:3,value:"settings",id:"settings"},{depth:4,value:"Source",id:"source-4"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"checkAttempt()",id:"checkattempt"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Source",id:"source-5"},{depth:3,value:"checkAttemptLeft()",id:"checkattemptleft"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Implementation of",id:"implementation-of-1"},{depth:4,value:"Source",id:"source-6"},{depth:3,value:"createObject()",id:"createobject"},{depth:4,value:"createObject(object, options)",id:"createobjectobject-options"},{depth:5,value:"Type parameters",id:"type-parameters"},{depth:5,value:"Parameters",id:"parameters-3"},{depth:5,value:"Returns",id:"returns-3"},{depth:5,value:"Implementation of",id:"implementation-of-2"},{depth:5,value:"Source",id:"source-7"},{depth:4,value:"createObject(object, options)",id:"createobjectobject-options-1"},{depth:5,value:"Type parameters",id:"type-parameters-1"},{depth:5,value:"Parameters",id:"parameters-4"},{depth:5,value:"Returns",id:"returns-4"},{depth:5,value:"Implementation of",id:"implementation-of-3"},{depth:5,value:"Source",id:"source-8"},{depth:3,value:"validateCurrent()",id:"validatecurrent"},{depth:4,value:"Parameters",id:"parameters-5"},{depth:4,value:"Returns",id:"returns-5"},{depth:4,value:"Implementation of",id:"implementation-of-4"},{depth:4,value:"Source",id:"source-9"}];function i(e){let s=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",blockquote:"blockquote",h4:"h4",h5:"h5",em:"em"},(0,t.a)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../READMEmdx",children:(0,c.jsx)(s.strong,{children:"@concepta/nestjs-password"})})," • ",(0,c.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../../packages",children:"Rockets"})," / ",(0,c.jsx)(s.a,{href:"../READMEmdx",children:"@concepta/nestjs-password"})," / PasswordCreationService"]}),"\n",(0,c.jsx)(s.h1,{children:"Class: PasswordCreationService"}),"\n",(0,c.jsx)(s.p,{children:"Service with functions related to password creation\nto check if password is strong, and the number of attempts user can do to update a password"}),"\n",(0,c.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreationServiceInterface"})})}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,c.jsx)(s.h3,{id:"new-passwordcreationservice",children:"new PasswordCreationService()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"new PasswordCreationService"}),"(",(0,c.jsx)(s.code,{children:"settings"}),", ",(0,c.jsx)(s.code,{children:"passwordStorageService"}),", ",(0,c.jsx)(s.code,{children:"passwordValidationService"}),", ",(0,c.jsx)(s.code,{children:"passwordStrengthService"}),"): ",(0,c.jsx)(s.a,{href:"PasswordCreationService",children:(0,c.jsx)(s.code,{children:"PasswordCreationService"})})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Constructor"}),"\n",(0,c.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"settings"}),": ",(0,c.jsx)(s.code,{children:"PasswordSettingsInterface"})]}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"passwordStorageService"}),": ",(0,c.jsx)(s.a,{href:"PasswordStorageService",children:(0,c.jsx)(s.code,{children:"PasswordStorageService"})})]}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"passwordValidationService"}),": ",(0,c.jsx)(s.a,{href:"PasswordValidationService",children:(0,c.jsx)(s.code,{children:"PasswordValidationService"})})]}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"passwordStrengthService"}),": ",(0,c.jsx)(s.a,{href:"PasswordStrengthService",children:(0,c.jsx)(s.code,{children:"PasswordStrengthService"})})]}),"\n",(0,c.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"PasswordCreationService",children:(0,c.jsx)(s.code,{children:"PasswordCreationService"})})}),"\n",(0,c.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L26",children:"packages/nestjs-password/src/services/password-creation.service.ts:26"})}),"\n",(0,c.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(s.h3,{id:"passwordstorageservice",children:"passwordStorageService"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"protected"})," ",(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"passwordStorageService"}),": ",(0,c.jsx)(s.a,{href:"PasswordStorageService",children:(0,c.jsx)(s.code,{children:"PasswordStorageService"})})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L29",children:"packages/nestjs-password/src/services/password-creation.service.ts:29"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"passwordstrengthservice",children:"passwordStrengthService"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"protected"})," ",(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"passwordStrengthService"}),": ",(0,c.jsx)(s.a,{href:"PasswordStrengthService",children:(0,c.jsx)(s.code,{children:"PasswordStrengthService"})})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L31",children:"packages/nestjs-password/src/services/password-creation.service.ts:31"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"passwordvalidationservice",children:"passwordValidationService"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"protected"})," ",(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"passwordValidationService"}),": ",(0,c.jsx)(s.a,{href:"PasswordValidationService",children:(0,c.jsx)(s.code,{children:"PasswordValidationService"})})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L30",children:"packages/nestjs-password/src/services/password-creation.service.ts:30"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"settings",children:"settings"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"protected"})," ",(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"settings"}),": ",(0,c.jsx)(s.code,{children:"PasswordSettingsInterface"})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L28",children:"packages/nestjs-password/src/services/password-creation.service.ts:28"})}),"\n",(0,c.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(s.h3,{id:"checkattempt",children:"checkAttempt()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"checkAttempt"}),"(",(0,c.jsx)(s.code,{children:"numOfAttempts"}),"): ",(0,c.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Check if number of current attempt is allowed based on the amount of attempts left\nif the number of attempts left is greater then"}),"\n",(0,c.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"numOfAttempts"}),": ",(0,c.jsx)(s.code,{children:"number"}),"= ",(0,c.jsx)(s.code,{children:"0"})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"boolean"})}),"\n",(0,c.jsx)(s.p,{children:"Number of attempts user has to try"}),"\n",(0,c.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreationServiceInterface"})}),".",(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface#checkattempt",children:(0,c.jsx)(s.code,{children:"checkAttempt"})})]}),"\n",(0,c.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L119",children:"packages/nestjs-password/src/services/password-creation.service.ts:119"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"checkattemptleft",children:"checkAttemptLeft()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"checkAttemptLeft"}),"(",(0,c.jsx)(s.code,{children:"numOfAttempts"}),"): ",(0,c.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Check number of attempts of using password"}),"\n",(0,c.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"numOfAttempts"}),": ",(0,c.jsx)(s.code,{children:"number"}),"= ",(0,c.jsx)(s.code,{children:"0"})]}),"\n",(0,c.jsx)(s.p,{children:"number of attempts"}),"\n",(0,c.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"number"})}),"\n",(0,c.jsx)(s.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreationServiceInterface"})}),".",(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface#checkattemptleft",children:(0,c.jsx)(s.code,{children:"checkAttemptLeft"})})]}),"\n",(0,c.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L128",children:"packages/nestjs-password/src/services/password-creation.service.ts:128"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"createobject",children:"createObject()"}),"\n",(0,c.jsx)(s.h4,{id:"createobjectobject-options",children:"createObject(object, options)"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"createObject"}),"<",(0,c.jsx)(s.code,{children:"T"}),">(",(0,c.jsx)(s.code,{children:"object"}),", ",(0,c.jsx)(s.code,{children:"options"}),"?): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"Omit"}),"<",(0,c.jsx)(s.code,{children:"T"}),", ",(0,c.jsx)(s.code,{children:'"password"'}),"> & ",(0,c.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,c.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Create password for an object."}),"\n",(0,c.jsx)(s.h5,{id:"type-parameters",children:"Type parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"T"})," ",(0,c.jsx)(s.em,{children:"extends"})," ",(0,c.jsx)(s.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,c.jsx)(s.code,{children:"PasswordPlainInterface"})})]}),"\n",(0,c.jsx)(s.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"object"}),": ",(0,c.jsx)(s.code,{children:"T"})]}),"\n",(0,c.jsx)(s.p,{children:"An object containing the new password to hash."}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"options?"}),": ",(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreateObjectOptionsInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreateObjectOptionsInterface"})})]}),"\n",(0,c.jsx)(s.p,{children:"Password create options."}),"\n",(0,c.jsx)(s.h5,{id:"returns-3",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"Omit"}),"<",(0,c.jsx)(s.code,{children:"T"}),", ",(0,c.jsx)(s.code,{children:'"password"'}),"> & ",(0,c.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,c.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n",(0,c.jsx)(s.p,{children:"A new object with the password hashed, with salt added."}),"\n",(0,c.jsx)(s.h5,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreationServiceInterface"})}),".",(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface#createobject",children:(0,c.jsx)(s.code,{children:"createObject"})})]}),"\n",(0,c.jsx)(s.h5,{id:"source-7",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L41",children:"packages/nestjs-password/src/services/password-creation.service.ts:41"})}),"\n",(0,c.jsx)(s.h4,{id:"createobjectobject-options-1",children:"createObject(object, options)"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"createObject"}),"<",(0,c.jsx)(s.code,{children:"T"}),">(",(0,c.jsx)(s.code,{children:"object"}),", ",(0,c.jsx)(s.code,{children:"options"}),"?): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"Omit"}),"<",(0,c.jsx)(s.code,{children:"T"}),", ",(0,c.jsx)(s.code,{children:'"password"'}),"> | ",(0,c.jsx)(s.code,{children:"Omit"}),"<",(0,c.jsx)(s.code,{children:"T"}),", ",(0,c.jsx)(s.code,{children:'"password"'}),"> & ",(0,c.jsx)(s.code,{children:"Partial"}),"<",(0,c.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,c.jsx)(s.code,{children:"PasswordStorageInterface"})}),">>"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Create password for an object."}),"\n",(0,c.jsx)(s.h5,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"T"})," ",(0,c.jsx)(s.em,{children:"extends"})," ",(0,c.jsx)(s.code,{children:"Partial"}),"<",(0,c.jsx)(s.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,c.jsx)(s.code,{children:"PasswordPlainInterface"})}),">"]}),"\n",(0,c.jsx)(s.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"object"}),": ",(0,c.jsx)(s.code,{children:"T"})]}),"\n",(0,c.jsx)(s.p,{children:"An object containing the new password to hash."}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"options?"}),": ",(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreateObjectOptionsInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreateObjectOptionsInterface"})})]}),"\n",(0,c.jsx)(s.p,{children:"Password create options."}),"\n",(0,c.jsx)(s.h5,{id:"returns-4",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"Omit"}),"<",(0,c.jsx)(s.code,{children:"T"}),", ",(0,c.jsx)(s.code,{children:'"password"'}),"> | ",(0,c.jsx)(s.code,{children:"Omit"}),"<",(0,c.jsx)(s.code,{children:"T"}),", ",(0,c.jsx)(s.code,{children:'"password"'}),"> & ",(0,c.jsx)(s.code,{children:"Partial"}),"<",(0,c.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,c.jsx)(s.code,{children:"PasswordStorageInterface"})}),">>"]}),"\n",(0,c.jsx)(s.p,{children:"A new object with the password hashed, with salt added."}),"\n",(0,c.jsx)(s.h5,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"PasswordCreationServiceInterface.createObject"})}),"\n",(0,c.jsx)(s.h5,{id:"source-8",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L53",children:"packages/nestjs-password/src/services/password-creation.service.ts:53"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"validatecurrent",children:"validateCurrent()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"validateCurrent"}),"(",(0,c.jsx)(s.code,{children:"options"}),"): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"boolean"}),">"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["• ",(0,c.jsx)(s.strong,{children:"options"}),": ",(0,c.jsx)(s.code,{children:"Partial"}),"<",(0,c.jsx)(s.code,{children:"PasswordCurrentPasswordInterface"}),">"]}),"\n",(0,c.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,c.jsx)(s.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface",children:(0,c.jsx)(s.code,{children:"PasswordCreationServiceInterface"})}),".",(0,c.jsx)(s.a,{href:"../interfaces/PasswordCreationServiceInterface#validatecurrent",children:(0,c.jsx)(s.code,{children:"validateCurrent"})})]}),"\n",(0,c.jsx)(s.h4,{id:"source-9",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/nestjs-password/src/services/password-creation.service.ts#L89",children:"packages/nestjs-password/src/services/password-creation.service.ts:89"})})]})}s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-password/classes/PasswordCreationService.mdx",route:"/reference/rockets/nestjs-password/classes/PasswordCreationService",title:"Class: PasswordCreationService",headings:d},pageNextRoute:"/reference/rockets/nestjs-password/classes/PasswordCreationService"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=27150)}),_N_E=e.O()}]);