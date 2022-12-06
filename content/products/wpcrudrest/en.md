---
title: 'WPCrudRest: Create WordPress plugins Visually'
description: A powerful WordPress CRUD & RESTful plugin Generator framework. WPCrudRest provide a Visual (graphical) editor to design WordPress plugins an create them automatically.
tags: [wpcrudrest]
---


<a href="https://github.com/asadidebuger/WPCrudRest" target="_blank" >
<img src="/on-github.png" style="position: fixed; bottom: 0; right: 0;" >
</a>


![wpcrudrest](/content/wpcrudrest/wpcrudrest-banner.png)

## Introduction
WPCrudRest is a set of Eclipse plugins that enable you to **generate WordPress plugins only by graphically design them**. WPCrudRest provide a visual editor and let you to design WordPress plugin's structure and set their's properties. You can define entities and their's relationships, menu and menu items, list and form pages graphically. The generated plugin supports CRUD (**C**reate, **R**ead, **U**pdate, **D**elete) operations on the defined entities by the provided RESTful web-service. Also, the user can manage the data in the management panel. The access control management panel will be added in the WordPress _settings_ menu and will be accessible to administrators.

In short, the generated plugin has the following features:
1. Multilingual translation support (translatable with Loco Translate).
1. Support for left-to-right and right-to-left languages.
1. Automatic creation of required tables in the database.
1. Providing a web service to perform CRUD operations on defined entities.
1. Providing a web service to perform CRUD operations related to pages.
1. Provide custom web service structure.
1. Create defined menus and link them to the relevant pages.
1. Create entity list pages.
1. Create entity form page to create, display, or update an entity.
1. The possibility of managing the access control of web services users to perform CRUD operations on entities.
1. The ability to control the access control of management panel users to perform CRUD operations on entities.
1. The ability to manage access control for custom web services users.
1. Using Vue.js to create web user interfaces.
1. Ability to add more custom fields to the visual editor and plugin code.

We use a Model-Driven approach to generate codes from the designed model. This tool is the result of a master's thesis in [MDSE research group at Isfahan University](https://mdse.ui.ac.ir).
WPCrudRest framework is currently only available as a plugin for Eclipse. It used [Sirius](https://www.eclipse.org/sirius/) to provide a graphical modelling environment and [Acceleo](https://www.eclipse.org/acceleo/download.html) to transform models to code.

## Who are the users of this product?
WPCrudRest users are specifically WordPress plugin developers.

## Why use WPCrudRest?
If you are planning to create a plugin for WordPress, WPCrudRest will help you generate a significant part of your plugin in a short time without coding. If your plugin is faced with data that needs to be organized in the database, it is likely that WPCrudRest can take a big load off your shoulders. This product allows you to design data models with their connections, and the generated plugin provides menus, data management pages, access control pages, and related web services in a few simple clicks.

## Where to start?

We have prepared the necessary instructions so that you can use WPCrudRest to automatically generate WordPress plugins.

### [WPCrudRest installation tutorial](/en/blog/wpcrudrest-setup)
To know how to install the WPCrudRest tool and how to do the work, take a look at the article **[WPCrudRest installation and setup tutorial](/en/blog/wpcrudrest-setup)**.

### [Learning to design WordPress plugins with WPCrudRest](/en/blog/wpcrudrest-modelling)
To learn how to work with the graphic editor or graphic modeling, read the article **[Designing WordPress Plugins with WPCrudRest](/en/blog/wpcrudrest-modelling)** article.

## Participation in evaluation
I request you, dear audience, to participate in the evaluation of the WPCrudRest framework through the following links, so that we can decide on the improvement of the framework and turning it into a comprehensive tool:
* **[Evaluation participate (English language)](/en/blog/wpcrudrest-eval)**
* **[مشارکت در ارزیابی (فارسی)](/fa/blog/wpcrudrest-eval)**

### Demo WPCrudRest

WPCrudRest Framework and created WordPress plugin demo:
![WPCrudRest WordPress plugin creator](/content/wpcrudrest/wpcrudrest.gif)


## Screen shots
#### Images of the graphic modeling editor:
![Photo of the graphical modeling editor](/content/wpcrudrest/graphical-modeling-screenshot.png)
___
#### Create plugin
![Generate WordPress plugin code from the model](/content/wpcrudrest/generate-code-screenshot.png)
___

#### Generated WordPress plugin code screenshot
![Generated WordPress plugin code screenshot](/content/wpcrudrest/generated-plugin-code-screenshot.png)

![Generated WordPress plugin code screenshot](/content/wpcrudrest/generated-plugin-code-screenshot2.png)![Generated WordPress plugin code screenshot](/content/wpcrudrest/generated-plugin-code-screenshot3.png)
___

#### WordPress plugin pages:
![WordPress plugin pages](/content/wpcrudrest/microhrm-pages.png)

#### WordPress plugin access controll (AC) page:
![WordPress plugin access controll (AC) page](/content/wpcrudrest/microhrm-options.png)

#### WordPress plugin list item page:
![WordPress plugin list item page](/content/wpcrudrest/microhrm-list-items.png)

#### WordPress plugin create (or edit) item page:
![WordPress plugin create (or edit) item page](/content/wpcrudrest/microhrm-edit-item.png)

#### WordPress plugin RESTful webservice tested by RESTClient:
![WordPress plugin RESTful webservice tested by RESTClient](/content/wpcrudrest/microhrm-rest.png)

![WordPress plugin RESTful webservice tested by RESTClient](/content/wpcrudrest/microhrm-rest2.png)
