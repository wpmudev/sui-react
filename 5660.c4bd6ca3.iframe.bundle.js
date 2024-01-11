/*! For license information please see 5660.c4bd6ca3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[5660],{"./node_modules/prismjs/prism.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Prism=function(_self){var lang=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,uniqueId=0,plainTextGrammar={},_={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function encode(tokens){return tokens instanceof Token?new Token(tokens.type,encode(tokens.content),tokens.alias):Array.isArray(tokens)?tokens.map(encode):tokens.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(obj){return obj.__id||Object.defineProperty(obj,"__id",{value:++uniqueId}),obj.__id},clone:function deepClone(o,visited){var clone,id;switch(visited=visited||{},_.util.type(o)){case"Object":if(id=_.util.objId(o),visited[id])return visited[id];for(var key in clone={},visited[id]=clone,o)o.hasOwnProperty(key)&&(clone[key]=deepClone(o[key],visited));return clone;case"Array":return id=_.util.objId(o),visited[id]?visited[id]:(clone=[],visited[id]=clone,o.forEach((function(v,i){clone[i]=deepClone(v,visited)})),clone);default:return o}},getLanguage:function(element){for(;element;){var m=lang.exec(element.className);if(m)return m[1].toLowerCase();element=element.parentElement}return"none"},setLanguage:function(element,language){element.className=element.className.replace(RegExp(lang,"gi"),""),element.classList.add("language-"+language)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(err){var src=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack)||[])[1];if(src){var scripts=document.getElementsByTagName("script");for(var i in scripts)if(scripts[i].src==src)return scripts[i]}return null}},isActive:function(element,className,defaultActivation){for(var no="no-"+className;element;){var classList=element.classList;if(classList.contains(className))return!0;if(classList.contains(no))return!1;element=element.parentElement}return!!defaultActivation}},languages:{plain:plainTextGrammar,plaintext:plainTextGrammar,text:plainTextGrammar,txt:plainTextGrammar,extend:function(id,redef){var lang=_.util.clone(_.languages[id]);for(var key in redef)lang[key]=redef[key];return lang},insertBefore:function(inside,before,insert,root){var grammar=(root=root||_.languages)[inside],ret={};for(var token in grammar)if(grammar.hasOwnProperty(token)){if(token==before)for(var newToken in insert)insert.hasOwnProperty(newToken)&&(ret[newToken]=insert[newToken]);insert.hasOwnProperty(token)||(ret[token]=grammar[token])}var old=root[inside];return root[inside]=ret,_.languages.DFS(_.languages,(function(key,value){value===old&&key!=inside&&(this[key]=ret)})),ret},DFS:function DFS(o,callback,type,visited){visited=visited||{};var objId=_.util.objId;for(var i in o)if(o.hasOwnProperty(i)){callback.call(o,i,o[i],type||i);var property=o[i],propertyType=_.util.type(property);"Object"!==propertyType||visited[objId(property)]?"Array"!==propertyType||visited[objId(property)]||(visited[objId(property)]=!0,DFS(property,callback,i,visited)):(visited[objId(property)]=!0,DFS(property,callback,null,visited))}}},plugins:{},highlightAll:function(async,callback){_.highlightAllUnder(document,async,callback)},highlightAllUnder:function(container,async,callback){var env={callback,container,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",env),env.elements=Array.prototype.slice.apply(env.container.querySelectorAll(env.selector)),_.hooks.run("before-all-elements-highlight",env);for(var element,i=0;element=env.elements[i++];)_.highlightElement(element,!0===async,env.callback)},highlightElement:function(element,async,callback){var language=_.util.getLanguage(element),grammar=_.languages[language];_.util.setLanguage(element,language);var parent=element.parentElement;parent&&"pre"===parent.nodeName.toLowerCase()&&_.util.setLanguage(parent,language);var env={element,language,grammar,code:element.textContent};function insertHighlightedCode(highlightedCode){env.highlightedCode=highlightedCode,_.hooks.run("before-insert",env),env.element.innerHTML=env.highlightedCode,_.hooks.run("after-highlight",env),_.hooks.run("complete",env),callback&&callback.call(env.element)}if(_.hooks.run("before-sanity-check",env),(parent=env.element.parentElement)&&"pre"===parent.nodeName.toLowerCase()&&!parent.hasAttribute("tabindex")&&parent.setAttribute("tabindex","0"),!env.code)return _.hooks.run("complete",env),void(callback&&callback.call(env.element));if(_.hooks.run("before-highlight",env),env.grammar)if(async&&_self.Worker){var worker=new Worker(_.filename);worker.onmessage=function(evt){insertHighlightedCode(evt.data)},worker.postMessage(JSON.stringify({language:env.language,code:env.code,immediateClose:!0}))}else insertHighlightedCode(_.highlight(env.code,env.grammar,env.language));else insertHighlightedCode(_.util.encode(env.code))},highlight:function(text,grammar,language){var env={code:text,grammar,language};if(_.hooks.run("before-tokenize",env),!env.grammar)throw new Error('The language "'+env.language+'" has no grammar.');return env.tokens=_.tokenize(env.code,env.grammar),_.hooks.run("after-tokenize",env),Token.stringify(_.util.encode(env.tokens),env.language)},tokenize:function(text,grammar){var rest=grammar.rest;if(rest){for(var token in rest)grammar[token]=rest[token];delete grammar.rest}var tokenList=new LinkedList;return addAfter(tokenList,tokenList.head,text),matchGrammar(text,tokenList,grammar,tokenList.head,0),function toArray(list){var array=[],node=list.head.next;for(;node!==list.tail;)array.push(node.value),node=node.next;return array}(tokenList)},hooks:{all:{},add:function(name,callback){var hooks=_.hooks.all;hooks[name]=hooks[name]||[],hooks[name].push(callback)},run:function(name,env){var callbacks=_.hooks.all[name];if(callbacks&&callbacks.length)for(var callback,i=0;callback=callbacks[i++];)callback(env)}},Token};function Token(type,content,alias,matchedStr){this.type=type,this.content=content,this.alias=alias,this.length=0|(matchedStr||"").length}function matchPattern(pattern,pos,text,lookbehind){pattern.lastIndex=pos;var match=pattern.exec(text);if(match&&lookbehind&&match[1]){var lookbehindLength=match[1].length;match.index+=lookbehindLength,match[0]=match[0].slice(lookbehindLength)}return match}function matchGrammar(text,tokenList,grammar,startNode,startPos,rematch){for(var token in grammar)if(grammar.hasOwnProperty(token)&&grammar[token]){var patterns=grammar[token];patterns=Array.isArray(patterns)?patterns:[patterns];for(var j=0;j<patterns.length;++j){if(rematch&&rematch.cause==token+","+j)return;var patternObj=patterns[j],inside=patternObj.inside,lookbehind=!!patternObj.lookbehind,greedy=!!patternObj.greedy,alias=patternObj.alias;if(greedy&&!patternObj.pattern.global){var flags=patternObj.pattern.toString().match(/[imsuy]*$/)[0];patternObj.pattern=RegExp(patternObj.pattern.source,flags+"g")}for(var pattern=patternObj.pattern||patternObj,currentNode=startNode.next,pos=startPos;currentNode!==tokenList.tail&&!(rematch&&pos>=rematch.reach);pos+=currentNode.value.length,currentNode=currentNode.next){var str=currentNode.value;if(tokenList.length>text.length)return;if(!(str instanceof Token)){var match,removeCount=1;if(greedy){if(!(match=matchPattern(pattern,pos,text,lookbehind))||match.index>=text.length)break;var from=match.index,to=match.index+match[0].length,p=pos;for(p+=currentNode.value.length;from>=p;)p+=(currentNode=currentNode.next).value.length;if(pos=p-=currentNode.value.length,currentNode.value instanceof Token)continue;for(var k=currentNode;k!==tokenList.tail&&(p<to||"string"==typeof k.value);k=k.next)removeCount++,p+=k.value.length;removeCount--,str=text.slice(pos,p),match.index-=pos}else if(!(match=matchPattern(pattern,0,str,lookbehind)))continue;from=match.index;var matchStr=match[0],before=str.slice(0,from),after=str.slice(from+matchStr.length),reach=pos+str.length;rematch&&reach>rematch.reach&&(rematch.reach=reach);var removeFrom=currentNode.prev;if(before&&(removeFrom=addAfter(tokenList,removeFrom,before),pos+=before.length),removeRange(tokenList,removeFrom,removeCount),currentNode=addAfter(tokenList,removeFrom,new Token(token,inside?_.tokenize(matchStr,inside):matchStr,alias,matchStr)),after&&addAfter(tokenList,currentNode,after),removeCount>1){var nestedRematch={cause:token+","+j,reach};matchGrammar(text,tokenList,grammar,currentNode.prev,pos,nestedRematch),rematch&&nestedRematch.reach>rematch.reach&&(rematch.reach=nestedRematch.reach)}}}}}}function LinkedList(){var head={value:null,prev:null,next:null},tail={value:null,prev:head,next:null};head.next=tail,this.head=head,this.tail=tail,this.length=0}function addAfter(list,node,value){var next=node.next,newNode={value,prev:node,next};return node.next=newNode,next.prev=newNode,list.length++,newNode}function removeRange(list,node,count){for(var next=node.next,i=0;i<count&&next!==list.tail;i++)next=next.next;node.next=next,next.prev=node,list.length-=i}if(_self.Prism=_,Token.stringify=function stringify(o,language){if("string"==typeof o)return o;if(Array.isArray(o)){var s="";return o.forEach((function(e){s+=stringify(e,language)})),s}var env={type:o.type,content:stringify(o.content,language),tag:"span",classes:["token",o.type],attributes:{},language},aliases=o.alias;aliases&&(Array.isArray(aliases)?Array.prototype.push.apply(env.classes,aliases):env.classes.push(aliases)),_.hooks.run("wrap",env);var attributes="";for(var name in env.attributes)attributes+=" "+name+'="'+(env.attributes[name]||"").replace(/"/g,"&quot;")+'"';return"<"+env.tag+' class="'+env.classes.join(" ")+'"'+attributes+">"+env.content+"</"+env.tag+">"},!_self.document)return _self.addEventListener?(_.disableWorkerMessageHandler||_self.addEventListener("message",(function(evt){var message=JSON.parse(evt.data),lang=message.language,code=message.code,immediateClose=message.immediateClose;_self.postMessage(_.highlight(code,_.languages[lang],lang)),immediateClose&&_self.close()}),!1),_):_;var script=_.util.currentScript();function highlightAutomaticallyCallback(){_.manual||_.highlightAll()}if(script&&(_.filename=script.src,script.hasAttribute("data-manual")&&(_.manual=!0)),!_.manual){var readyState=document.readyState;"loading"===readyState||"interactive"===readyState&&script&&script.defer?document.addEventListener("DOMContentLoaded",highlightAutomaticallyCallback):window.requestAnimationFrame?window.requestAnimationFrame(highlightAutomaticallyCallback):window.setTimeout(highlightAutomaticallyCallback,16)}return _}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});module.exports&&(module.exports=Prism),void 0!==__webpack_require__.g&&(__webpack_require__.g.Prism=Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(env){"entity"===env.type&&(env.attributes.title=env.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function addInlined(tagName,lang){var includedCdataInside={};includedCdataInside["language-"+lang]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[lang]},includedCdataInside.cdata=/^<!\[CDATA\[|\]\]>$/i;var inside={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:includedCdataInside}};inside["language-"+lang]={pattern:/[\s\S]+/,inside:Prism.languages[lang]};var def={};def[tagName]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return tagName})),"i"),lookbehind:!0,greedy:!0,inside},Prism.languages.insertBefore("markup","cdata",def)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(attrName,lang){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+attrName+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[lang,"language-"+lang],inside:Prism.languages[lang]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(Prism){var string=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+string.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+string.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+string.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+string.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:string,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css;var markup=Prism.languages.markup;markup&&(markup.tag.addInlined("style","css"),markup.tag.addAttribute("style","css"))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,function(){if(void 0!==Prism&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var EXTENSIONS={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},SELECTOR='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';Prism.hooks.add("before-highlightall",(function(env){env.selector+=", "+SELECTOR})),Prism.hooks.add("before-sanity-check",(function(env){var pre=env.element;if(pre.matches(SELECTOR)){env.code="",pre.setAttribute("data-src-status","loading");var code=pre.appendChild(document.createElement("CODE"));code.textContent="Loading…";var src=pre.getAttribute("data-src"),language=env.language;if("none"===language){var extension=(/\.(\w+)$/.exec(src)||[,"none"])[1];language=EXTENSIONS[extension]||extension}Prism.util.setLanguage(code,language),Prism.util.setLanguage(pre,language);var autoloader=Prism.plugins.autoloader;autoloader&&autoloader.loadLanguages(language),function loadFile(src,success,error){var xhr=new XMLHttpRequest;xhr.open("GET",src,!0),xhr.onreadystatechange=function(){4==xhr.readyState&&(xhr.status<400&&xhr.responseText?success(xhr.responseText):xhr.status>=400?error("✖ Error "+xhr.status+" while fetching file: "+xhr.statusText):error("✖ Error: File does not exist or is empty"))},xhr.send(null)}(src,(function(text){pre.setAttribute("data-src-status","loaded");var range=function parseRange(range){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range||"");if(m){var start=Number(m[1]),comma=m[2],end=m[3];return comma?end?[start,Number(end)]:[start,void 0]:[start,start]}}(pre.getAttribute("data-range"));if(range){var lines=text.split(/\r\n?|\n/g),start=range[0],end=null==range[1]?lines.length:range[1];start<0&&(start+=lines.length),start=Math.max(0,Math.min(start-1,lines.length)),end<0&&(end+=lines.length),end=Math.max(0,Math.min(end,lines.length)),text=lines.slice(start,end).join("\n"),pre.hasAttribute("data-start")||pre.setAttribute("data-start",String(start+1))}code.textContent=text,Prism.highlightElement(code)}),(function(error){pre.setAttribute("data-src-status","failed"),code.textContent=error}))}})),Prism.plugins.fileHighlight={highlight:function highlight(container){for(var element,elements=(container||document).querySelectorAll(SELECTOR),i=0;element=elements[i++];)Prism.highlightElement(element)}};var logged=!1;Prism.fileHighlight=function(){logged||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),logged=!0),Prism.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}}]);