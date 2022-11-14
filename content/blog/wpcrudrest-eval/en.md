---
title: Participation in WPCrudRest evaluation
description: 'You can help us to evaluate the WPCrudRest framework to improve it'
order: 10
---

## A) Intro
We plan to produce the main structure of a WordPress plugin for library management with the WP-CRUD-REST framework. The class diagram of the main components of this plugin is shown in the figure.
First, watch the [tutorial videos](https://github.com/asadidebuger/WPCrudRest#guidance-videos) to learn how to use the plugin builder framework, then try to create a plugin that meets the following requirements using the tools provided:

* Choose `My Library` as the plugin's name and `mylib` as the plugin prefix (the unique name for the plugin)
* The plugin must support the ability to manage access levels
* All classes should be mapped as entities in the model 
* All relationships between entities should be created correctly
* Create an entity list page (grid view), and their edit(detail view) page for each entity
* Create menus to access each entity list page
* A menu should also be considered for books that have been loaned but not returned (to do this, write the following condition in the page settings of the list of books that have not been returned:
  `borrow.returnDate = "0000-00-00 00:00:00"`


Simple library (WordPress plugin) class diagram
![Simple library class-diagram](/content/wpcrudrest/classdiagram-lib.png)

## B) Change model
After creating the plugin, try to make changes in the UI part and check the correct application of the changes by reinstalling the plugin.

## C) Questionnaire
According to the experience you have gained Complete the [Questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSdypbU4p6AiIriKDoX_Fx14KMFsyR1sHJkAlXWY0iMkGG5VJw/viewform) and evaluate the provided framework:
**[Complete questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSdypbU4p6AiIriKDoX_Fx14KMFsyR1sHJkAlXWY0iMkGG5VJw/viewform)**
