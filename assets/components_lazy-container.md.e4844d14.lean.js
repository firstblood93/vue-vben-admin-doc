import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"LazyContainer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/lazy-container.md","lastUpdated":1651754790219}',p={},o=t(`__VP_STATIC_START__<h1 id="lazycontainer"><a class="header-anchor" href="#lazycontainer" aria-hidden="true">#</a> LazyContainer</h1><p>\u5EF6\u65F6\u52A0\u8F7D/\u61D2\u52A0\u8F7D\u7EC4\u4EF6, \u53EA\u5728\u7EC4\u4EF6\u53EF\u89C1\u6216\u8005\u5EF6\u8FDF\u4E00\u6BB5\u65F6\u95F4\u624D\u8FDB\u884C\u52A0\u8F7D</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4 lazy-base-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy-base-demo-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u5411\u4E0B\u6EDA\u52A8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyContainer</span> <span class="token attr-name">@init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; {}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TargetContent</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#skeleton</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LazyContainer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> TargetContent <span class="token keyword">from</span> <span class="token string">&#39;./TargetContent.vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> LazyContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> LazyContainer<span class="token punctuation">,</span> TargetContent<span class="token punctuation">,</span> Skeleton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.lazy-base-demo</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-wrap</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 20px auto<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">h1</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 1300px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>timeout</td><td><code>number</code></td><td>-</td><td>-</td><td>\u7B49\u5F85\u65F6\u95F4\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u65F6\u95F4\uFF0C\u4E0D\u8BBA\u53EF\u89C1\u4E0E\u5426\uFF0C\u5728\u6307\u5B9A\u65F6\u95F4\u4E4B\u540E\u81EA\u52A8\u52A0\u8F7D</td></tr><tr><td>viewport</td><td><code>HTMLElement</code></td><td>-</td><td>-</td><td>\u7EC4\u4EF6\u6240\u5728\u7684\u89C6\u53E3\uFF0C\u5982\u679C\u7EC4\u4EF6\u662F\u5728\u9875\u9762\u5BB9\u5668\u5185\u6EDA\u52A8\uFF0C\u89C6\u53E3\u5C31\u662F\u8BE5\u5BB9\u5668</td></tr><tr><td>threshold</td><td><code>string</code></td><td><code>0px</code></td><td>-</td><td>\u9884\u52A0\u8F7D\u9608\u503C, css \u5355\u4F4D</td></tr><tr><td>direction</td><td><code>&#39;vertical&#39;, &#39;horizontal&#39;</code> , <code>vertical</code></td><td>-</td><td>\u89C6\u53E3\u7684\u6EDA\u52A8\u65B9\u5411, vertical \u4EE3\u8868\u5782\u76F4\u65B9\u5411\uFF0Chorizontal \u4EE3\u8868\u6C34\u5E73\u65B9\u5411</td><td></td></tr><tr><td>tag</td><td><code>string&#39;</code></td><td><code>div</code></td><td>-</td><td>\u5305\u88F9\u7EC4\u4EF6\u7684\u5916\u5C42\u5BB9\u5668\u7684\u6807\u7B7E\u540D</td></tr><tr><td>transitionName</td><td><code>string&#39;</code></td><td>lazy-container</td><td>-</td><td>transition \u52A8\u753B name</td></tr><tr><td>maxWaitingTime</td><td><code>number&#39;</code></td><td><code>80</code></td><td>-</td><td>\u6700\u5927\u7B49\u5F85\u65F6\u95F4</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>init</td><td><code>()=&gt;void</code></td><td>\u521D\u59CB\u5316\u4E4B\u540E</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u533A\u57DF</td></tr><tr><td>skeleton</td><td>\u61D2\u52A0\u8F7D\u9AA8\u67B6\u5C4F</td></tr></tbody></table>__VP_STATIC_END__`,10),e=[o];function c(l,u,i,k,r,d){return s(),a("div",null,e)}var y=n(p,[["render",c]]);export{h as __pageData,y as default};
