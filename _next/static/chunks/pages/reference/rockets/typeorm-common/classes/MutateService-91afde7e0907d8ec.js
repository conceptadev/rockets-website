(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6806],{59670:function(e,r,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/typeorm-common/classes/MutateService",function(){return c(85397)}])},85397:function(e,r,c){"use strict";c.r(r),c.d(r,{__toc:function(){return t}});var s=c(85893),n=c(92673),d=c(82643);let t=[{depth:2,value:"Extends",id:"extends"},{depth:2,value:"Extended by",id:"extended-by"},{depth:2,value:"Type parameters",id:"type-parameters"},{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new MutateService()",id:"new-mutateservice"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Overrides",id:"overrides"},{depth:4,value:"Source",id:"source"},{depth:2,value:"Properties",id:"properties"},{depth:3,value:"createDto",id:"createdto"},{depth:4,value:"Source",id:"source-1"},{depth:3,value:"updateDto",id:"updatedto"},{depth:4,value:"Source",id:"source-2"},{depth:2,value:"Accessors",id:"accessors"},{depth:3,value:"metadata",id:"metadata"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Source",id:"source-3"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"create()",id:"create"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Source",id:"source-4"},{depth:3,value:"delete()",id:"delete"},{depth:4,value:"Parameters",id:"parameters-2"},{depth:4,value:"Returns",id:"returns-3"},{depth:4,value:"Source",id:"source-5"},{depth:3,value:"findById()",id:"findbyid"},{depth:4,value:"Parameters",id:"parameters-3"},{depth:4,value:"Returns",id:"returns-4"},{depth:4,value:"Source",id:"source-6"},{depth:3,value:"findOne()",id:"findone"},{depth:4,value:"Parameters",id:"parameters-4"},{depth:4,value:"Returns",id:"returns-5"},{depth:4,value:"Inherited from",id:"inherited-from"},{depth:4,value:"Source",id:"source-7"},{depth:3,value:"remove()",id:"remove"},{depth:4,value:"Parameters",id:"parameters-5"},{depth:4,value:"Returns",id:"returns-6"},{depth:4,value:"Implementation of",id:"implementation-of-1"},{depth:4,value:"Source",id:"source-8"},{depth:3,value:"replace()",id:"replace"},{depth:4,value:"Parameters",id:"parameters-6"},{depth:4,value:"Returns",id:"returns-7"},{depth:4,value:"Implementation of",id:"implementation-of-2"},{depth:4,value:"Source",id:"source-9"},{depth:3,value:"repository()",id:"repository"},{depth:4,value:"Parameters",id:"parameters-7"},{depth:4,value:"Returns",id:"returns-8"},{depth:4,value:"Inherited from",id:"inherited-from-1"},{depth:4,value:"Source",id:"source-10"},{depth:3,value:"save()",id:"save"},{depth:4,value:"Parameters",id:"parameters-8"},{depth:4,value:"Returns",id:"returns-9"},{depth:4,value:"Source",id:"source-11"},{depth:3,value:"transaction()",id:"transaction"},{depth:4,value:"Parameters",id:"parameters-9"},{depth:4,value:"Returns",id:"returns-10"},{depth:4,value:"Inherited from",id:"inherited-from-2"},{depth:4,value:"Source",id:"source-12"},{depth:3,value:"transform()",id:"transform"},{depth:4,value:"Parameters",id:"parameters-10"},{depth:4,value:"Returns",id:"returns-11"},{depth:4,value:"Source",id:"source-13"},{depth:3,value:"update()",id:"update"},{depth:4,value:"Parameters",id:"parameters-11"},{depth:4,value:"Returns",id:"returns-12"},{depth:4,value:"Implementation of",id:"implementation-of-3"},{depth:4,value:"Source",id:"source-14"},{depth:3,value:"validate()",id:"validate"},{depth:4,value:"Type parameters",id:"type-parameters-1"},{depth:4,value:"Parameters",id:"parameters-12"},{depth:4,value:"Returns",id:"returns-13"},{depth:4,value:"Source",id:"source-15"}];function i(e){let r=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",code:"code",h2:"h2",ul:"ul",li:"li",em:"em",h3:"h3",blockquote:"blockquote",h4:"h4"},(0,d.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../READMEmdx",children:(0,s.jsx)(r.strong,{children:"@concepta/typeorm-common"})})," • ",(0,s.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../../packages",children:"Rockets"})," / ",(0,s.jsx)(r.a,{href:"../READMEmdx",children:"@concepta/typeorm-common"})," / MutateService"]}),"\n",(0,s.jsxs)(r.h1,{children:["Class: ",(0,s.jsx)(r.code,{children:"abstract"})," MutateService<Entity, Creatable, Updatable, Replaceable, Removable>"]}),"\n",(0,s.jsx)(r.p,{children:"Abstract mutate service"}),"\n",(0,s.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"BaseService",children:(0,s.jsx)(r.code,{children:"BaseService"})}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,s.jsx)(r.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"Entity"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})})]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"Creatable"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"Updatable"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"Replaceable"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.code,{children:"Creatable"})," = ",(0,s.jsx)(r.code,{children:"Creatable"})]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"Removable"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),"> = ",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.h2,{id:"implements",children:"Implements"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/CreateOneInterface",children:(0,s.jsx)(r.code,{children:"CreateOneInterface"})}),"<",(0,s.jsx)(r.code,{children:"Creatable"}),", ",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/UpdateOneInterface",children:(0,s.jsx)(r.code,{children:"UpdateOneInterface"})}),"<",(0,s.jsx)(r.code,{children:"Updatable"})," & ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),", ",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReplaceOneInterface",children:(0,s.jsx)(r.code,{children:"ReplaceOneInterface"})}),"<",(0,s.jsx)(r.code,{children:"Replaceable"})," & ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),", ",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/RemoveOneInterface",children:(0,s.jsx)(r.code,{children:"RemoveOneInterface"})}),"<",(0,s.jsx)(r.code,{children:"Removable"})," & ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),", ",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(r.h3,{id:"new-mutateservice",children:"new MutateService()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"new MutateService"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),", ",(0,s.jsx)(r.code,{children:"Creatable"}),", ",(0,s.jsx)(r.code,{children:"Updatable"}),", ",(0,s.jsx)(r.code,{children:"Replaceable"}),", ",(0,s.jsx)(r.code,{children:"Removable"}),">(",(0,s.jsx)(r.code,{children:"repo"}),"): ",(0,s.jsx)(r.a,{href:"MutateService",children:(0,s.jsx)(r.code,{children:"MutateService"})}),"<",(0,s.jsx)(r.code,{children:"Entity"}),", ",(0,s.jsx)(r.code,{children:"Creatable"}),", ",(0,s.jsx)(r.code,{children:"Updatable"}),", ",(0,s.jsx)(r.code,{children:"Replaceable"}),", ",(0,s.jsx)(r.code,{children:"Removable"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Constructor"}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"repo"}),": ",(0,s.jsx)(r.code,{children:"Repository"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"instance of the repo"}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"MutateService",children:(0,s.jsx)(r.code,{children:"MutateService"})}),"<",(0,s.jsx)(r.code,{children:"Entity"}),", ",(0,s.jsx)(r.code,{children:"Creatable"}),", ",(0,s.jsx)(r.code,{children:"Updatable"}),", ",(0,s.jsx)(r.code,{children:"Replaceable"}),", ",(0,s.jsx)(r.code,{children:"Removable"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"BaseService",children:(0,s.jsx)(r.code,{children:"BaseService"})}),".",(0,s.jsx)(r.a,{href:"BaseService#constructors",children:(0,s.jsx)(r.code,{children:"constructor"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L44",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:44"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h3,{id:"createdto",children:"createDto"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"protected"})," ",(0,s.jsx)(r.code,{children:"abstract"})," ",(0,s.jsx)(r.strong,{children:"createDto"}),": ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/Type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.code,{children:"Creatable"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"source-1",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L36",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:36"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"updatedto",children:"updateDto"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"protected"})," ",(0,s.jsx)(r.code,{children:"abstract"})," ",(0,s.jsx)(r.strong,{children:"updateDto"}),": ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/Type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.code,{children:"Updatable"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"source-2",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L37",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:37"})}),"\n",(0,s.jsx)(r.h2,{id:"accessors",children:"Accessors"}),"\n",(0,s.jsx)(r.h3,{id:"metadata",children:"metadata"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"get"})," ",(0,s.jsx)(r.code,{children:"protected"})," ",(0,s.jsx)(r.strong,{children:"metadata"}),"(): ",(0,s.jsx)(r.code,{children:"EntityMetadata"})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"EntityMetadata"})}),"\n",(0,s.jsx)(r.h4,{id:"source-3",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/base.service.ts#L68",children:".tmp/repos/rockets/packages/typeorm-common/src/services/base.service.ts:68"})}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(r.h3,{id:"create",children:"create()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"create"}),"(",(0,s.jsx)(r.code,{children:"data"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Create one"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"Creatable"})]}),"\n",(0,s.jsx)(r.p,{children:"the reference to create"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the created reference"}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/CreateOneInterface",children:(0,s.jsx)(r.code,{children:"CreateOneInterface"})}),".",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/CreateOneInterface#create",children:(0,s.jsx)(r.code,{children:"create"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-4",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L54",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:54"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"delete",children:"delete()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"private"})," ",(0,s.jsx)(r.strong,{children:"delete"}),"(",(0,s.jsx)(r.code,{children:"entity"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"entity"}),": ",(0,s.jsx)(r.code,{children:"Entity"})]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"source-5",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L153",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:153"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"findbyid",children:"findById()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"private"})," ",(0,s.jsx)(r.strong,{children:"findById"}),"(",(0,s.jsx)(r.code,{children:"id"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"id"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"source-6",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L200",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:200"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"findone",children:"findOne()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"findOne"}),"(",(0,s.jsx)(r.code,{children:"findOneOptions"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"null"})," | ",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Find One wrapper."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"findOneOptions"}),": ",(0,s.jsx)(r.code,{children:"FindOneOptions"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"Find options"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"null"})," | ",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"BaseService",children:(0,s.jsx)(r.code,{children:"BaseService"})}),".",(0,s.jsx)(r.a,{href:"BaseService#findone",children:(0,s.jsx)(r.code,{children:"findOne"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-7",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/base.service.ts#L32",children:".tmp/repos/rockets/packages/typeorm-common/src/services/base.service.ts:32"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"remove",children:"remove()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"remove"}),"(",(0,s.jsx)(r.code,{children:"data"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Remove one"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"Removable"})," & ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),"<",(0,s.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the reference data to remove"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.p,{children:"query options"}),"\n",(0,s.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the removed reference"}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/RemoveOneInterface",children:(0,s.jsx)(r.code,{children:"RemoveOneInterface"})}),".",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/RemoveOneInterface#remove",children:(0,s.jsx)(r.code,{children:"remove"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-8",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L125",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:125"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"replace",children:"replace()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"replace"}),"(",(0,s.jsx)(r.code,{children:"data"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Replace one"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"Replaceable"})," & ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),"<",(0,s.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the reference data to replace"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the replaced reference"}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReplaceOneInterface",children:(0,s.jsx)(r.code,{children:"ReplaceOneInterface"})}),".",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReplaceOneInterface#replace",children:(0,s.jsx)(r.code,{children:"replace"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-9",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L99",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:99"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"repository",children:"repository()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"repository"}),"(",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Repository"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Return the correct repository instance."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.p,{children:"Options"}),"\n",(0,s.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Repository"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"BaseService",children:(0,s.jsx)(r.code,{children:"BaseService"})}),".",(0,s.jsx)(r.a,{href:"BaseService#repository",children:(0,s.jsx)(r.code,{children:"repository"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-10",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/base.service.ts#L50",children:".tmp/repos/rockets/packages/typeorm-common/src/services/base.service.ts:50"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"save",children:"save()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"private"})," ",(0,s.jsx)(r.strong,{children:"save"}),"(",(0,s.jsx)(r.code,{children:"entity"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"entity"}),": ",(0,s.jsx)(r.code,{children:"Entity"})]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"source-11",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L138",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:138"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"transaction",children:"transaction()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"transaction"}),"(",(0,s.jsx)(r.code,{children:"options"}),"?): ",(0,s.jsx)(r.a,{href:"TransactionProxy",children:(0,s.jsx)(r.code,{children:"TransactionProxy"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Return a transaction instance."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"options?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/SafeTransactionOptionsInterface",children:(0,s.jsx)(r.code,{children:"SafeTransactionOptionsInterface"})})]}),"\n",(0,s.jsx)(r.p,{children:"Options"}),"\n",(0,s.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"TransactionProxy",children:(0,s.jsx)(r.code,{children:"TransactionProxy"})})}),"\n",(0,s.jsx)(r.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"BaseService",children:(0,s.jsx)(r.code,{children:"BaseService"})}),".",(0,s.jsx)(r.a,{href:"BaseService#transaction",children:(0,s.jsx)(r.code,{children:"transaction"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-12",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/base.service.ts#L59",children:".tmp/repos/rockets/packages/typeorm-common/src/services/base.service.ts:59"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"transform",children:"transform()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"protected"})," ",(0,s.jsx)(r.strong,{children:"transform"}),"(",(0,s.jsx)(r.code,{children:"data"}),", ",(0,s.jsx)(r.code,{children:"_queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">>"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"_queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"DeepPartial"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">>"]}),"\n",(0,s.jsx)(r.h4,{id:"source-13",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L190",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:190"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"update",children:"update()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"update"}),"(",(0,s.jsx)(r.code,{children:"data"}),", ",(0,s.jsx)(r.code,{children:"queryOptions"}),"?): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Update one"}),"\n",(0,s.jsx)(r.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"Updatable"})," & ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),"<",(0,s.jsx)(r.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the reference data to update"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"queryOptions?"}),": ",(0,s.jsx)(r.a,{href:"../interfaces/QueryOptionsInterface",children:(0,s.jsx)(r.code,{children:"QueryOptionsInterface"})})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-12",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"Entity"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"the updated reference"}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/UpdateOneInterface",children:(0,s.jsx)(r.code,{children:"UpdateOneInterface"})}),".",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/UpdateOneInterface#update",children:(0,s.jsx)(r.code,{children:"update"})})]}),"\n",(0,s.jsx)(r.h4,{id:"source-14",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L74",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:74"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"validate",children:"validate()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"private"})," ",(0,s.jsx)(r.strong,{children:"validate"}),"<",(0,s.jsx)(r.code,{children:"T"}),">(",(0,s.jsx)(r.code,{children:"type"}),", ",(0,s.jsx)(r.code,{children:"data"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"T"})," ",(0,s.jsx)(r.em,{children:"extends"})," ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,s.jsx)(r.code,{children:"ReferenceIdInterface"})}),"<",(0,s.jsx)(r.code,{children:"string"}),"> | ",(0,s.jsx)(r.code,{children:"object"})]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"type"}),": ",(0,s.jsx)(r.a,{href:"../../ts-core/interfaces/Type",children:(0,s.jsx)(r.code,{children:"Type"})}),"<",(0,s.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,s.jsxs)(r.p,{children:["• ",(0,s.jsx)(r.strong,{children:"data"}),": ",(0,s.jsx)(r.code,{children:"T"})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-13",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"source-15",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/ae6ca4244b90cdb1cfce18f37f04c9d3c5522cd3/packages/typeorm-common/src/services/mutate.service.ts#L168",children:".tmp/repos/rockets/packages/typeorm-common/src/services/mutate.service.ts:168"})})]})}r.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.a)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/typeorm-common/classes/MutateService.mdx",route:"/reference/rockets/typeorm-common/classes/MutateService",title:"Class: abstract MutateService<Entity, Creatable, Updatable, Replaceable, Removable>",headings:t},pageNextRoute:"/reference/rockets/typeorm-common/classes/MutateService"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=59670)}),_N_E=e.O()}]);