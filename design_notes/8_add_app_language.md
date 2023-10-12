## How to add a new language to the app.

The standard version of this application has three languages available:
English,
German,
and Spanish.

To add a new language, follow these steps:

1. Add new language to "./src/i18n.js" file in "resources" object.

2. Create a new file in the "./src/locales" directory for a new language.

3. Duplicate all the entries from the English locale file and provide translations in the new language.

4. Add description of the new language to each venue in "./src/venues.js" file within a key "description" in the same order as the other languages.