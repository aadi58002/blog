import{_ as a,o,c as r,a as e,b as s,t as i,d as l}from"./app.26b4787e.js";const y=JSON.parse('{"title":"Emacs Introduction ( Doom emacs )","description":"","frontmatter":{"title":"Emacs Introduction ( Doom emacs )","slug":"Introduction"},"headers":[{"level":2,"title":"What is Emacs","slug":"what-is-emacs","link":"#what-is-emacs","children":[]},{"level":2,"title":"Is Emacs the text editor for you ? \u{1F914}","slug":"is-emacs-the-text-editor-for-you","link":"#is-emacs-the-text-editor-for-you","children":[]},{"level":2,"title":"What can Emacs do","slug":"what-can-emacs-do","link":"#what-can-emacs-do","children":[]},{"level":2,"title":"Why is Emacs not popular","slug":"why-is-emacs-not-popular","link":"#why-is-emacs-not-popular","children":[]},{"level":2,"title":"Solution to Emacs problem","slug":"solution-to-emacs-problem","link":"#solution-to-emacs-problem","children":[]}],"relativePath":"guide/Emacs/Introduction.md","lastUpdated":1664331784000}'),n={name:"guide/Emacs/Introduction.md"},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l('<h2 id="what-is-emacs" tabindex="-1">What is Emacs <a class="header-anchor" href="#what-is-emacs" aria-hidden="true">#</a></h2><p>Short Answer :<br> It is a <strong>really really</strong> old text editor (Almost 4 decades old).</p><ul><li>Read <a href="https://opensource.com/resources/what-emacs" target="_blank" rel="noreferrer">this</a> if you want to be scared of emacs.</li></ul><p>Long Answer :<br> It is a really really flexible text editor which has its own programming language <code>(elisp)</code> which is used to configure it.<br> It has a lot of really really powerful plugins like <a href="https://orgmode.org/" target="_blank" rel="noreferrer">Org Mode</a> , <a href="https://www.orgroam.com/" target="_blank" rel="noreferrer">Org Roam</a> , <a href="https://magit.vc/" target="_blank" rel="noreferrer">Magit</a></p><div class="tip custom-block"><p class="custom-block-title">Interesting Fact</p><p>Emacs was made by the same people which made base Utils like cd, find, grep, sed etc.</p></div><h2 id="is-emacs-the-text-editor-for-you" tabindex="-1">Is Emacs the text editor for you ? \u{1F914} <a class="header-anchor" href="#is-emacs-the-text-editor-for-you" aria-hidden="true">#</a></h2><p>Well if like to tinker with things as well as if you want the most configurable software out there then yes it is for you.</p><p>If you don&#39;t like tinkering with things or want a <code>just work out of the box</code> editor then emacs is not for you (Then use <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> instead).</p><h2 id="what-can-emacs-do" tabindex="-1">What can Emacs do <a class="header-anchor" href="#what-can-emacs-do" aria-hidden="true">#</a></h2><p>Basically there is no limitation on what emacs can do (if you can think and write it in code emacs will do if for you).</p><ul><li>You can edit files on remote server with your editor.</li><li>A editor does not have to installed on the remote server for emacs to work.</li><li>You can have a personal database ( with sql ) with <a href="https://www.orgroam.com/" target="_blank" rel="noreferrer">Org Roam</a>.</li><li>Emacs also has the most powerful textual user interface (TUI) for git called <a href="https://magit.vc/" target="_blank" rel="noreferrer">Magit</a>.</li><li>the list does not stop so i can&#39;t list them all here <a href="https://www.redhat.com/sysadmin/5-emacs-features-to-love" target="_blank" rel="noreferrer">Taste of Emacs power</a> Here is a teaser.</li></ul><h2 id="why-is-emacs-not-popular" tabindex="-1">Why is Emacs not popular <a class="header-anchor" href="#why-is-emacs-not-popular" aria-hidden="true">#</a></h2><p>It is because out the box emacs is very unusable.</p><ul><li>It has horrible keybinding</li><li>It is hard to navigate</li><li>It can be overwhelming to take the whole of emacs at once</li><li>To even start using it you have to learn too many things ( ex -&gt; elisp , keybinding , terms commonly used in emacs etc )</li></ul><h2 id="solution-to-emacs-problem" tabindex="-1">Solution to Emacs problem <a class="header-anchor" href="#solution-to-emacs-problem" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/doomemacs/doomemacs" target="_blank" rel="noreferrer">Doom Emacs</a> is a have good defaults configuration framework for emacs.<br> It also gives you the most powerful interface with emacs while it does not gets in the way when you try to customize it.</li><li><a href="https://www.spacemacs.org/" target="_blank" rel="noreferrer">Spacemacs</a> is a do it all solution . It has everything and it does everything.</li></ul><blockquote><p>Personal Opinion -&gt; It does too much and is too slow for me</p></blockquote><div class="danger custom-block"><p class="custom-block-title">Emacs is not VSCode</p><p>No matter how much you try things will break sometimes and the community support for things like code autocompletions it might need some tinking for some languages <br>( like vue )</p></div>',18);function m(t,u,p,f,g,w){return o(),r("div",null,[e("h1",c,[s(i(t.$frontmatter.title)+" ",1),h]),d])}const k=a(n,[["render",m]]);export{y as __pageData,k as default};