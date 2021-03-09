(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(110)),c={title:"Overview",slug:"/cargo-contract-cli"},i={unversionedId:"cargo-contract/overview",id:"cargo-contract/overview",isDocsHomePage:!1,title:"Overview",description:"version",source:"@site/docs/cargo-contract/overview.md",slug:"/cargo-contract-cli",permalink:"/ink-docs/cargo-contract-cli",editUrl:"https://github.com/ink-docs/edit/master/docs/cargo-contract/overview.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/ink-docs/examples"},next:{title:"Overview",permalink:"/ink-docs/canvas"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://crates.io/crates/cargo-contract"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/crates/v/cargo-contract.svg",alt:"version"}))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"cargo-contract")," is a CLI tool which helps you set up and manage\nWebAssembly smart contracts written with ink!.\nYou can find it ",Object(o.b)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"here on GitHub"),"\nand here on ",Object(o.b)("a",{parentName:"p",href:"https://crates.io/crates/cargo-contract"},"crates.io"),"."),Object(o.b)("p",null,"The tool has a number of handy capabilities:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cargo-contract 0.8.0\nUtilities to develop Wasm smart contracts.\n\nUSAGE:\n    cargo contract <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    new                  Setup and create a new smart contract project\n    build                Compiles the contract, generates metadata, bundles both together in a '.contract' file\n    check                Check that the code builds as Wasm; does not output any build artifact to the top level `target/` directory\n    test                 Test the smart contract off-chain\n    deploy               Upload the smart contract code to the chain\n    instantiate          Instantiate a deployed smart contract\n    help                 Prints this message or the help of the given subcommand(s)\n")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"As a pre-requisite for the tool you need to install the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen"},"binaryen")," package, which is used to optimize the WebAssembly bytecode of the contract."),Object(o.b)("p",null,"Many package managers have it available nowadays \u2012 e.g. it's a package for ",Object(o.b)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/binaryen"},"Debian/Ubuntu"),",\n",Object(o.b)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/binaryen"},"Homebrew")," and ",Object(o.b)("a",{parentName:"p",href:"https://archlinux.org/packages/community/x86_64/binaryen/"},"Arch Linux"),"."),Object(o.b)("p",null,"After you've installed the package execute:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-contract --vers 0.10.0 --force --locked\n")),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"--force")," to ensure you are updated to the most recent ",Object(o.b)("inlineCode",{parentName:"p"},"cargo-contract")," version."),Object(o.b)("p",null,"You can then use ",Object(o.b)("inlineCode",{parentName:"p"},"cargo contract --help")," to start exploring the commands made available to you."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"In order to initialize a new ink! project you can use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cargo contract new flipper\n")),Object(o.b)("p",null,"This will create a folder ",Object(o.b)("inlineCode",{parentName:"p"},"flipper")," in your work directory.\nThe folder contains a scaffold ",Object(o.b)("inlineCode",{parentName:"p"},"Cargo.toml")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"lib.rs"),", which both contain the necessary building blocks for using ink!."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"lib.rs")," contains our hello world contract \u2012 the ",Object(o.b)("inlineCode",{parentName:"p"},"Flipper"),", which we explain in the next section."),Object(o.b)("p",null,"In order to build the contract just execute these commands in the ",Object(o.b)("inlineCode",{parentName:"p"},"flipper")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),Object(o.b)("p",null,"As a result you'll get the file ",Object(o.b)("inlineCode",{parentName:"p"},"target/flipper.contract"),". It's a JSON which bundles the contract's\nmetadata and its Wasm blob. This file needs to be used when deploying the contract.\nYou additionally get the individual ",Object(o.b)("inlineCode",{parentName:"p"},"target/flipper.wasm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"target/metadata.json")," in the folder as well."))}p.isMDXComponent=!0}}]);