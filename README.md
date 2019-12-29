### Menjalankan Aplkasi

untuk menjalankan mode Development:

```
npm start
```

### package tambahan yang di install

- Boostrap
  install bootstrap menggunakan npm:

```
    npm install bootstrap -s
```

untuk menambhakan bootstrap ke dalam project import bootstrap di index.js

```
    ....
    import 'bootstrap/dist/css/bootstrap.min.css';
    ....
```

- Font Awesome
  install font awesome menggunakan npm

```
    npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-light-svg-icons @fortawesome/free-brands-svg-icons
```

agar font awesome tidak memakai banyak resource sebaiknya di import font yang kita butuhkan saja
untuk itu saya membuat satu helpers untuk mengimport font yang di butuhkan saja src/Helpers/FontAwesome.jsx

```
    // library font awesome
    import { library } from "@fortawesome/fontawesome-svg-core";

    // icon solid
    import {faCode} from "@fortawesome/free-solid-svg-icons";

    library.add(
    faCode
        // more icons go here
    );
```
