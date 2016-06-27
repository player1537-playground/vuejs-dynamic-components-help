# vuejs-dynamic-components-help

TL;DR: Read the goal section and the last section.

I've been trying to learn the right process for making reusable components with
Vue and Vuex. I've found 2 options that kind of work, but other than that, there
doesn't seem to be very much written about this topic.

## The Goal

I want to be able to have a reusable component that has several inputs. In these
examples, this is a form with a text entry and a button. In my actual
application, this ends up being a button, a text entry, and a dropdown for
selecting pre-defined textbox values.

I want to use v-model to bind data to the input, because this lets me use .lazy
or the debounce attribute. This means I usually have to make an internal,
computed variable with getters/setters that dispatch the right events.

I also want to utilize Vuex, mostly for the promises that it will make the
architecture cleaner and more organized.

## The Possible Options

Each option is wrapped in a wrapper, because that's how the end application will
need to be. The wrapper is the part that actually touches the Vuex store, and
the component should only worry about user input. The options I've found so far
are:

1. Make my component take a read-only property and dispatch an event with new
values. The wrapper then provides the component with that property (giving the
current state of the textbox or the checkbox), and listens for the event to
update the values in the store.

2. Make my component accept a two-way property that is linked to a computed
getter/setter in the wrapper. The component then attaches the inputs directly to
those two-way properties.

### Option 1

Create the wrapper with Vuex getters/actions:

```javascript
  <script>
  import { getOpt1Text, getOpt1Button } from './vuex/getters';
  import { setOpt1Text, setOpt1Button } from './vuex/actions';

  export default {
      // ...
      vuex: {
          getters: {
              text: getOpt1Text,
              button: getOpt1Button,
          },
          actions: {
              setText: setOpt1Text,
              setButton: setOpt1Button,
          },
      },
      // ...
  }
  </script>
```

Link these getters/actions to the component:

```html
  <template>
    <div>
      <opt1-component
         :text="text"
         @text="setText"
         :button="button"
         @button="setButton"
         ></opt1-component>
    </div>
  </template>
```

Accept the properties in the component and then make some internal variables
with correct getters/setters to trigger the ones that were passed in to the
component.

```javascript
  <script>
  export default {
      // ...
      props: {
          text: String,
          button: Boolean,
      },
      computed: {
          textInternal: {
              get() { return this.text; },
              set(val) { this.$dispatch('text', val); },
          },
          buttonInternal: {
              get() { return this.button; },
              set(val) { this.$dispatch('button', val); },
          },
      },
      // ...
  };
  </script>
```

Attach the input elements to the internal getters/setters.

```html
  <template>
    <div>
      <input type="text" v-model="textInternal" debounce="500"></input>
      <input type="checkbox" v-model="buttonInternal"></input>
    </div>
  </template>
```

Option 1 seems to be the way that the docs recommend. It feels very verbose
compared to option 2, especially when you have to connect to it with an
expression like in the wrapper.

This setup means that for each additional value you want the component to have
access to, you need 2 more attributes in the HTML.

Also, when you finish typing in the text box and click away to a different
component, you're left with 2 extra SET mutations.

### Option 2

Make some getters/actions for the Vuex store in the wrapper

```javascript
  <script>
  import { getOpt2Text, getOpt2Button } from './vuex/getters';
  import { setOpt2Text, setOpt2Button } from './vuex/actions';

  export default {
      // ...
      vuex: {
          getters: {
              text: getOpt2Text,
              button: getOpt2Button,
          },
          actions: {
              setText: setOpt2Text,
              setButton: setOpt2Button,
          },
      },
      // ...
  };
  </script>
```

Create a computed variable in the wrapper with the right getters/setters.

```javascript
  <script>
  export default {
      // ...
      computed: {
          textInternal: {
              get() { return this.text; },
              set(val) { this.setText(val); },
          },
          buttonInternal: {
              get() { return this.button; },
              set(val) { this.setButton(val); },
          },
      },
      // ...
  };
  </script>
```

Link these computed variables to the component

```html
<template>
  <div>
    <opt2-component
       :text.sync="textInternal"
       :button.sync="buttonInternal"
       ></opt2-component>
  </div>
</template>
```

And attach the props to the input elements in the component

```html
  <template>
    <div>
      <input type="text" v-model="text" debounce="500"></input>
      <input type="checkbox" v-model="button"></input>
    </div>
  </template>

  <script>
    export default {
        props: {
            text: {
                type: String,
                twoWay: true,
            },
            button: {
                type: Boolean,
                twoWay: true,
            },
        },
        // ...
    };
  </script>
```

I would prefer option 2, but it screws up Vuex's time traveller. If you make a
change (e.g. change the text to "foo"), and then go into the vue developer
console and reselect the Base State, then you get an extra SET mutation
occurring at the end of the list of mutations.

## Additional Options

I believe another possibility would be to pass an object as a property, and
ensure that that object has the right getters/setters watching (probably from
the data part of the component). I'm unsure if there is a good way to create
such an object, as you cannot have nested computed variables (i.e. `computed: {
foo: { bar: { get(), set() } } }`).

## Questions

I've got some example code at
https://github.com/player1537/vuejs-dynamic-components-help that illustrates
these examples, and has instructions on how to run it.

Which of these options should I use, or is there a better one?

Similarly, is there a style that I should prefer when writing these components
(event names, for instance)?

And lastly, are there any larger sets of example code that have components like
these?

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
