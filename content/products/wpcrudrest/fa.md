---
title: تولید خودکار افزونه های وردپرس با WPCrudRest
description: WPCrudRest ابزاری است که با استفاده از آن می توانید افزونه های وردپرس را به صورت کاملا اتوماتیک و بدون کدنویسی تولید کنید.
---
![wpcrudrest](/content/wpcrudrest/wpcrudrest-banner.png)
## معرفی WPCrudRest
این ابزار حاصل پایان نامه کارشناسی ارشد در [گروه تحقیقاتی مهندسی نرم‌افزار مدل‌رانده دانشگاه اصفهان](https://mdse.ui.ac.ir) می باشد و شما را قادر می سازد با مدل‌سازی گرافیکی یک افزونه وردپرس تولید کنید. ما از یک رویکرد مدل‌رانده برای تولید افزونه‌های وردپرس استفاده می کنیم.
چارچوب WPCrudRest در حال حاضر فقط به عنوان یک افزونه برای Eclipse در دسترس است. از [Sirius](https://www.eclipse.org/sirius/) برای ارائه یک محیط مدل‌سازی گرافیکی و از [Acceleo](https://www.eclipse.org/acceleo/download.html) برای تبدیل مدل‌ها به کد استفاده شده است.
## مشارکت در ارزیابی
از شما مخاطب گرامی تقاضامندم از طریق لینک های زیر در ارزیابی چارچوب WPCrudRest مشارکت کنید تا بتوانیم درمورد ارتقای چارچوب و تبدیل آن به یک ابزار فراگیر تصمیم‌گیری کنیم:
* **[Evaluation participate (English language)](/en/blog/wpcrudrest-eval)**

* **[مشارکت در ارزیابی (فارسی)](/fa/blog/wpcrudrest-eval)**

_چارچوب WPCrudRest و نسخه ی نمایشی افزونه وردپرس ایجاد شده:_
![سازنده پلاگین وردپرس WPCrudRest](/content/wpcrudrest/wpcrudrest.gif)
## محیط آزمایش:
این ابزار با موفقیت در محیطی با مشخصات زیر مستقر و و مورد آزمایش قرار گرفت:
* [Windows 10 64X](https://www.microsoft.com/en-us/software-download/windows10)
* [Eclipse Modeling Tools 2022-06](https://www.eclipse.org/downloads/packages/release/2022-06/r/eclipse-modeling-tools)
* [جاوا 11 (jdk11)](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
* [XAMPP 7.1.2 (PHP 7.1.2)](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/7.1.29/)
* [وردپرس 5.6.1 و 6.0.2](https://wordpress.org/download/)

## ویدئوهای آموزشی
1. دانلود ابزار مدلسازی Eclipse و نصب آن (استخراج) -> [یوتیوب](https://youtu.be/FsehvXbDuf8) - [آپارات](https://www.aparat.com/v/pci6K )
2. دانلود و استقرار WPCrudRest به عنوان پلاگین Eclipse -> [یوتیوب](https://youtu.be/xeCBqQRdBIg) - [آپارات](https://www.aparat.com/v/KICrQ)
3. Acceleo را به عنوان پلاگین Eclipse نصب کنید -> [یوتیوب](https://youtu.be/kwBskje3lfk) - [آپارات](https://www.aparat.com/v/Uh1zM)
4. شروع مدلسازی (ایجاد پروژه مدلسازی جدید) -> [یوتیوب](https://youtu.be/F5uPJMvkYNI) - [آپارات](https://www.aparat.com/v/1uQBW)
5. مدل یک پلاگین مدیریت کتابخانه ساده (مثال) -> [یوتیوب](https://youtu.be/8z_OJiiTTws) - [آپارات](https://www.aparat.com/v/j4Bqp)
6. استقرار وردپرس (در سیستم عامل ویندوز) - نصب XAMPP -> [یوتیوب](https://youtu.be/EqW5lSWWsP0) - [آپارات](https://www.aparat.com/v/1owaH)
7. استقرار وردپرس (در سیستم عامل ویندوز) - استقرار (نصب) وردپرس -> [یوتیوب](https://youtu.be/NnFDoHHKAEE) - [آپارات](https://www.aparat.com/v/mY6i8)
8. ایجاد و استقرار افزونه وردپرس -> [یوتیوب](https://youtu.be/uAj5vbeoikU) - [آپارات](https://www.aparat.com/v/W7yP9)

### همچنین می توانید با مراجعه به یکی از لینک های زیر به لیست کامل فیلم های آموزشی دسترسی پیدا کنید:
- [لیست پخش یوتیوب](https://www.youtube.com/playlist?list=PL8kI35qv4aXaRaETVfC0CgzlgtKy6e6Gk)
- [لیست پخش آپارات](https://www.aparat.com/v/pci6K?playlist=1773307)

## دستورالعمل نصب و استفاده:

### برای استقرار و استفاده از چارچوب می توانید مراحل زیر را دنبال کنید:

_نکته: اگر با وردپرس آشنایی ندارید، می‌توانید [**این پیوند**](https://www.cloudways.com/blog/install-wordpress-locally/) را برای **استقرار وردپرس در رایانه شخصی خود دنبال کنید** !_

### الف. Eclipse را نصب کنید
1. [Eclipse Modeling Tools](https://www.eclipse.org/downloads/packages/release/2022-06/r/eclipse-modeling-tools) را دانلود کنید.
2. بسته Eclipse دانلود شده را نصب کنید (از حالت فشرده خارج کنید).

### ب. Eclipse را پیکربندی کرده و پلاگین های مورد نیاز را نصب کنید

1. آخرین [بسته WPCrudRest](https://github.com/asadidebuger/WPCrudRest/releases/latest) را دانلود کنید
2. بسته دانلود شده را از حالت فشرده خارج کنید و پوشه [dropins](https://github.com/asadidebuger/WPCrudRest/tree/main/dropins "dropins") را در مسیر نصب eclipse کپی کنید (برای مثال در مسیر C:\Program Files\eclipse)
3. Eclipse را اجرا کنید
4. افزونه [Acceleo](https://www.eclipse.org/acceleo/download.html) را نصب کنید
5. درصورتی‌که پلاگین [Sirius](https://www.eclipse.org/sirius/) روی ایکلیپس نصب نشده آن‌را نصب کنید *(پیش نصب در نسخه های جدیدتر)*
6. Eclipse را مجددا راه اندازی کنید

### ج. یک پروژه مدلسازی جدید ایجاد کنید
1. روی منوی "File" کلیک کنید
2. گزینه "New" ->"Other" را از منوی "File" انتخاب کنید
3. در پنجره "Select a Wizard" گروه "Sirius" را جستجو کرده و با کلیک کردن آن را گسترش دهید.
4. "Project Modeling" را انتخاب کنید و روی "Next" کلیک کنید.
5. نامی را برای پروژه انتخاب کنید و آن را در قسمت "Project name" تایپ کنید
6. برای ایجاد پروژه مدلسازی بر روی دکمه "Finish" کلیک کنید

### د. ایجاد "Crudrest Model"
نکته: مدل مخزن نوع فیلد برای تعریف انواع فیلد موجودیت ها استفاده می‌شود و در صورت عدم وجود، مدل سازی و تولید کد امکان پذیر نیست! توصیه میشوداز [مدل مخزن نوع فیلدهای از پیش ساخته شده](https://github.com/asadidebuger/WPCrudRest/blob/main/models/FieldTypeRepo.crudest)  برای مدل‌سازی استفاده کنید.
1. فایل [FieldTypeRepo.crudest](https://github.com/asadidebuger/WPCrudRest/blob/main/models/FieldTypeRepo.crudest "FieldTypeRepo.crudest") موجود در پوشه [models](https://github.com/asadidebuger/WPCrudRest/tree/main/models) را در پوشه مدل پروژه *(یا پوشه اصلی پروژه)* کپی کنید.
2. می‌توانید به سادگی یکی از مدل‌های نمونه را از فهرست مخزن [models](https://github.com/asadidebuger/WPCrudRest/tree/main/models) کپی کنید و به مرحله بعد بروید.
2. در Eclipse Project Explorer روی پروژه راست کلیک کنید
3. گزینه "New" ->" Other" را از منوی بازشو انتخاب کنید
4. در پنجره "Select a Wizard" گزینه "Crudest Model" را جستجو کرده و آن را انتخاب کنید
5. برای ایجاد فایل مدل روی Next کلیک کنید و دایرکتوری و نام *(با پسوند crudest.)* را انتخاب کنید و روی دکمه "Next" کلیک کنید.
6. "Plugin Creator" را از لیست کشویی "Model Object" انتخاب کنید
7. روی Finish کلیک کنید تا فایل مدل ایجاد شود

### و. مدل پلاگین وردپرس Crudrest را در ویرایشگر گرافیکی باز کنید
1. روی فایل presentations.aird دوبار کلیک کنید
2. CrudRestWPP را از قسمت Presentation فعال کنید
3. روی CrudRestWPP دوبار کلیک کنید تا ویرایشگر مدل ویژوال سیریوس باز شود
4. مدل را ویرایش کنید
5. آن را ذخیره کنید!

### ه. تولید پلاگین وردپرس (تبدیل مدل ایجاد شده به کد پلاگین)

1. **اگر می خواهید افزونه را مستقیماً در وردپرس محلی خود مستقر کنید**، مسیر «WP_HOME» را به عنوان دایرکتوری ریشه وردپرس در محیط سیستم تنظیم کنید.
   
        سیستم عامل ویندوز:
                    setx WP_HOME WORDPRESS_PATH /M
        مثال:
                    setx WP_HOME C:\xampp7.1\htdocs\projects\crudest /M
    [*برای راهنمایی بیشتر اینجا را کلیک کنید*](https://dev.to/kapilgorve/set-environment-variable-in-windows-and-wsl-linux-in-terminal-3mg4)
   

2. روی مدل کلیک راست کنید
3. گزینه "WP Crud-Rest" -> "Generate WordPress Plugin" را از منوی بازشو انتخاب کنید.
4. کد پلاگین در  پوشه "generated WPP" در مسیر ریشه پروژه تولید می شود


## تصاویر نمونه از چارچوب و افزونه تولید شده
#### تصاویر ویرایشگر مدل‌سازی گرافیکی:
![عکس از ویرایشگر مدل سازی گرافیکی](/content/wpcrudrest/graphical-modeling-screenshot.png)

#### کد افزونه وردپرس را از اسکرین شات مدل تولید کنید:
![تولید کد افزونه وردپرس از مدل](/content/wpcrudrest/generate-code-screenshot.png)

#### کد پلاگین وردپرس تولید شده *(این دایرکتوری را فشرده کرده و به عنوان افزونه در وردپرس نصب کنید یا فقط آن را در مسیر پلاگین وردپرس کپی کنید)*:
![کد افزونه وردپرس](/content/wpcrudrest/generated-plugin-code-screenshot.png)
![کد پلاگین وردپرس](/content/wpcrudrest/generated-plugin-code-screenshot2.png)![تولید شده اسکرین شات کد پلاگین وردپرس](/content/wpcrudrest/generated-plugin-code-screenshot3.png)
___

#### صفحات افزونه وردپرس:
![صفحات افزونه وردپرس](/content/wpcrudrest/microhrm-pages.png)

#### صفحه کنترل دسترسی افزونه وردپرس (AC):
![صفحه کنترل دسترسی به افزونه وردپرس (AC)](/content/wpcrudrest/microhrm-options.png)

#### صفحه مورد فهرست پلاگین وردپرس:
![صفحه فهرست فهرست پلاگین وردپرس](/content/wpcrudrest/microhrm-list-items.png)

#### پلاگین وردپرس، صفحه ایجاد (یا ویرایش) عناصر داده ای:
![افزونه وردپرس صفحه  ایجاد (یا ویرایش) مورد](/content/wpcrudrest/microhrm-edit-item.png)

#### وب سرویس RESTful  پلاگین وردپرس تست شده توسط RESTClient:
![پلاگین وردپرس وب سرویس RESTful تست شده توسط RESTClient](/content/wpcrudrest/microhrm-rest.png)
![افزونه وردپرس وب سرویس RESTful تست شده توسط RESTClient](/content/wpcrudrest/microhrm-rest2.png)
