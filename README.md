# 📘 Guide d’installation – ArtVagabon (Drupal + Frontend)

Voici un guide clair et structuré pour installer le projet **ArtVagabon** en local avec une base de données distante (AWS RDS).

---

## ✅ 1. Cloner le dépôt Git

```bash
git clone https://github.com/sossoumarcel/ArtVagabon.git
cd ArtVagabon
```

---

## ⚙️ 2. Installer les dépendances PHP

```bash
composer install
```

---

## 🛠️ 3. Configurer la base de données

Ouvre ce fichier :

```bash
web/sites/default/settings.php
```

🔁 Remplace cette configuration locale :

```php
$databases['default']['default'] = [
  'driver' => 'mysql',
  'database' => 'drupal',
  'username' => 'root',
  'password' => '',
  'host' => '127.0.0.1',
  'port' => '3306',
  'prefix' => '',
];
```

✅ Par cette configuration pour la base AWS :

```php
$databases['default']['default'] = array (
  'database' => 'art',
  'username' => 'admin',
  'password' => 'c(~$ya!33zvy2GJ',
  'prefix' => '',
  'host' => 'art.ctmqio22iufk.eu-north-1.rds.amazonaws.com',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);
```

---

## 🚀 4. Lancer le serveur Drupal en local

```bash
cd web
php -S localhost:8080 .ht.router.php
```

📍 Ouvre ensuite ton navigateur à l'adresse :  
[http://localhost:8080](http://localhost:8080)

### 🔑 Identifiants de connexion :

```text
user: admin
password: Azerty@2025
```

---

## 🎨 5. Lancer le frontend (Next.js, Vite, React...)

### a. Configurer le frontend

Ouvre ce fichier :

```bash
frontend/next.config.js
```

Remplace tout par :

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

### b. Configurer les variables d’environnement

```bash
cp frontend/.env.example frontend/.env.local
```

Dans `.env.local`, modifie :

```
NEXT_PUBLIC_DRUPAL_BASE_URL=https://site.example.com
```

➡ en :

```
NEXT_PUBLIC_DRUPAL_BASE_URL=http://localhost:8080/
```

---

## ⚡ 6. Installer les dépendances JS et lancer le frontend

```bash
cd frontend
npm install
npm run dev
```

> 📌 Si ton dossier frontend porte un autre nom (`artfrontend` ou autre), adapte les chemins.

---

## ✅ Résumé rapide

| Étape                    | Commande / Action                                   |
|--------------------------|-----------------------------------------------------|
| Cloner le projet         | `git clone ...` + `cd ArtVagabon`                  |
| Installer PHP deps       | `composer install`                                 |
| Configurer la base       | Modifier `settings.php` avec les infos AWS         |
| Lancer Drupal            | `cd web && php -S localhost:8080 .ht.router.php`   |
| Configurer `.env.local`  | Changer `NEXT_PUBLIC_DRUPAL_BASE_URL=...`          |
| Installer JS deps        | `npm install` (dans `frontend/`)                   |
| Lancer frontend          | `npm run dev`                                      |
