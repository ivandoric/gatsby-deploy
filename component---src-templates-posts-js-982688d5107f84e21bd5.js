webpackJsonp([0xcb0f60301f7b],{102:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var s=a(25),l=i(s),n=a(44),r=i(n),d=a(43),u=i(d),c=a(76),f=i(c),p=a(75),h=i(p),m=a(2),g=i(m),y=a(7),b=i(y),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],x=function(e,t){o().observe(e),L.push([e,t])},I=null,z=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},_=function(e){var t=e.opacity,a=void 0===t?"1":t,i=e.src,o=e.srcSet,s=e.sizes,l=void 0===s?"":s,n=e.title,r=void 0===n?"":n,d=e.alt,u=void 0===d?"":d,c=e.width,f=void 0===c?"":c,p=e.height,h=void 0===p?"":p,m=e.transitionDelay,g=void 0===m?"0.5s":m;return'<img width="'+f+'" height="'+h+'" src="'+i+'" srcset="'+o+'" alt="'+u+'" title="'+r+'" sizes="'+l+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+g+";opacity:"+a+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},j=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};j.propTypes={style:b.default.object,onLoad:b.default.func};var N=function(e){function t(a){(0,l.default)(this,t);var i=(0,r.default)(this,e.call(this,a)),o=!0,s=!0,n=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,s=!1,n=!0),"undefined"==typeof window&&(o=!1,s=!1),i.state={isVisible:o,imgLoaded:s,IOSupported:n},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&x(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,s=t.outerWrapperClassName,l=t.style,n=void 0===l?{}:l,r=t.imgStyle,d=void 0===r?{}:r,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,m=void 0;m="boolean"==typeof f?"lightgray":f;var y=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&z()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(p,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===n.position?"initial":"relative"}},g.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden",zIndex:1},n),ref:this.handleRef},g.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&g.default.createElement(j,{alt:i,title:a,src:w.base64,style:y}),w.tracedSVG&&g.default.createElement(j,{alt:i,title:a,src:w.tracedSVG,style:y}),m&&g.default.createElement(p,{title:a,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(j,{alt:i,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,h.default)({alt:i,title:a},w))}})))}if(c){var S=c,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:S.width,height:S.height},n);return"inherit"===n.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&z()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),g.default.createElement(p,{className:(s?s:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===n.position?"initial":"relative"}},g.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&g.default.createElement(j,{alt:i,title:a,src:S.base64,style:y}),S.tracedSVG&&g.default.createElement(j,{alt:i,title:a,src:S.tracedSVG,style:y}),m&&g.default.createElement(p,{title:a,style:{backgroundColor:m,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&g.default.createElement(j,{alt:i,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,h.default)({alt:i,title:a,width:S.width,height:S.height},S))}})))}return null},t}(g.default.Component);N.defaultProps={fadeIn:!0,alt:"",Tag:"div"},N.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=N},209:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(2),s=i(o),l=a(36),n=i(l),r=a(102),d=i(r),u=function(e){return e.test?s.default.createElement("span",null,e.text):s.default.createElement(n.default,{to:e.url},e.text)},c=function(e){var t=(e.data,e.pathContext),a=t.group,i=t.index,o=t.first,l=t.last,r=t.pageCount,c=i-1==1?"":(i-1).toString(),f=(i+1).toString();return console.log(a),s.default.createElement("div",null,s.default.createElement("h4",null,r," Pages"),a.map(function(e){var t=e.node;return s.default.createElement("div",{key:t.slug,className:"post",style:{marginBottom:50}},t.featured_media.localFile.childImageSharp.resolutions&&s.default.createElement("div",null,s.default.createElement(d.default,{resolutions:t.featured_media.localFile.childImageSharp.resolutions})),s.default.createElement(n.default,{to:"/post/"+t.slug},s.default.createElement("h3",null,t.title)),s.default.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),t.date)}),s.default.createElement("div",{className:"previousLink"},s.default.createElement(u,{test:o,url:"/posts/"+c,text:"Go to Previous Page"})),s.default.createElement("div",{className:"nextLink"},s.default.createElement(u,{test:l,url:"/posts/"+f,text:"Go to Next Page"})))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-posts-js-982688d5107f84e21bd5.js.map