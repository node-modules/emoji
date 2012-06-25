# TOC
   - [emoji.js](#emojijs)
     - [unifiedToHTML()](#emojijs-unifiedtohtml)
     - [docomoToUnified()](#emojijs-docomotounified)
     - [kddiToUnified()](#emojijs-kdditounified)
     - [softbankToUnified()](#emojijs-softbanktounified)
     - [googleToUnified()](#emojijs-googletounified)
<a name="" />
 
<a name="emojijs" />
# emoji.js
<a name="emojijs-unifiedtohtml" />
## unifiedToHTML()
should convert all unified code to html format.

```js
for (var key in EMOJI_MAP) {
  var em = EMOJI_MAP[key];
  emoji.unifiedToHTML(key).should.equal('<span class="emoji emoji' + em[2] + '" title="' + em[1] + '"></span>');
}
```

should not covert normal string.

```js
var text = 'I am not unified string...';
emoji.unifiedToHTML(text).should.equal(text);
```

<a name="emojijs-docomotounified" />
## docomoToUnified()
should convert all DoCoMo code to html format.

```js
for (var key in EMOJI_MAP) {
  var em = EMOJI_MAP[key];
  if (em[3][0] === '-') {
    continue;
  }
  var unified = emoji.docomoToUnified(em[3][0]);
  should.ok(unified);
  should.ok(EMOJI_MAP[unified]);
}
```

should not covert normal string.

```js
var text = 'I am not DoCoMo string...🌑';
emoji.docomoToUnified(text).should.equal(text);
```

<a name="emojijs-kdditounified" />
## kddiToUnified()
should convert all KDDI code to html format.

```js
for (var key in EMOJI_MAP) {
  var em = EMOJI_MAP[key];
  if (em[4][0] === '-') {
    continue;
  }
  var unified = emoji.kddiToUnified(em[4][0]);
  should.ok(unified);
  should.ok(EMOJI_MAP[unified]);
}
```

should not covert normal string.

```js
var text = 'I am not KDDI string...🌑';
emoji.kddiToUnified(text).should.equal(text);
```

<a name="emojijs-softbanktounified" />
## softbankToUnified()
should convert all SoftBank code to html format.

```js
for (var key in EMOJI_MAP) {
  var em = EMOJI_MAP[key];
  if (em[5][0] === '-') {
    continue;
  }
  var unified = emoji.softbankToUnified(em[5][0]);
  should.ok(unified);
  should.ok(EMOJI_MAP[unified]);
}
```

should not covert normal string.

```js
var text = 'I am not KDDI string...🌑';
emoji.softbankToUnified(text).should.equal(text);
```

<a name="emojijs-googletounified" />
## googleToUnified()
should convert all Google code to html format.

```js
for (var key in EMOJI_MAP) {
  var em = EMOJI_MAP[key];
  if (em[6][0] === '-') {
    continue;
  }
  var unified = emoji.googleToUnified(em[6][0]);
  should.ok(unified);
  should.ok(EMOJI_MAP[unified]);
}
```

should not covert normal string.

```js
var text = 'I am not Google string...🌑';
emoji.googleToUnified(text).should.equal(text);
```

