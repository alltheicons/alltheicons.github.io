# note: API is currently broken. im working on fixing it next update

## format
All The Icons has an API that allows you to run it from an external shortcut. To use, run the shortcut with a List input and other info. End each request with `api request`. For example,

1. $search

2. api_request

the result of the request is in the shortcut output as a dictionary with the key being `api_result`

the API will be revamped later, so keep the shortcut up to date

---
## all commands
#### find icons
1. $search

result: icon in base64

#### edit a custom icon
its currently not possible to change a custom icon's color. however, you can resize it or change the opacity

1. $editicon

2. your image in Base64

result: edited image in base64

#### view how to use guide

1. $guide

no result

#### check for update

1. $update

no result