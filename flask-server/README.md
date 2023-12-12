# Server for IntroVerse project
Description about IntroVerse Group 1 Project
## To set up and run the server
1. Install the required packages with pip
```
pip install -r requirements.txt
```
If you have any issues with modules not being installed properly try pip install manually
If they are installed but the file shows not imported properly try changing the Python interpreter (Ctrl+Shift+P in VS code) and reinstalling if necessary
2. Change mysqlconfig.py to your credentials
3. Create the database if does not already exist - either through the SQL script or with Python
To create from Python run the create_db.py file
```
python create_db.py
```
4. Create the tables if do not already exist - either through the SQL script or with Python (create_tables.py)
```
python create_tables.py
```
5. Run routes.py to start the server
```
python routes.py
```
