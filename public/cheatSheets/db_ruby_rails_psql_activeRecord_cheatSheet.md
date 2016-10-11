# DataBoss Command Cheat Sheet

Language: Ruby
Framework: Rails
ORM: Active Record
DB: PostgreSQL
_Test Suite other than 'Test::Unit'_

## Commands:

### Install Rails gem

`$ gem install rails`

### Set up new Rails app with PostgreSQL

`$ rails new <your_app_name> -d postgresql -T`

### Build database:

`$ bin/rake db:create`

Your Terminal should have the following output:

Created database 'your_app_name_development'
Created database 'your_app_name_test'


Alternatively, you can verify the creation of both by:

`$ psql` to connect to your own database

`$ \l` to see a list of databases created on your computer and check, if both databases have been created.

`$ \q` to disconnect from your own database


If you still require to create a database for your application, run:

`$ bin/rake db:create RAILS_ENV=test`

or

`$ bin/rake db:create RAILS_ENV=development`


### Creating Models

`$ bin/rails g model <Table_name> <property>:<data type> <property>:<data type>`

e.g. `$ bin/rails g model Student first_name:string last_name:string`

This command:
* creates a new model, which tells the app what a 'student' is and what properties (first name and last name) it has.
* creates a **migration** which contains instructions for Rake ('Ruby `make`') to update the database.

Looking at db/migrate/20161011155518_create_students.rb we shall see the following file has been created:

```ruby
class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
```

Run database migration to update your database with the newly created model/table:

`$ bin/rake db:migrate`

Note:
Two timestamp columns are automatically added so we know when a given record was created or last updated. The migration itself is timestamped based on when we ran the generate command.

_Commands to run migration on specific environments:_

By default running `$ bin/rake db:migrate` will run in the development environment. To run migrations against another environment, e.g. the test environment run:

`$ bin/rake db:migrate RAILS_ENV=test`


### Associations and references

To create a new column type as reference to another table, e.g. table "courses" should have a column to refer to table "students", you can run the following:  

`$ bin/rails g migration AddStudentRefToCourses student:references`

This will generate following migration:

```ruby
class AddStudentRefToCourses < ActiveRecord::Migration[5.0]
  def change
    add_reference :courses, :student, foreign_key: true
  end
end
```

Run database migration to update your database:  

`$ bin/rake db:migrate`

This migration will create a student_id column to the table "courses" and appropriate index.  

To verify within PostgreSQL:  

`$ psql` to connect to your own database

`$ \c 'database_name'` to connect to the database of your project

`$ \dt` to see the list of relations of your database

`$ select * from 'table_name'` to view the table and its content

`$ \q` to disconnect from your own database

----------------------

When you made a mistake during generation:

`$ rails d migration MigrationName` to remove the migration (in this case, MigrationName is CreateRestaurants).

Drop the tables in the databases that were made earlier:

`$ psql` to connect to your own database

`$ \c <database_name>` to connect to a database

`$ drop table <table_name>;` to delete a table from your database

`$ \q` to disconnect from your own database

Run migration again:

`$ bin/rake db:migrate`

This will run all of your database migrations once more.


Alternatively, you can also rollback the last migration:  

`$ bin/rails db:rollback`
