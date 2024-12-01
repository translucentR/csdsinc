# Changes to csdsinc.net

## Google Analytics
Add this Google Analytics Script to the `<head>` section of the page.

```js
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-B07QT9XZBS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B07QT9XZBS');
</script>
```


## Microsoft Clarity
Add this Microsoft Clarity Script to the `<head>` section of the page.

```js
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "p79o0bbni0");
</script>
```


