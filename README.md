# Beautiful switch with react js
[![npm](https://img.shields.io/npm/v/react-beautiful-switch.svg?style=flat-square)](https://www.npmjs.com/package/react-beautiful-switch)

<img src="https://media.giphy.com/media/Vc5PPcOcHxSTBs1NDf/giphy.gif" />

Simple, useful and beautiful switch
#
## Installation

```bash
npm install react-beautiful-switch
```


## Usage

```javascript
import React from "react";
import BeautifulSwitch from "react-beautiful-switch";

function App() {
  return (
    <div className="App">
      <BeautifulSwitch />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| deafultValue | bool | false |  If true, the switch is set to checked. If false, it is not checked.|
| onText | string | yes | will take on this text when it is _not_ checked.|
| offText | string | no | will take on this text when it is checked.|
| color | string | #2d3a87 | switch's color. Only accepts hex-colors.|
| onChange | func | _undefined_ | function to run when switch is changed|
