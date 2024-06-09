# simple-django Structure


```

Setting up the Django Project
Configuring Redis
Deploying to Firebase
Getting the URL for browsing

```
Hello View: http://127.0.0.1:8000/hello/
Home: http://127.0.0.1:8000/
Products: http://127.0.0.1:8000/products/
Contact: http://127.0.0.1:8000/contact/
hello: http://127.0.0.1:8000/hello

myproject/
    manage.py 
     (This is the heart of your Django project. It's a Python script that allows you to perform various administrative tasks like running the development server, creating database migrations, starting the Django shell)

    myproject/ 
     (root directory of your Django project. It contains all the essential configuration files and your app's code.)

    __init__.py
     (An empty file (can be empty) that tells Python to treat this directory as a Python package)

    settings.py
     (This crucial file holds all the configuration settings for your Django project, including database connection details, secret keys, installed apps, template directory paths, and more)

    urls.py
     (This file defines the URL patterns for your entire project. It maps URLs to specific views in your apps, determining how Django routes incoming requests.)
    
    wsgi.py
     (This file serves as the entry point for your Django application when deployed to a web server such as Apache or Nginx. It configures how the web server interacts with Django)
     
    myapp/ (where your Django app resides. You can have multiple apps within a single project, each with its own models, views, and logic)
    
    __init__.py
     (this empty file tells Python to treat this directory as a Django app.)
    admin.py
     (This file allows you to register your app's models with the Django admin interface, enabling you to create, edit, and manage data through a web-based interface.)
    apps.py
     (This file is optional, but it's a good practice to have it for larger projects. It provides a central place to define your app's configuration, such as the app name, models, and admin configuration.)
    models.py
     (This file defines the data models for your app. Models represent the data structure of your application, like users, products, blog posts, etc.)
    tests.py
     (Here, you write unit tests to ensure your app's functionality works as expected. Writing tests helps catch bugs early in the development process.)
    views.py
    (This file contains the functions (views) that handle incoming HTTP requests for your app's URLs. These views interact with your models, templates, and logic to generate the appropriate response to the user.)