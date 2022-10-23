---
title: تولید خودکار افزونه های وردپرس با WPCrudRest
description: WPCrudRest ابزاری است که با استفاده از آن می توانید افزونه های وردپرس را به صورت کاملا اتوماتیک و بدون کدنویسی تولید کنید.
---
![wpcrudrest](/content/wpcrudrest/wpcrudrest-banner.png)
## معرفی WPCrudRest
این ابزار حاصل پایان نامه کارشناسی ارشد در [گروه تحقیقاتی MDSE دانشگاه اصفهان] (https://mdse.ui.ac.ir) می باشد و شامل مجموعه ای از افزونه های Eclipse می باشد که شما را قادر می سازد با مدل سازی گرافیکی یک افزونه وردپرس تولید کنید. ما از یک رویکرد Model-Driven برای تولید کدها از مدل استفاده می کنیم.
چارچوب WPCrudRest در حال حاضر فقط به عنوان یک افزونه برای Eclipse در دسترس است. از [Sirius](https://www.eclipse.org/sirius/) برای ارائه یک محیط مدل‌سازی گرافیکی و [Acceleo](https://www.eclipse.org/acceleo/download.html) برای تبدیل مدل‌ها به کد
## لطفا در ارزیابی شرکت کنید
از طریق لینک های زیر می توانید در ارزیابی چارچوب WPCrudRest شرکت کنید:
* **[Evaluation participate (English language)](/en/content/?cat=blog&content=wpcrudrest-eval)**

* **[مشارکت در ارزیابی (فارسی)](/fa/content/?cat=blog&content=wpcrudrest-eval)**

_WPCrudRest Framework و نسخه ی نمایشی افزونه وردپرس ایجاد شده:_
![سازنده پلاگین وردپرس WPCrudRest](/content/wpcrudrest/wpcrudrest.gif)
## محیط آزمایش:
این ابزار با موفقیت در موارد زیر مستقر و آزمایش شد:
* [Windows 10 64X](https://www.microsoft.com/en-us/software-download/windows10)
* [Eclipse Modeling Tools 2022-06](https://www.eclipse.org/downloads/packages/release/2022-06/r/eclipse-modeling-tools)
* [جاوا 11 (jdk11)](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
* [XAMPP 7.1.2 (PHP 7.1.2)](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/7.1.29/)
* [وردپرس 5.6.1 و 6.0.2] (https://wordpress.org/download/)

## فیلم های راهنمایی
1. دانلود ابزار مدلسازی Eclipse و نصب (استخراج) -> مشاهده ویدیو در: [Youtube](https://youtu.be/FsehvXbDuf8) - [Aparat](https://www.aparat.com/v/pci6K )
2. دانلود و استقرار WPCrudRest به عنوان پلاگین Eclipse -> تماشای ویدیو در: [Youtube](https://youtu.be/xeCBqQRdBIg) - [Aparat](https://www.aparat.com/v/KICrQ)
3. Acceleo را به عنوان پلاگین Eclipse نصب کنید -> [Youtube](https://youtu.be/kwBskje3lfk) - [Aparat](https://www.aparat.com/v/Uh1zM)
4. شروع مدلسازی (ایجاد پروژه مدلسازی جدید) -> [Youtube](https://youtu.be/F5uPJMvkYNI) - [Aparat](https://www.aparat.com/v/1uQBW)
5. مدل یک پلاگین مدیریت کتابخانه ساده (مثال) -> [Youtube](https://youtu.be/8z_OJiiTTws) - [Aparat](https://www.aparat.com/v/j4Bqp)
6. استقرار وردپرس (در سیستم عامل ویندوز) - نصب XAMPP -> [Youtube](https://youtu.be/EqW5lSWWsP0) - [Aparat](https://www.aparat.com/v/1owaH)
7. استقرار وردپرس (در سیستم عامل ویندوز) - استقرار (نصب) وردپرس -> [Youtube](https://youtu.be/NnFDoHHKAEE) - [Aparat](https://www.aparat.com/v/mY6i8)
8. ایجاد و استقرار افزونه وردپرس -> [Youtube](https://youtu.be/uAj5vbeoikU) - [Aparat](https://www.aparat.com/v/W7yP9)

### همچنین می توانید با مراجعه به یکی از لینک های زیر به لیست کامل فیلم های آموزشی دسترسی پیدا کنید:
- [لیست پخش یوتیوب](https://www.youtube.com/playlist?list=PL8kI35qv4aXaRaETVfC0CgzlgtKy6e6Gk)
- [لیست پخش آپارات](https://www.aparat.com/v/pci6K?playlist=1773307)

## دستورالعمل نصب و استفاده:

### برای استقرار و استفاده از چارچوب می توانید مراحل زیر را دنبال کنید:

_نکته: اگر با وردپرس آشنایی ندارید، می‌توانید [**این پیوند**](https://www.cloudways.com/blog/install-wordpress-locally/) را برای **استقرار وردپرس در رایانه شخصی خود دنبال کنید** !_

### A. Eclipse را نصب کنید
1. [Eclipse Modeling Tools] (https://www.eclipse.org/downloads/packages/release/2022-06/r/eclipse-modeling-tools) را دانلود کنید.
2. بسته Eclipse دانلود شده را نصب کنید (از حالت فشرده خارج کنید).

### ب. Eclipse را پیکربندی کرده و پلاگین های مورد نیاز را نصب کنید

1. آخرین [بسته WPCrudRest] را دانلود کنید (https://github.com/asadidebuger/WPCrudRest/releases/latest)
2. بسته دانلود شده را از حالت فشرده خارج کنید و فهرست [dropins] (https://github.com/asadidebuger/WPCrudRest/tree/main/dropins "dropins") را در مسیر نصب eclipse کپی کنید (مانند C:\Program Files\eclipse)
3. Eclipse را اجرا کنید
4. افزونه [Acceleo](https://www.eclipse.org/acceleo/download.html) را نصب کنید
5. پلاگین [Sirius](https://www.eclipse.org/sirius/) را در صورت نصب نشدن نصب کنید *(پیش نصب در نسخه های جدیدتر)*
6. Eclipse را مجددا راه اندازی کنید

### ج. یک پروژه مدلسازی جدید ایجاد کنید
1. روی آیتم منوی "File" کلیک کنید
2. مورد "جدید" ->" دیگر" را از منوی "فایل" انتخاب کنید
3. در پنجره "Select a Wizard" گروه "Sirius" را جستجو کرده و با کلیک کردن آن را گسترش دهید.
4. "Project Modeling" را انتخاب کنید و روی "Next" کلیک کنید.
5. نامی را برای پروژه انتخاب کنید و آن را در قسمت "نام پروژه" تایپ کنید
6. برای ایجاد پروژه مدلسازی بر روی دکمه "پایان" کلیک کنید

### D. ایجاد "Crudrest Model"
نکته: مدل مخزن نوع فیلد برای تعریف انواع فیلد موجودیت ها استفاده می شود و در صورت عدم وجود، مدل سازی و تولید کد امکان پذیر نیست! این برای استفاده از [مدل مخزن فیلد از پیش ساخته شده وجود دارد] (https://github.com/asadidebuger/WPCrudRest/blob/main/models/FieldTypeRepo.crudest) توصیه می شود!
1. [FieldTypeRepo.crudest](https://github.com/asadidebuger/WPCrudRest/blob/main/models/FieldTypeRepo.crudest "FieldTypeRepo.crudest") را از [models] (https://githubger.com/asadidebu) کپی کنید دایرکتوری /WPCrudRest/tree/main/models "models") به پوشه مدل پروژه *(یا root)*
2. می‌توانید به سادگی یکی از مدل‌های نمونه را از فهرست مخزن [models] (https://github.com/asadidebuger/WPCrudRest/tree/main/models) کپی کنید و به مرحله بعد بروید.
2. در اکسپلورر Eclipse Project (یا Model) روی root project کلیک راست کنید
3. مورد "جدید" ->" دیگر" را از منوی بازشو انتخاب کنید
4. در پنجره "Select a Wizard"، "Crudest Model" را جستجو کرده و آن را انتخاب کنید
5. برای ایجاد فایل مدل روی next کلیک کنید و دایرکتوری و نام *(با پسوند crudest.)* را انتخاب کنید و روی دکمه "بعدی" کلیک کنید.
6. "Plugin Creator" را از لیست کشویی "Model Object" انتخاب کنید
7. برای ایجاد فایل مدل روی Finish کلیک کنید

### E. مدل پلاگین وردپرس Crudrest را در ویرایشگر گرافیکی باز کنید
1. روی فایل presentations.aird دوبار کلیک کنید
2. CrudRestWPP را از قسمت Presentation فعال کنید
3. روی CrudRestWPP دوبار کلیک کنید تا ویرایشگر مدل ویژوال سیریوس باز شود
4. مدل را ویرایش کنید
5. آن را ذخیره کنید!

### F. کد پلاگین وردپرس را ایجاد کنید

1. **اگر می خواهید افزونه را مستقیماً در وردپرس محلی خود مستقر کنید**، مسیر «WP_HOME» را به عنوان دایرکتوری ریشه وردپرس در محیط سیستم تنظیم کنید.
   
        سیستم عامل ویندوز:
                    setx WP_HOME WORDPRESS_PATH /M
        مثال:
                    setx WP_HOME C:\xampp7.1\htdocs\projects\crudest /M
    [*برای راهنمایی بیشتر اینجا را کلیک کنید*](https://dev.to/kapilgorve/set-environment-variable-in-windows-and-wsl-linux-in-terminal-3mg4)
   

2. روی مدل کلیک راست کنید
3. "WP Crud-Rest" -> "Generate WordPress Plugin" را از منوی بازشو انتخاب کنید.
4. کد پلاگین در دایرکتوری "generated WPP" در دایرکتوری ریشه پروژه تولید می شود


## اسکرین شات
#### اسکرین شات ویرایشگر مدلسازی گرافیکی:
![عکس از ویرایشگر مدل سازی گرافیکی](/content/wpcrudrest/graphical-modeling-screenshot.png)

#### کد افزونه وردپرس را از اسکرین شات مدل تولید کنید:
![تولید کد افزونه وردپرس از اسکرین شات مدل](/content/wpcrudrest/generate-code-screenshot.png)

#### اسکرین شات کد پلاگین وردپرس تولید شده *(این دایرکتوری را زیپ کرده و به عنوان افزونه در وردپرس نصب کنید یا فقط آن را در فهرست پلاگین وردپرس کپی کنید)*:
![تولید شده اسکرین شات کد افزونه وردپرس](/content/wpcrudrest/generated-plugin-code-screenshot.png)
![تولید شده اسکرین شات کد پلاگین وردپرس](/content/wpcrudrest/generated-plugin-code-screenshot2.png)![تولید شده اسکرین شات کد پلاگین وردپرس](/content/wpcrudrest/generated-plugin-code-screenshot3.png)
___

#### صفحات افزونه وردپرس:
![صفحات افزونه وردپرس] (/content/wpcrudrest/microhrm-pages.png)

#### صفحه کنترل دسترسی افزونه وردپرس (AC):
![صفحه کنترل دسترسی به افزونه وردپرس (AC)] (/content/wpcrudrest/microhrm-options.png)

#### صفحه مورد فهرست پلاگین وردپرس:
![صفحه فهرست فهرست پلاگین وردپرس](/content/wpcrudrest/microhrm-list-items.png)

#### پلاگین وردپرس ایجاد (یا ویرایش) صفحه آیتم:
![افزونه وردپرس ایجاد (یا ویرایش) صفحه مورد] (/content/wpcrudrest/microhrm-edit-item.png)

#### پلاگین وردپرس RESTful webservice تست شده توسط RESTClient:
![پلاگین وردپرس وب سرویس RESTful تست شده توسط RESTClient](/content/wpcrudrest/microhrm-rest.png)
![افزونه وردپرس وب سرویس RESTful تست شده توسط RESTClient](/content/wpcrudrest/microhrm-rest2.png)
