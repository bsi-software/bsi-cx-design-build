# Readme

Build design ZIP files for BSI CX using a standard Webpack build.
Take a look at the `webpack.config.js` file to start your project.

## Create a new template

To create a new template proceed with the following steps:

1. Create a new folder with the name of your template inside the `/template` folder.
2. Create a file named `design.js` inside your new folder.
3. Create a new file named `design.twig` or `design.hbs.twig` in your new folder.
4. Create a new file named `preview.twig` or `preview.hbs.twig` in your new folder.
5. Register your new template in the central `webpack.config.js` Webpack configuration file.

## Create a new content element

To create a new content element for one of your templates proceed with the following steps:

1. Create a new folder with the name of your new content element somewhere suitable.
2. Create a Java Script file inside your new folder (e.g. `index.js`).
3. Create a `.html`, `.twig` or `.hbs.twig` file beside your new Java Script file. This will be your template for the content element.
4. Require the template file in your Java Script file under the key `file`.
4. Require your content element's Java Script file inside your template's `design.js` file in one of the `contentElements` sections.
5. If you have any assets specific for this content element (like LESS or CSS files) you can require them in your Java Script file.

### Example content element

```javascript {data-filename="index.js"}
require('./styles.scss');

module.exports = {
  elementId: 'image',
  icon: 'image',
  label: 'Bild',
  file: require('./template.hbs.twig'),
  parts: [
    {
      partId: 'image',
      label: 'Bild'
    },
    {
      partId: 'plain-text',
      label: 'Label'
    }
  ]
};
```

```twig {data-filename="template.hbs.twig"}
{% set _caption = caption ?: 'lorem ipsum' %}
<figure data-bsi-element="image" class="element image">
  <img src="{{ bsi_cx_asset('./placeholder.png') }}" alt="{{ _caption }}" data-bsi-element-part="image" />
  <figcaption data-bsi-element-part="plain-text">{{ _caption }}</figcaption>
</figure>
```

## NPM scripts

The following NPM scripts are available:

npm run build
: Run once and build the templates in production mode.

npm run watch
: Start the file watcher and build the templates in development mode. Update the bundles when file changes are detected.

npm run serve
: Start the file watcher and the development server. Build the templates in development mode and update the bundles when file changes are detected.

## Template file resolution

The `design` and `preview` file must have a `.twig` or `.hbs.twig` extension.
The `.twig` files will result in a `.html` file inside the bundle.
The `.hbs.twig` files will result in a `.hbs` file inside the bundle.
Except for the `preview` file. This will always result in a `.html` file.
If the `preview` file has a `.hbs.twig` extension, the BSI CX Webpack Plugin will also apply a Handlebars parser after the Twig parser.
