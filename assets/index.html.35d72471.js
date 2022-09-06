import{_ as p,r as t,o as c,c as i,a as n,d as e,b as s,e as l}from"./app.92112191.js";const o={},u=n("h1",{id:"less",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#"),s(" Less")],-1),r={href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},d=s("\u4E2D\u6587\u6587\u6863\u94FE\u63A5"),v={href:"https://lesscss.org/",target:"_blank",rel:"noopener noreferrer"},k=s("\u82F1\u6587\u6587\u6863\u94FE\u63A5"),m=l(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6240\u6709\u4EE3\u7801\u9664\u8FC7\u5B98\u7F51\u590D\u5236\u8FC7\u6765\u7684\uFF0C\u90FD\u662F\u5728\u771F\u5B9E\u73AF\u5883\u4E0B\u901A\u8FC7\u7F16\u8BD1\u7684</p></div><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>\u4E24\u79CD\u6CE8\u91CA\uFF1A</p><p>\u7F16\u8BD1\u524D---&gt;</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u8BE5\u6CE8\u91CA\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u5230css\u6587\u4EF6\u4E2D</span>
<span class="token comment">/*\u8BE5\u6CE8\u91CA\u4F1A\u88AB\u7F16\u8BD1\u5230css\u6587\u4EF6\u4E2D*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u540E---&gt;</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u8BE5\u6CE8\u91CA\u4F1A\u88AB\u7F16\u8BD1\u5230css\u6587\u4EF6\u4E2D*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>\u4F7F\u7528 <code>@\u53D8\u91CF\u540D</code> \u58F0\u660E\u4E00\u4E2A less \u53D8\u91CF\u3002</p><h3 id="\u4F5C\u4E3A\u503C\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u503C\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u4F5C\u4E3A\u503C\u7684\u53D8\u91CF</h3><p>\u53D8\u91CF\u6700\u5E38\u89C1\u7684\u573A\u666F\u662F\u4F5C\u4E3A CSS \u7684\u5C5E\u6027\u503C\u6765\u4F7F\u7528\uFF1A</p><p><strong>\u7F16\u8BD1\u524D</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@link-color<span class="token punctuation">:</span></span> #428bca<span class="token punctuation">;</span> <span class="token comment">// sea blue</span>

<span class="token comment">// Usage</span>
<span class="token selector">a,
.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@link-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@link-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">a,
.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F5C\u4E3A\u9009\u62E9\u5668\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u9009\u62E9\u5668\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u4F5C\u4E3A\u9009\u62E9\u5668\u7684\u53D8\u91CF</h3><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A <code>@{\u53D8\u91CF\u540D}</code></p><p><strong>\u7F16\u8BD1\u524D</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@my-selector<span class="token punctuation">:</span></span> banner<span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">.@{my-selector}</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.banner</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u5C5E\u6027\u540D\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u4F5C\u4E3A\u5C5E\u6027\u540D\u7684\u53D8\u91CF</h3><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A <code>@{\u53D8\u91CF\u540D}</code></p><p><strong>\u7F16\u8BD1\u524D</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u58F0\u660E</span>
<span class="token variable">@bc<span class="token punctuation">:</span></span> background<span class="token operator">-</span>color<span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">@{bc}</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F5C\u4E3A-url-\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A-url-\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u4F5C\u4E3A url \u7684\u53D8\u91CF</h3><p><strong>\u7F16\u8BD1\u524D</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&quot;../img&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;@{images}/white-sand.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../img/white-sand.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5EF6\u8FDF\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u52A0\u8F7D" aria-hidden="true">#</a> \u5EF6\u8FDF\u52A0\u8F7D</h3><p>less \u53D8\u91CF\u4E5F\u6709\u4F5C\u7528\u57DF\uFF0C\u5176\u5B9E\u5C31\u662F\u5927\u62EC\u53F7\u3002</p><p>\u4E00\u4E2A\u53D8\u91CF\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u5185\u53EA\u80FD\u58F0\u660E\u4E00\u6B21\uFF0C\u91CD\u590D\u58F0\u660E\u65F6\u540E\u58F0\u660E\u7684\u4F1A\u8986\u76D6\u5148\u58F0\u660E\u7684\u3002\u4E0D\u540C\u4F5C\u7528\u57DF\u53EF\u4EE5\u58F0\u660E\u540C\u540D\u53D8\u91CF\uFF0C\u4E14\u5728\u5404\u81EA\u4F5C\u7528\u57DF\u5185\u4E0D\u4F1A\u51B2\u7A81\u3002</p><p>less \u53D8\u91CF\u91C7\u7528<strong>\u5EF6\u8FDF\u52A0\u8F7D</strong>\u7684\u65B9\u5F0F\uFF0C\u5373\u4F1A\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u6837\u5F0F\u672A\u52A0\u8F7D\u4E4B\u524D\u5148\u52A0\u8F7D\u53D8\u91CF\uFF0C\u800C\u4E14\u662F\u7531\u5185\u800C\u5916\uFF0C\u5148\u5BFB\u627E\u4F5C\u7528\u57DF\u5185\u7684\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u518D\u5BFB\u627E\u4F5C\u7528\u57DF\u5916\u7684\u53D8\u91CF\uFF08\u5373\u7236\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5982\u679C\u8FD8\u6CA1\u6709\u5C31\u4F1A\u9010\u7EA7\u5411\u4E0A\u76F4\u81F3\u627E\u5230\u4E3A\u6B62\uFF09\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u9762\u8BD5\u9898</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> 1<span class="token punctuation">;</span>

  <span class="token selector">.brass</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 2<span class="token punctuation">;</span>
    <span class="token property">three</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token property">one</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B54\u6848</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class .brass</span> <span class="token punctuation">{</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957" aria-hidden="true">#</a> \u5D4C\u5957</h2><p>\u5D4C\u5957\u89C4\u5219\u5141\u8BB8\u5728\u4E00\u4E2A\u9009\u62E9\u5668\u4E2D\u5D4C\u5957\u53E6\u4E00\u4E2A\u9009\u62E9\u5668\u3002</p><p>\u5047\u8BBE\u6709\u8FD9\u6837\u7684 CSS \u4EE3\u7801\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528 Less \u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7236\u7EA7\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EA7\u5F15\u7528" aria-hidden="true">#</a> \u7236\u7EA7\u5F15\u7528</h3><p>\u5728\u5D4C\u5957\u7684 less \u6837\u5F0F\u4E2D\u53EF\u4EE5\u4F7F\u7528 <code>&amp;</code> \u8FD0\u7B97\u7B26\u6765\u5F15\u7528\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u6240\u6709\u7236\u7EA7\u9009\u62E9\u5668\u3002</p><p>\u5185\u5C42\u9009\u62E9\u5668\u524D\u9762\u7684 &amp; \u7B26\u53F7\u8868\u793A\u5BF9\u7236\u9009\u62E9\u5668\u7684\u5F15\u7528\u3002\u5728\u4E00\u4E2A\u5185\u5C42\u9009\u62E9\u5668\u7684\u524D\u9762\uFF0C\u5982\u679C\u6CA1\u6709 &amp; \u7B26\u53F7\uFF0C\u5219\u5B83\u88AB\u89E3\u6790\u4E3A\u7236\u9009\u62E9\u5668\u7684\u540E\u4EE3\uFF1B\u5982\u679C\u6709 &amp; \u7B26\u53F7\uFF0C\u5B83\u5C31\u88AB\u89E3\u6790\u4E3A\u7236\u5143\u7D20\u672C\u8EAB\u3002</p><p>\u6700\u5E38\u7528\u4E8E\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ol><li>\u5BF9\u73B0\u6709\u9009\u62E9\u5668\u5E94\u7528\u4F2A\u7C7B:</li></ol><p><strong>\u7F16\u8BD1\u524D</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709&amp;\uFF0C\u4E0A\u9762\u7684\u793A\u4F8B\u5185\u90E8\u7684\u89C4\u5219\u5C06\u88AB\u7F16\u8BD1\u4E3A<code>a :hover</code>\uFF0C\u8BE5\u89C4\u5219\u5339\u914D<code>&lt;a&gt;</code>\u6807\u7B7E\u5185\u7684\u6240\u6709\u540E\u4EE3\u5143\u7D20\u5E76\u5BF9\u5176\u5E94\u7528<code>:hover</code>\u4F2A\u7C7B\uFF0C\u8FD9\u4E0D\u662F\u6211\u4EEC\u901A\u5E38\u60F3\u8981\u7684\u7ED3\u679C\u3002</p><ol start="2"><li>\u5BF9\u73B0\u6709\u9009\u62E9\u5668\u5E94\u7528\u4FEE\u6539\u7C7B</li></ol><p><strong>\u7F16\u8BD1\u524D</strong></p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-ok</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;ok.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;-cancel</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;cancel.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-custom</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;custom.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.button-ok</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;ok.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-cancel</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;cancel.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-custom</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;custom.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5F15\u7528\u7236\u7EA7\uFF0C\u4EA7\u751F\u4E86\u4E0D\u540C\u7684\u7C7B\u540D\u3002</p><h3 id="\u91CD\u590D\u51FA\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u51FA\u73B0\u7684" aria-hidden="true">#</a> \u91CD\u590D\u51FA\u73B0\u7684&amp;</h3><p>&amp;\u5728\u9009\u62E9\u5668\u4E2D\u53EF\u80FD\u51FA\u73B0\u591A\u6B21\u3002\u8FD9\u4F7F\u5F97\u91CD\u590D\u5F15\u7528\u7236\u9009\u62E9\u5668\u800C\u4E0D\u91CD\u590D\u5176\u540D\u79F0\u6210\u4E3A\u53EF\u80FD\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">link</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp; + &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp; &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;&amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;,
  &amp;ish</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.link + .link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link .link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link,
.linkish</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DF1\u5165\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3</h3><p><code>&amp;</code> \u8FD0\u7B97\u7B26\u4EE3\u8868\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u6240\u6709\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u9009\u62E9\u5668\uFF08\u6709\u53EF\u80FD\u4E0D\u4EC5\u4EC5\u662F\u7236\u7EA7\uFF0C\u800C\u662F\u5F88\u591A\u7956\u5148\u9009\u62E9\u5668\uFF09\uFF0C\u8FD9\u6837\u7F16\u8BD1\u540E\u7684 CSS \u770B\u8D77\u6765\u66F4\u52A0\u6E05\u6670\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.grand</span> <span class="token punctuation">{</span>
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp; &gt; &amp;</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp; &amp;</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;&amp;</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;,
    &amp;ish</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.grand .parent &gt; .grand .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grand .parent .grand .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grand .parent.grand .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grand .parent,
.grand .parentish</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97" aria-hidden="true">#</a> \u8FD0\u7B97</h2><p>\u4EFB\u4F55\u6570\u503C\uFF0C\u989C\u8272\uFF0C\u53D8\u91CF\u90FD\u53EF\u4EE5\u8FD0\u7B97\u3002</p><p>\u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u7B97\u672F\u8FD0\u7B97\u7B26\u5728\u52A0\u3001\u51CF\u6216\u6BD4\u8F83\u4E4B\u524D\u4F1A\u8FDB\u884C\u5355\u4F4D\u6362\u7B97\u3002\u8BA1\u7B97\u7684\u7ED3\u679C\u4EE5\u6700\u5DE6\u4FA7\u64CD\u4F5C\u6570\u7684\u5355\u4F4D\u7C7B\u578B\u4E3A\u51C6\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u6CA1\u6709\u5355\u4F4D\u5219\u987A\u4F4D\u4EE5\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u6570\u7684\u5355\u4F4D\u7C7B\u578B\u4E3A\u51C6\u3002\u5982\u679C\u5355\u4F4D\u6362\u7B97\u65E0\u6548\u6216\u5931\u53BB\u610F\u4E49\uFF0C\u5219\u5FFD\u7565\u5355\u4F4D\u3002\u65E0\u6548\u7684\u5355\u4F4D\u6362\u7B97\u4F8B\u5982\uFF1Apx \u5230 cm \u6216 rad \u5230 % \u7684\u8F6C\u6362\u3002</p><p>\u56E0\u4E3A less \u4F1A\u81EA\u52A8\u63A8\u7B97\u5355\u4F4D\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u6BCF\u4E00\u4E2A\u90FD\u52A0\u5355\u4F4D\uFF0C\u4F46\u4FDD\u8BC1\u81F3\u5C11\u6709\u4E00\u4E2A\u52A0\u4E86\u5355\u4F4D\u3002</p><p>\u8FD0\u7B97\u7B26\u4E0E\u6570\u503C\u4E4B\u95F4\u8981\u4EE5\u7A7A\u683C\u5206\u5F00\uFF0C\u6D89\u53CA\u4F18\u5148\u7EA7\u65F6\u4EE5<code>()</code>\u8FDB\u884C\u4F18\u5148\u7EA7\u8BA1\u7B97</p><p>less \u8FD0\u7B97\u9047\u5230\u767E\u5206\u6BD4\u5355\u4F4D\uFF0C\u53EA\u80FD\u6309\u7167\u767E\u5206\u6BD4\u8BA1\u7B97\uFF0C\u5373\u767E\u5206\u6BD4\u4F18\u5148\u7EA7\u6700\u9AD8\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u6240\u6709\u64CD\u4F5C\u6570\u88AB\u8F6C\u6362\u6210\u76F8\u540C\u7684\u5355\u4F4D</span>
<span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F -1.5cm</span>

<span class="token comment">// conversion is impossible</span>
<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 2 <span class="token operator">+</span> 5px <span class="token operator">-</span> 3cm<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 4px</span>

<span class="token comment">// example with variables</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u662F 15%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p>Extend \u662F\u4E00\u4E2A Less \u4F2A\u7C7B\uFF0C\u5B83\u5C06\u9009\u62E9\u5668\u4E0E\u5B83\u5F15\u7528\u7684\u9009\u62E9\u5668\u8FDB\u884C\u5408\u5E76\uFF0C\u8FDB\u800C\u5B9E\u73B0\u8BA9\u4E00\u4E2A\u9009\u62E9\u5668\u7EE7\u627F\u53E6\u4E00\u4E2A\u9009\u62E9\u5668\u7684\u6837\u5F0F\u3002</p><p>\u7EE7\u627F\u6709\u4E24\u79CD\u8BED\u6CD5\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u7EE7\u627F\u65B9\u5F0F\u4E00\uFF1A</span>
<span class="token selector">\u5F53\u524D\u9009\u62E9\u5668:extend(\u88AB\u7EE7\u627F\u7684\u9009\u62E9\u5668)</span> <span class="token punctuation">{</span>

  \u58F0\u660E\u5757

<span class="token punctuation">}</span>

<span class="token comment">// \u7EE7\u627F\u65B9\u5F0F\u4E8C\uFF1A</span>
<span class="token selector">\u5F53\u524D\u9009\u62E9\u5668</span> <span class="token punctuation">{</span>

  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>\u88AB\u7EE7\u627F\u7684\u9009\u62E9\u5668<span class="token punctuation">)</span><span class="token punctuation">;</span>

  \u58F0\u660E\u5757

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B50\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.inline<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u89C4\u5219\u96C6\u4E2D\uFF0C<code>:extend</code>\uFF08\u7EE7\u627F\u8BED\u6CD5\uFF09\u4F1A\u5C06\u201C\u7EE7\u627F\u7684\u9009\u62E9\u5668\u201D\uFF08<code>nav ul</code>\uFF09\u5E94\u7528\u5230 <code>.inline</code> \u7C7B\uFF08\u88AB\u7EE7\u627F\u7684\u9009\u62E9\u5668\uFF09\u51FA\u73B0\u7684\u4EFB\u4F55\u4F4D\u7F6E\uFF08\u5373\u5408\u5E76\uFF0C\u8FD9\u6837<code>nav ul</code>\u5C31\u6709\u4E86<code>.inline</code>\u7C7B\u7684\u6837\u5F0F\uFF09\u3002\u58F0\u660E\u5757\u4FDD\u6301\u539F\u6837\uFF0C\u4F46\u4E0D\u5F15\u7528 extend(\u56E0\u4E3A extend \u4E0D\u662F css)\u3002</p><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.inline,
nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF7\u5408-minxins" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408-minxins" aria-hidden="true">#</a> \u6DF7\u5408\uFF08Minxins\uFF09</h2><p>\u5728 LESS \u4E2D\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E9B\u901A\u7528\u7684\u5C5E\u6027\u96C6\u4E3A\u4E00\u4E2A class\uFF0C\u7136\u540E\u5728\u53E6\u4E00\u4E2A\u89C4\u5219\u4E2D\u53BB\u8C03\u7528\u8FD9\u4E9B\u5C5E\u6027\u3002\u6DF7\u5408\u5C31\u662F\u5C06\u4E00\u7CFB\u5217\u5C5E\u6027\u4ECE\u4E00\u4E2A\u89C4\u5219\u5F15\u5165\u5230\u53E6\u4E00\u4E2A\u89C4\u5219\u4E2D\u3002</p><p>\u6DF7\u5408\u7684\u5B9A\u4E49\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.\u6DF7\u5408\u540D()</span><span class="token punctuation">{</span>
    \u5C5E\u6027\u7684\u5408\u96C6
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DF7\u5408\u7684\u4F7F\u7528\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>.\u6DF7\u5408\u540D<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4F8B\u5B50</strong></p><p>\u5047\u8BBE\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A class \u5982\u4E0B\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5176\u5B83\u89C4\u5219\u96C6\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u5C5E\u6027:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5B9A\u4E49\u7684\u6DF7\u5408\uFF08class\uFF09\u4E5F\u88AB\u7F16\u8BD1\u51FA\u6765\u4E86\uFF0C\u800C\u4E14\u662F\u53EF\u4EE5\u8BC6\u522B\u7684 CSS \u8BED\u6CD5\u3002</p></div><p>\u5B9A\u4E49\u6DF7\u5408\u548C\u8C03\u7528\u6DF7\u5408\u7684\u65F6\u5019\u53EF\u4EE5\u4E0D\u6DFB\u52A0 <code>()</code>\uFF0C\u4F46\u662F\u4E3A\u4E86\u65B9\u4FBF\u533A\u5206\u6DF7\u5408\u548C\u666E\u901A\u6837\u5F0F\uFF0C\u4E5F\u4E3A\u4E86\u65B9\u4FBF\u4F20\u53C2\uFF0C\u4E00\u822C\u6211\u4EEC\u8981\u6DFB\u52A0<code>()</code>\u3002</p><p>\u4E0D\u52A0\u5C0F\u62EC\u53F7\uFF0C\u5219\u53EF\u4EE5\u88AB\u7F16\u8BD1\u51FA\u6765\uFF1B\u5982\u679C\u52A0\u4E0A\u62EC\u53F7\uFF0C\u5219\u4E0D\u80FD\u88AB\u7F16\u8BD1\u51FA\u6765\uFF0C\u53EA\u80FD\u88AB\u8C03\u7528\u3002</p><p>\u540C\u6837\u662F\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u6DFB\u52A0\u5C0F\u62EC\u53F7\u540E\u5982\u4E0B\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token selector">.bordered()</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u6DFB\u52A0\u5C0F\u62EC\u53F7\u5B9A\u4E49\u4E4B\u540E\uFF0C\u6DF7\u5408\uFF08class\uFF09\u6CA1\u6709\u88AB\u7F16\u8BD1\u51FA\u6765\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u53EF\u9009\u7684\u62EC\u53F7\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u5C06\u88AB\u5E9F\u5F03\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u5728\u5B9A\u4E49\u548C\u8C03\u7528\u6DF7\u5408\u7684\u89C6\u4E4E\u59CB\u7EC8\u6DFB\u52A0\u62EC\u53F7\u3002</p></div><h3 id="\u5E26\u53C2\u6570\u7684\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#\u5E26\u53C2\u6570\u7684\u6DF7\u5408" aria-hidden="true">#</a> \u5E26\u53C2\u6570\u7684\u6DF7\u5408</h3><p>\u5728\u58F0\u660E\u6DF7\u5408\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5728\u5C0F\u62EC\u53F7\u4E2D\u58F0\u660E\u5F62\u53C2\u3002\u5F62\u53C2\u7531<code>@\u53D8\u91CF\u540D</code>\u5B9A\u4E49\u3002 \u8C03\u7528\u7684\u65F6\u5019\u53EF\u4EE5\u4F20\u5165\u5B9E\u53C2\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token selector">.border-radius(<span class="token variable">@radius</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border-radius</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F20\u53C2\u5E76\u8C03\u7528</span>
<span class="token punctuation">}</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border-radius</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F20\u53C2\u5E76\u8C03\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F62\u53C2\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u5F62\u53C2\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u5F62\u53C2\u9ED8\u8BA4\u503C</h3><p>\u53EF\u4EE5\u76F4\u63A5\u5728\u6DF7\u5408\u4E2D\u5B9A\u4E49\u5F62\u53C2\u7684\u65F6\u5019\uFF0C\u7ED9\u5F62\u53C2\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u6BD4\u5982\uFF08@color: red\uFF09\u3002 \u5F53\u4F7F\u7528\u6DF7\u5408\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6709\u5B9E\u53C2\u4F20\u9012\uFF0C\u5219\u4F7F\u7528\u5B9E\u53C2\u7684\u503C\uFF0C\u5426\u5219\u4F7F\u7528\u5F62\u53C2\u7684\u9ED8\u8BA4\u503C\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token selector">.border-radius(<span class="token variable">@radius</span>: 5px)</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border-radius</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528\uFF0C\u4E0D\u4F20\u53C2\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u547D\u540D\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u53C2\u6570" aria-hidden="true">#</a> \u547D\u540D\u53C2\u6570</h3><p>\u5728\u4F7F\u7528\u6DF7\u5408\u7684\u65F6\u5019\uFF0C\u5982\u679C\u60F3\u8981\u6307\u5B9A\u4F20\u9012\u7684\u5B9E\u53C2\u5BF9\u5E94\u54EA\u4E00\u4E2A\u5F62\u53C2\uFF0C\u5219\u53EF\u4EE5\u5BF9\u5B9E\u53C2\u547D\u540D\u3002\u4EFB\u4F55\u53C2\u6570\u90FD\u53EF\u4EE5\u901A\u8FC7\u5176\u540D\u79F0\u5F15\u7528\uFF0C\u5E76\u4E14\u5B83\u4EEC\u4E0D\u5FC5\u6309\u4EFB\u4F55\u7279\u6B8A\u987A\u5E8F\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token selector">.mixin(<span class="token variable">@color</span>: black; <span class="token variable">@margin</span>: 10px; <span class="token variable">@padding</span>: 20px)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@margin</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token variable">@margin<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span> <span class="token variable">@color<span class="token punctuation">:</span></span> #33acfe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528</span>
<span class="token punctuation">}</span>
<span class="token selector">.class2</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>#efca44<span class="token punctuation">;</span> <span class="token variable">@padding<span class="token punctuation">:</span></span> 40px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.class1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #33acfe<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class2</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efca44<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arguments-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#arguments-\u53D8\u91CF" aria-hidden="true">#</a> @arguments \u53D8\u91CF</h3><p><code>@arguments</code> \u53D8\u91CF\u4EE3\u8868\u6240\u6709\u53C2\u6570\u96C6\u5408\uFF0C\u4E0D\u60F3\u5355\u72EC\u5904\u7406\u6BCF\u4E00\u4E2A\u53C2\u6570\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5229\u7528<code>@arguments</code>\u4EE3\u66FF</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.brass1(<span class="token variable">@a</span>:1560px, <span class="token variable">@b</span>: 560px)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.brass1</span><span class="token punctuation">(</span><span class="token variable">@b<span class="token punctuation">:</span></span> 1000px<span class="token punctuation">,</span> <span class="token variable">@a<span class="token punctuation">:</span></span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px 1000px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px 1000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a> \u6A21\u5F0F\u5339\u914D</h3><p>\u5728 Less \u4E2D\u5C1D\u8BD5\u5229\u7528\u6A21\u5F0F\u5339\u914D\u66FF if/else\uFF0C\u5176\u6267\u884C\u539F\u7406\u7C7B\u4F3C switch/case\u3002 \u56E0\u4E3A\u4E00\u4E2A\u6DF7\u5408\u53EF\u80FD\u6709\u591A\u79CD\u5F62\u5F0F\uFF0C\u6240\u4EE5 Less \u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u5141\u8BB8\u6839\u636E\u53C2\u6570\u7684\u503C\u6765\u6539\u53D8 mixin \u7684\u884C\u4E3A\u3002</p><p>\u5F53\u8FDB\u884C\u6A21\u5F0F\u5339\u914D\u7684\u65F6\u5019\uFF0C\u53C2\u6570\u662F <code>@_</code> \u7684\u6DF7\u5408 \u662F\u5FC5\u9009\u7684\uFF0C\u5373\u8C03\u7528\u8FD9\u4E2A\u6DF7\u5408\u7684\u65F6\u5019\uFF0C\u53C2\u6570\u662F <code>@_</code> \u7684\u6DF7\u5408\u7684\u5C5E\u6027\u5FC5\u7136\u4F1A\u88AB\u6DFB\u52A0\u5230\u8C03\u7528\u6DF7\u5408\u7684\u5143\u7D20\u4E2D\u53BB\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.mine(<span class="token variable">@_</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mine(color1)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mine(color2)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u6A21\u5F0F\u5339\u914D\u5230\u76F8\u5E94\u7684\u6DF7\u5408</span>
  <span class="token comment">//\u5339\u914D\u7684\u5173\u7CFB\u7C7B\u4F3C\u4E8E switch\u8BED\u53E5</span>
  .<span class="token function">mine</span><span class="token punctuation">(</span>color2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u548C\u5B9A\u4E49\u6DF7\u5408\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u6A21\u5F0F\u5339\u914D\u7684\u53C2\u6570\u662F\u4E0D\u5E26@\u7684\uFF0C\u800C\u6DF7\u5408\u7684\u53C2\u6570\u662F\u5E26@\u7684\u3002</p></div><h3 id="\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D" aria-hidden="true">#</a> \u91CD\u8F7D</h3><p>\u76F8\u540C\u7684\u6DF7\u5408\u53EF\u4EE5\u6839\u636E\u8C03\u7528\u7684\u65F6\u5019\u4F20\u5165\u7684\u5B9E\u53C2\u4E2A\u6570\u9009\u62E9\u5339\u914D\u7684\u6DF7\u5408\u5185\u5BB9\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u7684\u884C\u4E3A\u3002\u5982\u679C\u4F60\u4F7F\u7528\u5E26\u6709\u4E00\u4E2A\u53C2\u6570\u7684 mixin\uFF0C\u4F8B\u5982.mixin(green);\uFF0C\u90A3\u4E48\u6240\u6709\u5E26\u6709\u4E00\u4E2A\u5F3A\u5236\u53C2\u6570\u7684 mixin \u7684\u5C5E\u6027\u90FD\u5C06\u88AB\u4F7F\u7528\uFF1A</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.mixin(<span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color-1</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(<span class="token variable">@color</span>, <span class="token variable">@padding</span>: 2)</span> <span class="token punctuation">{</span>
  <span class="token property">color-2</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">padding-2</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(<span class="token variable">@color</span>, <span class="token variable">@padding</span>, <span class="token variable">@margin</span>: 2)</span> <span class="token punctuation">{</span>
  <span class="token property">color-3</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">padding-3</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.some .selector div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>#008000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.some .selector div</span> <span class="token punctuation">{</span>
  <span class="token property">color-1</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span>
  <span class="token property">color-2</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span>
  <span class="token property">padding-2</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B88\u536B-guards" tabindex="-1"><a class="header-anchor" href="#\u5B88\u536B-guards" aria-hidden="true">#</a> \u5B88\u536B\uFF08Guards\uFF09</h2><p>\u6839\u636E\u5224\u65AD\u6761\u4EF6\u9009\u4E2D Mixin \u7684\u884C\u4E3A\uFF0C\u7C7B\u4F3C\u4E8E JavaScript \u7684<code>if/else</code>\uFF0C\u4F7F\u7528 <code>when</code> \u8BED\u6CD5\u65F6\uFF0CGuards \u5141\u8BB8\u6211\u4EEC\u4F7F\u7528 <code>&gt;,&gt;=,&lt;,&lt;=,=,</code>\u3001\u5173\u952E\u5B57 true\uFF08\u53EA\u5339\u914D\u5173\u952E\u5B57 true\uFF0C\u975E true \u4E0D\u4F1A\u5339\u914D\uFF09\u3001\u652F\u6301\u903B\u8F91 <code>and,not ()</code>\uFF0C\u540C\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u201C,\u201D\u5206\u5272\u591A\u4E2A Guards\uFF0C\u5176\u8868\u793A\u53EA\u8981\u5176\u4E2D\u4EFB\u610F\u4E00\u4E2A\u6EE1\u8DB3\u5C31\u4E3A true\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.mixin(<span class="token variable">@q</span>)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u65E0\u5B88\u536B</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mixin(<span class="token variable">@q</span>) when(<span class="token variable">@q</span>&gt;10)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mixin(<span class="token variable">@q</span>) when(<span class="token variable">@q</span>&lt;=10),
(<span class="token variable">@q</span>&gt;100)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>99<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u7B26\u4E32\u63D2\u503C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u63D2\u503C" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u63D2\u503C</h2><p>\u53D8\u91CF\u53EF\u4EE5\u7528\u7C7B\u4F3C ruby \u548C php \u7684\u65B9\u5F0F\u5D4C\u5165\u5230\u5B57\u7B26\u4E32\u4E2D\uFF0C\u901A\u8FC7 <code>@{name}</code> \u8FD9\u6837\u7684\u7ED3\u6784:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@url<span class="token punctuation">:</span></span> <span class="token string">&quot;http://www.atguigu.com/images/pic_new/&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;@{url}logo.png&quot;</span><span class="token punctuation">)</span></span> 0 0 no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5BFC\u5165" aria-hidden="true">#</a> \u6587\u4EF6\u5BFC\u5165</h2><p>\u5BFC\u5165 Less \u6587\u4EF6\uFF1A<code>@import \u201Clib.less\u201D</code>; \u7B49\u4EF7\u4E8E<code>@import \u201Clib\u201D</code>\uFF08\u53EF\u4EE5\u4E0D\u5E26\u540E\u7F00\uFF09</p><p>\u5BFC\u5165 css \u6587\u4EF6\uFF1A<code>@import &quot;lib.css&quot;;</code></p><h2 id="\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u4E49" aria-hidden="true">#</a> \u8F6C\u4E49</h2><p>\u6709\u65F6\u5019\uFF0C\u5F53\u9700\u8981\u5F15\u5165\u65E0\u6548\u7684 CSS \u8BED\u6CD5\u6216 Less \u4E0D\u80FD\u8BC6\u522B\u7684\u5B57\u7B26\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u8F6C\u4E49\u5B57\u7B26\u3002\u6B64\u65F6\uFF0C\u5C31\u53EF\u4EE5\u5728\u5B57\u7B26\u4E32\u524D\u9762\u52A0\u4E00\u4E2A~\uFF0C\u5E76\u5C06\u9700\u8981\u8F6C\u4E49\u7684\u5B57\u7B26\u4E32\u653E\u5728 &quot;&quot; \u4E2D\u3002</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token variable">@cc<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>

<span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> ~<span class="token string">&quot;@{cc}px&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,153);function b(g,h){const a=t("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[n("a",r,[d,e(a)])]),n("p",null,[n("a",v,[k,e(a)])]),m])}const y=p(o,[["render",b],["__file","index.html.vue"]]);export{y as default};
