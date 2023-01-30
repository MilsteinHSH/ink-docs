"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"Frequently Asked Questions",hide:!0,slug:"/faq",hide_table_of_contents:!0},r=void 0,s={unversionedId:"faq/faq",id:"version-4.0.0-alpha.1/faq/faq",title:"Frequently Asked Questions",description:'Is it "ink" or "ink!"? What does the "!" stand for?',source:"@site/versioned_docs/version-4.0.0-alpha.1/faq/faq.md",sourceDirName:"faq",slug:"/faq",permalink:"/4.0.0-alpha.1/faq",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/faq/faq.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Frequently Asked Questions",hide:!0,slug:"/faq",hide_table_of_contents:!0},sidebar:"reference",previous:{title:"OpenBrush",permalink:"/4.0.0-alpha.1/getting-started/use-openbrush"},next:{title:"ink!",permalink:"/4.0.0-alpha.1/brand-assets/ink"}},l={},c=[{value:"Is it &quot;ink&quot; or &quot;ink!&quot;? What does the &quot;!&quot; stand for?",id:"is-it-ink-or-ink-what-does-the--stand-for",level:3},{value:"Who is &quot;Squink&quot;?",id:"who-is-squink",level:3},{value:"What&#39;s ink!&#39;s relationship to Substrate/Polkadot?",id:"whats-inks-relationship-to-substratepolkadot",level:3},{value:"How to call other smart contracts on the same blockchain?",id:"how-to-call-other-smart-contracts-on-the-same-blockchain",level:3},{value:"How to call other smart contracts on another parachain?",id:"how-to-call-other-smart-contracts-on-another-parachain",level:3},{value:"What is a contract&#39;s ABI or Metadata?",id:"what-is-a-contracts-abi-or-metadata",level:3},{value:"Can a re-entrancy bug occur in ink! contracts?",id:"can-a-re-entrancy-bug-occur-in-ink-contracts",level:3},{value:"How can my smart contract interact with the runtime?",id:"how-can-my-smart-contract-interact-with-the-runtime",level:3},{value:"How can I use ink! with a Substrate chain with a custom chain config?",id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config",level:3},{value:"What does the <code>#![cfg_attr(not(feature = &quot;std&quot;), no_std)]</code> at the beginning of each contract mean?",id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean",level:3},{value:"Overflow Safety?",id:"overflow-safety",level:3},{value:"What is the difference between memory and storage?",id:"what-is-the-difference-between-memory-and-storage",level:3},{value:"How do I print something to the console from the runtime?",id:"how-do-i-print-something-to-the-console-from-the-runtime",level:3},{value:"Why is Rust&#39;s standard library (stdlib) not available in ink!?",id:"why-is-rusts-standard-library-stdlib-not-available-in-ink",level:3},{value:"How do I hash a value?",id:"how-do-i-hash-a-value",level:3},{value:"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?",id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number",level:3},{value:"Why can&#39;t I just use the standard Rust data collections in ink!?",id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink",level:3},{value:"Why am I getting a <code>ContractTrapped</code> error when interacting with a contract?",id:"why-am-i-getting-a-contracttrapped-error-when-interacting-with-a-contract",level:3},{value:"What are the <code>scale::Encode</code> and <code>scale::Decode</code> traits?",id:"what-are-the-scaleencode-and-scaledecode-traits",level:3},{value:"How do I use <code>String</code> in my contract?",id:"how-do-i-use-string-in-my-contract",level:3}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/faq.svg",className:"titlePic"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h3",{id:"is-it-ink-or-ink-what-does-the--stand-for"},'Is it "ink" or "ink!"? What does the "!" stand for?'),(0,o.kt)("p",null,"The correct spelling is ",(0,o.kt)("em",{parentName:"p"},"ink!"),' \u2012 with a lowercase "i" and an exclamation mark at the end.\nThe history here is that:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2026in the very first iteration ink! was originally a ",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch19-06-macros.html#declarative-macros-with-macro_rules-for-general-metaprogramming"},"declarative Rust macro"),". A contract was invoked by writing ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!{ \u2026 }"),"."),(0,o.kt)("li",{parentName:"ul"},"\u2026there is a real-world analogy here of writing a paper contract using ink."),(0,o.kt)("li",{parentName:"ul"},"\u2026we wanted to have as many DOTs as possible in the name \ud83d\ude09.")),(0,o.kt)("p",null,"So please don't make poor Squink cry having to read !ink, ink, Ink!, or Ink."),(0,o.kt)("h3",{id:"who-is-squink"},'Who is "Squink"?'),(0,o.kt)("div",{class:"squid-container"},(0,o.kt)("img",{src:"/img/ink-squink.svg",alt:"Squink \u2012 the ink! mascot",height:"90",className:"squid"}),"This little cute purple squid is Squink.",(0,o.kt)("p",null,"Squink is the mascot of ink! and guides new users and adventurers through our presentations\nworkshops and tutorials. It also has a romance with Rust's mascot, Ferris."),(0,o.kt)("p",null,"Generally it is very friendly and open to learning new Rustaceans but be aware to never upset\nit by taking away dots from the word ink! by spelling it incorrectly!\nIt really is into dots. Stories tell that it demanded the spelling of ink! with as many dots as possible.")),(0,o.kt)("h3",{id:"whats-inks-relationship-to-substratepolkadot"},"What's ink!'s relationship to Substrate/Polkadot?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Substrate is a modular framework to build decentralized applications on top of blockchain technology."),(0,o.kt)("li",{parentName:"ul"},"Polkadot is a layer-0 blockchain built using Substrate that allows to orchestrate an entire\nfleet of other blockchains to join forces and communicate with each other."),(0,o.kt)("li",{parentName:"ul"},"Blockchains built with Substrate can include the so-called ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts")," module in order to\nallow instantiating and executing smart contracts.")),(0,o.kt)("p",null,"ink! was built to allow users to write smart contracts in Rust targeting blockchains built by\nSubstrate that have the aforementioned ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," included."),(0,o.kt)("p",null,"While ink! is currently the most advanced smart contract language targeting Substrate blockchains it is\nnot the only possible choice for users. There is also a Solidity to Wasm compiler called Solang that also\nallows to target Substrate chains and there are other languages in plan and discovery phase for the same\npurpose."),(0,o.kt)("p",null,"On the Substrate side the same is true for the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),". It is just a module that defines\nthe basic set of features required for executing smart contracts on the blockchain that includes it.\nHowever, it is not necessarily the only solution to do exactly that. There is also the ",(0,o.kt)("inlineCode",{parentName:"p"},"evm-pallet"),"\nto run smart contracts targeting the EVM as well as the experimental ",(0,o.kt)("inlineCode",{parentName:"p"},"actors-pallet")," that allows to\nexecute smart contracts written in the actor style programming model.\nOver time the Substrate community might come up with yet other pallets for smart contracts execution. "),(0,o.kt)("h3",{id:"how-to-call-other-smart-contracts-on-the-same-blockchain"},"How to call other smart contracts on the same blockchain?"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/basics/cross-contract-calling"},"Cross-contract calling")," section."),(0,o.kt)("h3",{id:"how-to-call-other-smart-contracts-on-another-parachain"},"How to call other smart contracts on another parachain?"),(0,o.kt)("p",null,"This feature has not yet been implemented by the Substrate side."),(0,o.kt)("h3",{id:"what-is-a-contracts-abi-or-metadata"},"What is a contract's ABI or Metadata?"),(0,o.kt)("p",null,"In ink! a smart contract's metadata is retrieved by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," CLI tool and\ninvoking ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo contract build")," which outputs a ",(0,o.kt)("inlineCode",{parentName:"p"},".contract")," file that includes both the compiled\n",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," of the ink! smart contract as well as the so-called metadata information of the same\nsmart contract.\nThe metadata is especially important for third party tools such as Polkadot JS Apps or the Contracts UI\nand provides useful information about the contract's constructors, messages, events, function selectors,\ndocumentation and comments of the aforementioned structures as well as how inputs and outputs shall\nbe encoded and decoded respectively etc."),(0,o.kt)("h3",{id:"can-a-re-entrancy-bug-occur-in-ink-contracts"},"Can a re-entrancy bug occur in ink! contracts?"),(0,o.kt)("p",null,"Yes. However, the Substrate team is well aware of the associated problems and already through about\npossible future additions to eliminate re-entrancy attacks."),(0,o.kt)("h3",{id:"how-can-my-smart-contract-interact-with-the-runtime"},"How can my smart contract interact with the runtime?"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/macros-attributes/chain-extension"},"Chain Extensions")," section for more information."),(0,o.kt)("h3",{id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config"},"How can I use ink! with a Substrate chain with a custom chain config?"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/ink_lang_macro/4.0.0-beta/ink_lang_macro/attr.contract.html#header-arguments"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"env_types")," argument"),"\nfor the contract macro. It allows you to specify your environment a la\n",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink::contract(env = MyEnvironment)]"),"."),(0,o.kt)("h3",{id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean"},"What does the ",(0,o.kt)("inlineCode",{parentName:"h3"},'#![cfg_attr(not(feature = "std"), no_std)]')," at the beginning of each contract mean?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"#[cfg(..)]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"#[cfg_attr(..)]")," annotations are how Rust does conditional compilation."),(0,o.kt)("p",null,"ink! smart contracts can be compiled in two different modes."),(0,o.kt)("p",null,"Through ",(0,o.kt)("inlineCode",{parentName:"p"},'#![cfg_attr(not(feature = "std"), no_std)]')," an ink! smart contract tells the Rust compiler\nin which mode they are being compiled. This also plays a significant role in how ink! generates\nthe smart contract code."),(0,o.kt)("p",null,"The two modes are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wasm mode: This is the mode chosen when compiling an ink! smart contract for deployment on a blockchain.\nThe resulting binary is a ",(0,o.kt)("inlineCode",{parentName:"li"},".wasm")," file and as such it is not possible to use certain parts of Rust's standard\nlibrary."),(0,o.kt)("li",{parentName:"ol"},"Off-chain mode: This is the mode chosen when trying to test an ink! smart contract using the off-chain\nenvironment. Off-chain environment testing is very useful to check if certain ink! constructors or messages\nare well behaving and allow for better debuggability than when trying to debug the same smart contract deployed\non a chain.")),(0,o.kt)("h3",{id:"overflow-safety"},"Overflow Safety?"),(0,o.kt)("p",null,'Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides ',(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/primitive.u32.html"},"integrated checked, wrapped, and saturated math functions"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the Wasm blob. This feature may change or be iterated on in the future.")),(0,o.kt)("h3",{id:"what-is-the-difference-between-memory-and-storage"},"What is the difference between memory and storage?"),(0,o.kt)("p",null,"In ink!, memory refers to computer memory, while storage refers to the on-chain storage\nused by a contract instance. Memory is temporary and only lasts until the contract\nexecution is done, while storage is persistent and lasts over many contract executions.\nThe contract storage is built on top of the runtime storage, and access is considered to be slow."),(0,o.kt)("h3",{id:"how-do-i-print-something-to-the-console-from-the-runtime"},"How do I print something to the console from the runtime?"),(0,o.kt)("p",null,"Please see our page on ",(0,o.kt)("a",{parentName:"p",href:"/basics/contract-debugging"},"Contract Debugging"),"."),(0,o.kt)("h3",{id:"why-is-rusts-standard-library-stdlib-not-available-in-ink"},"Why is Rust's standard library (stdlib) not available in ink!?"),(0,o.kt)("p",null,"Rust's standard library consists of three different layers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"core")," library which defines everything that has no dependencies outside of Rust itself.\nIncluded are types such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Option"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," as well as a whole variety of modules,\nfunctions and macro."),(0,o.kt)("p",{parentName:"li"},"ink! smart contracts allow authors to use Rust's ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," crate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"alloc")," library which is depending on a global allocator and mainly defines collections\nthat spill their elements on to the execution's heap memory.\nExamples for collections are ",(0,o.kt)("inlineCode",{parentName:"p"},"Box"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedList")," and modules\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"fmt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rc")," (ref-counted pointers) or borrows."),(0,o.kt)("p",{parentName:"li"},"ink! smart contracts allow authors to use Rust's ",(0,o.kt)("inlineCode",{parentName:"p"},"alloc")," crate.\nBy default ink! authors use definitions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"alloc")," crate through ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_prelude")," crate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"std")," library is what people generally call Rust's standard library."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"The Rust Standard Library is the foundation of portable Rust software, a set of minimal and battle-tested shared abstractions for the broader Rust ecosystem.")),(0,o.kt)("p",{parentName:"li"},"It requires several operating system capabilities in order to work correctly such as input and\noutput systems for files, networking etc."),(0,o.kt)("p",{parentName:"li"},"Since the Wasm (a.k.a. ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown"),") compilation target does not support Rust's\nstandard library ink! authors cannot use it either for their own purposes. Instead the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"\ntries to provide some common functionality that would otherwise be missing for common smart contract\noperations."))),(0,o.kt)("h3",{id:"how-do-i-hash-a-value"},"How do I hash a value?"),(0,o.kt)("p",null,"A number of crypto hashes are built into the ",(0,o.kt)("a",{parentName:"p",href:"/how-it-works"},"pallet-contracts")," and\ntherefore very efficient to use. We currently support a handful of those, you\ncan view the complete list ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/hash/trait.CryptoHash.html"},"here"),"."),(0,o.kt)("p",null,"If you have the urgent need for another crypto hash you could introduce it through\n",(0,o.kt)("a",{parentName:"p",href:"/macros-attributes/chain-extension"},"Chain Extensions"),"\nor make a proposal to include it into the default set of the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),"."),(0,o.kt)("p",null,"Using one of the built-in crypto hashes can be done as explained here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.hash_bytes.html"},(0,o.kt)("inlineCode",{parentName:"a"},"self.env().hash_bytes()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.hash_encoded.html"},(0,o.kt)("inlineCode",{parentName:"a"},"self.env().hash_encoded()")))),(0,o.kt)("h3",{id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number"},"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?"),(0,o.kt)("p",null,"Floats are cool for all kinds of reasons, but they also have one important\ndrawback. Floating point arithmetic is non-deterministic which means that\ndifferent processors compute (slightly) different results for the same\noperation. Although there is an IEEE spec, non-determinism can come from specific\nlibraries used, or even hardware. In order for the nodes in a blockchain network\nto reach agreement on the state of the chain, all operations must be completely\ndeterministic. Hence we don't allow floating point data types in ink!."),(0,o.kt)("p",null,"Consequently it's not possible to return a decimal number from an ink! message.\nWhat you should do instead is to have your user interface denominate the returned\nnumber to decimals."),(0,o.kt)("p",null,"Note, that it's typical for blockchains to have the number of available tokens\ndefined as a non-floating number and determine the denomination in the user\ninterface. For example, 1 Bitcoin is equivalent to the smallest unit of 100,000,000\nSatoshi and all Bitcoin implementations internally persist account balances in\nSatoshi, not as a decimal number of Bitcoin."),(0,o.kt)("h3",{id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink"},"Why can't I just use the standard Rust data collections in ink!?"),(0,o.kt)("p",null,"You can use them! They are exposed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_prelude")," crate (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec"),")\nand you can return them from ink! messages and also persist them to storage."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"However, the Rust stdlib collections are not optimized for smart contract usage!")," So for example,\nif you use them to persist your data on the chain they will always occupy a single storage cell\nand thus always be loaded eagerly, in their entirety. This can be very costly! Just think about\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap")," where the smart contract might only need access to a few elements, rather\nthan the entire data collection."),(0,o.kt)("h3",{id:"why-am-i-getting-a-contracttrapped-error-when-interacting-with-a-contract"},"Why am I getting a ",(0,o.kt)("inlineCode",{parentName:"h3"},"ContractTrapped")," error when interacting with a contract?"),(0,o.kt)("p",null,"When it does not constitute a deliberate assertion, like for example a permission check,\nit is most likely a bug in your contract or in ink!. "),(0,o.kt)("p",null,"A common source of ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractTrapped")," are Integer overflows, those can cause\nyour contract to trap as well.\nThere is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rust/issues/78744"},"known bug in the Rust compiler"),"\nwith respect to safe math operations. As a workaround for this particular bug\ntry to insert ",(0,o.kt)("inlineCode",{parentName:"p"},"overflow-checks = false")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),".\nThis will disable safe math operations altogether, but unfortunately we are currently\nnot aware of a better workaround until the bug in the compiler is fixed."),(0,o.kt)("p",null,"If you don't find the issue you can also ask for help in our public\n",(0,o.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/#ink:matrix.parity.io"},"Element")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/j2DKRRbSJr"},"Discord")," channel."),(0,o.kt)("h3",{id:"what-are-the-scaleencode-and-scaledecode-traits"},"What are the ",(0,o.kt)("inlineCode",{parentName:"h3"},"scale::Encode")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"scale::Decode")," traits?"),(0,o.kt)("p",null,"Substrate-based blockchains use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-scale-codec"},"SCALE codec"),"\nto encode data.\nAs a consequence the data for every interaction with Substrate needs to\nbe SCALE-encodable \u2012 i.e. it needs to implement either ",(0,o.kt)("inlineCode",{parentName:"p"},"scale::Encode"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"scale::Decode"),", or both. This affects e.g. data you want to return to a caller,\ndata that you want to take as input, or data you want to store on-chain."),(0,o.kt)("p",null,"A common error you might get when a necessary SCALE trait is not implemented\nfor a data structure could be along the lines of ",(0,o.kt)("inlineCode",{parentName:"p"},'the trait "WrapperTypeEncode"\nis not implemented for "Foo"'),".\nFor example, you might encounter this error if you try to store a custom data\nstructure in the contract's storage. Or e.g. when attempting to return\na custom error from an ink! message."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The error ",(0,o.kt)("inlineCode",{parentName:"p"},'the trait "WrapperTypeEncode" is not implemented for \u2026')," is also\na common error when a mismatching version of ",(0,o.kt)("inlineCode",{parentName:"p"},"parity-scale-codec")," is used\nin the contract opposed to the version used by ink!.")),(0,o.kt)("p",null,"The solution typically is to add a fitting implementation of the trait\nfor your data structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Encode")," is used for encoding a data structure when it is e.g. returned\nto a caller or when it is persisted to the contracts storage.\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Decode")," is used for the inverse, e.g. when reading from storage or\ntaking an input from a user (or another contract).")),(0,o.kt)("p",null,"It's possible to derive those traits and oftentimes the simplest way\nis to just derive the missing trait for the object for which its implementation\nis missing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(scale::Encode, scale::Decode)]\nstruct MyCustomDataStructure { \u2026 }\n")),(0,o.kt)("h3",{id:"how-do-i-use-string-in-my-contract"},"How do I use ",(0,o.kt)("inlineCode",{parentName:"h3"},"String")," in my contract?"),(0,o.kt)("p",null,"In general, you should think twice if you really need ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),".\nSmart contracts usually don't use strings; those are typically\nused for user interactions and should live in your UI and not on the chain."),(0,o.kt)("p",null,"Minimizing storage usage of your contract is a best practice\nand you should only persist items which you need to derive state transitions\nin your contract."),(0,o.kt)("p",null,"If you still, for some reason, need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", then you should use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/ink_prelude/latest/ink_prelude/string/struct.String.html"},"from the ink! prelude"),"."))}u.isMDXComponent=!0}}]);