"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Migrating from ink! 3.x to 4.0",slug:"/getting-started/migrating-from-ink-3-to-4"},i=void 0,l={unversionedId:"getting-started/migrating-from-ink-3-to-4",id:"version-4.0.0-alpha.1/getting-started/migrating-from-ink-3-to-4",title:"Migrating from ink! 3.x to 4.0",description:"We've made a couple of breaking changes from ink! 3.x to ink! 4.0.",source:"@site/versioned_docs/version-4.0.0-alpha.1/getting-started/migrating-from-ink-3-to-4.md",sourceDirName:"getting-started",slug:"/getting-started/migrating-from-ink-3-to-4",permalink:"/4.0.0-alpha.1/getting-started/migrating-from-ink-3-to-4",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/getting-started/migrating-from-ink-3-to-4.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Migrating from ink! 3.x to 4.0",slug:"/getting-started/migrating-from-ink-3-to-4"},sidebar:"reference",previous:{title:"Troubleshooting",permalink:"/4.0.0-alpha.1/getting-started/troubleshooting"},next:{title:"Contract Template",permalink:"/4.0.0-alpha.1/basics/contract-template"}},s={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"<code>cargo-contract</code> 2.0",id:"cargo-contract-20",level:2},{value:"Rust <code>stable</code> instead of <code>nightly</code>",id:"rust-stable-instead-of-nightly",level:2},{value:"New entrance <code>ink</code> crate",id:"new-entrance-ink-crate",level:2},{value:"Migration",id:"migration",level:3},{value:"Storage  API + Layout",id:"storage--api--layout",level:2},{value:"Migration",id:"migration-1",level:3},{value:"Removal of <code>wee-alloc</code> support",id:"removal-of-wee-alloc-support",level:2},{value:"Removal of <code>eth_compatibility</code> crate",id:"removal-of-eth_compatibility-crate",level:2},{value:"<code>ink_storage::Mapping</code>",id:"ink_storagemapping",level:2},{value:"Storage functions in <code>ink_env</code>",id:"storage-functions-in-ink_env",level:2},{value:"Removal of <code>ink_env::random</code> function",id:"removal-of-ink_envrandom-function",level:2},{value:"Constructors can now return <code>Result&lt;Self, MyContractError&gt;</code>",id:"constructors-can-now-return-resultself-mycontracterror",level:2},{value:"Chain extension&#39;s <code>returns_result</code> removed",id:"chain-extensions-returns_result-removed",level:2},{value:"Contract Metadata (ABI)",id:"contract-metadata-abi",level:2},{value:"Add support for language level errors (<code>LangError</code>)",id:"add-support-for-language-level-errors-langerror",level:3},{value:"Version field",id:"version-field",level:3},{value:"The Storage Layout (<code>storage</code>)",id:"the-storage-layout-storage",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've made a couple of breaking changes from ink! 3.x to ink! 4.0.\nOn this page we outline how you can migrate existing clients and\ncontracts from 3.x to 4.0."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This migration guide is only for your code base!"),(0,r.kt)("p",{parentName:"admonition"},"If you have an existing contract on-chain you cannot just\nupgrade the code on-chain \u2012 you also have to migrate your data,\nsince the way ink! 4.0 stores data and reads it (i.e. the storage\nlayout) changes from ink! 3.x to 4.0.")),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"ink! 4.0 is compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stable Rust >= 1.63.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scale")," >=3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scale-info")," >= 2.3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," >= ",(0,r.kt)("inlineCode",{parentName:"li"},"polkadot-v0.9.37")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"substrate-contracts-node")," >= ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.24.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"polkadot-js/api")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"polkadot-js/api-contract")," >= 9.10.2")),(0,r.kt)("h2",{id:"cargo-contract-20"},(0,r.kt)("inlineCode",{parentName:"h2"},"cargo-contract")," 2.0"),(0,r.kt)("p",null,"Together with ink! 4.0 we've released ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," 2.0.\nYou have to use this latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," for ink! 4.0\ncontracts.\nYou can upgrade via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"cargo install cargo-contract --force --version 2\n")),(0,r.kt)("p",null,"Make sure that e.g. your CI also uses ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," 2 with ink! 4.\nIf you have wrapper scripts around ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," you should\nensure that this version is enforced, otherwise users will get an error."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," no longer requires ",(0,r.kt)("inlineCode",{parentName:"p"},"binaryen")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm-opt")," as an\nexternal dependency. We required those because of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm-opt")," tool\n(which is part of ",(0,r.kt)("inlineCode",{parentName:"p"},"binaryen"),"). Fortunately we were able to find a way of\ninstalling ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm-opt")," now as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," installation\nprocess.")),(0,r.kt)("h2",{id:"rust-stable-instead-of-nightly"},"Rust ",(0,r.kt)("inlineCode",{parentName:"h2"},"stable")," instead of ",(0,r.kt)("inlineCode",{parentName:"h2"},"nightly")),(0,r.kt)("p",null,"ink! 4.0 and ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," Rust now.\nThis means no more ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo +nightly contract")," is required, you\ncan just use a stable Rust toolchain now (>= Rust 1.63)."),(0,r.kt)("h2",{id:"new-entrance-ink-crate"},"New entrance ",(0,r.kt)("inlineCode",{parentName:"h2"},"ink")," crate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_lang")," crate has been replaced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1223"},"#1223"),"\nby a new top level ",(0,r.kt)("inlineCode",{parentName:"p"},"ink")," crate. All existing sub-crates are reexported and should be used via\nthe new ",(0,r.kt)("inlineCode",{parentName:"p"},"ink")," crate, so e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::env")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env"),". Contract authors should now import\nthe top level ",(0,r.kt)("inlineCode",{parentName:"p"},"ink")," crate instead of the individual crates."),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," Replace all individual ",(0,r.kt)("inlineCode",{parentName:"li"},"ink_*")," crate dependencies with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ink")," crate."),(0,r.kt)("li",{parentName:"ul"},"In the contract source:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Remove the commonly used ",(0,r.kt)("inlineCode",{parentName:"li"},"use ink_lang as ink")," idiom."),(0,r.kt)("li",{parentName:"ul"},"Replace all usages of individual crates with reexports, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ink_env")," \u279c ",(0,r.kt)("inlineCode",{parentName:"li"},"ink::env"),".")))),(0,r.kt)("h2",{id:"storage--api--layout"},"Storage  API + Layout"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1331"},"#1331")," the way ",(0,r.kt)("inlineCode",{parentName:"p"},"ink!")," reads and writes\nto a contract's storage changed. Storage keys are generated at compile-time, and user facing\nabstractions which determine how contract data is laid out in storage are different now."),(0,r.kt)("h3",{id:"migration-1"},"Migration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize ",(0,r.kt)("inlineCode",{parentName:"li"},"Mapping")," fields with ",(0,r.kt)("inlineCode",{parentName:"li"},"Mapping::default()")," instead of  ",(0,r.kt)("inlineCode",{parentName:"li"},"ink_lang::utils::initialize_contract")," in\nconstructors. See ",(0,r.kt)("a",{parentName:"li",href:"./examples/erc20/lib.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"erc20"))," and other examples which use a ",(0,r.kt)("inlineCode",{parentName:"li"},"Mapping"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpreadAllocate"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SpreadLayout"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PackedLayout"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PackedAllocate")," have been removed.\nIt's best to see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures/ink/blob/feature/storage-docs/examples/complex-storage-structures/README.md"},"the documentation"),"\nof the new storage abstration for how to migrate.")),(0,r.kt)("h2",{id:"removal-of-wee-alloc-support"},"Removal of ",(0,r.kt)("inlineCode",{parentName:"h2"},"wee-alloc")," support"),(0,r.kt)("p",null,"ink! uses a bump allocator by default, additionally we supported another allocator\n(",(0,r.kt)("inlineCode",{parentName:"p"},"wee-alloc"),") through a feature flag. ",(0,r.kt)("inlineCode",{parentName:"p"},"wee-alloc")," is no longer maintained and\nwe removed support for it in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1403"},"#1403"),"."),(0,r.kt)("h2",{id:"removal-of-eth_compatibility-crate"},"Removal of ",(0,r.kt)("inlineCode",{parentName:"h2"},"eth_compatibility")," crate"),(0,r.kt)("p",null,"As part of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1233"},"#1233"),"\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_compatibility")," crate was removed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ecdsa_to_eth_address()"),"\nfunction from it can now be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.ecdsa_to_eth_address.html"},"in the ",(0,r.kt)("inlineCode",{parentName:"a"},"ink_env")," crate"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"ink_env::ecdsa_to_eth_address(&pub_key, &mut output);\n")),(0,r.kt)("h2",{id:"ink_storagemapping"},(0,r.kt)("inlineCode",{parentName:"h2"},"ink_storage::Mapping")),(0,r.kt)("p",null,"The function signature of ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::insert(key, val)")," changed to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping::insert(key, val) -> Option<u32>"),".\nThe return value is the size of the pre-existing value at the specified key if any (in bytes)."),(0,r.kt)("p",null,"Two new useful functions were added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_storage/4.0.0-beta/ink_storage/struct.Mapping.html#method.contains"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping::contains(key)")),"\nin ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/pull/1224"},"#1224"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_storage/4.0.0-beta/ink_storage/struct.Mapping.html#method.take"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping::take()")),"\nto get a value while removing it from storage in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/pull/1461"},"#1461"),".")),(0,r.kt)("p",null,"In case you were working around those two functions you can now\nuse them directly; they are more gas-efficient than e.g. executing\na ",(0,r.kt)("inlineCode",{parentName:"p"},"get(key).is_none()")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"contains(key)"),"."),(0,r.kt)("h2",{id:"storage-functions-in-ink_env"},"Storage functions in ",(0,r.kt)("inlineCode",{parentName:"h2"},"ink_env")),(0,r.kt)("p",null,"As part of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1224"},"#1224")," the return type\nof ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.set_contract_storage.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ink_env::set_contract_storage()")),"\nwas changed to return an ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<u32>")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,r.kt)("p",null,"A new function ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.take_contract_storage.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ink_env::take_contract_storage")),"\nwas introduced."),(0,r.kt)("h2",{id:"removal-of-ink_envrandom-function"},"Removal of ",(0,r.kt)("inlineCode",{parentName:"h2"},"ink_env::random")," function"),(0,r.kt)("p",null,"We had to remove the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ink_env::random")),"\nfunction (in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1442"},"#1442"),").\nThis function allowed contract developers getting random entropy.\nThere is unfortunately no way how this can be done safely enough\nwith built-in Substrate primitives on-chain currently. We're\nfollowing the recommendation of our auditors to remove it."),(0,r.kt)("p",null,"The alternative right now is to provide random entropy off-chain to\nthe contract, to use a random entropy oracle, or to have a chain-extension\nthat does this, in case the chain has a possibility to do so."),(0,r.kt)("p",null,"We hope to bring this function back in a future release of ink!, the\nbest hope right now is that it could come back with\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-consensus#badass-babe-sassafras"},"Sassafras"),",\na block production protocol for future versions of Polkadot."),(0,r.kt)("p",null,"If you're interested in more information on this check out\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/13204"},"the Substrate PR")," which\ndeprecated the random interface of ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"."),(0,r.kt)("h2",{id:"constructors-can-now-return-resultself-mycontracterror"},"Constructors can now return ",(0,r.kt)("inlineCode",{parentName:"h2"},"Result<Self, MyContractError>")),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1446"},"#1446")," we introduced\nthe possibility for constructors to return either ",(0,r.kt)("inlineCode",{parentName:"p"},"Self")," (as usual) or\n",(0,r.kt)("inlineCode",{parentName:"p"},"Result<Self, MyContractError>"),"."),(0,r.kt)("p",null,"This enables contract developers to bubble up encoded error objects to\nclients/frontends about a failure. In ink! 3.x it was only possible to\npanic in the constructor in case an error occurred, resulting in loss\nof this information."),(0,r.kt)("h2",{id:"chain-extensions-returns_result-removed"},"Chain extension's ",(0,r.kt)("inlineCode",{parentName:"h2"},"returns_result")," removed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"returns_result")," flag has been removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(extension = \u2026)]")," attribute in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1569"},"#1569"),".\nWe now infer this information at compile time. If ",(0,r.kt)("inlineCode",{parentName:"p"},"handle_status")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),",\nthe return type will still be wrapped into ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," as before."),(0,r.kt)("h2",{id:"contract-metadata-abi"},"Contract Metadata (ABI)"),(0,r.kt)("p",null,"The most detailed way to grasp what changed is to look at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-docs/pull/138"},"this PR"),", which\nupdated the metadata page in our documentation."),(0,r.kt)("h3",{id:"add-support-for-language-level-errors-langerror"},"Add support for language level errors (",(0,r.kt)("inlineCode",{parentName:"h3"},"LangError"),")"),(0,r.kt)("p",null,"Under the hood, ink! now generates code that results in each message\nand constructor returning a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<Message::Output, LangError>")," (or\nfor constructors ",(0,r.kt)("inlineCode",{parentName:"p"},"Result<Constructor::Output, LangError>"),").\nThis happens even if the message/constructor doesn't have a return type,\nwe default to the unit type ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," in that case."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink/4.0.0-beta/ink/enum.LangError.html"},(0,r.kt)("inlineCode",{parentName:"a"},"LangError")),"\nis a type of error which doesn't originate from the contract itself,\nnor from the underlying execution environment (so the Contracts pallet\nin this case)."),(0,r.kt)("p",null,"An example of where this would arise is if a caller tries to use a non-existent message\nselector for a contract. Previously, the contract would trap and not allow the caller to\ndo any sort of error handling if it encountered a non-existent selector."),(0,r.kt)("p",null,"This change doesn't affect how you write a contract! It affects clients and\nfrontends though, since it breaks the API in two ways:"),(0,r.kt)("p",null,"first, all contract messages now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," return type, and second a new field,\n",(0,r.kt)("inlineCode",{parentName:"p"},"lang_error"),", will be introduced as part of the contract spec. The second change allows\nother languages (such as Solang) to use an equivalent ",(0,r.kt)("inlineCode",{parentName:"p"},"LangError"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here for a snippet of the new metadata for the Flipper contract."),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"messages": [\n  {\n    "args": [],\n    "docs": [\n      " Flips the current value of the Flipper\'s boolean."\n    ],\n    "label": "flip",\n    "mutates": true,\n    "payable": false,\n    "returnType": {\n      "displayName": [\n        "ink",\n        "MessageResult"\n      ],\n      "type": 1\n    },\n    "selector": "0x633aa551"\n  }],\n"lang_error": {\n  "displayName": [\n    "ink",\n    "LangError"\n  ],\n  "type": 3\n},\n{\n  "id": 3,\n  "type": {\n    "def": {\n      "variant": {\n        "variants": [\n          {\n            "index": 1,\n            "name": "CouldNotReadInput"\n          }\n        ]\n      }\n    },\n    "path": [\n      "ink_primitives",\n      "LangError"\n    ]\n  }\n}\n\n')))),(0,r.kt)("h3",{id:"version-field"},"Version field"),(0,r.kt)("p",null,"As part of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1313"},"#1313")," the ink! ABI was\nchanged to have a proper version field as part of the ink! metadata object.\nThis enables querying the ABI version in a less-ambiguous way."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"source": {...},\n"contract": {...},\n"V3": {\n  "spec": {...},\n  "storage": {...},\n  "types": {...}\n}\n\n')),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": {...},\n  "contract": {...},\n  "spec": {...},\n  "storage": {...},\n  "types": [...],\n  "version": "4"\n}\n')),(0,r.kt)("h3",{id:"the-storage-layout-storage"},"The Storage Layout (",(0,r.kt)("inlineCode",{parentName:"h3"},"storage"),")"),(0,r.kt)("p",null,"The storage layout under the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage")," key changed for v4. If you have an\napplication that is using it, please check the documentation of the new\nformat ",(0,r.kt)("a",{parentName:"p",href:"TODO"},"here")," and the pull request that updated the documentation:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-docs/pull/137"},"#137"),"."))}u.isMDXComponent=!0}}]);