# TO DO 
- [ ] update documentation for compare and create modules

![NPM Downloads](https://img.shields.io/npm/dw/format_date_time_moment)

# format_date_time_moment

The purpose is to make it easier to format dates (given whatever input the date may be in)

## Table of Contents

<!-- toc -->

* [Install](#install)
* [API](#api)
  + [FormatDateTime](#formatdatetime)

## Install

## Directions

1. Install the package 

```
npm install format_date_time_moment
```

If utilizing in node, import into your javascript file like such 

```
const {formatDateTime} = require("format_date_time_moment/node")

```
otherwise...

2. In your html document, import the script (make sure to import it after your ***JQuery AND moment*** script, and before your javascript file)

```
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.js' integrity='sha512-Bm8FBfOFILW7qzf514l/KJaW+VKYyErRPjBRcpCJ1IfmBJcL9PRSBo6fyhE0i8BBmBbiMyQrNC97m1b1dDWM0g==' crossorigin='anonymous'></script>
    <script src='https://cdn.jsdelivr.net/npm/format_date_time_moment/index.js' type='text/javascript'></script>
```

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
   console.log(formatDateTime.getType("2022-03-01T19:06:31.047Z"))
})
```

```
<script src="yourScript.js"></script>
```


## API

<!-- api -->
