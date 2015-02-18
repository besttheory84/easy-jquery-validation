# Easy jQuery form validation

This is an easy jQuery form validation script that works on blur and on submit.

For every input field you would like to have required, simply add a class of "required":

```html
<input type="text" name="first-name" class="required" />
```

Then, you need to make sure the script knows the id value of your form. For example, by default, the script uses #form here:

```Javascript
$("#form").submit(function() {
```

You can change that to whatever you want, and the validation will work.

For an email or a phone number, a regular expression is used to detect whether or not the value is a valid email/phone. If you need these, simply add a class of either "email" or "phone" depending on which one you need:

```html
<input type="email" name="email" class="required email" />
```

When an input validates correctly, a class of "correct" will be added to the input.  This can be styled however you want.  Conversely, if validation fails, a class of "error" will be added.  This too can be styled however you would like.

Enjoy!
