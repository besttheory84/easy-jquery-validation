# Easy jQuery form validation

This is an easy jQuery form validation script that works on blur and on submit. Supported input types are text, tel, and email.

All you need to do is make sure the script knows the id value of your form. For example, by default, the script uses #form here:

```Javascript
$("#form").submit(function() {
```

You can change that to whatever you want, and the validation will work.

When an input validates correctly, a class of "correct" will be added to the input.  This can be styled however you want.  Conversely, if validation fails, a class of "error" will be added.  This too can be styled however you would like.

Enjoy!
