(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"D1b+":function(e,t,a){e.exports={previewTitle:"article-preview-module--previewTitle--16pYm",tag:"article-preview-module--tag--27JAs"}},aWpR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("9eSz"),c=a.n(i),o=a("D1b+"),s=a.n(o);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:s.a.preview},r.a.createElement(c.a,{alt:"",fluid:t.heroImage.fluid}),r.a.createElement("h3",{className:s.a.previewTitle},r.a.createElement(l.a,{to:"/blog/"+t.slug},t.title)),r.a.createElement("small",null,t.publishDate),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),t.tags&&t.tags.map((function(e){return r.a.createElement("p",{className:s.a.tag,key:e},e)})))}},hKLK:function(e,t,a){e.exports={hero:"blog-module--hero--TCejO"}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var n=a("VbXa"),r=a.n(n),l=a("q1tI"),i=a.n(l),c=(a("Wbzz"),a("mwIZ")),o=a.n(c),s=a("qhky"),m=a("hKLK"),u=a.n(m),p=a("Bl7J"),d=a("aWpR"),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),t=o()(this,"props.data.allContentfulBlogPost.edges");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(s.a,{title:e}),i.a.createElement("div",{className:u.a.hero},"Blog"),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement("ul",{className:"article-list"},t.map((function(e){var t=e.node;return i.a.createElement("li",{key:t.slug},i.a.createElement(d.a,{article:t}))}))))))},t}(i.a.Component);t.default=h;var f="1743756958"}}]);
//# sourceMappingURL=component---src-pages-blog-js-ea46943d8c516b670ea1.js.map