# API Docs

All The Icons has an API that allows you to run it from an external shortcut. To use, run All The Icons with a list input of parameters. End each request with `api request`. For example,

1. $editicondirect

2. (my icon in base64)

3. (the background image in base64)

4. api_request

the result of the request is in the shortcut output as a dictionary with the key being `api_result`

the API will be revamped later, so keep the shortcut up to date

svg images are not supported

---
## all commands
### find icons
1. $search

returns: none, unless you properly selected an icon

### edit a custom icon

1. $editicondirect

2. your icon in Base64.

3. your background image in Base64

returns: edited icon + bg in base64

### view these docs
1. $apidocs

### view how to use guide

1. $guide

### check for All The Icons update

1. $update

### view settings

1. $prefs

### change the default icon background 

1. $changebg

2. (optional) the background image in base64

returns: none

### manage collection

1. $collection

### edit icon + more features

1. $editicon

2. your icon in base64

returns: your icon + bg in base64
currently this doesnt have a iconbg parameter

## planned changes

- ability to change specific preferences

- adding to collection from API

- custom icon bg in $editicon

- specific collection management 




