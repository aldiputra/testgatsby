(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3dzV":function(e,a,t){e.exports={hero:"hero-module--hero--S__gH",heroImage:"hero-module--heroImage--DciWV",heroDetails:"hero-module--heroDetails--3uv8x",heroHeadline:"hero-module--heroHeadline--jhgHQ",heroTitle:"hero-module--heroTitle--2LulU"}},"D1b+":function(e,a,t){e.exports={previewTitle:"article-preview-module--previewTitle--16pYm",tag:"article-preview-module--tag--27JAs"}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return v}));var r=t("VbXa"),n=t.n(r),l=t("q1tI"),o=t.n(l),i=t("mwIZ"),c=t.n(i),s=t("qhky"),m=(t("sMBO"),t("9eSz")),u=t.n(m),h=t("3dzV"),d=t.n(h),p=function(e){var a=e.data;return o.a.createElement("div",{className:d.a.hero},o.a.createElement(u.a,{className:d.a.heroImage,alt:a.name,fluid:a.heroImage.fluid}),o.a.createElement("div",{className:d.a.heroDetails},o.a.createElement("h3",{className:d.a.heroHeadline},a.name),o.a.createElement("p",{className:d.a.heroTitle},a.title),o.a.createElement("p",null,a.shortBio.shortBio)))},f=t("Bl7J"),g=t("aWpR"),E=function(e){function a(){return e.apply(this,arguments)||this}return n()(a,e),a.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),a=c()(this,"props.data.allContentfulBlogPost.edges"),t=c()(this,"props.data.allContentfulPerson.edges")[0];return o.a.createElement(f.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(s.a,{title:e}),o.a.createElement(p,{data:t.node}),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"section-headline"},"Recent articles"),o.a.createElement("ul",{className:"article-list"},a.map((function(e){var a=e.node;return o.a.createElement("li",{key:a.slug},o.a.createElement(g.a,{article:a}))}))))))},a}(o.a.Component),v=(a.default=E,"1368690253")},aWpR:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),o=t("9eSz"),i=t.n(o),c=t("D1b+"),s=t.n(c);a.a=function(e){var a=e.article;return n.a.createElement("div",{className:s.a.preview},n.a.createElement(i.a,{alt:"",fluid:a.heroImage.fluid}),n.a.createElement("h3",{className:s.a.previewTitle},n.a.createElement(l.a,{to:"/blog/"+a.slug},a.title)),n.a.createElement("small",null,a.publishDate),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description.childMarkdownRemark.html}}),a.tags&&a.tags.map((function(e){return n.a.createElement("p",{className:s.a.tag,key:e},e)})))}},sMBO:function(e,a,t){var r=t("g6v/"),n=t("m/L8").f,l=Function.prototype,o=l.toString,i=/^\s*function ([^ (]*)/;r&&!("name"in l)&&n(l,"name",{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-1a0a3a0522cef00ebd7d.js.map