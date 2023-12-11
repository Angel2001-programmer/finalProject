# Server for IntroVerse project
Description about IntroVerse Group 1 Project
## To set up and run the server
1. Install the required packages with pip
```
pip install -r requirements.txt
```
2. Change mysqlconfig.py to your credentials
3. Create the database if does not already exist (run the create_db.py file)
```
python create_db.py
```
4. Run app.py to start the server, will create the tables if do not already exist
```
python app.py
```
