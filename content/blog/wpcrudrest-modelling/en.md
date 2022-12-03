---
title: Tutorial on designing WordPress plugins with WPCrudRest
description: In this article, we try to teach how to use the graphic editor of the WPCrudRest WordPress plugin. By using WPCrudRest, you can develop WordPress plugins automatically.
order: 5
tags: [wpcrudrest]
---

## Introduction
WPCrudRest is a framework that enables you to easily create WordPress plugins. For more information, you can refer to [product introduction page](/products/wpcrudrest) or [Github page](https://github.com/asadidebuger/WPCrudRest).

## Installation training
To know how to install this tool, refer to the article **[WPCrudRest installation tutorial](/en/blog/wpcrudrest-setup)**.
## Getting to know the editor environment
According to the instructions provided in the article [WPCrudRest Setup Tutorial](/en/blog/wpcrudrest-setup/#c-create-a-new-modeling-project), the pre-prepared library management model that is available from [here ](https://github.com/asadidebuger/WPCrudRest/tree/main/models) is available, we have opened it with the model editor. This model is displayed in the editor (after sorting the components) as follows:
![Overview of the model graphic editor / library management extension model](/content/wpcrudrest/wpcrudrest-model-editor-hole.png)

## how it works?
The basic view in the design of plugins is the centrality of data entity models. The most basic part of plug-in design is the modeling of entities and the connections between them, which can be seen on the left side of the above figure. In the following, we will introduce the different parts of the plugins that we are going to design with this tool.

## WordPress plugin model
In the figure below, the different areas of the library plugin model are marked with numbers. These areas are the main components of the WordPress plugin model.
![Different areas of the library plugin model](/content/wpcrudrest/wpcrudrest-model-editor-model-parts.png)

In the following, explanations are given about each of these areas.
1. WordPress plugin (whole plugin)
2. Web service (business logic on the server side and web service)
3. Graphical user interface (graphical access to the plugin)
4. Data entities (equivalent to the model part in MVC architecture)
5. Data management pages in the WordPress admin panel
6. Menus that can be added to the WordPress management panel
7. Ready-made styles for fields in the form
**Note**: By double-clicking on any element of the plugin model, a window will open where you can make the desired settings for that part.
### 1. WordPress plugin
This element includes the general features of the WordPress plugin. To create a new WordPress plugin, you must select the New Plugin tool from the widgets palette, and then create an instance of it with Cake in the empty part of the canvas.

**Note**: To start designing the model, it is necessary to have a repository in which all types of fields are defined. If the field type repository is not attached to the model file, you will be asked to introduce and attach the field type repository while creating the WordPress plugin element. You can download the pre-prepared repository and put it in your project through **[this link](https://raw.githubusercontent.com/asadidebuger/WPCrudRest/main/models/FieldTypeRepo.crudrest)**.

Before an instance of the plug-in model element is created, a window will open as shown below, where you can set the properties of the plug-in you want.
![Plugin Details Settings](/content/wpcrudrest/wpcrudrest-model-editor-plugin-details.png)

* "Plugin Name" specifies the name of the plugin.
* By checking the "Has Dynamic Access Controller" option, you specify whether structures related to access control will be created in the plugin or not.
* "Prefix" is a unique value for your plugin that distinguishes it from other plugins and prevents interference with other plugins. This value must be set carefully.
* "Directory" actually specifies the name of the main path of the plugin, which must be unique among all plugins available for WordPress. This value should also be set carefully and of course it can be equal to the "Prefix" value.
* The "Description" value specifies the description of the plugin.
* The "URL" value is the address where the plugin can be downloaded.
* The "Update URI" value is the address used to check for a new version of the plugin.
* The "Author" value is the name of the author and licensee of the plugin.
* "Author URL" specifies the web page address of the licensee.
* "Text Domain" also limits the language domain of the plugin, which prevents interference when translating to other languages.
* "DB Version" is the database version number. If changes occur in the model of data entities, because the structure of the database changes, this value must be changed to create a new structure in the database.

Other features are as per the WordPress header requirements document, which you can read in detail [here](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/).

### 2. Web service
This area of ​​the plug-in model contains the critical part of the plug-in and the server-side logic. To create an example of this element, you must select "WebService" from the widgets section and click inside area 1, which is the WordPress plugin area. This element does not need to be configured and only includes its internal components.

### 3. Graphical user interface
This area is the component of the graphical user interface of the WordPress plugin. To create this element, you must select the "GUI" option from the widget section and click inside the first area, the WordPress plugin area. Immediately after creating this element, a menu containing plugin pages and a repository of styles for displaying fields in forms is created along with three default styles. By double-clicking on this element, a window will open according to the figure below, where you can apply a special class or display style to the entire plugin.
![GUI settings](/content/wpcrudrest/wpcrudrest-model-editor-gui-options.png)

### 4. Data entities
Data entities are the same data models that define the structure of data that can be managed in the system. Each entity has a number of fields as well as various relationships with other entities. To create a new entity, you must select "New Entity" from the widgets section, and then by clicking on the empty part of the web service area, a window as shown below will be displayed and it will ask you to set values ​​for the new entity. By clicking the "OK" button, the new entity will be created.
![Entity Settings](/content/wpcrudrest/wpcrudrest-model-editor-entity-options.png)

After creating the entity, by double-clicking on it, the entity settings window is available again. The values ​​to be entered are as follows:
- "Key": A unique key for the entity. This key is used to create entity class files, databases, pages, and web services, so it should preferably be keyword-free and written in Latin without spaces.
- "Label": It is an entity label that is used in different places to refer to the entity in a single state. This value can be translated in the plugin.
- "Plural label": entity label is plural and is mostly used in the graphical user interface. This value can be translated in the plugin.
- "Title Script": This value is a JavaScript expression to create a string expression for a data element of type entity. For example, a combination of first and last name can be used to form the title of a data element of the person entity type. The "item" variable points to the data object and can be used in this area. Therefore, inserting ``item.firstname+'' +item.lastname'' can be suitable for forming a person's title. Obviously, the entity must have "lastname" and "firstname" fields.
### 4.1. Add field
Each entity consists of a number of fields and relationships. Therefore, after creating the entity, the necessary fields must be added to it. To create a new field in an entity, you must select "Entity Field" from the widgets section and then click on the empty space in the desired entity. After that, a window as shown below will be displayed where you need to set values.
![Field Settings](/content/wpcrudrest/wpcrudrest-model-editor-entity-field-options.png)

The adjustable values ​​in this section are:
- "Field Type": Specifies the field type. These values ​​are fetched from the fields type repository. You can edit the field type repository model to add new types or make changes.
- "Key": is a unique key for the field in the entity. This value should be entered without spaces and in Latin, preferably in lowercase letters. This value is used to create attributes on the entity class and entity table columns in the database.
- "Label": defines the label of the field. This value can be translated in the plugin.
- "Is Indexed": determines that this field should be indexed in the database.
- "Is Unique": determines that this field must be unique in the database.
- "Is Required": determines that entering a value for this field is mandatory.

### 4.2. Types of fields
As mentioned, field types are defined in the field type repository model file. For example, we have prepared a number of field types in the model repository that can be downloaded from here. Each type of field has a number of converters that convert values ​​when writing to the database, fetching and searching and transferring to the graphical user interface layer. Also, the graphic and validation components can be specified in the field type. Next, we describe the properties of some types of pre-made fields:
- "text": It is equivalent to "TEXT" in the database and is used for fields whose values ​​are long variable strings.
- "int": It is equivalent to "INT" in the database and is used for fields whose value is a number without a decimal point.
- "checkBox": It is equivalent to "BOOLEAN" in the database and is used for fields whose value is binary.
- "gender": It is equivalent to "INT" in the database and is used to determine the gender.
- "date": It is equivalent to "DATE" in the database and is used for fields whose values ​​are of date type and do not need to display the time.
- "datetime": It is equivalent to "DATETIME" in the database and is used for fields whose value is of date type and for which the clock needs to be displayed.
- "time": It is equivalent to "TIME" in the database and is used for fields whose value is of hour type.
- "nationalCode": It is equivalent to "VARCHAR(10)" in the database and is used for fields whose value is a national code.
- "mobile": It is equivalent to "VARCHAR(11)" in the database and is used for fields whose value is mobile number.
- "title": It is equivalent to "VARCHAR(50)" in the database and is used for fields whose value is a name (such as first and last name).
- "email": It is equivalent to "VARCHAR(30)" in the database and is used for fields whose value is an email address.
- "phone": It is equivalent to "VARCHAR(14)" in the database and is used for fields whose value is a phone number.

### 4.2. Add relationship
Supported relationships include:
- One-to-one relationship between an entity and itself
- The relationship of an entity with itself in a many-to-many way
- One-to-one relationship between two entities
- One-to-many relationship between two entities
- Relationship between two entities in a many-to-many way

To create a relationship, you can select the "Relation" option from the widgets section and then click on the empty part of the desired entity. After that, a window will be displayed according to the figure below, in which you must enter values ​​to set the relationship.
![Field Settings](/content/wpcrudrest/wpcrudrest-model-editor-entity-relation-options.png)

- "Target Entity": specifies the entity of the other side of the relationship.
- "Opposite": Determines the reciprocal relationship in the opposite entity. For example, if two entities, person and job, have a mutual relationship, both the person can reach the job, and the job can reach the people who have a relationship with it. Of course, this value can be empty, in which case it will behave differently and the relationship will be one-way. If a value is selected for this feature, changes will be automatically applied to the opposite relationship.
- "Key": A unique key for the relation exists as a field in the entity. This value should be entered without spaces and in Latin, preferably in lowercase letters. This value is used to create attributes on the entity class and foreign keys on database tables.
- "Label": Defines the label of the relation. This value can be translated in the plugin.
- "Is Indexed": determines that the corresponding key should be indexed in the database. (incomplete support)
- "Is Unique": determines that the corresponding key must be unique in the database. (incomplete support)
- "Is Required": determines that entering the value is mandatory for this relationship.
- "Many": specifies that the current side of the relation can have multiple values, otherwise it will be single value.
If you don't have an example, you can check out the "HR System" sample model available here.

### Add a custom web service
Web services related to data management and data required for pages are created by default. If you need specific web service interfaces, you can add them to the web service area. After generating the code, the structures of custom web service functions and their access control are created, and you can implement their behavior as you wish. To create a web service method, you must select "Custom API method" from the widgets section and drop or click in the empty part of the web service area (area 2). By doing this, a window will appear as shown below, in which you should set the main specifications of the web service function and then click the "OK" button.

![Add new method to web service](/content/wpcrudrest/wpcrudrest-model-editor-webservice-methode-options.png)
* "Method": is the type of function to be selected.
* "Method Name": specifies the name of the function and must be written in Latin without spaces.
* "Implement AC Codes": If you select this option, the access control structure will be created for the web service function.

### 5. Pages
Pages are actually graphical user interfaces for accessing data lists (entities), viewing data details, creating and editing them. Each page consists of two main parts, which are:
* List view that displays data as a list
* Form view that displays the details of an entity or data in the form of a form and also provides the possibility to create or edit them.
 To create a new page, you must select "New Page" option from the widgets section and drop it in an empty space in area number 5. By doing this, a window will open according to the figure below, in which you must set the properties of the page, and then by confirming it, the desired page will be created.
![Add new page to GUI](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-options.png)

* "Entity": Specifies the target entity. Of course, you can create several pages with different details for the same entity.
* "Key": is the key to access the page. If you select the entity, this field will have the entity key by default, but you can change it.
* "Override Title": If this value is empty, the title of the page will be formed according to the tag of the entity, but you can customize the title of the page by setting an expression for this value. This value can be translated in the plugin.

As mentioned, each page consists of two views, a list and a form. By double-clicking on the "Form view" and "List view" elements on each page, windows will open where you can customize each view in more detail.

### 5.1. Customizing the list view
By double-clicking on the "List view" option, a window as shown below will be displayed on each page, which consists of several different parts. In the following, we will explain about the options of each part.
![Add new page to GUI](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-list-options.png)

### 5.1.2. "Properties" section
This section specifies the general features of the list view as shown in the figure above.

* "Show Create Button": Specify whether to display the create button.
* "Show Search box": determining whether to display the search.
* "Show Delete Button": Specify whether to display the delete button.
* "Show Edit Button": determining whether to display the edit button.
* "Show View Detail Button": determine whether the detail view button will be displayed in the form mode.
* "Items Per Page": Specify the number of lines per page

### 5.1.3. "Visible Columns" section
In this section, displayable fields are determined according to the figure below. By default, all fields are selected for display. By double-clicking on the displayable fields (on the right side), you can remove them from the list, and by double-clicking on the field that is not in the list (on the left side), it will be added to the list of displayable fields.

![Defining visible fields](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-list-visible.png)

### 5.1.4. "Sortable Columns" section
In this section, sortable fields are determined according to the figure below. By default, all fields are selected for sorting. As in the previous section, you can remove them from the list by double-clicking on the sortable fields (on the right), and double-clicking on a field that is not in the list (on the left) will add it to the list of sortable fields.

![Defining Sortable Fields](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-list-sortable.png)

### 5.1.5. "Searchable Fields" section
In this section, searchable fields are determined according to the figure below. By default, no fields are selected for sorting. As in the previous section, you can remove them from the list by double-clicking on searchable fields (on the right), and double-clicking on a field that is not in the list (on the left) will add it to the list of searchable fields. Note that not all types of fields are searchable.

![Defining Searchable Fields](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-list-searchable.png)

### 5.1.6. "Bulk Actions" section
In this section, you can create a general structure for performing collective actions on selected lines. Of course, the mass deletion action is fully implemented by default, but for other actions, it is necessary to implement the details in the desired function. This part is as shown in the figure below.
![Definition of bulk actions](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-list-bulk.png)

To add a bulk action, first click the "New Bulk Action" button to create a bulk action model in the bottom list. After that, you can change the values ​​of "Key" and "Title" as desired. To remove, you can click on the "Remove" button after selecting the desired mass action in the list to delete the selected mass action.

### 5.1.7. "Advance" section
In this section, you can customize the "WHERE" part of the database to fetch the rows. The condition that is added in this part is actually combined with the processed condition as "AND" and makes the results more limited. In order to better configure this section, it is better to activate the WordPress development tools section and check the page related to fetching the relevant items.
![Database Roam Customization](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-list-advance.png)

### 5.2. Customizing the form view
By double-clicking on the "Form view" option, a window will open as shown below, where you can specify a selection of fields. By double-clicking on the fields in the list on the right, the desired field will be added to the list of form fields. Then you determine how it will be displayed by selecting it and setting the display style. Also, by double-clicking on a field in the list of form fields, that field will be removed from the list.
![Customize form view](/content/wpcrudrest/wpcrudrest-model-editor-ui-page-form.png)

### 6. Menus
Menus make it easy to access pages. To create a menu, you must select "New Menu Item" from the widgets section and drop it in the empty part of the menu area. A window will open as shown below, where you need to select the page to which the menu will direct the user. You can also change the default name of the menu in the "Override Title" section.
![Creating Menu for WordPress](/content/wpcrudrest/wpcrudrest-model-editor-ui-menu-item.png)

You can also customize the main menu by double-clicking on area 6, which includes menus, as shown in the figure below.
![Customizing the main menu of the WordPress plugin](/content/wpcrudrest/wpcrudrest-model-editor-ui-menu.png)
* "Menu Title": Determines the title of the main menu. This value can be translated in the plugin.
* "Slug": This is the keyword used to make the address of the menus unique.
* "Icon Class": Determines the icon class of the main menu.

### 7. Layout styles
Styles are actually a combination of classes and styles that are used to determine how to display fields in forms. To create a new style from the Widgets section, select the "New Layout" option and drop it in an empty area of ​​area 7. A new style is created. By double-clicking on it, a window will open as shown below, where you can enter the appropriate values.
![create layout style](/content/wpcrudrest/wpcrudrest-model-editor-ui-layout.png)
