import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const m='{"title":"Description \u8BE6\u60C5\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useDescription","slug":"usedescription"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"DescItem","slug":"descitem"}],"relativePath":"components/desc.md","lastUpdated":1651754790219}',p={},o=t(`__VP_STATIC_START__<h1 id="description-\u8BE6\u60C5\u7EC4\u4EF6"><a class="header-anchor" href="#description-\u8BE6\u60C5\u7EC4\u4EF6" aria-hidden="true">#</a> Description \u8BE6\u60C5\u7EC4\u4EF6</h1><p>\u5BF9 <code>antv</code> \u7684 Descriptions \u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u7840\u793A\u4F8B<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:collapseOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ canExpand: true, helpMessage: <span class="token punctuation">&#39;</span>help me<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mockData<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Description<span class="token punctuation">,</span> DescItem<span class="token punctuation">,</span> useDescription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Description/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">mockData</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">&#39;VB&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;15695909xxx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;190848757@qq.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">addr</span><span class="token operator">:</span> <span class="token string">&#39;\u53A6\u95E8\u5E02\u601D\u660E\u533A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">certy</span><span class="token operator">:</span> <span class="token string">&#39;3504256199xxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">schema</span><span class="token operator">:</span> DescItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u540D&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6635\u79F0&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">curVal<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>curVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;phone&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8054\u7CFB\u7535\u8BDD&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u90AE\u7BB1&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;addr&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Description<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDescription</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;useDescription&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> mockData<span class="token punctuation">,</span>
        <span class="token literal-property property">schema</span><span class="token operator">:</span> schema<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> mockData<span class="token punctuation">,</span> schema<span class="token punctuation">,</span> register <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="usedescription"><a class="header-anchor" href="#usedescription" aria-hidden="true">#</a> useDescription</h2><p>\u53C2\u8003\u4EE5\u4E0A\u793A\u4F8B</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDescription</span><span class="token punctuation">(</span>Props<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><p>\u9664\u4EE5\u4E0B\u53C2\u6570\u5916\uFF0C\u5B98\u65B9\u6587\u6863\u5185\u7684 props \u4E5F\u90FD\u652F\u6301\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://2x.antdv.com/components/descriptions-cn/#API" target="_blank" rel="noopener noreferrer">antv Description</a></p></div><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>\u6807\u9898</td></tr><tr><td>size</td><td><code>string</code></td><td>small</td><td>-</td><td>\u5927\u5C0F</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td>true</td><td>-</td><td>\u662F\u5426\u5C55\u793A\u8FB9\u6846</td></tr><tr><td>column</td><td><code>Number, Object</code></td><td><code>{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }</code></td><td>-</td><td>\u4E00\u884C\u7684 <code>DescriptionItems</code> \u6570\u91CF</td></tr><tr><td>useCollapse</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u662F\u5426\u5305\u88F9 CollapseContainer \u7EC4\u4EF6</td></tr><tr><td>collapseOptions</td><td><code>Object</code></td><td>-</td><td>-</td><td><code>CollapseContainer</code> \u7EC4\u4EF6\u5C5E\u6027</td></tr><tr><td>schema</td><td><code>DescItem[]</code></td><td>-</td><td>-</td><td>\u8BE6\u60C5\u9879\u914D\u7F6E\uFF0C\u89C1\u4E0B\u65B9 <code>DescItem</code> \u914D\u7F6E</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>\u6570\u636E\u6E90</td></tr></tbody></table><h2 id="descitem"><a class="header-anchor" href="#descitem" aria-hidden="true">#</a> DescItem</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>field</td><td><code>string</code></td><td>-</td><td>-</td><td>\u5B57\u6BB5\u540D</td></tr><tr><td>label</td><td><code>string</code></td><td>-</td><td>-</td><td>\u6807\u7B7E\u540D</td></tr><tr><td>labelMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>label \u6700\u5C0F\u5BBD\u5EA6</td></tr><tr><td>contentMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>content \u6700\u5C0F\u5BBD\u5EA6</td></tr><tr><td>labelStyle</td><td><code>any</code></td><td>-</td><td>-</td><td>label \u6837\u5F0F</td></tr><tr><td>span</td><td><code>number</code></td><td>-</td><td>-</td><td>\u548C\u5E76\u5217\u6570\u91CF</td></tr><tr><td>show</td><td><code>(data)=&gt;boolean</code></td><td>-</td><td>-</td><td>\u52A8\u6001\u5224\u65AD\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u663E\u793A</td></tr><tr><td>render</td><td><code>(val: string, data: any)=&gt;VNode,undefined,Element,string,number</code></td><td>-</td><td>-</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3 content</td></tr></tbody></table>__VP_STATIC_END__`,12),e=[o];function c(l,r,u,i,d,k){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
