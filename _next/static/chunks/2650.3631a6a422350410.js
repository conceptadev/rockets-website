"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2650],{2650:function(t,e,r){r.d(e,{diagram:function(){return N}});var i=r(1835),a=r(8414);r(7484),r(7967),r(7856);var c=function(){var t=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},e=[1,3],r=[1,6],i=[1,4],a=[1,5],c=[2,5],s=[1,12],n=[5,7,13,19,21,23,24,26,28,31,37,40,47],o=[7,13,19,21,23,24,26,28,31,37,40],l=[7,12,13,19,21,23,24,26,28,31,37,40],h=[7,13,47],m=[1,42],y=[1,41],u=[7,13,29,32,35,38,47],p=[1,55],g=[1,56],b=[1,57],d=[7,13,32,35,42,47],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,PARENT_COMMIT:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,ID:46,";":47,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"PARENT_COMMIT",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",46:"ID",47:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,7],[18,7],[18,5],[18,5],[18,5],[18,7],[18,7],[18,7],[18,7],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[41,0],[41,1],[39,1],[39,1],[39,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,r,i,a,c,s){var n=c.length-1;switch(a){case 2:return c[n];case 3:return c[n-1];case 4:return i.setDirection(c[n-3]),c[n-1];case 6:i.setOptions(c[n-1]),this.$=c[n];break;case 7:c[n-1]+=c[n],this.$=c[n-1];break;case 9:this.$=[];break;case 10:c[n-1].push(c[n]),this.$=c[n-1];break;case 11:this.$=c[n-1];break;case 16:this.$=c[n].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=c[n].trim(),i.setAccDescription(this.$);break;case 19:i.addSection(c[n].substr(8)),this.$=c[n].substr(8);break;case 21:i.checkout(c[n]);break;case 22:i.branch(c[n]);break;case 23:i.branch(c[n-2],c[n]);break;case 24:i.cherryPick(c[n],"",void 0);break;case 25:i.cherryPick(c[n-2],"",void 0,c[n]);break;case 26:i.cherryPick(c[n-2],"",c[n]);break;case 27:i.cherryPick(c[n-4],"",c[n],c[n-2]);break;case 28:i.cherryPick(c[n-4],"",c[n-2],c[n]);break;case 29:i.cherryPick(c[n],"",c[n-2]);break;case 30:i.cherryPick(c[n],"","");break;case 31:i.cherryPick(c[n-2],"","");break;case 32:i.cherryPick(c[n-4],"","",c[n-2]);break;case 33:i.cherryPick(c[n-4],"","",c[n]);break;case 34:i.cherryPick(c[n-2],"",c[n-4],c[n]);break;case 35:i.cherryPick(c[n-2],"","",c[n]);break;case 36:i.merge(c[n],"","","");break;case 37:i.merge(c[n-2],c[n],"","");break;case 38:i.merge(c[n-2],"",c[n],"");break;case 39:i.merge(c[n-2],"","",c[n]);break;case 40:i.merge(c[n-4],c[n],"",c[n-2]);break;case 41:i.merge(c[n-4],"",c[n],c[n-2]);break;case 42:i.merge(c[n-4],"",c[n-2],c[n]);break;case 43:i.merge(c[n-4],c[n-2],c[n],"");break;case 44:i.merge(c[n-4],c[n-2],"",c[n]);break;case 45:i.merge(c[n-4],c[n],c[n-2],"");break;case 46:i.merge(c[n-6],c[n-4],c[n-2],c[n]);break;case 47:i.merge(c[n-6],c[n],c[n-4],c[n-2]);break;case 48:i.merge(c[n-6],c[n-4],c[n],c[n-2]);break;case 49:i.merge(c[n-6],c[n-2],c[n-4],c[n]);break;case 50:i.merge(c[n-6],c[n],c[n-2],c[n-4]);break;case 51:i.merge(c[n-6],c[n-2],c[n],c[n-4]);break;case 52:i.commit(c[n]);break;case 53:i.commit("","",i.commitType.NORMAL,c[n]);break;case 54:i.commit("","",c[n],"");break;case 55:i.commit("","",c[n],c[n-2]);break;case 56:i.commit("","",c[n-2],c[n]);break;case 57:i.commit("",c[n],i.commitType.NORMAL,"");break;case 58:i.commit("",c[n-2],i.commitType.NORMAL,c[n]);break;case 59:i.commit("",c[n],i.commitType.NORMAL,c[n-2]);break;case 60:i.commit("",c[n-2],c[n],"");break;case 61:i.commit("",c[n],c[n-2],"");break;case 62:i.commit("",c[n-4],c[n-2],c[n]);break;case 63:i.commit("",c[n-4],c[n],c[n-2]);break;case 64:i.commit("",c[n-2],c[n-4],c[n]);break;case 65:i.commit("",c[n],c[n-4],c[n-2]);break;case 66:i.commit("",c[n],c[n-2],c[n-4]);break;case 67:i.commit("",c[n-2],c[n],c[n-4]);break;case 68:i.commit(c[n],"",i.commitType.NORMAL,"");break;case 69:i.commit(c[n],"",i.commitType.NORMAL,c[n-2]);break;case 70:i.commit(c[n-2],"",i.commitType.NORMAL,c[n]);break;case 71:i.commit(c[n-2],"",c[n],"");break;case 72:i.commit(c[n],"",c[n-2],"");break;case 73:i.commit(c[n],c[n-2],i.commitType.NORMAL,"");break;case 74:i.commit(c[n-2],c[n],i.commitType.NORMAL,"");break;case 75:i.commit(c[n-4],"",c[n-2],c[n]);break;case 76:i.commit(c[n-4],"",c[n],c[n-2]);break;case 77:i.commit(c[n-2],"",c[n-4],c[n]);break;case 78:i.commit(c[n],"",c[n-4],c[n-2]);break;case 79:i.commit(c[n],"",c[n-2],c[n-4]);break;case 80:i.commit(c[n-2],"",c[n],c[n-4]);break;case 81:i.commit(c[n-4],c[n],c[n-2],"");break;case 82:i.commit(c[n-4],c[n-2],c[n],"");break;case 83:i.commit(c[n-2],c[n],c[n-4],"");break;case 84:i.commit(c[n],c[n-2],c[n-4],"");break;case 85:i.commit(c[n],c[n-4],c[n-2],"");break;case 86:i.commit(c[n-2],c[n-4],c[n],"");break;case 87:i.commit(c[n-4],c[n],i.commitType.NORMAL,c[n-2]);break;case 88:i.commit(c[n-4],c[n-2],i.commitType.NORMAL,c[n]);break;case 89:i.commit(c[n-2],c[n],i.commitType.NORMAL,c[n-4]);break;case 90:i.commit(c[n],c[n-2],i.commitType.NORMAL,c[n-4]);break;case 91:i.commit(c[n],c[n-4],i.commitType.NORMAL,c[n-2]);break;case 92:i.commit(c[n-2],c[n-4],i.commitType.NORMAL,c[n]);break;case 93:i.commit(c[n-6],c[n-4],c[n-2],c[n]);break;case 94:i.commit(c[n-6],c[n-4],c[n],c[n-2]);break;case 95:i.commit(c[n-6],c[n-2],c[n-4],c[n]);break;case 96:i.commit(c[n-6],c[n],c[n-4],c[n-2]);break;case 97:i.commit(c[n-6],c[n-2],c[n],c[n-4]);break;case 98:i.commit(c[n-6],c[n],c[n-2],c[n-4]);break;case 99:i.commit(c[n-4],c[n-6],c[n-2],c[n]);break;case 100:i.commit(c[n-4],c[n-6],c[n],c[n-2]);break;case 101:i.commit(c[n-2],c[n-6],c[n-4],c[n]);break;case 102:i.commit(c[n],c[n-6],c[n-4],c[n-2]);break;case 103:i.commit(c[n-2],c[n-6],c[n],c[n-4]);break;case 104:i.commit(c[n],c[n-6],c[n-2],c[n-4]);break;case 105:i.commit(c[n],c[n-4],c[n-2],c[n-6]);break;case 106:i.commit(c[n-2],c[n-4],c[n],c[n-6]);break;case 107:i.commit(c[n],c[n-2],c[n-4],c[n-6]);break;case 108:i.commit(c[n-2],c[n],c[n-4],c[n-6]);break;case 109:i.commit(c[n-4],c[n-2],c[n],c[n-6]);break;case 110:i.commit(c[n-4],c[n],c[n-2],c[n-6]);break;case 111:i.commit(c[n-2],c[n-4],c[n-6],c[n]);break;case 112:i.commit(c[n],c[n-4],c[n-6],c[n-2]);break;case 113:i.commit(c[n-2],c[n],c[n-6],c[n-4]);break;case 114:i.commit(c[n],c[n-2],c[n-6],c[n-4]);break;case 115:i.commit(c[n-4],c[n-2],c[n-6],c[n]);break;case 116:i.commit(c[n-4],c[n],c[n-6],c[n-2]);break;case 117:this.$="";break;case 118:this.$=c[n];break;case 119:this.$=i.commitType.NORMAL;break;case 120:this.$=i.commitType.REVERSE;break;case 121:this.$=i.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:e,7:r,13:i,47:a},{1:[3]},{3:7,4:2,5:e,7:r,13:i,47:a},{6:8,7:c,8:[1,9],9:[1,10],10:11,13:s},t(n,[2,124]),t(n,[2,125]),t(n,[2,126]),{1:[2,1]},{7:[1,13]},{6:14,7:c,10:11,13:s},{8:[1,15]},t(o,[2,9],{11:16,12:[1,17]}),t(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:c,10:11,13:s},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],37:[1,33],40:[1,32]},t(l,[2,7]),{1:[2,3]},{7:[1,36]},t(o,[2,10]),{4:37,7:r,13:i,47:a},t(o,[2,12]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),{20:[1,38]},{22:[1,39]},t(h,[2,18]),t(h,[2,19]),t(h,[2,20]),{27:40,33:m,46:y},t(h,[2,117],{41:43,32:[1,46],33:[1,48],35:[1,44],38:[1,45],42:[1,47]}),{27:49,33:m,46:y},{32:[1,50],35:[1,51]},{27:52,33:m,46:y},{1:[2,4]},t(o,[2,11]),t(h,[2,16]),t(h,[2,17]),t(h,[2,21]),t(u,[2,122]),t(u,[2,123]),t(h,[2,52]),{33:[1,53]},{39:54,43:p,44:g,45:b},{33:[1,58]},{33:[1,59]},t(h,[2,118]),t(h,[2,36],{32:[1,60],35:[1,62],38:[1,61]}),{33:[1,63]},{33:[1,64],36:[1,65]},t(h,[2,22],{29:[1,66]}),t(h,[2,53],{32:[1,68],38:[1,67],42:[1,69]}),t(h,[2,54],{32:[1,71],35:[1,70],42:[1,72]}),t(d,[2,119]),t(d,[2,120]),t(d,[2,121]),t(h,[2,57],{35:[1,73],38:[1,74],42:[1,75]}),t(h,[2,68],{32:[1,78],35:[1,76],38:[1,77]}),{33:[1,79]},{39:80,43:p,44:g,45:b},{33:[1,81]},t(h,[2,24],{34:[1,82],35:[1,83]}),{32:[1,84]},{32:[1,85]},{30:[1,86]},{39:87,43:p,44:g,45:b},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{33:[1,93]},{39:94,43:p,44:g,45:b},{33:[1,95]},{33:[1,96]},{39:97,43:p,44:g,45:b},{33:[1,98]},t(h,[2,37],{35:[1,100],38:[1,99]}),t(h,[2,38],{32:[1,102],35:[1,101]}),t(h,[2,39],{32:[1,103],38:[1,104]}),{33:[1,105]},{33:[1,106],36:[1,107]},{33:[1,108]},{33:[1,109]},t(h,[2,23]),t(h,[2,55],{32:[1,110],42:[1,111]}),t(h,[2,59],{38:[1,112],42:[1,113]}),t(h,[2,69],{32:[1,115],38:[1,114]}),t(h,[2,56],{32:[1,116],42:[1,117]}),t(h,[2,61],{35:[1,118],42:[1,119]}),t(h,[2,72],{32:[1,121],35:[1,120]}),t(h,[2,58],{38:[1,122],42:[1,123]}),t(h,[2,60],{35:[1,124],42:[1,125]}),t(h,[2,73],{35:[1,127],38:[1,126]}),t(h,[2,70],{32:[1,129],38:[1,128]}),t(h,[2,71],{32:[1,131],35:[1,130]}),t(h,[2,74],{35:[1,133],38:[1,132]}),{39:134,43:p,44:g,45:b},{33:[1,135]},{33:[1,136]},{33:[1,137]},{33:[1,138]},{39:139,43:p,44:g,45:b},t(h,[2,25],{35:[1,140]}),t(h,[2,26],{34:[1,141]}),t(h,[2,31],{34:[1,142]}),t(h,[2,29],{34:[1,143]}),t(h,[2,30],{34:[1,144]}),{33:[1,145]},{33:[1,146]},{39:147,43:p,44:g,45:b},{33:[1,148]},{39:149,43:p,44:g,45:b},{33:[1,150]},{33:[1,151]},{33:[1,152]},{33:[1,153]},{33:[1,154]},{33:[1,155]},{33:[1,156]},{39:157,43:p,44:g,45:b},{33:[1,158]},{33:[1,159]},{33:[1,160]},{39:161,43:p,44:g,45:b},{33:[1,162]},{39:163,43:p,44:g,45:b},{33:[1,164]},{33:[1,165]},{33:[1,166]},{39:167,43:p,44:g,45:b},{33:[1,168]},t(h,[2,43],{35:[1,169]}),t(h,[2,44],{38:[1,170]}),t(h,[2,42],{32:[1,171]}),t(h,[2,45],{35:[1,172]}),t(h,[2,40],{38:[1,173]}),t(h,[2,41],{32:[1,174]}),{33:[1,175],36:[1,176]},{33:[1,177]},{33:[1,178]},{33:[1,179]},{33:[1,180]},t(h,[2,66],{42:[1,181]}),t(h,[2,79],{32:[1,182]}),t(h,[2,67],{42:[1,183]}),t(h,[2,90],{38:[1,184]}),t(h,[2,80],{32:[1,185]}),t(h,[2,89],{38:[1,186]}),t(h,[2,65],{42:[1,187]}),t(h,[2,78],{32:[1,188]}),t(h,[2,64],{42:[1,189]}),t(h,[2,84],{35:[1,190]}),t(h,[2,77],{32:[1,191]}),t(h,[2,83],{35:[1,192]}),t(h,[2,63],{42:[1,193]}),t(h,[2,91],{38:[1,194]}),t(h,[2,62],{42:[1,195]}),t(h,[2,85],{35:[1,196]}),t(h,[2,86],{35:[1,197]}),t(h,[2,92],{38:[1,198]}),t(h,[2,76],{32:[1,199]}),t(h,[2,87],{38:[1,200]}),t(h,[2,75],{32:[1,201]}),t(h,[2,81],{35:[1,202]}),t(h,[2,82],{35:[1,203]}),t(h,[2,88],{38:[1,204]}),{33:[1,205]},{39:206,43:p,44:g,45:b},{33:[1,207]},{33:[1,208]},{39:209,43:p,44:g,45:b},{33:[1,210]},t(h,[2,27]),t(h,[2,32]),t(h,[2,28]),t(h,[2,33]),t(h,[2,34]),t(h,[2,35]),{33:[1,211]},{33:[1,212]},{33:[1,213]},{39:214,43:p,44:g,45:b},{33:[1,215]},{39:216,43:p,44:g,45:b},{33:[1,217]},{33:[1,218]},{33:[1,219]},{33:[1,220]},{33:[1,221]},{33:[1,222]},{33:[1,223]},{39:224,43:p,44:g,45:b},{33:[1,225]},{33:[1,226]},{33:[1,227]},{39:228,43:p,44:g,45:b},{33:[1,229]},{39:230,43:p,44:g,45:b},{33:[1,231]},{33:[1,232]},{33:[1,233]},{39:234,43:p,44:g,45:b},t(h,[2,46]),t(h,[2,48]),t(h,[2,47]),t(h,[2,49]),t(h,[2,51]),t(h,[2,50]),t(h,[2,107]),t(h,[2,108]),t(h,[2,105]),t(h,[2,106]),t(h,[2,110]),t(h,[2,109]),t(h,[2,114]),t(h,[2,113]),t(h,[2,112]),t(h,[2,111]),t(h,[2,116]),t(h,[2,115]),t(h,[2,104]),t(h,[2,103]),t(h,[2,102]),t(h,[2,101]),t(h,[2,99]),t(h,[2,100]),t(h,[2,98]),t(h,[2,97]),t(h,[2,96]),t(h,[2,95]),t(h,[2,93]),t(h,[2,94])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var r=Error(t);throw r.hash=e,r}},parse:function(t){var e=this,r=[0],i=[],a=[null],c=[],s=this.table,n="",o=0,l=0,h=c.slice.call(arguments,1),m=Object.create(this.lexer),y={yy:{}};for(var u in this.yy)Object.prototype.hasOwnProperty.call(this.yy,u)&&(y.yy[u]=this.yy[u]);m.setInput(t,y.yy),y.yy.lexer=m,y.yy.parser=this,void 0===m.yylloc&&(m.yylloc={});var p=m.yylloc;c.push(p);var g=m.options&&m.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,d,f,$,k,x,_,E,T={};;){if(d=r[r.length-1],this.defaultActions[d]?f=this.defaultActions[d]:(null==b&&(b=function(){var t;return"number"!=typeof(t=i.pop()||m.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}()),f=s[d]&&s[d][b]),void 0===f||!f.length||!f[0]){var M="";for(k in E=[],s[d])this.terminals_[k]&&k>2&&E.push("'"+this.terminals_[k]+"'");M=m.showPosition?"Parse error on line "+(o+1)+":\n"+m.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(M,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:p,expected:E})}if(f[0]instanceof Array&&f.length>1)throw Error("Parse Error: multiple actions possible at state: "+d+", token: "+b);switch(f[0]){case 1:r.push(b),a.push(m.yytext),c.push(m.yylloc),r.push(f[1]),b=null,l=m.yyleng,n=m.yytext,o=m.yylineno,p=m.yylloc;break;case 2:if(x=this.productions_[f[1]][1],T.$=a[a.length-x],T._$={first_line:c[c.length-(x||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(x||1)].first_column,last_column:c[c.length-1].last_column},g&&(T._$.range=[c[c.length-(x||1)].range[0],c[c.length-1].range[1]]),void 0!==($=this.performAction.apply(T,[n,l,o,y.yy,f[1],a,c].concat(h))))return $;x&&(r=r.slice(0,-1*x*2),a=a.slice(0,-1*x),c=c.slice(0,-1*x)),r.push(this.productions_[f[1]][0]),a.push(T.$),c.push(T._$),_=s[r[r.length-2]][r[r.length-1]],r.push(_);break;case 3:return!0}}return!0}};function $(){this.yy={}}return f.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack)for(var c in a)this[c]=a[c];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,r,i,a=this._currentRules(),c=0;c<a.length;c++)if((r=this._input.match(this.rules[a[c]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=c,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,a[c])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 30:case 34:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 40;case 12:return 32;case 13:return 38;case 14:return 42;case 15:return 43;case 16:return 44;case 17:return 45;case 18:return 35;case 19:return 28;case 20:return 29;case 21:return 37;case 22:return 31;case 23:return 34;case 24:return 26;case 25:case 26:return 9;case 27:return 8;case 28:return"CARET";case 29:this.begin("options");break;case 31:return 12;case 32:return 36;case 33:this.begin("string");break;case 35:return 33;case 36:return 30;case 37:return 46;case 38:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:parent:)/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[30,31],inclusive:!1},string:{rules:[34,35],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,33,36,37,38,39],inclusive:!0}}},$.prototype=f,f.Parser=$,new $}();c.parser=c;let s=(0,i.c)().gitGraph.mainBranchName,n=(0,i.c)().gitGraph.mainBranchOrder,o={},l=null,h={};h[s]={name:s,order:n};let m={};m[s]=l;let y=s,u="LR",p=0;function g(){return(0,i.y)({length:7})}let b={},d=function(t){if(void 0===m[t=i.e.sanitizeText(t,(0,i.c)())]){let e=Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}l=o[m[y=t]]};function f(t,e,r){let i=t.indexOf(e);-1===i?t.push(r):t.splice(i,1,r)}let $=function(){let t=Object.keys(o).map(function(t){return o[t]});return t.forEach(function(t){i.l.debug(t.id)}),t.sort((t,e)=>t.seq-e.seq),t},k={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},x={getConfig:()=>(0,i.c)().gitGraph,setDirection:function(t){u=t},setOptions:function(t){i.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{b=JSON.parse(t)}catch(t){i.l.error("error while parsing gitGraph options",t.message)}},getOptions:function(){return b},commit:function(t,e,r,a){i.l.debug("Entering commit:",t,e,r,a),e=i.e.sanitizeText(e,(0,i.c)()),t=i.e.sanitizeText(t,(0,i.c)()),a=i.e.sanitizeText(a,(0,i.c)());let c={id:e||p+"-"+g(),message:t,seq:p++,type:r||k.NORMAL,tag:a||"",parents:null==l?[]:[l.id],branch:y};l=c,o[c.id]=c,m[y]=c.id,i.l.debug("in pushCommit "+c.id)},branch:function(t,e){if(void 0===m[t=i.e.sanitizeText(t,(0,i.c)())])m[t]=null!=l?l.id:null,h[t]={name:t,order:e?parseInt(e,10):null},d(t),i.l.debug("in createBranch");else{let e=Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}},merge:function(t,e,r,a){t=i.e.sanitizeText(t,(0,i.c)()),e=i.e.sanitizeText(e,(0,i.c)());let c=o[m[y]],s=o[m[t]];if(y===t){let e=Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0!==c&&c){if(void 0===m[t]){let e=Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0!==s&&s){if(c===s){let e=Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==o[e]){let i=Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw i.hash={text:"merge "+t+e+r+a,token:"merge "+t+e+r+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+r+" "+a]},i}}else{let e=Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}}else{let e=Error('Incorrect usage of "merge". Current branch ('+y+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}let n={id:e||p+"-"+g(),message:"merged branch "+t+" into "+y,seq:p++,parents:[null==l?null:l.id,m[t]],branch:y,type:k.MERGE,customType:r,customId:!!e,tag:a||""};l=n,o[n.id]=n,m[y]=n.id,i.l.debug(m),i.l.debug("in mergeBranch")},cherryPick:function(t,e,r,a){if(i.l.debug("Entering cherryPick:",t,e,r),t=i.e.sanitizeText(t,(0,i.c)()),e=i.e.sanitizeText(e,(0,i.c)()),r=i.e.sanitizeText(r,(0,i.c)()),a=i.e.sanitizeText(a,(0,i.c)()),!t||void 0===o[t]){let r=Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let c=o[t],s=c.branch;if(a&&!(Array.isArray(c.parents)&&c.parents.includes(a)))throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");if(c.type===k.MERGE&&!a)throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!e||void 0===o[e]){if(s===y){let r=Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let n=o[m[y]];if(void 0===n||!n){let r=Error('Incorrect usage of "cherry-pick". Current branch ('+y+")has no commits");throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let h={id:p+"-"+g(),message:"cherry-picked "+c+" into "+y,seq:p++,parents:[null==l?null:l.id,c.id],branch:y,type:k.CHERRY_PICK,tag:r??`cherry-pick:${c.id}${c.type===k.MERGE?`|parent:${a}`:""}`};l=h,o[h.id]=h,m[y]=h.id,i.l.debug(m),i.l.debug("in cherryPick")}},checkout:d,prettyPrint:function(){i.l.debug(o),function t(e){let r=e.reduce((t,e)=>t.seq>e.seq?t:e,e[0]),a="";e.forEach(function(t){t===r?a+="	*":a+="	|"});let c=[a,r.id,r.seq];for(let t in m)m[t]===r.id&&c.push(t);if(i.l.debug(c.join(" ")),r.parents&&2==r.parents.length){let t=o[r.parents[0]];f(e,r,t),e.push(o[r.parents[1]])}else{if(0==r.parents.length)return;let t=o[r.parents];f(e,r,t)}t(e=function(t,e){let r=Object.create(null);return t.reduce((t,i)=>{let a=e(i);return r[a]||(r[a]=!0,t.push(i)),t},[])}(e,t=>t.id))}([$()[0]])},clear:function(){o={},l=null;let t=(0,i.c)().gitGraph.mainBranchName,e=(0,i.c)().gitGraph.mainBranchOrder;(m={})[t]=null,(h={})[t]={name:t,order:e},y=t,p=0,(0,i.v)()},getBranchesAsObjArray:function(){return Object.values(h).map((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)}).sort((t,e)=>t.order-e.order).map(({name:t})=>({name:t}))},getBranches:function(){return m},getCommits:function(){return o},getCommitsArray:$,getCurrentBranch:function(){return y},getDirection:function(){return u},getHead:function(){return l},setAccTitle:i.s,getAccTitle:i.g,getAccDescription:i.a,setAccDescription:i.b,setDiagramTitle:i.q,getDiagramTitle:i.t,commitType:k},_={},E={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},T={},M={},L=[],R=0,w="LR",I=()=>{T={},M={},_={},R=0,L=[],w="LR"},v=t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");for(let r of"string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[]){let t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=r.trim(),e.appendChild(t)}return e},A=t=>{let e="",r=0;return t.forEach(t=>{let i="TB"===w?M[t].y:M[t].x;i>=r&&(e=t,r=i)}),e||void 0},C=(t,e,r)=>{let a=(0,i.c)().gitGraph,c=t.append("g").attr("class","commit-bullets"),s=t.append("g").attr("class","commit-labels"),n=0;"TB"===w&&(n=30);let o=Object.keys(e).sort((t,r)=>e[t].seq-e[r].seq),l=a.parallelCommits;o.forEach(t=>{let i=e[t];if(l){if(i.parents.length){let t=A(i.parents);n="TB"===w?M[t].y+40:M[t].x+40}else n=0,"TB"===w&&(n=30)}let o=n+10,h="TB"===w?o:T[i.branch].pos,m="TB"===w?T[i.branch].pos:o;if(r){let t;let e=void 0!==i.customType&&""!==i.customType?i.customType:i.type;switch(e){case E.NORMAL:t="commit-normal";break;case E.REVERSE:t="commit-reverse";break;case E.HIGHLIGHT:t="commit-highlight";break;case E.MERGE:t="commit-merge";break;case E.CHERRY_PICK:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===E.HIGHLIGHT){let e=c.append("rect");e.attr("x",m-10),e.attr("y",h-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${i.id} commit-highlight${T[i.branch].index%8} ${t}-outer`),c.append("rect").attr("x",m-6).attr("y",h-6).attr("height",12).attr("width",12).attr("class",`commit ${i.id} commit${T[i.branch].index%8} ${t}-inner`)}else if(e===E.CHERRY_PICK)c.append("circle").attr("cx",m).attr("cy",h).attr("r",10).attr("class",`commit ${i.id} ${t}`),c.append("circle").attr("cx",m-3).attr("cy",h+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),c.append("circle").attr("cx",m+3).attr("cy",h+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),c.append("line").attr("x1",m+3).attr("y1",h+1).attr("x2",m).attr("y2",h-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`),c.append("line").attr("x1",m-3).attr("y1",h+1).attr("x2",m).attr("y2",h-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`);else{let r=c.append("circle");if(r.attr("cx",m),r.attr("cy",h),r.attr("r",i.type===E.MERGE?9:10),r.attr("class",`commit ${i.id} commit${T[i.branch].index%8}`),e===E.MERGE){let e=c.append("circle");e.attr("cx",m),e.attr("cy",h),e.attr("r",6),e.attr("class",`commit ${t} ${i.id} commit${T[i.branch].index%8}`)}e===E.REVERSE&&c.append("path").attr("d",`M ${m-5},${h-5}L${m+5},${h+5}M${m-5},${h+5}L${m+5},${h-5}`).attr("class",`commit ${t} ${i.id} commit${T[i.branch].index%8}`)}}if("TB"===w?M[i.id]={x:m,y:o}:M[i.id]={x:o,y:h},r){if(i.type!==E.CHERRY_PICK&&(i.customId&&i.type===E.MERGE||i.type!==E.MERGE)&&a.showCommitLabel){let t=s.append("g"),e=t.insert("rect").attr("class","commit-label-bkg"),r=t.append("text").attr("x",n).attr("y",h+25).attr("class","commit-label").text(i.id),c=r.node().getBBox();if(e.attr("x",o-c.width/2-2).attr("y",h+13.5).attr("width",c.width+4).attr("height",c.height+4),"TB"===w&&(e.attr("x",m-(c.width+16+5)).attr("y",h-12),r.attr("x",m-(c.width+16)).attr("y",h+c.height-12)),"TB"!==w&&r.attr("x",o-c.width/2),a.rotateCommitLabel){if("TB"===w)r.attr("transform","rotate(-45, "+m+", "+h+")"),e.attr("transform","rotate(-45, "+m+", "+h+")");else{let e=-7.5-(c.width+10)/25*9.5,r=10+c.width/25*8.5;t.attr("transform","translate("+e+", "+r+") rotate(-45, "+n+", "+h+")")}}}if(i.tag){let t=s.insert("polygon"),e=s.append("circle"),r=s.append("text").attr("y",h-16).attr("class","tag-label").text(i.tag),a=r.node().getBBox();r.attr("x",o-a.width/2);let c=a.height/2,l=h-19.2;t.attr("class","tag-label-bkg").attr("points",`
          ${n-a.width/2-2},${l+2}
          ${n-a.width/2-2},${l-2}
          ${o-a.width/2-4},${l-c-2}
          ${o+a.width/2+4},${l-c-2}
          ${o+a.width/2+4},${l+c+2}
          ${o-a.width/2-4},${l+c+2}`),e.attr("cx",n-a.width/2+2).attr("cy",l).attr("r",1.5).attr("class","tag-hole"),"TB"===w&&(t.attr("class","tag-label-bkg").attr("points",`
            ${m},${n+2}
            ${m},${n-2}
            ${m+10},${n-c-2}
            ${m+10+a.width+4},${n-c-2}
            ${m+10+a.width+4},${n+c+2}
            ${m+10},${n+c+2}`).attr("transform","translate(12,12) rotate(45, "+m+","+n+")"),e.attr("cx",m+2).attr("cy",n).attr("transform","translate(12,12) rotate(45, "+m+","+n+")"),r.attr("x",m+5).attr("y",n+3).attr("transform","translate(14,14) rotate(45, "+m+","+n+")"))}}(n+=50)>R&&(R=n)})},O=(t,e,r,i,a)=>{let c=("TB"===w?r.x<i.x:r.y<i.y)?e.branch:t.branch,s=t=>t.branch===c,n=r=>r.seq>t.seq&&r.seq<e.seq;return Object.values(a).some(t=>n(t)&&s(t))},S=(t,e,r=0)=>{let i=t+Math.abs(t-e)/2;if(r>5)return i;if(L.every(t=>Math.abs(t-i)>=10))return L.push(i),i;let a=Math.abs(t-e);return S(t,e-a/5,r+1)},P=(t,e,r,i)=>{let a;let c=M[e.id],s=M[r.id],n=O(e,r,c,s,i),o="",l="",h=0,m=0,y=T[r.branch].index;if(r.type===E.MERGE&&e.id!==r.parents[0]&&(y=T[e.branch].index),n){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10;let t=c.y<s.y?S(c.y,s.y):S(s.y,c.y),r=c.x<s.x?S(c.x,s.x):S(s.x,c.x);"TB"===w?c.x<s.x?a=`M ${c.x} ${c.y} L ${r-h} ${c.y} ${l} ${r} ${c.y+m} L ${r} ${s.y-h} ${o} ${r+m} ${s.y} L ${s.x} ${s.y}`:(y=T[e.branch].index,a=`M ${c.x} ${c.y} L ${r+h} ${c.y} ${o} ${r} ${c.y+m} L ${r} ${s.y-h} ${l} ${r-m} ${s.y} L ${s.x} ${s.y}`):c.y<s.y?a=`M ${c.x} ${c.y} L ${c.x} ${t-h} ${o} ${c.x+m} ${t} L ${s.x-h} ${t} ${l} ${s.x} ${t+m} L ${s.x} ${s.y}`:(y=T[e.branch].index,a=`M ${c.x} ${c.y} L ${c.x} ${t+h} ${l} ${c.x+m} ${t} L ${s.x-h} ${t} ${o} ${s.x} ${t-m} L ${s.x} ${s.y}`)}else o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,"TB"===w?(c.x<s.x&&(a=r.type===E.MERGE&&e.id!==r.parents[0]?`M ${c.x} ${c.y} L ${c.x} ${s.y-h} ${o} ${c.x+m} ${s.y} L ${s.x} ${s.y}`:`M ${c.x} ${c.y} L ${s.x-h} ${c.y} ${l} ${s.x} ${c.y+m} L ${s.x} ${s.y}`),c.x>s.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,a=r.type===E.MERGE&&e.id!==r.parents[0]?`M ${c.x} ${c.y} L ${c.x} ${s.y-h} ${l} ${c.x-m} ${s.y} L ${s.x} ${s.y}`:`M ${c.x} ${c.y} L ${s.x+h} ${c.y} ${o} ${s.x} ${c.y+m} L ${s.x} ${s.y}`),c.x===s.x&&(a=`M ${c.x} ${c.y} L ${s.x} ${s.y}`)):(c.y<s.y&&(a=r.type===E.MERGE&&e.id!==r.parents[0]?`M ${c.x} ${c.y} L ${s.x-h} ${c.y} ${l} ${s.x} ${c.y+m} L ${s.x} ${s.y}`:`M ${c.x} ${c.y} L ${c.x} ${s.y-h} ${o} ${c.x+m} ${s.y} L ${s.x} ${s.y}`),c.y>s.y&&(a=r.type===E.MERGE&&e.id!==r.parents[0]?`M ${c.x} ${c.y} L ${s.x-h} ${c.y} ${o} ${s.x} ${c.y-m} L ${s.x} ${s.y}`:`M ${c.x} ${c.y} L ${c.x} ${s.y+h} ${l} ${c.x+m} ${s.y} L ${s.x} ${s.y}`),c.y===s.y&&(a=`M ${c.x} ${c.y} L ${s.x} ${s.y}`));t.append("path").attr("d",a).attr("class","arrow arrow"+y%8)},G=(t,e)=>{let r=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach(t=>{let i=e[t];i.parents&&i.parents.length>0&&i.parents.forEach(t=>{P(r,e[t],i,e)})})},B=(t,e)=>{let r=(0,i.c)().gitGraph,a=t.append("g");e.forEach((t,e)=>{let i=e%8,c=T[t.name].pos,s=a.append("line");s.attr("x1",0),s.attr("y1",c),s.attr("x2",R),s.attr("y2",c),s.attr("class","branch branch"+i),"TB"===w&&(s.attr("y1",30),s.attr("x1",c),s.attr("y2",R),s.attr("x2",c)),L.push(c);let n=v(t.name),o=a.insert("rect"),l=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+i);l.node().appendChild(n);let h=n.getBBox();o.attr("class","branchLabelBkg label"+i).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(!0===r.rotateCommitLabel?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),l.attr("transform","translate("+(-h.width-14-(!0===r.rotateCommitLabel?30:0))+", "+(c-h.height/2-1)+")"),"TB"===w&&(o.attr("x",c-h.width/2-10).attr("y",0),l.attr("transform","translate("+(c-h.width/2-5)+", 0)")),"TB"!==w&&o.attr("transform","translate(-19, "+(c-h.height/2)+")")})},N={parser:c,db:x,renderer:{draw:function(t,e,r,c){I();let s=(0,i.c)(),n=s.gitGraph;i.l.debug("in gitgraph renderer",t+"\n","id:",e,r),_=c.db.getCommits();let o=c.db.getBranchesAsObjArray();w=c.db.getDirection();let l=(0,a.Ys)(`[id="${e}"]`),h=0;o.forEach((t,e)=>{let r=v(t.name),i=l.append("g"),a=i.insert("g").attr("class","branchLabel"),c=a.insert("g").attr("class","label branch-label");c.node().appendChild(r);let s=r.getBBox();T[t.name]={pos:h,index:e},h+=50+(n.rotateCommitLabel?40:0)+("TB"===w?s.width/2:0),c.remove(),a.remove(),i.remove()}),C(l,_,!1),n.showBranches&&B(l,o),G(l,_),C(l,_,!0),i.u.insertTitle(l,"gitTitleText",n.titleTopMargin,c.db.getDiagramTitle()),(0,i.z)(void 0,l,n.diagramPadding,n.useMaxWidth??s.useMaxWidth)}},styles:t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`}}}]);